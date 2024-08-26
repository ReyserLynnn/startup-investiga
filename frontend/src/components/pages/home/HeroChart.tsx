/* eslint-disable consistent-return */
/* eslint-disable react/no-unstable-nested-components */

'use client';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

const chartData = [
  { browser: 'safari', investigadores: 87, fill: 'var(--color-safari)' },
];

const chartConfig = {
  investigadores: {
    label: 'Investigadores',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function HeroChart() {
  return (
    <Card className="absolute h-[280px] w-[240px] right-[-50px] top-[-50px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="items-center pb-0">
        <CardTitle>Aceptación</CardTitle>
        <CardDescription>Septiembre 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={313.2}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background "
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="investigadores" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].investigadores.toLocaleString()}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Perfiles selectos
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
