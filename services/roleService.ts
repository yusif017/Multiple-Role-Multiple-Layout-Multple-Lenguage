// Örnek RoleService dosyası
export const RoleService = {
    getUserRole: async (): Promise<string | null> => {
      // Burada gerçekleştirilecek API çağrısı
      // Örnek olarak bir mock işlem yapabiliriz
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const userRole = localStorage.getItem('userRole');
          resolve(userRole);
        }, 1000);
      });
    },
    setUserRole: async (role: string | null): Promise<void> => {
      // Burada gerçekleştirilecek API çağrısı
      // Örnek olarak bir mock işlem yapabiliriz
      return new Promise((resolve) => {
        setTimeout(() => {
          localStorage.setItem('userRole', role || '');
          resolve();
        }, 1000);
      });
    },
  };
  