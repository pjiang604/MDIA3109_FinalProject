
import Link from "next/link"
import styles from './SalesBar.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
    aspectRatio: 2,
    plugins: {
        legend: {
            position: 'top' as const,
        }
    },
    minBarLength: 0,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const labels = ['2013', '2015', '2017', '2019', '2021'];

const cd = [170.7, 151.0, 118.2, 57.5, 40.0]; //need to specify this is in million $ scale
const digitalAlbum = [69.3, 49.0, 39.7, 15.1, 10.3];
const digitalSingles = [90.1, 74.3, 51.8, 35.9, 23.7];
const other = [21.5, 23.2, 34.4, 31.3, 67.8];
const streaming = [0, 0, 181.0, 316.4, 407.0];

export const data = {
    labels,
    datasets: [
        {
            label: 'Musical Compact Discs',
            data: cd,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Digital Downloads - Albums',
            data: digitalAlbum,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Digital Downloads - Singles',
            data: digitalSingles,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Other Formats (vinyl records, DVD audio, etc.',
            data: other,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Streaming Sales',
            data: streaming,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function SalesBar() {


    return (
        <>
            <div className={styles.main}>
                <h2>Sound recording and music publishing, sales based on format of musical recordings</h2>
                <p>Data from <Link href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2110008401">Statistics Canada</Link></p>
                <div className={styles.chartContainer}>
                    <Bar options={options} data={data}/>
                </div>
                <p>The bar chart takes data from Statistics Canada, looking at the number of sales based on format of musical recordings every two years from 2013.</p>
            </div>
        </>
    )
}