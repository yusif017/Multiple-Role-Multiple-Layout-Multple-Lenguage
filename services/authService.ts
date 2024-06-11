// Örnek AuthService dosyası
export const AuthService = {
    login: async (email: string, password: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'example@email.com' && password === 'password') {
            resolve();
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 1000);
      });
    },
    register: async (email: string, password: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email && password) {
            resolve();
          } else {
            reject(new Error('Invalid data'));
          }
        }, 1000);
      });
    },
  };
  