interface NavProps {
    type: string;
}

interface HeaderProps {
    text: string;
    type: string;
}

interface SpotifyPlayerType {
    access_token: string;
    currentTrack: string;
    playing: boolean;
  }