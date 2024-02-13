import SmallPlaylist from '@/components/buttons/SmallPlaylist';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './MusicArtTab.module.css'

export default function MusicArtTab({ //playlists
}) {
    return (
        <Tabs>
            <TabList className={styles.tabList}>
                <Tab className={styles.tab} selectedClassName={styles.selectedTab}>Music</Tab>
                <Tab className={styles.tab} selectedClassName={styles.selectedTab}>Art</Tab>
            </TabList>
            <TabPanel className={styles.tabPanel}>
                <SmallPlaylist />
            </TabPanel>
            <TabPanel className={styles.tabPanel}>
            <SmallPlaylist />
            <SmallPlaylist />
            </TabPanel>
        </Tabs>

    );

}