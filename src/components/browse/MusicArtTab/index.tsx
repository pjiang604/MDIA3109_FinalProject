import SmallPlaylist from '@/components/buttons/SmallPlaylist';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './MusicArtTab.module.css'
import { artists } from '@/data/artists';
import { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import { getRecentPlayed } from '@/pages/api/getMusic';

export default function MusicArtTab({

}) {

    const [dataArtist, setDataArtist] = useState(artists)


    return (
        <Tabs>
            <TabList className={styles.tabList}>
                <Tab className={styles.tab} selectedClassName={styles.selectedTab}>Music</Tab>
                <Tab className={styles.tab} selectedClassName={styles.selectedTab}>Art</Tab>
            </TabList>
            <TabPanel className={styles.tabPanel}>
                <Carousel
                    wrapAround={true}
                    slidesToShow={2.5}
                    cellSpacing={10}
                    withoutControls={true}
                >
                    {dataArtist && dataArtist.map((a, aIndex) => {
                        return (
                            <SmallPlaylist
                                key={aIndex}
                                name={a.name}
                                image={a.image}
                                type='artist' />
                        )
                    })}
                </Carousel>

            </TabPanel>
            <TabPanel className={styles.tabPanel}>
               
            </TabPanel>
        </Tabs>

    );

}