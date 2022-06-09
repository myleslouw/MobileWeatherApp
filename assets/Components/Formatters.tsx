//https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript


export function ConvertTime(unixTime: number) {
    let date = new Date(unixTime * 1000)
    let hours = date.getHours();

    let time = hours > 10 ? hours + ':00' : "0" + hours + ':00'
    return time;
}

export function ConvertExactTime(unixTime: number) {
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unixTime * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = date.getMinutes();
// Seconds part from the timestamp

// Will display time in 10:30:23 format
var formattedTime = minutes < 10 ? hours + ':' + "0" + minutes : hours + ':' + minutes;

return formattedTime;
}

export function ToKPH(speedInMPS: number) {
    return speedInMPS * 3.6;            //converts meters per second to kilometers per hour
}