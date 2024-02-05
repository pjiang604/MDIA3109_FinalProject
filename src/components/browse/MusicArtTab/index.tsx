import SmallPlaylist from '@/components/buttons/SmallPlaylist';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function MusicArtTab({ //playlists
}) {
    return (
        <Tabs>
            <TabList>
                <Tab>Music</Tab>
                <Tab>Art</Tab>
            </TabList>

            <TabPanel>
                <SmallPlaylist />
            </TabPanel>
            <TabPanel>
            <SmallPlaylist />
            <SmallPlaylist />
            </TabPanel>
        </Tabs>

    );

}