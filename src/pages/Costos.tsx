/**
 * Costos - Página de Análisis de Costos
 * 
 * Esta página muestra información detallada sobre:
 * - Costos operacionales
 * - Gastos por departamento
 * - Comparación con presupuesto
 * - Análisis de eficiencia
 */

import React from 'react';
import { useFilters } from '@/contexts/FilterContext';
import { KPICard } from '@/components/dashboard/KPICard';
import {
  getKPIData,
  formatCurrency,
  formatPercentage,
} from '@/lib/dummyData';

export const Costos: React.FC = () => {
  const { property } = useFilters();
  const kpiData = getKPIData(property);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Costos Operacionales</h1>
        <p className="text-muted-foreground mt-1">
          Análisis de gastos, costos y eficiencia operativa
        </p>
      </div>

      {/* KPIs de Costos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Costos Totales"
          value={formatCurrency(kpiData.costs)}
          subtitle="Gastos operacionales"
        />

        <KPICard
          title="Utilidad (GOP)"
          value={formatCurrency(kpiData.profitMargin)}
          subtitle="Gross Operating Profit"
          trend="positive"
          trendValue={formatPercentage(kpiData.profitPercentage)}
        />

        <KPICard
          title="Margen de Utilidad"
          value={formatPercentage(kpiData.profitPercentage)}
          subtitle="% de rentabilidad"
          trend="positive"
        />

        <KPICard
          title="FARA"
          value={formatCurrency(kpiData.fara)}
          subtitle={`${formatPercentage(kpiData.faraPercentage)} del total`}
          trend="neutral"
        />
      </div>

      {/* Información adicional */}
      <div className="bg-card border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Resumen de Costos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Total de Ingresos:</p>
            <p className="text-lg font-semibold">{formatCurrency(kpiData.totalRevenue)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Total de Costos:</p>
            <p className="text-lg font-semibold">{formatCurrency(kpiData.costs)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Utilidad Neta:</p>
            <p className="text-lg font-semibold text-success">{formatCurrency(kpiData.profitMargin)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Margen:</p>
            <p className="text-lg font-semibold">{formatPercentage(kpiData.profitPercentage)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Costos;
