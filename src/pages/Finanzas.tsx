/**
 * Finanzas - Página de Análisis Financiero
 * 
 * Esta página muestra información detallada sobre:
 * - Ingresos y ventas
 * - Costos operacionales
 * - Márgenes de ganancia
 * - Análisis de rentabilidad
 */

import React from 'react';
import { useFilters } from '@/contexts/FilterContext';
import { KPICard } from '@/components/dashboard/KPICard';
import { LineChart } from '@/components/dashboard/LineChart';
import {
  getKPIData,
  formatCurrency,
  formatPercentage,
  salesTrendData,
  revPARTrendData,
} from '@/lib/dummyData';

export const Finanzas: React.FC = () => {
  const { property } = useFilters();
  const kpiData = getKPIData(property);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Finanzas y Rentabilidad</h1>
        <p className="text-muted-foreground mt-1">
          Análisis detallado de ingresos, costos y rentabilidad
        </p>
      </div>

      {/* KPIs Financieros Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Ingresos Totales"
          value={formatCurrency(kpiData.totalRevenue)}
          subtitle="Revenue total del periodo"
          trend="positive"
          trendValue={formatPercentage(kpiData.revenueAchievement)}
        />

        <KPICard
          title="Costos Operacionales"
          value={formatCurrency(kpiData.costs)}
          subtitle="Gastos totales"
          trend="neutral"
        />

        <KPICard
          title="Utilidad (GOP)"
          value={formatCurrency(kpiData.profitMargin)}
          subtitle={`Margen: ${formatPercentage(kpiData.profitPercentage)}`}
          trend="positive"
          trendValue={formatPercentage(kpiData.profitPercentage)}
        />

        <KPICard
          title="RevPAR"
          value={formatCurrency(kpiData.revPAR)}
          subtitle="Ingreso por habitación disponible"
          trend="positive"
        />
      </div>

      {/* Gráficos de análisis financiero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          title="Tendencia de Ingresos"
          data={salesTrendData}
          dataKeys={[
            { key: 'value', label: 'Actual', color: 'hsl(var(--chart-1))' },
            { key: 'forecast', label: 'Forecast', color: 'hsl(var(--chart-4))' },
            { key: 'budget', label: 'Presupuesto', color: 'hsl(var(--chart-3))' },
          ]}
          formatValue={(value) => formatCurrency(value)}
        />

        <LineChart
          title="Tendencia de RevPAR"
          data={revPARTrendData}
          dataKeys={[
            { key: 'value', label: 'Actual', color: 'hsl(var(--chart-2))' },
            { key: 'forecast', label: 'Forecast', color: 'hsl(var(--chart-4))' },
          ]}
          formatValue={(value) => formatCurrency(value)}
        />
      </div>
    </div>
  );
};

export default Finanzas;
