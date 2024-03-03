import * as MuiXCharts from "@mui/x-charts"; //import everything from the dependency, then declare the chart below or else it'll give an export error
import Link from "next/link"
import styles from './ArtistPie.module.css'

export default function ArtistPie() {

    const { PieChart } = MuiXCharts;

    return (
        <>
            <div className={styles.mainContainer}>
                <h2>A Statistical Profile of Artists in Canada in 2016</h2>
                <p>Data from <Link href="https://canadacouncil.ca/research/research-library/2019/03/a-statistical-profile-of-artists-in-canada-in-2016">Canada Council for the Arts</Link></p>
                <div className={styles.chartContainer}>
                    <PieChart
                        className={styles.pieChart}
                        series={[
                            {
                                data: [
                                    { id: 0, value: 35000, label: 'Musicians and Singers' },
                                    { id: 1, value: 27700, label: 'Authors and Writers' },
                                    { id: 3, value: 27600, label: 'Producers, Directors, and Choreographers' },
                                    { id: 4, value: 27100, label: 'Visual Artists' },
                                    { id: 5, value: 14700, label: 'Artisans and Craftspeople' },
                                    { id: 6, value: 11400, label: 'Actors and Comedians' },
                                    { id: 7, value: 10100, label: 'Dancers' },
                                    { id: 8, value: 6400, label: 'Other performers' },
                                    { id: 9, value: 4200, label: 'Conductors, Composers, and Arrangers' },
                                ],
                            },
                        ]}
                        slotProps={{
                            legend: {
                                itemMarkWidth: 10,
                                itemMarkHeight: 10,
                                markGap: 5,
                                itemGap: 5,
                                direction: 'row',
                                padding: -20,
                                position: { vertical: 'top', horizontal: 'left' },
                            },
                        }}
                        width={400}
                        height={300}
                    />
                </div>
                <p>Add a lil description of the chart here</p>
            </div>
        </>
    )
}