import { access } from "fs";
import { useState } from "react"

export const getPlaylist = async (playlist_id: string) => {
    try {
        let accessToken = sessionStorage.getItem('access_token');
        if (accessToken) {
            const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
            const playlistData = await response.json();
            console.log('Playlist data: ', playlistData);

            return playlistData;
        } else {
            console.log("access token error, getPlaylist")
        }
    } catch (error) {
        console.error('Playlist error: ', error);
    }
}

export const getArtist = async (playlist_id: string) => {
    try {
        let accessToken = sessionStorage.getItem('access_token');
        if (accessToken) {
            const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
            const playlistData = await response.json();
            console.log('Artist data: ', playlistData);

            return playlistData;
        } else {
            console.log("access token error, getArtist")
        }
    } catch (error) {
        console.error('Artist error: ', error);
    }
}

export const getArtistProfiles = async (stringArtistIds: string) => {
    try {
        let accessToken = sessionStorage.getItem('access_token');
        if (accessToken) {
            const response = await fetch(`https://api.spotify.com/v1/artists?ids=${stringArtistIds}`, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
            const playlistData = await response.json();
            console.log('Artist data: ', playlistData);

            return playlistData;
        } else {
            console.log("access token error, getArtistProfiles")
        }
    } catch (error) {
        console.error('Artist error: ', error);
    }
}

export const getRecentPlayed = async () => {
    try {
        let accessToken = sessionStorage.getItem('access_token');
        if (accessToken) {
            const response = await fetch(`https://api.spotify.com/v1/me/player/recently-played`, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
            const recentData = await response.json();
            console.log('Recently played data: ', recentData);

            return recentData;
        } else {
            console.log("access token error, getRecentPlayed")
        }

    } catch (error) {
        console.error('Recent data error: ', error);
    }
}

export const playSong = async () => {
    try {
        let accessToken = sessionStorage.getItem('access_token');
        if (accessToken) {
            const response = await fetch(`https://api.spotify.com/v1/me/player/play`, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
            const playlistData = await response.json();

            return playlistData;
        } else {
            console.log("access token error, playSong")
        }
    } catch (error) {
        console.error('Playlist error: ', error);
    }
}
