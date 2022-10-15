var jq = $.noConflict();

var hourDiv = jq("#hour");
var minuteDiv = jq("#minute");
var ap = jq("#ap")




function showTime(){
    var dt = new Date();
    var hour = String(dt.getHours()-12).padStart(2, '0')
    var minute = String(dt.getMinutes()).padStart(2, '0')

    console.log("TIME UPDATED")
    jq(document).ready((e) =>{
        hourDiv.text(hour)
        minuteDiv.text(minute)
        if((hour+12)>=12){
            ap.text("PM")
        }else{
            ap.text("AM")
        }
    })
    console.log(dt)
}

setInterval(showTime, 1000)