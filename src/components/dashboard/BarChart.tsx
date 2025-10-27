/**
 * BarChart - Componente de Gráfico de Barras
 * 
 * Este componente renderiza gráficos de barras para comparar
 * diferentes categorías o propiedades.
 * 
 * Utilizado para:
 * - Comparación de ratings entre propiedades
 * - Ventas por canal
 * - Costos por departamento
 * - Cualquier comparación categórica
 */

import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Props del componente
interface BarChartProps {
  title: string; // Título del gráfico
  data: any[]; // Datos para el gráfico
  dataKey: string; // Clave del eje Y (valor)
  nameKey: string; // Clave del eje X (categoría)
  barColor?: string; // Color de las barras
  formatValue?: (value: number) => string; // Función para formatear valores
  className?: string; // Clases CSS adicionales
}

/**
 * Componente BarChart
 */
export const BarChart: React.FC<BarChartProps> = ({
  title,
  data,
  dataKey,
  nameKey,
  barColor = 'hsl(var(--chart-1))',
  formatValue = (value) => value.toLocaleString('es-CO'),
  className,
}) => {
  /**
   * Tooltip personalizado
   */
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium mb-1">{payload[0].payload[nameKey]}</p>
          <p className="text-xs text-muted-foreground">
            {formatValue(payload[0].value)}
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
          <RechartsBarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey={nameKey}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              tickFormatter={formatValue}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey={dataKey}
              fill={barColor}
              radius={[8, 8, 0, 0]} // Bordes redondeados en la parte superior
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
