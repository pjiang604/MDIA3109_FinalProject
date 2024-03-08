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
                'rgba(251, 186, 114, 0.2)',
                'rgba(141, 167, 190, 0.2)',
                'rgba(162, 173, 145, 0.2)',
                'rgba(12, 12, 12, 0.2)',
                'rgba(213, 122, 102, 0.2)',
                'rgba(153, 15, 75, 0.2)',
                'rgba(135, 145, 158, 0.2)',
                'rgba(255, 227, 220, 0.2)',
                'rgba(219, 180, 173, 0.2)',
            ],
            borderColor: [
                'rgba(251, 186, 114, 0.5)',
                'rgba(141, 167, 190, 0.5)',
                'rgba(162, 173, 145, 0.5)',
                'rgba(12, 12, 12, 0.5)',
                'rgba(213, 122, 102, 0.5)',
                'rgba(153, 15, 75, 0.5)',
                'rgba(135, 145, 158, 0.5)',
                'rgba(255, 227, 220, 0.5)',
                'rgba(219, 180, 173, 0.5)',
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
                <h4 className={styles.dataLink}>Data from <Link href="https://canadacouncil.ca/research/research-library/2019/03/a-statistical-profile-of-artists-in-canada-in-2016">Canada Council for the Arts</Link></h4>
                <div className={styles.chartContainer}>
                    <Pie data={data} />
                </div>
                <p>The above pie chart provides statistics on the kinds of artists in Canada in 2016. The pie chart categorizes artists into different areas, such as dancers or actors and comedians, to show how many Canadians are grouped in each category. From the pie chart above, musicians and singers are the largest category.</p>
            </div>
        </>
    )
}