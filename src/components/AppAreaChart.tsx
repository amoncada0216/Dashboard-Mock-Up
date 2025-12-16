import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  new: {
    label: "New",
    color: "var(--chart-1)",
  },
  returning: {
    label: "Returning",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", new: 172, returning: 96 },
  { month: "February", new: 158, returning: 112 },
  { month: "March", new: 231, returning: 134 },
  { month: "April", new: 139, returning: 178 },
  { month: "May", new: 121, returning: 164 },
  { month: "June", new: 205, returning: 149 },
];

const AppAreaChart = () => {
  return (
    <div className="flex flex-col h-full min-h-0">
      <h1 className="text-lg font-medium mb-6">Total Visitors</h1>

      <ChartContainer
        config={chartConfig}
        className="min-h-50 w-full"
      >
        <AreaChart
          accessibilityLayer
          data={chartData}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient
              id="fillNew"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="var(--color-new)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-new)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient
              id="fillReturning"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="var(--color-returning)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-returning)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="new"
            type="natural"
            fill="url(#fillNew)"
            stroke="var(--color-new)"
            fillOpacity={0.4}
          />
          <Area
            dataKey="returning"
            type="natural"
            fill="url(#fillReturning)"
            stroke="var(--color-returning)"
            fillOpacity={0.4}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;
