/**
 * PieChart - Componente de Gráfico de Torta
 * 
 * Este componente renderiza gráficos de torta/dona para mostrar
 * distribuciones y proporciones.
 * 
 * Utilizado para:
 * - Distribución de propiedades
 * - Distribución de ingresos por segmento
 * - Proporción de costos por departamento
 */

import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Props del componente
interface PieChartProps {
  title: string; // Título del gráfico
  data: any[]; // Datos para el gráfico
  dataKey: string; // Clave del valor
  nameKey: string; // Clave del nombre
  colors?: string[]; // Array de colores para las secciones
  showPercentage?: boolean; // Mostrar porcentajes en el gráfico
  innerRadius?: number; // Radio interior (para gráfico de dona)
  className?: string; // Clases CSS adicionales
}

// Colores por defecto del design system
const DEFAULT_COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
];

/**
 * Componente PieChart
 */
export const PieChart: React.FC<PieChartProps> = ({
  title,
  data,
  dataKey,
  nameKey,
  colors = DEFAULT_COLORS,
  showPercentage = true,
  innerRadius = 60, // 0 = torta completa, >0 = dona
  className,
}) => {
  /**
   * Renderizar etiqueta personalizada con porcentaje
   */
  const renderLabel = (entry: any) => {
    if (showPercentage && entry.percentage) {
      return `${entry.percentage.toFixed(1)}%`;
    }
    return '';
  };

  /**
   * Tooltip personalizado
   */
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-popover border border-border rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium mb-1">{data[nameKey]}</p>
          <p className="text-xs text-muted-foreground">
            {data[dataKey].toLocaleString('es-CO')}
            {data.percentage && ` (${data.percentage.toFixed(2)}%)`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={100}
              fill="#8884d8"
              dataKey={dataKey}
              label={renderLabel}
              labelLine={false}
            >
              {/* Aplicar colores a cada sección */}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                fontSize: '12px',
                paddingTop: '10px',
              }}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
