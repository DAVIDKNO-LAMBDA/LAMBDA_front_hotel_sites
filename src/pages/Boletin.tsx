/**
 * Boletín - Página de Boletín Informativo Empresarial
 * 
 * Esta página muestra el boletín informativo de la empresa con:
 * - Empleado del mes
 * - Noticias y anuncios importantes
 * - Cumpleaños del mes
 * - Eventos próximos
 * - Reconocimientos y logros
 * - Tips y consejos
 */

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Calendar, 
  Users, 
  Trophy, 
  Cake, 
  Megaphone, 
  Lightbulb, 
  Award,
  Heart,
  Clock,
  MapPin,
  Settings,
  UserPlus,
  Edit3,
  Plus
} from 'lucide-react';

/**
 * Componente principal de la página Boletín
 */
export const Boletin: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header del Boletín */}
      <div className="text-center space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Boletín de Información
          </h1>
          <h2 className="text-2xl font-semibold text-muted-foreground mb-3">
            Hotel Sites
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mantente informado sobre las últimas noticias, eventos, reconocimientos y 
            novedades importantes de nuestra empresa. Un espacio para compartir y celebrar 
            juntos los logros de nuestro equipo.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="outline" className="px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            Octubre 2025
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            Edición Mensual
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Edit3 className="w-4 h-4 mr-2" />
            Recursos Humanos
          </Badge>
        </div>

        {/* Botones de Administración */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Nueva Publicación
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="w-4 h-4" />
            Administrar Boletín
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <UserPlus className="w-4 h-4" />
            Gestionar Editores
          </Button>
        </div>
      </div>

      {/* Información del Boletín */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Megaphone className="w-5 h-5 text-blue-600" />
            Sobre este Boletín
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-700">
            <div>
              <h4 className="font-semibold mb-2">📋 Propósito</h4>
              <p className="text-sm mb-4">
                Mantener informado a todo el personal sobre eventos, logros, 
                oportunidades de crecimiento y noticias relevantes de la empresa.
              </p>
              
              <h4 className="font-semibold mb-2">📅 Frecuencia</h4>
              <p className="text-sm">
                Publicación mensual, el primer viernes de cada mes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">✍️ Contribuciones</h4>
              <p className="text-sm mb-4">
                ¿Tienes una noticia, evento o reconocimiento que compartir? 
                Contacta al equipo editorial para incluirlo en la próxima edición.
              </p>
              
              <h4 className="font-semibold mb-2">👥 Editores Autorizados</h4>
              <p className="text-sm">
                Solo personal autorizado puede publicar contenido. 
                Consulta con RRHH para más información.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Empleado del Mes */}
      <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800">
            <Star className="w-6 h-6 text-yellow-600" />
            Empleado del Mes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                <Users className="w-16 h-16 text-yellow-600" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">María José Rodríguez</h3>
              <p className="text-yellow-700 font-medium mb-2">Área: Atención al Cliente - Sites 45</p>
              <p className="text-yellow-600 mb-4">
                "María José ha demostrado un servicio excepcional este mes, logrando una calificación 
                promedio de 4.9/5 en atención al cliente y recibiendo múltiples comentarios positivos 
                de nuestros huéspedes por su amabilidad y profesionalismo."
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-yellow-100 text-yellow-800">Excelencia en Servicio</Badge>
                <Badge className="bg-yellow-100 text-yellow-800">Trabajo en Equipo</Badge>
                <Badge className="bg-yellow-100 text-yellow-800">Compromiso</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid de contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Noticias y Anuncios */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-blue-600" />
              Noticias y Anuncios
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-foreground">Nueva Política de Sostenibilidad</h4>
              <p className="text-sm text-muted-foreground mt-1">
                A partir del 1 de noviembre implementaremos nuevas prácticas eco-amigables 
                en todas nuestras propiedades.
              </p>
              <Badge variant="secondary" className="mt-2">Importante</Badge>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-foreground">Programa de Capacitación</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Inscripciones abiertas para el curso de "Atención Premium al Cliente" 
                que inicia el 15 de noviembre.
              </p>
              <Badge variant="secondary" className="mt-2">Oportunidad</Badge>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-foreground">Mejoras en Tecnología</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Nuevo sistema de check-in digital disponible en Sites 45 
                para mejorar la experiencia del huésped.
              </p>
              <Badge variant="secondary" className="mt-2">Novedad</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Cumpleaños del Mes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cake className="w-5 h-5 text-pink-600" />
              Cumpleaños de Octubre
            </CardTitle>
            <CardDescription>
              ¡Celebremos juntos a nuestro equipo!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-pink-50">
                <Heart className="w-5 h-5 text-pink-500" />
                <div>
                  <p className="font-medium">Carlos Mendoza</p>
                  <p className="text-sm text-muted-foreground">05 Oct • Mantenimiento</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-pink-50">
                <Heart className="w-5 h-5 text-pink-500" />
                <div>
                  <p className="font-medium">Ana Lucía Torres</p>
                  <p className="text-sm text-muted-foreground">12 Oct • Recepción</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-pink-50">
                <Heart className="w-5 h-5 text-pink-500" />
                <div>
                  <p className="font-medium">Roberto Silva</p>
                  <p className="text-sm text-muted-foreground">28 Oct • Seguridad</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Eventos Próximos y Reconocimientos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Eventos Próximos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              Eventos Próximos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Clock className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Jornada de Integración</h4>
                <p className="text-sm text-muted-foreground">2 de Noviembre, 2:00 PM</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Salón de Eventos - Sites 45
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Clock className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Capacitación en Protocolo COVID</h4>
                <p className="text-sm text-muted-foreground">8 de Noviembre, 9:00 AM</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Sala de Conferencias
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Clock className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Celebración Fin de Año</h4>
                <p className="text-sm text-muted-foreground">15 de Diciembre, 7:00 PM</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Por confirmar
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reconocimientos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-600" />
              Reconocimientos del Mes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
              <Award className="w-6 h-6 text-amber-600" />
              <div>
                <h4 className="font-semibold text-amber-800">Equipo de Housekeeping</h4>
                <p className="text-sm text-amber-700">
                  Excelencia en tiempos de limpieza - 15% de mejora
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
              <Award className="w-6 h-6 text-amber-600" />
              <div>
                <h4 className="font-semibold text-amber-800">Departamento de Cocina</h4>
                <p className="text-sm text-amber-700">
                  Cero quejas en servicio de restaurante durante octubre
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
              <Award className="w-6 h-6 text-amber-600" />
              <div>
                <h4 className="font-semibold text-amber-800">José Luis Martínez</h4>
                <p className="text-sm text-amber-700">
                  5 años de servicio ininterrumpido - Dedicación excepcional
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips y Consejos */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            Tip del Mes: Atención al Cliente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-blue-700">
            <h4 className="font-semibold mb-2">💡 Recuerda siempre...</h4>
            <ul className="space-y-1 text-sm">
              <li>• Sonríe genuinamente, transmite confianza y calidez</li>
              <li>• Escucha activamente las necesidades del huésped</li>
              <li>• Anticípate a sus necesidades antes de que las expresen</li>
              <li>• Mantén el contacto visual durante la conversación</li>
              <li>• Agradece siempre por elegir Hotel Sites</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Panel de Administración */}
      <Card className="border-gray-300 bg-gradient-to-r from-gray-50 to-slate-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <Settings className="w-5 h-5 text-gray-600" />
            Panel de Administración
          </CardTitle>
          <CardDescription>
            Gestiona el contenido y permisos del boletín informativo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Gestión de Editores */}
            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-center gap-2 mb-3">
                <UserPlus className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold">Editores Autorizados</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Define quién puede crear y publicar contenido en el boletín
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>María González - RRHH</span>
                  <Badge variant="secondary">Editor Principal</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Carlos Ruiz - Gerencia</span>
                  <Badge variant="outline">Editor</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Ana Torres - Comunicaciones</span>
                  <Badge variant="outline">Editor</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <UserPlus className="w-4 h-4 mr-2" />
                Agregar Editor
              </Button>
            </div>

            {/* Gestión de Contenido */}
            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Edit3 className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold">Gestión de Contenido</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Administra las publicaciones y contenido del boletín
              </p>
              <div className="space-y-2 mb-4">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Nueva Publicación
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Editar Contenido
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Programar Publicación
                </Button>
              </div>
            </div>

            {/* Configuración */}
            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold">Configuración</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Ajusta la configuración general del boletín
              </p>
              <div className="space-y-2 mb-4">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurar Plantilla
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Lista de Distribución
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Frecuencia de Envío
                </Button>
              </div>
            </div>
          </div>

          {/* Nota importante */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h5 className="font-medium text-yellow-800 mb-1">Nota para Administradores</h5>
                <p className="text-sm text-yellow-700">
                  Las funciones de administración estarán disponibles cuando se implemente el backend. 
                  Los permisos y roles se gestionarán desde el sistema de administración central.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer del Boletín */}
      <Card className="bg-gradient-to-r from-slate-50 to-gray-100 border-gray-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                ¿Quieres contribuir al próximo boletín?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Comparte noticias, reconocimientos, eventos o sugerencias para incluir en futuras ediciones
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Enviar Contenido
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Megaphone className="w-4 h-4" />
                  Sugerir Noticia
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Award className="w-4 h-4" />
                  Proponer Reconocimiento
                </Button>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <p className="text-xs text-muted-foreground">
                <strong>Boletín de Información Hotel Sites</strong> • Edición Octubre 2025
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Editado por Recursos Humanos • Próxima edición: 1 de Noviembre, 2025
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Para consultas o sugerencias contacta a: 
                <span className="font-medium"> comunicaciones@hotelsites.com</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Boletin;
