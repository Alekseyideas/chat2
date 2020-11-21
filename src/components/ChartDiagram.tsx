import React from 'react';
import Chart from 'chart.js';
import './ChartDiagram.scss';
interface ChartDiagramProps {}

export const ChartDiagram: React.FC<ChartDiagramProps> = ({}) => {
  const chartRef: any = React.createRef();

  React.useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        //Bring in data
        labels: [],
        // labels: ['тест 1', 'тест 2', 'тест 3'],
        datasets: [
          {
            label: '',
            data: [100, 27, 91],
            backgroundColor: ['rgb(102, 163, 179)', 'rgb(113, 122, 124)', 'rgb(166, 182, 108)'],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  }, []);
  return (
    <div className='chartDiagram'>
      <div className='chartDiagram__wrapper'>
        <canvas width='300' height='300' id='myChart' ref={chartRef} />
      </div>
      <div>
        <div className='labelInfo'>
          <div className='lableColor lableColor-1' />
          <span>Название 1</span>
        </div>
        <div className='labelInfo'>
          <div className='lableColor lableColor-2' />
          <span>Название 2</span>
        </div>
        <div className='labelInfo'>
          <div className='lableColor lableColor-3' />
          <span>Название 2</span>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet! Eveniet aperiam aut
        qui modi obcaecati molestiae laboriosam minus repellendus esse reprehenderit amet natus odio
        ea quibusdam sunt temporibus nostrum nihil, consequuntur iure autem quisquam nisi officiis
        error! Possimus, perspiciatis.
      </p>
    </div>
  );
};
