/**
 * LineChart - Componente de Gráfico de Líneas
 * 
 * Este componente renderiza gráficos de líneas para mostrar tendencias
 * a lo largo del tiempo. Utiliza recharts para la visualización.
 * 
 * Características:
 * - Múltiples líneas (actual, forecast, presupuesto, histórico)
 * - Leyenda interactiva
 * - Tooltip con información detallada
 * - Responsive
 * - Colores consistentes con el design system
 * 
 * Usado para mostrar tendencias de:
 * - Ventas totales
 * - Tasa de ocupación
 * - Tarifa promedio
 * - RevPAR
 */

import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendData } from '@/lib/dummyData';

// Props del componente
interface LineChartProps {
  title: string; // Título del gráfico
  data: TrendData[]; // Datos para el gráfico
  dataKeys: {
    key: keyof TrendData; // Clave del dato en el objeto TrendData
    label: string; // Etiqueta para mostrar en la leyenda
    color: string; // Color de la línea (usar tokens del design system)
  }[];
  formatValue?: (value: number) => string; // Función para formatear valores en tooltip
  className?: string; // Clases CSS adicionales
}

/**
 * Componente LineChart
 */
export const LineChart: React.FC<LineChartProps> = ({
  title,
  data,
  dataKeys,
  formatValue = (value) => value.toLocaleString('es-CO'),
  className,
}) => {
  /**
   * Componente personalizado para el tooltip
   * Muestra información detallada al hacer hover sobre el gráfico
   */
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-xs" style={{ color: entry.color }}>
              {entry.name}: {formatValue(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={className}>
      {/* Header con título */}
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>

      {/* Contenido del gráfico */}
      <CardContent>
        {/* 
          ResponsiveContainer: Hace que el gráfico se adapte al tamaño del contenedor
          width="100%": Ancho completo
          height={300}: Altura fija de 300px
        */}
        <ResponsiveContainer width="100%" height={300}>
          <RechartsLineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {/* Grid de fondo para mejor lectura */}
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />

            {/* Eje X (fechas) */}
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
            />

            {/* Eje Y (valores) */}
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              tickFormatter={formatValue}
            />

            {/* Tooltip personalizado */}
            <Tooltip content={<CustomTooltip />} />

            {/* Leyenda */}
            <Legend
              wrapperStyle={{
                fontSize: '12px',
                paddingTop: '20px',
              }}
            />

            {/* 
              Renderizar una línea por cada dataKey especificado
              Cada línea representa una serie de datos (actual, forecast, etc.)
            */}
            {dataKeys.map((dataKey) => (
              <Line
                key={dataKey.key}
                type="monotone" // Interpolación suave entre puntos
                dataKey={dataKey.key}
                name={dataKey.label}
                stroke={dataKey.color}
                strokeWidth={2}
                dot={{ r: 4 }} // Radio de los puntos en la línea
                activeDot={{ r: 6 }} // Radio del punto activo (hover)
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
