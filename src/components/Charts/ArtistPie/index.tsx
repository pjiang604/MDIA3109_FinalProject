import Link from "next/link"
import styles from './ArtistPie.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Musicians and Singers', 'Authors and Writer', 'Producers, Directors, and Choreographers', 'Visual Artists', 
    'Artisans and Craftspeople', 'Actors and Comedians', 'Dancers', 'Other performers', 'Conductors, Composers, and Arrangers'],
    datasets: [
        {
            label: 'Number of People',
            data: [3500, 27700, 27600, 21100, 14700, 11400, 10100, 6400, 4200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};



export default function ArtistPie() {

    return (
        <>
            <div className={styles.mainContainer}>
                <h2>A Statistical Profile of Artists in Canada in 2016</h2>
                <p>Data from <Link href="https://canadacouncil.ca/research/research-library/2019/03/a-statistical-profile-of-artists-in-canada-in-2016">Canada Council for the Arts</Link></p>
                <div className={styles.chartContainer}>
                <Pie data={data} />
                </div>
                <p>The above pie chart provides statistics on the kinds of artists in Canada in 2016. The pie chart categorizes artists into different areas, such as dancers or actors and comedians, to show how many Canadians are grouped in each category. From the pie chart above, musicians and singers are the largest category.</p>
            </div>
        </>
    )
}