const MAX_RESULTS = 50; //We can fetch maximum of 50 entries (IDs) only at a time

function convertInSec(duration) {
    let match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    let hours = parseInt(match[1]) || 0;
    let minutes = parseInt(match[2]) || 0;
    let seconds = parseInt(match[3]) || 0;
    return hours * 3600 + minutes * 60 + seconds;
}

function getTime(data) {
    let t = 0, n = data.length;
    for (let i = 0; i < n; i++) t += convertInSec(data[i].contentDetails.duration);
    return t;
}


function getYTPlaylistID(playlistLink) {
    let regex = /(?:list=)([^&#]+)/;
    let match = playlistLink.match(regex);
    if (match && match[1]) return match[1];
    else return "###########";
}

function getPlaylistRequestLink(playlistLink) {
    let playlistId = getYTPlaylistID(playlistLink);
    let link = `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.REACT_APP_API_KEY}&part=contentDetails&maxResults=${MAX_RESULTS}&playlistId=${playlistId}`
    return link;
}

function getVideosId(items) {
    let n = items.length, str = "";
    for (let i = 0; i < n; i++) str += ("&id=" + items[i].contentDetails.videoId);
    return str;
}

export { getPlaylistRequestLink, getVideosId, getTime, MAX_RESULTS };