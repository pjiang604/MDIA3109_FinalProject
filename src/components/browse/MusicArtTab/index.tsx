import SmallPlaylist from '@/components/buttons/SmallPlaylist';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './MusicArtTab.module.css'
import { artists } from '@/data/artists';
import { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import { getArtistProfiles } from '@/pages/api/getMusic';
import { authorize } from '@/pages/api/authorize';
import { neighbourhoods } from "@/data/neighbourhoods"
import Skeleton from '@/components/skeleton';

export default function MusicArtTab({

}) {
    const [dataNeigh, setDataNeigh] = useState(neighbourhoods)
    const [dataArtist, setDataArtist] = useState(artists)
    const [dataArtists, setDataArtists] = useState<IArtistsData>()
    const [accessToken, setAccessToken] = useState("");
    const artistIds: any = []

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setAccessToken(`${localStorage.getItem("access_token")}`)
            const fetchArtist = async () => {
                try {

                    dataArtist && dataArtist.map((a, aIndex) => {
                        artistIds.push(a.artist_id)
                        console.log(artistIds, "artistIds")
                    })

                    const stringArtistIds = artistIds.toString()
                    const data = await getArtistProfiles(stringArtistIds);
                    setDataArtists(data);
                    console.log("artists data ", data);
                } catch (error) {
                    console.error("Error fetching playlist:", error);
                }
            };

            fetchArtist();

        } else {
            console.log("play music page: local storage undefined")
        }
    }, [authorize])

    return (
        <Tabs>
            <TabList className={styles.tabList}>
                <Tab className={styles.tab} selectedClassName={styles.selectedTab}>Music</Tab>
                <Tab className={styles.tab} selectedClassName={styles.selectedTab}>Art</Tab>
            </TabList>
            <TabPanel className={styles.tabPanel}>
                {
                    !dataArtists ?
                        <Skeleton />
                        :
                        <Carousel
                            wrapAround={true}
                            slidesToShow={2.5}
                            cellSpacing={10}
                            withoutControls={true}
                        >
                            {dataArtists && dataArtists.artists.map((a, aIndex) => {
                                return (
                                    <SmallPlaylist
                                        key={aIndex}
                                        name={a.name}
                                        image={a.images[0].url}
                                        type='artist' />
                                )
                            })}
                        </Carousel>
                }


            </TabPanel>
            <TabPanel className={styles.tabPanel}>
                <div className={`flex flex-row w-full`}>
                    <Carousel
                        wrapAround={true}
                        slidesToShow={2.5}
                        cellSpacing={10}
                        withoutControls={true}
                    >

                        {
                            dataNeigh && dataNeigh.map((a, aIndex) => {
                                return (
                                    <SmallPlaylist
                                        key={aIndex}
                                        name={a.name}
                                        image={a.image}
                                        type="neighbourhood" />
                                )
                            })}
                    </Carousel>
                </div>
            </TabPanel>
        </Tabs>

    );

}