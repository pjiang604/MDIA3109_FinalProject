
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
    uri?: string;
}

interface ArtistTopTracks {
    tracks: {
        items: [
            {
                track: {
                    name: string;
                    uri: string;
                    album: {
                        images: [
                            {
                                url: string;
                            }
                        ]
                    }
                },



            }
        ],
    }
}

interface SpotifyRecentlyPlayed {
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
    artist_playlist: string;
    artist_id: string;
}

interface IArtistsData{
    artists: [
        {
            images: [
                {
                    url: string
                }
            ],
            name: string
        }
    ]
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
    artistName?: string;
    coverUrl: string;
    type?: string;
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
    name?: string;
    image: string;
    type: string;
    showName?: boolean
}

interface IPlaylist {
    name: string;
    image: string;
}

interface IMusicPlayer{
    accessToken: string;
    uri?:string;
    offset?: number
}

interface ISkeleton{
    type: string
}

interface IArtistPie{
    data: Chart.ChartData;
    options?: Chart.ChartOptions;
}