import { Bar } from 'react-chartjs-2';
import React, { useMemo } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import accounting from 'accounting-big';

import { objectDeepMerge } from 'Util/objectDeepMerge';
import { useDevice } from 'Hook/useDevice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

function BarChart({
  data,
  options,
  yMin,
}) {
  const deviceType = useDevice();

  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '',
    precision: 0,
    thousand: ' ',
  });

  const generalOptions = useMemo(() => ({
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
      datalabels: {
        backgroundColor: '#1C1C3A',
        color: '#FFF',
        borderRadius: 4,
        anchor: 'end',
        align: 'end',
        font: {
          size: deviceType === 'desktop'
            ? 13
            : 11,
          family: 'Inter, sans-serif',
        },
        padding: {
          top: 2,
          right: 8,
          bottom: 2,
          left: 8,
        },
        formatter: value => `${formatMoney(value)}`,
        display: context => {
          const { dataset, dataIndex } = context;
          const { data: datasetData } = dataset;
          return datasetData.length - 1 === dataIndex || context.active;
        },
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 30,
      },
    },
    scales: {
      xAxis: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#A3A3A3',
          font: {
            size: deviceType === 'desktop'
              ? 20
              : 13,
          },
        },
      },
      yAxis: {
        min: yMin > 20000
          ? 20000
          : 0,
        grid: {
          borderDash: [2, 2],
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          color: '#A3A3A3',
          font: {
            size: deviceType === 'desktop'
              ? 20
              : 13,
          },
          callback: value => `${formatMoney(value / 1000)} К`,
        },
      },
    },
  }), [deviceType, yMin]);

  const mergedOptions = useMemo(
    () => objectDeepMerge(generalOptions, options),
    [options, generalOptions],
  );

  return (
    <Bar
      data={data}
      options={mergedOptions}
    />
  );
}

export default BarChart;
