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

interface SpotifyPlaylist {
    name: string;
    tracks: {
        items: [
            {
                track: {
                    album: {
                        images: [
                            {
                                url: string
                            }
                        ]
                    },
                    artists: [
                        {
                            name: string
                        }

                    ],
                    name: string;
                    uri: string;
                }
            }
        ]
    }
}

interface SongCard {
    songTitle: string;
    artistName: string;
    coverUrl: string;
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