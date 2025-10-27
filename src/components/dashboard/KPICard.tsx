/**
 * KPICard - Componente de Tarjeta de KPI (Key Performance Indicator)
 * 
 * Este componente muestra un indicador clave de rendimiento con:
 * - Título descriptivo
 * - Valor principal (grande y destacado)
 * - Subtítulo opcional (descripción adicional)
 * - Indicador de tendencia (positivo/negativo/neutral)
 * - Porcentaje de cambio o comparación
 * 
 * Usado extensivamente en el dashboard principal para mostrar métricas
 * como ocupación, ventas, ADR, RevPAR, etc.
 */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

// Tipos de tendencia posibles
type TrendType = 'positive' | 'negative' | 'neutral';

// Props del componente KPICard
interface KPICardProps {
  title: string; // Título del KPI (ej: "Ocupación")
  value: string | number; // Valor principal a mostrar
  subtitle?: string; // Subtítulo opcional (ej: "Tasa promedio de ocupación")
  trend?: TrendType; // Tipo de tendencia
  trendValue?: string; // Valor de la tendencia (ej: "5.2%")
  className?: string; // Clases CSS adicionales
  prefix?: string; // Prefijo para el valor (ej: "$")
  suffix?: string; // Sufijo para el valor (ej: "%")
}

/**
 * Obtener el ícono correspondiente según la tendencia
 */
const getTrendIcon = (trend: TrendType) => {
  switch (trend) {
    case 'positive':
      return <ArrowUp className="w-4 h-4" />;
    case 'negative':
      return <ArrowDown className="w-4 h-4" />;
    case 'neutral':
      return <Minus className="w-4 h-4" />;
    default:
      return null;
  }
};

/**
 * Obtener el color correspondiente según la tendencia
 */
const getTrendColor = (trend: TrendType) => {
  switch (trend) {
    case 'positive':
      return 'text-success';
    case 'negative':
      return 'text-destructive';
    case 'neutral':
      return 'text-muted-foreground';
    default:
      return 'text-muted-foreground';
  }
};

/**
 * Componente KPICard
 */
export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  className,
  prefix = '',
  suffix = '',
}) => {
  return (
    <Card className={cn('card-hover', className)}>
      {/* Header con título del KPI */}
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      {/* Contenido principal */}
      <CardContent>
        {/* Valor principal del KPI */}
        <div className="flex items-baseline justify-between">
          <div className="text-3xl font-bold text-foreground">
            {prefix}{value}{suffix}
          </div>

          {/* Indicador de tendencia (si existe) */}
          {trend && trendValue && (
            <div className={cn(
              'flex items-center gap-1 text-sm font-medium',
              getTrendColor(trend)
            )}>
              {getTrendIcon(trend)}
              <span>{trendValue}</span>
            </div>
          )}
        </div>

        {/* Subtítulo (si existe) */}
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
