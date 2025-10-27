/**
 * Ventas - Página de Análisis de Ventas
 * 
 * Esta página muestra información detallada sobre:
 * - Ventas por periodo
 * - Ventas vs presupuesto
 * - Forecast de ventas
 * - ADR (Average Daily Rate)
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
  avgRateTrendData,
} from '@/lib/dummyData';

export const Ventas: React.FC = () => {
  const { property } = useFilters();
  const kpiData = getKPIData(property);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Ventas y Distribución</h1>
        <p className="text-muted-foreground mt-1">
          Análisis de ventas, tarifas y canales de distribución
        </p>
      </div>

      {/* KPIs de Ventas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Ventas Totales"
          value={formatCurrency(kpiData.totalRevenue)}
          subtitle="Revenue total"
          trend="positive"
          trendValue={formatPercentage(kpiData.revenueAchievement)}
        />

        <KPICard
          title="Presupuesto"
          value={formatCurrency(kpiData.budgetRevenue)}
          subtitle="Meta del periodo"
        />

        <KPICard
          title="Forecast"
          value={formatCurrency(kpiData.forecastRevenue)}
          subtitle="Proyección de ventas"
        />

        <KPICard
          title="ADR"
          value={formatCurrency(kpiData.adr)}
          subtitle="Tarifa promedio diaria"
          trend={kpiData.adr > kpiData.budgetADR ? 'positive' : 'negative'}
          trendValue={formatPercentage(kpiData.adrGrowth)}
        />
      </div>

      {/* Gráficos de ventas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          title="Evolución de Ventas"
          data={salesTrendData}
          dataKeys={[
            { key: 'value', label: 'Ventas Reales', color: 'hsl(var(--chart-1))' },
            { key: 'forecast', label: 'Forecast', color: 'hsl(var(--chart-4))' },
            { key: 'budget', label: 'Presupuesto', color: 'hsl(var(--chart-3))' },
          ]}
          formatValue={(value) => formatCurrency(value)}
        />

        <LineChart
          title="Evolución de ADR"
          data={avgRateTrendData}
          dataKeys={[
            { key: 'value', label: 'ADR Real', color: 'hsl(var(--chart-2))' },
            { key: 'forecast', label: 'Forecast', color: 'hsl(var(--chart-4))' },
            { key: 'budget', label: 'ADR Presupuestado', color: 'hsl(var(--chart-5))' },
          ]}
          formatValue={(value) => formatCurrency(value)}
        />
      </div>
    </div>
  );
};

export default Ventas;
