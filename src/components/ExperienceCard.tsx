// ExperienceCard.tsx
import React from "react";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";

interface GameData {
  name: string;
  hours: number;
  color: string;
  icon: React.ReactNode;
}

const games: GameData[] = [
  {
    name: "Dota 2",
    hours: 2340,
    color: "#ef4444", // red-500
    icon: <span className="text-2xl">🎮</span>,
  },
  {
    name: "Basket",
    hours: 5420,
    color: "#facc15", // yellow-300
    icon: <span className="text-2xl">🏀</span>,
  },
  {
    name: "CSGO",
    hours: 4580,
    color: "#6366f1", // indigo-500
    icon: <span className="text-2xl">🔫</span>,
  },
  {
    name: "Mobile Legends",
    hours: 3200,
    color: "#22c55e", // green-500
    icon: <span className="text-2xl">📱</span>,
  },
];

const ExperienceCard: React.FC = () => {
  const total = games.reduce((acc, g) => acc + g.hours, 0);

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
      background: "transparent",
    },
    labels: games.map((g) => g.name),
    colors: games.map((g) => g.color),
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => "100%",
              color: "#fff",
            },
            value: {
              formatter: (val, opts) => {
                const percent =
                  (opts.w.config.series[opts.seriesIndex] / total) * 100;
                return `${percent.toFixed(1)}%`;
              },
            },
          },
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) =>
          `${val.toLocaleString()}h (${((val / total) * 100).toFixed(1)}%)`,
      },
    },
  };

  const chartSeries = games.map((g) => g.hours);

  return (
    <div className="relative w-full max-w-sm mx-auto p-6 rounded-3xl bg-gradient-to-br from-red-900 via-purple-900 to-yellow-900 shadow-lg text-white">
      {/* Background dekoratif animasi */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "conic-gradient(from 180deg, rgba(255,0,0,0.4), rgba(255,255,0,0.3), rgba(0,0,255,0.4), rgba(255,0,0,0.4))",
          filter: "blur(60px)",
        }}
      />

      {/* Konten utama */}
      <div className="relative flex flex-col items-center">
        <div className="w-64 h-64">
          <Chart options={chartOptions} series={chartSeries} type="donut" />
        </div>

        {/* Breakdown */}
        <div className="flex justify-around w-full mt-6 flex-wrap">
          {games.map((g, idx) => {
            const percent = ((g.hours / total) * 100).toFixed(1);
            return (
              <div key={idx} className="flex flex-col items-center w-1/4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center`}
                  style={{ backgroundColor: g.color }}
                >
                  {g.icon}
                </div>
                <p className="mt-2 text-xs text-center font-medium">{g.name}</p>
                <p className="text-sm">{percent}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
