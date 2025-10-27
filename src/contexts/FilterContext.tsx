/**
 * FilterContext - Contexto de Filtros Globales
 * 
 * Este contexto maneja los filtros globales que se aplican en toda la aplicación:
 * - Periodo de tiempo (hoy, última semana, mes, etc.)
 * - Sede/Propiedad (Sites 45, Sites BAQ, Sites Group, Sites Recreo)
 * 
 * Estos filtros afectan los datos mostrados en todos los dashboards y gráficos
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos de periodo disponibles
export type PeriodType = 'today' | 'week' | 'month' | 'quarter' | 'year' | 'custom';

// Sedes/Propiedades disponibles
export type PropertyType = 'all' | 'sites45' | 'sitesBAQ' | 'sitesGroup' | 'sitesRecreo';

// Áreas del hotel disponibles
export type AreaType = 'all' | 'evento' | 'lavanderia' | 'minibar' | 'restaurante' | 'roomservice' | 'alojamiento';

// Interfaz del contexto de filtros
interface FilterContextType {
  // Periodo seleccionado
  period: PeriodType;
  setPeriod: (period: PeriodType) => void;
  
  // Propiedad seleccionada
  property: PropertyType;
  setProperty: (property: PropertyType) => void;
  
  // Área seleccionada
  area: AreaType;
  setArea: (area: AreaType) => void;
  
  // Rango de fechas personalizado (para periodo 'custom')
  dateRange: {
    from: Date | null;
    to: Date | null;
  };
  setDateRange: (range: { from: Date | null; to: Date | null }) => void;
}

// Creación del contexto
const FilterContext = createContext<FilterContextType | undefined>(undefined);

/**
 * FilterProvider - Proveedor del contexto de filtros
 * Envuelve la aplicación para proporcionar funcionalidad de filtros globales
 */
export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado del periodo seleccionado (por defecto: hoy)
  const [period, setPeriod] = useState<PeriodType>('today');
  
  // Estado de la propiedad seleccionada (por defecto: todas)
  const [property, setProperty] = useState<PropertyType>('all');
  
  // Estado del área seleccionada (por defecto: todas)
  const [area, setArea] = useState<AreaType>('all');
  
  // Estado del rango de fechas personalizado
  const [dateRange, setDateRange] = useState<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null,
  });

  // Valor del contexto
  const value: FilterContextType = {
    period,
    setPeriod,
    property,
    setProperty,
    area,
    setArea,
    dateRange,
    setDateRange,
  };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

/**
 * Hook personalizado para usar el contexto de filtros
 * @returns FilterContextType
 * @throws Error si se usa fuera de FilterProvider
 */
export const useFilters = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters debe ser usado dentro de un FilterProvider');
  }
  return context;
};

/**
 * Utilidad: Obtener etiqueta legible del periodo
 */
export const getPeriodLabel = (period: PeriodType): string => {
  const labels: Record<PeriodType, string> = {
    today: 'Hoy',
    week: 'Últimos 7 días',
    month: 'Mes actual',
    quarter: 'Último Trimestre',
    year: 'Año actual',
    custom: 'Personalizado',
  };
  return labels[period];
};

/**
 * Utilidad: Obtener etiqueta legible de la propiedad
 */
export const getPropertyLabel = (property: PropertyType): string => {
  const labels: Record<PropertyType, string> = {
    all: 'Todas',
    sites45: 'Sites 45',
    sitesBAQ: 'Sites BAQ',
    sitesGroup: 'Sites Group',
    sitesRecreo: 'Sites Recreo',
  };
  return labels[property];
};

/**
 * Utilidad: Obtener etiqueta legible del área
 */
export const getAreaLabel = (area: AreaType): string => {
  const labels: Record<AreaType, string> = {
    all: 'Todas las áreas',
    evento: 'Eventos',
    lavanderia: 'Lavandería',
    minibar: 'Minibar',
    restaurante: 'Restaurante',
    roomservice: 'Room Service',
    alojamiento: 'Alojamiento',
  };
  return labels[area];
};
