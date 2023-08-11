import { getPlaylistRequestLink, getVideosId, getTime, MAX_RESULTS } from "./helper.js";

async function getDurationHelper(items) {
    let response, data, cnt;
    let nTotal = items.length;
    let videoID = getVideosId(items);
    let apiURL = `https://youtube.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=contentDetails&maxResults=${MAX_RESULTS}` + videoID;

    response = await fetch(apiURL);
    if (!response.ok) {
        console.log(response);
        throw new Error("Something went wrong!! Please try again..");
    }
    data = await response.json();
    cnt = data.items.length;
    let time = getTime(data.items);
    return [time, cnt, nTotal - cnt];
}

async function getDuration(playlistLink) {
    let playListRequestLink = getPlaylistRequestLink(playlistLink);
    let time_sec = 0, counts = 0, notCounts = 0, nextPageToken = null, flag = true;

    while (flag) {
        let apiURL = playListRequestLink, time, cnt, notCnt, response, data;
        if (nextPageToken !== null) apiURL += `&pageToken=${nextPageToken}`;

        response = await fetch(apiURL);
        if (!response.ok) {
            console.log(response);
            if (response.status === 404) throw new Error("Playlist not found !!  Please check the link and try again..")
            else throw new Error("Something went wrong!! Please try again..");
        }
        data = await response.json();

        if (data.nextPageToken) nextPageToken = data.nextPageToken;
        else flag = false;

        [time, cnt, notCnt] = await getDurationHelper(data.items);
        time_sec += time; counts += cnt; notCounts += notCnt;
    }
    return [time_sec, counts, notCounts];
}

function convertTimeToString(time) {
    let ans = "";
    let [day, hour, min, sec] = time;
    if (day !== 0) ans += (day + " days, ")
    ans += (hour + " hrs, ");
    ans += (min + " minutes, ");
    ans += (sec + " seconds");
    return ans;
}
function time100x(time) {
    let hour = Math.floor(time / 3600);
    let day = Math.floor(hour / 24);
    hour = hour % 24;
    let min = Math.floor((time % 3600) / 60);
    let sec = time % 60;
    return [day, hour, min, sec];
}

function time125x(time) {
    time = Math.floor(time / (1.25));
    return time100x(time);
}

function time150x(time) {
    time = Math.floor(time / (1.5));
    return time100x(time);
}

function time175x(time) {
    time = Math.floor(time / (1.75));
    return time100x(time);
}

function time200x(time) {
    time = Math.floor(time / (2));
    return time100x(time);
}

function getFormattedTime(time) {

    let t100x = convertTimeToString(time100x(time));
    let t125x = convertTimeToString(time125x(time));
    let t150x = convertTimeToString(time150x(time));
    let t175x = convertTimeToString(time175x(time));
    let t200x = convertTimeToString(time200x(time));

    return [t100x, t125x, t150x, t175x, t200x];
}

function getAvgSize(time, count) {
    const [dd, hh, mm, ss] = time100x(Math.floor(time / count));
    let str = "";
    if (dd !== 0) str += (dd + " days, ");
    if (hh !== 0) str += (hh + " hours, ");
    str += (mm + " minutes, ");
    str += (ss + " seconds");
    return str;
}

export { getDuration, getFormattedTime, getAvgSize };

