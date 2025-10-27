/**
 * AuthContext - Contexto de Autenticación
 * 
 * Este contexto maneja el estado de autenticación del usuario en toda la aplicación.
 * Proporciona información sobre:
 * - Usuario actual (email, nombre, rol)
 * - Estado de autenticación (isAuthenticated)
 * - Funciones para login y logout
 * 
 * Roles disponibles:
 * - 'investor': Inversionista (ve KPIs de alto nivel)
 * - 'admin': Administrador (ve todos los detalles operativos)
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definición del tipo de usuario
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'investor' | 'admin'; // Roles disponibles
}

// Definición de la interfaz del contexto
interface AuthContextType {
  user: User | null; // Usuario actual o null si no está autenticado
  isAuthenticated: boolean; // Estado de autenticación
  login: (email: string, password: string, role: 'investor' | 'admin') => Promise<boolean>; // Función de login
  logout: () => void; // Función de logout
}

// Creación del contexto con valor inicial undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider - Proveedor del contexto de autenticación
 * Envuelve la aplicación para proporcionar funcionalidad de autenticación
 */
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado del usuario actual
  const [user, setUser] = useState<User | null>(null);

  /**
   * Función de login
   * @param email - Email del usuario
   * @param password - Contraseña del usuario
   * @param role - Rol del usuario ('investor' o 'admin')
   * @returns Promise<boolean> - true si login exitoso, false si falla
   * 
   * NOTA: Esta es una implementación temporal con datos dummy
   * En producción, esto debe conectarse al backend Django
   */
  const login = async (
    email: string, 
    password: string, 
    role: 'investor' | 'admin'
  ): Promise<boolean> => {
    // Simulación de llamada API (reemplazar con llamada real al backend)
    return new Promise((resolve) => {
      setTimeout(() => {
        // Validación simple de credenciales (DUMMY - remover en producción)
        if (password.length >= 4) {
          // Crear objeto de usuario
          const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name: email.split('@')[0], // Usar parte del email como nombre
            role,
          };
          
          setUser(newUser);
          
          // Guardar en localStorage para persistencia (opcional)
          localStorage.setItem('user', JSON.stringify(newUser));
          
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500); // Simular delay de red
    });
  };

  /**
   * Función de logout
   * Limpia el estado del usuario y el localStorage
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Cargar usuario desde localStorage al iniciar (persistencia de sesión)
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error al cargar usuario desde localStorage:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Valor del contexto que se proporciona a los componentes hijos
  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Hook personalizado para usar el contexto de autenticación
 * @returns AuthContextType
 * @throws Error si se usa fuera de AuthProvider
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
