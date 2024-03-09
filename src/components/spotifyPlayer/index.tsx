import SpotifyPlayer from 'react-spotify-web-playback';

export default function MusicPlayer({
    accessToken,
    uri,
    offset
}: IMusicPlayer) {
    return (
        <div className={``}>
            {
                accessToken && uri ?
                    <SpotifyPlayer
                        token={accessToken}
                        uris={`${uri}`}
                        play={true}
                        hideAttribution={true}
                        offset={offset}
                        styles={{
                            bgColor: "#1C1C1C",
                            color: "#F5F5F5",
                            trackArtistColor: "#F5F5F5",
                            trackNameColor: "#F5F5F5",
                        }}

                    />
                    :<></>
            }
        </div>
    )
}