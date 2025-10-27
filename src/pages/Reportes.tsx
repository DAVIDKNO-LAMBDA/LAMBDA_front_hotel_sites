/**
 * Reportes - Página de Reportes y Análisis
 * 
 * Esta página muestra reportes consolidados y análisis comparativos:
 * - Comparación entre propiedades
 * - Ratings y calificaciones
 * - Distribución de métricas
 */

import React from 'react';
import { PieChart } from '@/components/dashboard/PieChart';
import { BarChart } from '@/components/dashboard/BarChart';
import { LineChart } from '@/components/dashboard/LineChart';
import { useFilters } from '@/contexts/FilterContext';
import {
  propertyDistributionData,
  propertyRatingsData,
  ratingHistoricalData,
} from '@/lib/dummyData';

export const Reportes: React.FC = () => {
  const { property, area } = useFilters();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Reportes y Análisis</h1>
        <p className="text-muted-foreground mt-1">
          Reportes consolidados y análisis comparativos
        </p>
      </div>

      {/* Gráficos de reportes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribución por Propiedad */}
        <PieChart
          title="Distribución por Propiedad"
          data={propertyDistributionData}
          dataKey="value"
          nameKey="name"
          showPercentage={true}
        />

        {/* Comparación de Ratings */}
        <BarChart
          title="Ratings por Propiedad"
          data={propertyRatingsData}
          dataKey="rating"
          nameKey="property"
          barColor="hsl(var(--chart-1))"
          formatValue={(value) => value.toFixed(2)}
        />
      </div>

      {/* Gráfico de tendencia histórica de ratings */}
      <LineChart
        title="Evolución Histórica de Calificación"
        data={ratingHistoricalData}
        dataKeys={[
          { key: 'value', label: 'Calificación', color: 'hsl(var(--chart-1))' },
          { key: 'historical', label: 'Promedio histórico', color: 'hsl(var(--chart-3))' },
          { key: 'budget', label: 'Promedio últimos 12 meses', color: 'hsl(var(--chart-4))' },
        ]}
        formatValue={(value) => value.toFixed(2)}
      />
    </div>
  );
};

export default Reportes;
