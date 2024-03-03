import * as MuiXCharts from "@mui/x-charts"; //import everything from the dependency, then declare the chart below or else it'll give an export error
import Link from "next/link"

export default function SalesBar() {

    const { BarChart } = MuiXCharts;
    const { axisClasses } = MuiXCharts;

    const chartSetting = {
        yAxis: [
            {
                label: 'dollars ($)',
            },
        ],
        width: 500,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-20px, 0)',
            },
        },
    };
    const dataset = [
        {
            CDs: 59,
            digitalAlbum: 57,
            digitalSingle: 86,
            other: 21,
            streaming: 21,
            year: '2013',
        },
        {
            CDs: 59,
            digitalAlbum: 57,
            digitalSingle: 86,
            other: 21,
            streaming: 21,
            year: '2015',
        },
        {
            CDs: 59,
            digitalAlbum: 57,
            digitalSingle: 86,
            other: 21,
            streaming: 21,
            year: '2017',
        },
        {
            CDs: 59,
            digitalAlbum: 57,
            digitalSingle: 86,
            other: 21,
            streaming: 21,
            year: '2019',
        },
        {
            CDs: 59,
            digitalAlbum: 57,
            digitalSingle: 86,
            other: 21,
            streaming: 21,
            year: '2021',
        },
    ];

    const valueFormatter = (value: number) => `$${value}`;

    return (
        <>

            <h2>Sound recording and music publishing, sales based on format of musical recordings</h2>
            <p>Data from <Link href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2110008401">Statistics Canada</Link></p>
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
                series={[
                    { dataKey: 'CDs', label: 'Musical Compact Discs', valueFormatter },
                    { dataKey: 'digitalAlbum', label: 'Digital Downloads - albums', valueFormatter },
                    { dataKey: 'digitalSingle', label: 'Digital Downloads - singles', valueFormatter },
                    { dataKey: 'other', label: 'Other formats (vinyl records, DVD audio, etc.', valueFormatter },
                    { dataKey: 'streaming', label: 'streaming sales', valueFormatter },
                ]}
                {...chartSetting}
            />
            <p>Add a lil description of the chart here</p>

        </>
    )
}