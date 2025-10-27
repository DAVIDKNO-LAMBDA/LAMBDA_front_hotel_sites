/**
 * FilterBar - Barra de Filtros Global
 * 
 * Este componente proporciona controles de filtrado que afectan
 * todos los datos mostrados en el dashboard:
 * - Selector de periodo (hoy, semana, mes, etc.)
 * - Selector de sede/propiedad (Sites 45, BAQ, Group, Recreo)
 * 
 * Los filtros se sincronizan con el FilterContext para que todos
 * los componentes de la aplicación reaccionen a los cambios
 */

import React from 'react';
import { useFilters, PropertyType, PeriodType, AreaType, getPropertyLabel, getAreaLabel } from '@/contexts/FilterContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Building2, MapPin } from 'lucide-react';

/**
 * Componente FilterBar
 */
export const FilterBar: React.FC = () => {
  // Obtener el estado y funciones del contexto de filtros
  const { period, setPeriod, property, setProperty, area, setArea } = useFilters();

  // Opciones de periodo disponibles
  const periodOptions: { value: PeriodType; label: string }[] = [
    { value: 'today', label: 'Hoy' },
    { value: 'week', label: 'Últimos 7 días' },
    { value: 'month', label: 'Mes actual' },
    { value: 'quarter', label: 'Último Trimestre' },
    { value: 'year', label: 'Año actual' },
  ];

  // Opciones de propiedad disponibles (basadas en las imágenes)
  const propertyOptions: { value: PropertyType; label: string }[] = [
    { value: 'all', label: 'Todas' },
    { value: 'sites45', label: 'Sites 45' },
    { value: 'sitesBAQ', label: 'Sites BAQ' },
    { value: 'sitesGroup', label: 'Sites Group' },
    { value: 'sitesRecreo', label: 'Sites Recreo' },
  ];

  // Opciones de área disponibles
  const areaOptions: { value: AreaType; label: string }[] = [
    { value: 'all', label: 'Todas las áreas' },
    { value: 'evento', label: 'Eventos' },
    { value: 'lavanderia', label: 'Lavandería' },
    { value: 'minibar', label: 'Minibar' },
    { value: 'restaurante', label: 'Restaurante' },
    { value: 'roomservice', label: 'Room Service' },
    { value: 'alojamiento', label: 'Alojamiento' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-card rounded-lg border shadow-sm">
      {/* Selector de Periodo */}
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-muted-foreground" />
        <Select value={period} onValueChange={(value) => setPeriod(value as PeriodType)}>
          <SelectTrigger className="w-[200px] bg-background">
            <SelectValue placeholder="Seleccionar periodo" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            {periodOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Selector de Propiedad/Sede */}
      <div className="flex items-center gap-2">
        <Building2 className="w-5 h-5 text-muted-foreground" />
        <Select value={property} onValueChange={(value) => setProperty(value as PropertyType)}>
          <SelectTrigger className="w-[200px] bg-background">
            <SelectValue placeholder="Seleccionar propiedad" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            {propertyOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Selector de Área */}
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-muted-foreground" />
        <Select value={area} onValueChange={(value) => setArea(value as AreaType)}>
          <SelectTrigger className="w-[200px] bg-background">
            <SelectValue placeholder="Seleccionar área" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            {areaOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Indicador de filtros activos */}
      <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
        <span className="hidden md:inline">
          Mostrando: <span className="font-medium text-foreground">{getPropertyLabel(property)}</span>
          {area !== 'all' && (
            <span> - <span className="font-medium text-foreground">{getAreaLabel(area)}</span></span>
          )}
        </span>
      </div>
    </div>
  );
};
