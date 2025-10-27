/**
 * Datos Dummy para el Dashboard de BI Hotelero
 * 
 * Este archivo contiene todos los datos de ejemplo que se mostrarán en la aplicación.
 * Cuando se integre con el backend Django, estos datos serán reemplazados por
 * llamadas a la API.
 * 
 * Estructura de datos basada en las imágenes proporcionadas:
 * - KPIs principales (Ocupación, Ventas, ADR, RevPAR, etc.)
 * - Datos históricos para gráficos de tendencias
 * - Comparativas entre propiedades
 * - Ratings y calificaciones
 */

import { PropertyType } from '@/contexts/FilterContext';

/**
 * Interfaz para distribución por áreas
 */
export interface AreaDistribution {
  name: string;
  value: number;
  percentage: number;
}

/**
 * Interfaz para ratings por áreas
 */
export interface AreaRating {
  area: string;
  rating: number;
}

/**
 * Interfaz para KPIs (Key Performance Indicators)
 */
export interface KPIData {
  // Métricas de ocupación
  occupancyRate: number; // Porcentaje de ocupación actual
  avgOccupancyRate: number; // Tasa promedio de ocupación
  budgetOccupancyRate: number; // Presupuesto de ocupación
  
  // Métricas de ventas
  totalRevenue: number; // Ventas totales
  budgetRevenue: number; // Presupuesto de ventas
  forecastRevenue: number; // Forecast de ventas
  revenueAchievement: number; // % de cumplimiento de presupuesto
  
  // Métricas de ADR (Average Daily Rate - Tarifa promedio diaria)
  adr: number; // ADR actual
  budgetADR: number; // ADR presupuestado
  forecastADR: number; // ADR forecast
  adrGrowth: number; // Crecimiento de ADR
  
  // Métricas de RevPAR (Revenue Per Available Room)
  revPAR: number; // RevPAR actual
  forecastRevPAR: number; // RevPAR forecast
  
  // Métricas de costos
  costs: number; // Gastos y costos totales
  profitMargin: number; // Utilidad/Pérdida (GOP - Gross Operating Profit)
  profitPercentage: number; // Porcentaje de utilidad
  
  // Tarifas
  avgRatePerPerson: number; // Tarifa promedio por persona
  
  // FARA (no especificado en contexto, pero presente en imagen)
  fara: number;
  faraPercentage: number;
}

/**
 * Datos de KPIs por propiedad
 * Basados en la imagen 1 proporcionada
 */
export const kpiDataByProperty: Record<PropertyType, KPIData> = {
  all: {
    occupancyRate: 89.41,
    avgOccupancyRate: 66.62,
    budgetOccupancyRate: 75,
    totalRevenue: 18360355447,
    budgetRevenue: 5411898602,
    forecastRevenue: 5394903443,
    revenueAchievement: 339.26,
    adr: 443308,
    budgetADR: 435662,
    forecastADR: 454720,
    adrGrowth: 101.75,
    revPAR: 295352,
    forecastRevPAR: 246332,
    costs: 10005175615,
    profitMargin: 8355179832,
    profitPercentage: 45.51,
    avgRatePerPerson: 203111,
    fara: 1836035545,
    faraPercentage: 10,
  },
  sites45: {
    occupancyRate: 92.15,
    avgOccupancyRate: 68.45,
    budgetOccupancyRate: 77,
    totalRevenue: 19500000000,
    budgetRevenue: 5800000000,
    forecastRevenue: 5700000000,
    revenueAchievement: 336.21,
    adr: 465000,
    budgetADR: 445000,
    forecastADR: 470000,
    adrGrowth: 104.49,
    revPAR: 310000,
    forecastRevPAR: 255000,
    costs: 10500000000,
    profitMargin: 8800000000,
    profitPercentage: 45.13,
    avgRatePerPerson: 215000,
    fara: 1950000000,
    faraPercentage: 10,
  },
  sitesBAQ: {
    occupancyRate: 87.23,
    avgOccupancyRate: 65.32,
    budgetOccupancyRate: 73,
    totalRevenue: 17800000000,
    budgetRevenue: 5200000000,
    forecastRevenue: 5150000000,
    revenueAchievement: 342.31,
    adr: 428000,
    budgetADR: 422000,
    forecastADR: 445000,
    adrGrowth: 101.42,
    revPAR: 285000,
    forecastRevPAR: 240000,
    costs: 9800000000,
    profitMargin: 7950000000,
    profitPercentage: 44.66,
    avgRatePerPerson: 198000,
    fara: 1780000000,
    faraPercentage: 10,
  },
  sitesGroup: {
    occupancyRate: 88.67,
    avgOccupancyRate: 67.11,
    budgetOccupancyRate: 76,
    totalRevenue: 18200000000,
    budgetRevenue: 5350000000,
    forecastRevenue: 5280000000,
    revenueAchievement: 340.19,
    adr: 438000,
    budgetADR: 430000,
    forecastADR: 450000,
    adrGrowth: 101.86,
    revPAR: 292000,
    forecastRevPAR: 243000,
    costs: 9950000000,
    profitMargin: 8150000000,
    profitPercentage: 44.78,
    avgRatePerPerson: 201000,
    fara: 1820000000,
    faraPercentage: 10,
  },
  sitesRecreo: {
    occupancyRate: 86.45,
    avgOccupancyRate: 64.89,
    budgetOccupancyRate: 72,
    totalRevenue: 17500000000,
    budgetRevenue: 5100000000,
    forecastRevenue: 5000000000,
    revenueAchievement: 343.14,
    adr: 425000,
    budgetADR: 418000,
    forecastADR: 442000,
    adrGrowth: 101.67,
    revPAR: 280000,
    forecastRevPAR: 238000,
    costs: 9700000000,
    profitMargin: 7800000000,
    profitPercentage: 44.57,
    avgRatePerPerson: 195000,
    fara: 1750000000,
    faraPercentage: 10,
  },
};

/**
 * Interfaz para datos de tendencias (gráficos de línea)
 */
export interface TrendData {
  date: string; // Fecha en formato 'YYYY-MM-DD'
  value: number; // Valor de la métrica
  forecast?: number; // Valor de forecast (opcional)
  budget?: number; // Valor de presupuesto (opcional)
  historical?: number; // Valor histórico (opcional)
}

/**
 * Datos de tendencias de ventas (basado en imagen 2)
 * Datos por mes para el último año
 */
export const salesTrendData: TrendData[] = [
  { date: '2025-01-01', value: 23248099, forecast: 21000000, budget: 20500000, historical: 19800000 },
  { date: '2025-02-01', value: 20401953, forecast: 19500000, budget: 19200000, historical: 18500000 },
  { date: '2025-03-01', value: 22540259, forecast: 21800000, budget: 21000000, historical: 20200000 },
  { date: '2025-04-01', value: 21700000, forecast: 21200000, budget: 20800000, historical: 19900000 },
  { date: '2025-05-01', value: 25400000, forecast: 24500000, budget: 23800000, historical: 22500000 },
  { date: '2025-06-01', value: 23800000, forecast: 23000000, budget: 22500000, historical: 21800000 },
  { date: '2025-07-01', value: 22000000, forecast: 21500000, budget: 21000000, historical: 20500000 },
];

/**
 * Datos de tendencias de ocupación (basado en imagen 2)
 */
export const occupancyTrendData: TrendData[] = [
  { date: '2025-01-01', value: 75, forecast: 73, budget: 75 },
  { date: '2025-02-01', value: 68, forecast: 70, budget: 75 },
  { date: '2025-03-01', value: 82, forecast: 78, budget: 75 },
  { date: '2025-04-01', value: 71, forecast: 72, budget: 75 },
  { date: '2025-05-01', value: 85, forecast: 80, budget: 75 },
  { date: '2025-06-01', value: 77, forecast: 75, budget: 75 },
  { date: '2025-07-01', value: 73, forecast: 74, budget: 75 },
];

/**
 * Datos de tendencias de tarifa promedio (basado en imagen 2)
 */
export const avgRateTrendData: TrendData[] = [
  { date: '2025-01-01', value: 370422, forecast: 360000, budget: 355000 },
  { date: '2025-02-01', value: 382388, forecast: 375000, budget: 368000 },
  { date: '2025-03-01', value: 395000, forecast: 385000, budget: 378000 },
  { date: '2025-04-01', value: 378000, forecast: 370000, budget: 365000 },
  { date: '2025-05-01', value: 405000, forecast: 395000, budget: 388000 },
  { date: '2025-06-01', value: 388000, forecast: 380000, budget: 375000 },
  { date: '2025-07-01', value: 375000, forecast: 368000, budget: 362000 },
];

/**
 * Datos de tendencias de RevPAR (basado en imagen 2)
 */
export const revPARTrendData: TrendData[] = [
  { date: '2025-01-01', value: 277817, forecast: 265000, budget: 266250 },
  { date: '2025-02-01', value: 260224, forecast: 262500, budget: 276000 },
  { date: '2025-03-01', value: 323900, forecast: 300300, budget: 283500 },
  { date: '2025-04-01', value: 268380, forecast: 266400, budget: 273750 },
  { date: '2025-05-01', value: 344250, forecast: 316000, budget: 291000 },
  { date: '2025-06-01', value: 298760, forecast: 285000, budget: 281250 },
  { date: '2025-07-01', value: 273750, forecast: 270624, budget: 271500 },
];

/**
 * Datos de calificación/rating histórico (basado en imagen 3)
 * Datos anuales desde 2012 hasta 2025
 */
export const ratingHistoricalData: TrendData[] = [
  { date: '2012', value: 4.67, historical: 4.48, budget: 4.48 },
  { date: '2013', value: 4.80, historical: 4.48, budget: 4.48 },
  { date: '2014', value: 4.40, historical: 4.48, budget: 4.48 },
  { date: '2015', value: 4.48, historical: 4.48, budget: 4.48 },
  { date: '2016', value: 4.30, historical: 4.48, budget: 4.48 },
  { date: '2017', value: 4.59, historical: 4.48, budget: 4.48 },
  { date: '2018', value: 4.60, historical: 4.48, budget: 4.48 },
  { date: '2019', value: 4.50, historical: 4.48, budget: 4.48 },
  { date: '2020', value: 4.50, historical: 4.48, budget: 4.48 },
  { date: '2021', value: 4.65, historical: 4.48, budget: 4.48 },
  { date: '2024', value: 4.48, historical: 4.48, budget: 4.48 },
];

/**
 * Datos de distribución de propiedades para gráfico de torta
 */
export interface PropertyDistribution {
  name: string;
  value: number;
  percentage: number;
}

export const propertyDistributionData: PropertyDistribution[] = [
  { name: 'Sites 45', value: 672, percentage: 84.96 },
  { name: 'Sites BAQ', value: 101, percentage: 12.77 },
  { name: 'Sites Recreo', value: 18, percentage: 2.28 },
];

/**
 * Datos de comparación de ratings entre propiedades
 */
export interface PropertyRating {
  property: string;
  rating: number;
}

export const propertyRatingsData: PropertyRating[] = [
  { property: 'Sites 45', rating: 4.49 },
  { property: 'Sites BAQ', rating: 4.83 },
  { property: 'Sites Recreo', rating: 4.74 },
];

/**
 * Datos de comentarios/reviews (sample)
 */
export interface Review {
  year: number;
  month: string;
  rating: number;
  title: string;
  text: string;
}

export const reviewsSample: Review[] = [
  {
    year: 2025,
    month: 'enero',
    rating: 2.00,
    title: 'Bad!!! Stay away!',
    text: 'No face towel in room. Ceiling lights didn\'t work. Dinner services closed around 8. Wifi speed wasn\'t surpassing 3 Mbps.'
  },
];

/**
 * Utilidad: Obtener datos de KPI según filtros
 * @param property - Propiedad seleccionada
 * @returns KPIData correspondiente
 */
export const getKPIData = (property: PropertyType): KPIData => {
  return kpiDataByProperty[property];
};

/**
 * Utilidad: Formatear números grandes con separadores
 * @param num - Número a formatear
 * @returns String formateado
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('es-CO').format(num);
};

/**
 * Utilidad: Formatear números como moneda (pesos colombianos)
 * @param num - Número a formatear
 * @returns String formateado como moneda
 */
export const formatCurrency = (num: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
};

/**
 * Utilidad: Formatear porcentajes
 * @param num - Número a formatear
 * @param decimals - Cantidad de decimales (default: 2)
 * @returns String formateado como porcentaje
 */
export const formatPercentage = (num: number, decimals: number = 2): string => {
  return `${num.toFixed(decimals)}%`;
};

/**
 * Datos de distribución por áreas para gráfico de torta
 */
export const areaDistributionData: AreaDistribution[] = [
  { name: 'Alojamiento', value: 450, percentage: 52.33 },
  { name: 'Restaurante', value: 180, percentage: 20.93 },
  { name: 'Eventos', value: 120, percentage: 13.95 },
  { name: 'Room Service', value: 60, percentage: 6.98 },
  { name: 'Minibar', value: 35, percentage: 4.07 },
  { name: 'Lavandería', value: 15, percentage: 1.74 },
];

/**
 * Datos de ratings por áreas
 */
export const areaRatingsData: AreaRating[] = [
  { area: 'Alojamiento', rating: 4.65 },
  { area: 'Restaurante', rating: 4.42 },
  { area: 'Eventos', rating: 4.78 },
  { area: 'Room Service', rating: 4.35 },
  { area: 'Minibar', rating: 4.20 },
  { area: 'Lavandería', rating: 4.55 },
];

/**
 * Datos históricos por área (específicos para cada área)
 */
export const areaHistoricalData = {
  evento: [
    { period: 'Ene', value: 4.7, historical: 4.6, budget: 4.5 },
    { period: 'Feb', value: 4.8, historical: 4.7, budget: 4.6 },
    { period: 'Mar', value: 4.9, historical: 4.7, budget: 4.6 },
    { period: 'Abr', value: 4.8, historical: 4.8, budget: 4.7 },
    { period: 'May', value: 4.9, historical: 4.8, budget: 4.7 },
    { period: 'Jun', value: 4.8, historical: 4.8, budget: 4.7 },
  ],
  lavanderia: [
    { period: 'Ene', value: 4.4, historical: 4.3, budget: 4.2 },
    { period: 'Feb', value: 4.5, historical: 4.4, budget: 4.3 },
    { period: 'Mar', value: 4.6, historical: 4.4, budget: 4.3 },
    { period: 'Abr', value: 4.5, historical: 4.5, budget: 4.4 },
    { period: 'May', value: 4.6, historical: 4.5, budget: 4.4 },
    { period: 'Jun', value: 4.5, historical: 4.5, budget: 4.4 },
  ],
  minibar: [
    { period: 'Ene', value: 4.1, historical: 4.0, budget: 3.9 },
    { period: 'Feb', value: 4.2, historical: 4.1, budget: 4.0 },
    { period: 'Mar', value: 4.3, historical: 4.1, budget: 4.0 },
    { period: 'Abr', value: 4.2, historical: 4.2, budget: 4.1 },
    { period: 'May', value: 4.3, historical: 4.2, budget: 4.1 },
    { period: 'Jun', value: 4.2, historical: 4.2, budget: 4.1 },
  ],
  restaurante: [
    { period: 'Ene', value: 4.3, historical: 4.2, budget: 4.1 },
    { period: 'Feb', value: 4.4, historical: 4.3, budget: 4.2 },
    { period: 'Mar', value: 4.5, historical: 4.3, budget: 4.2 },
    { period: 'Abr', value: 4.4, historical: 4.4, budget: 4.3 },
    { period: 'May', value: 4.5, historical: 4.4, budget: 4.3 },
    { period: 'Jun', value: 4.4, historical: 4.4, budget: 4.3 },
  ],
  roomservice: [
    { period: 'Ene', value: 4.2, historical: 4.1, budget: 4.0 },
    { period: 'Feb', value: 4.3, historical: 4.2, budget: 4.1 },
    { period: 'Mar', value: 4.4, historical: 4.2, budget: 4.1 },
    { period: 'Abr', value: 4.3, historical: 4.3, budget: 4.2 },
    { period: 'May', value: 4.4, historical: 4.3, budget: 4.2 },
    { period: 'Jun', value: 4.3, historical: 4.3, budget: 4.2 },
  ],
  alojamiento: [
    { period: 'Ene', value: 4.6, historical: 4.5, budget: 4.4 },
    { period: 'Feb', value: 4.7, historical: 4.6, budget: 4.5 },
    { period: 'Mar', value: 4.8, historical: 4.6, budget: 4.5 },
    { period: 'Abr', value: 4.7, historical: 4.7, budget: 4.6 },
    { period: 'May', value: 4.8, historical: 4.7, budget: 4.6 },
    { period: 'Jun', value: 4.7, historical: 4.7, budget: 4.6 },
  ],
};
