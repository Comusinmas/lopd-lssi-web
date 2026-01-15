function acceptCookies() {
    document.cookie = "cookies_accepted=true; path=/; max-age=" + 60*60*24*365;
    document.getElementById("cookie-banner").style.display = "none";

    // Carregar Google Analytics només amb consentiment
    var gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-6WY7M0XGC0";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6WY7M0XGC0');
}

window.onload = function () {
    if (!document.cookie.includes("cookies_accepted")) {
        document.getElementById("cookie-banner").style.display = "block";
    }
};