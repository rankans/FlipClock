var jq = $.noConflict();

var hourDiv = jq("#hour");
var minuteDiv = jq("#minute");
var ap = jq("#ap")
var iconTheme = jq(".icon-theme")
var themeModal = jq(".theme-modal")
var mb = jq("#theme1")
var fl = jq("#theme2")
var gm = jq("#theme3")

iconTheme.on("click", (e) => {
    themeModal.removeClass("d-none")
});

function showTime() {
    var dt = new Date();
    var hour = String(Math.abs(dt.getHours() - 12)).padStart(2, '0')
    var minute = String(dt.getMinutes()).padStart(2, '0')

    // console.log("TIME UPDATED")
    jq(document).ready((e) => {
        hourDiv.text(hour)
        minuteDiv.text(minute)
        if ((hour + 12) >= 12) {
            ap.text("PM")
            // if (hour > 6) {
            //     jq("body").removeClass()
            //     jq("body").addClass("minimal-black")
            // }
        } else {
            ap.text("AM")
            // if(hour > 7){
            //     jq("body").removeClass()
            //     jq("body").addClass("floral")
            // }

        }
    })
    // console.log(dt)
}

setInterval(showTime, 1000)

mb.click((e) => {
    console.log("THEME CHANGED")
    jq("body").removeClass()
    jq("body").addClass("minimal-black")
    themeModal.addClass("d-none")
})

fl.click((e) => {
    console.log("THEME CHANGED")
    jq("body").removeClass()
    jq("body").addClass("floral")
    themeModal.addClass("d-none")
})

gm.click((e) => {
    console.log("THEME CHANGED")
    jq("body").removeClass()
    jq("body").addClass("gaming")
    themeModal.addClass("d-none")
})