function humanReadable(s) {
    var h   = Math.floor(s / 3600);
    var m = Math.floor((s - (h * 3600)) / 60);
    var ns = s - (h * 3600) - (m * 60);
    if (h < 10) {h = "0"+h;}
    if (m < 10) {m = "0"+m;}
    if (ns < 10) {ns = "0"+ns;}
    return h+':'+m+':'+ns;
}
