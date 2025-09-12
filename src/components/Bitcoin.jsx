import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const BitcoinChart = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [shouldRender, setShouldRender] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize(); // 初始判斷
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (inView && !shouldRender) {
    setShouldRender(true);
  }

  const data = {
    labels: [
      '2010', '2011', '2012', '2013', '2014', '2015',
      '2016', '2017', '2018', '2019', '2020',
      '2021', '2022', '2023', '2024', '2025(今年突破12萬!?)'
    ],
    datasets: [
      {
        label: '比特幣年末價格（USD）',
        data: [
          0.08, 4.25, 13.5, 805, 320, 430,
          960, 13880, 3800, 7200, 28900,
          46300, 16500, 30000, 69000, 111000
        ],
        borderColor: '#f7931a',
        backgroundColor: '#f7931a',
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 3000,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: isMobile ? 10 : 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.formattedValue}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: '價格（美元）',
          font: {
            size: isMobile ? 12 : 16,
          },
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 14,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: '年份',
          font: {
            size: isMobile ? 12 : 16,
          },
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 14,
          },
        },
      },
    },
  };

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '1rem',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height:"400px" }}>
        {shouldRender && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <Line data={data} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BitcoinChart;

