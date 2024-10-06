import React, { useContext, useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { BookReadContext } from '../ToRead';

const PagetoRead = () => {
  const chartRef = useRef(null);
  const { bookRead } = useContext(BookReadContext);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch("/book-data.json")
      .then((res) => res.json())
      .then((data) => {
        const readBooks = data.filter((b) => bookRead.includes(b.bookId));
        setChartData(readBooks);
      });
  }, [bookRead]);

  console.log(chartData);
  useEffect(() => {
    Chart.register(...registerables);

    const ctx = document.getElementById('myChart');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const labelData = chartData.map((data) => data.bookName);
    const data = chartData.map((data) => data.totalPages);

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [{
          label: 'Pages',
          data: data,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <>
      <canvas className="p-2" style={{ height: '120px' }} id="myChart"></canvas>
    </>
  );
};

export default PagetoRead;
