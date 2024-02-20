
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

interface ArtistTopTracks {
    tracks: [
        {
            uri: "string";
            name: "string";
            album: {
                images: [
                    {
                        url: 'string'
                    }
                ]
            }
        }
    ]
}

interface SpotifyRecentlyPlayed{
    items: [
        {
            track: {
                artists: [
                    {
                        name: string;
                    }
                ],
                album: {
                    images: [
                        {
                            url: string;
                        }
                    ]
                }
            }
        }
    ]
}


//Data
interface INeighbData {
    name: string;
    image: string;
    playlist_id: string;
}

interface IArtistData {
    name: string;
    image: string;
    artist_id: string;
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

interface PublicArt {
    title_of_work: string;
    neighbourhood: string;
    yearofinstallation: number;
    status: string;
    descriptionofwork: string;
    artistprojectstatement: string;
}

interface PublicArtImage {
    image: string;
}

interface PublicArtProps {
    type: string
}

interface ISmallPlaylist {
    name: string;
    image: string;
    type: string;
}

interface IPlaylist {
    name: string;
    image: string;
}


