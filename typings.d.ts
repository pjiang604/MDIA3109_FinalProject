interface NavProps {
    type: string;
}

interface HeaderProps {
    text: string;
    type: string;
}

interface MusicArtTabProperties {
    onChange?: (tab: string) => void;
    children: (tab: string) => ReactElement;
    tabs: Readonly<string[]>;
    id: string;
}

interface SpotifyPlayerType {
    access_token: string;
    currentTrack: string;
    playing: boolean;
}

interface StreetArt {
    title_of_work: string;
    neighbourhood: string;
    url: string;
    photourl: {
        url: string
    }
    yearofinstallation: number;
}