/**
 * Login - Página de Inicio de Sesión
 * 
 * Esta página permite a los usuarios autenticarse en la aplicación.
 * Características:
 * - Login con email y contraseña
 * - Selección de rol (Inversionista/Administrador)
 * - Validación de formulario
 * - Redirección automática al dashboard después del login
 * 
 * NOTA: Actualmente usa autenticación dummy
 * En producción, debe conectarse al backend Django
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BarChart3, Lock, Mail, User } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Componente de la página de Login
 */
export const Login: React.FC = () => {
  // Estado del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'investor' | 'admin'>('investor');
  const [isLoading, setIsLoading] = useState(false);

  // Hooks
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  /**
   * Redireccionar si ya está autenticado
   */
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  /**
   * Manejar submit del formulario
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!email || !password) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    if (password.length < 4) {
      toast.error('La contraseña debe tener al menos 4 caracteres');
      return;
    }

    setIsLoading(true);

    try {
      // Intentar login (función dummy por ahora)
      const success = await login(email, password, role);

      if (success) {
        toast.success('¡Inicio de sesión exitoso!');
        navigate('/');
      } else {
        toast.error('Credenciales incorrectas');
      }
    } catch (error) {
      toast.error('Error al iniciar sesión');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-primary p-4">
      <Card className="w-full max-w-md">
        {/* Header con logo y título */}
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary rounded-full p-3">
              <BarChart3 className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            Hotel Sites Dashboard
          </CardTitle>
          <CardDescription>
            Plataforma de Business Intelligence Hotelero
          </CardDescription>
        </CardHeader>

        {/* Formulario de login */}
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campo de email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </div>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            {/* Campo de contraseña */}
            <div className="space-y-2">
              <Label htmlFor="password">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Contraseña
                </div>
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            {/* Selector de rol */}
            <div className="space-y-2">
              <Label htmlFor="role">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Rol
                </div>
              </Label>
              <Select
                value={role}
                onValueChange={(value) => setRole(value as 'investor' | 'admin')}
                disabled={isLoading}
              >
                <SelectTrigger id="role">
                  <SelectValue placeholder="Seleccionar rol" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="investor">Inversionista</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Los inversionistas ven KPIs de alto nivel. Los administradores ven todos los detalles operativos.
              </p>
            </div>

            {/* Botón de login */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>

            {/* Nota sobre datos dummy */}
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                <strong>Nota de desarrollo:</strong> Actualmente usando autenticación dummy.
                Cualquier email y contraseña (mín. 4 caracteres) funcionará.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
