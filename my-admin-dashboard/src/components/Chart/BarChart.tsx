import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface BarChartProps {
  data: number[];
  labels: string[];
  barWidth?: number; // New prop for adjusting the bar width (optional)
}

const BarChart = ({ data, labels, barWidth = 0.6 }: BarChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstanceRef.current) {
          // Destroy previous chart instance
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Sales",
                data: data,
                backgroundColor: "#D8543C",
                barPercentage: 0.5,
                borderRadius: 10,
                barThickness: 15,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: true,
                grid: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  callback: (value) => `₦ ${value.toLocaleString(undefined)}`,
                },
                grid: {
                  display: false,
                },
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            // Adjust the bar width
            indexAxis: "x", // Set the bar width for x-axis bars
          },
        });
      }
    }

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, labels, barWidth]);

  return (
    <div className=" w-full h-[350px] ">
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
