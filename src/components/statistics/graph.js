import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
export const datas = {
    labels,
    datasets: [
      {
        label: 'Cases',
        data: [2, 3, 2.5, 5, 4, 5, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

const Graph = () => {
    
    return (
        <div className="graph">
            <div>
                Daily New Cases
                <Bar options={options} data={datas} height={50} width={80} style={{marginBottom:'50px', marginRight: '10px'}}/>
            </div>
        </div>
    )
}

export default Graph;