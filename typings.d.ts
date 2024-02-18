
interface MusicArtTabProperties {
    onChange?: (tab: string) => void;
    children: (tab: string) => ReactElement;
    tabs: Readonly<string[]>;
    id: string;
}
//Spotify Files

interface SpotifyPlayerType {
    access_token: string;
    currentTrack: string;
    playing: boolean;
}

//APIs
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

//Data
interface INeighbData {
    name: string;
    image: string;
    playlist_id: string;
}

interface IArtistData{
    name: string;
    image: string;
}

//Components

interface NavProps {
    type: string;
}

interface HeaderProps {
    text: string;
    type: string;
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

interface ISmallPlaylist{
    name: string;
    image: string;
}

interface IPlaylist{
    name: string;
    image: string;
}

