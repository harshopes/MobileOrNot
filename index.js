function myfunction() {

    if (/Mobi/.test(navigator.userAgent)) {
        document.querySelector("h3").innerText = ("Yes");
    } else {
        document.querySelector("h3").innerText = ("No");
    }

}
