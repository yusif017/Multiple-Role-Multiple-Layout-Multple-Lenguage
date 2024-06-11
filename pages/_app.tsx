import { AuthProvider } from "@/context/AuthContext";
import { RoleProvider } from "@/context/RoleContext";
import { getLayout } from "@/helpers/ getLayout";
import { getRoles } from "@/helpers/getRoles";
import PrivateRoute from "@/private/PrivateRoute";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import enMessages from '@/locales/en.json';
import azMessages from '@/locales/az.json';
import ruMessages from '@/locales/ru.json';

const messages = {
  en: enMessages,
  az: azMessages,
  ru: ruMessages,
};

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { locale} = useRouter();
  
  const validatedLocale = locale as Locale ||"az";

  const Layout = getLayout(Component);
  const requiredRoles = getRoles(Component);
  return (
    <IntlProvider locale={validatedLocale} messages={messages[validatedLocale] || {}}>
      <RoleProvider>
        <AuthProvider>
          <PrivateRoute roles={requiredRoles}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PrivateRoute>
        </AuthProvider>
      </RoleProvider>
    </IntlProvider>
  )
}
export default App;