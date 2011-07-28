// ==UserScript== 
// @author 		   gabamnml
// @name           RmvGrvskAll
// @version 	   1.1
// @description    Remove ads to grooveshark & and minimalise theme
// @namespace      RmvGrvskAll
// @include        http://listen.grooveshark.com/*
// @include        http://grooveshark.com/*
// ==/UserScript==
var listen = /^http(s)?:\/\/listen\.grooveshark\.com\//i.test(document.location);

if (listen) {
    GM_addStyle("#application { margin-right: 0px !important }");
    GM_addStyle("#capital { display: none !important }");
    GM_addStyle("#searchCapitalWrapper { display: none !important }");
    GM_addStyle("#homeFooterSeparator { display: none !important }");
    GM_addStyle("#homeFooter { display: none !important }");
    GM_addStyle("#theme_home { display: none !important }");

    var timer = null;
    
    var removeAds = function() {
        if (window.GS) {
            if (window.GS.ad && document.getElementById("capital") && document.getElementById("application") && document.getElementById("searchCapitalWrapper") && document.getElementById("homeFooterSeparator") && document.getElementById("homeFooter") && document.getElementById("theme_home")) {
                window.GS.ad.hideAdBar();
                window.$(window).resize();
                if (timer) clearInterval(timer);
            }
        }
    };
    
    timer = setInterval(removeAds, 100);
    removeAds();
}

else { 
    GM_addStyle("#application { margin-right: 0px !important }");
    GM_addStyle("#capital { display: none !important }");
    GM_addStyle("#searchCapitalWrapper { display: none !important }");
    GM_addStyle("#homeFooterSeparator { display: none !important }");
    GM_addStyle("#homeFooter { display: none !important }");
    GM_addStyle("#theme_home { display: none !important }");

    var timer = null;
    
    var removeAds = function() {
        if (window.GS) {
            if (window.GS.ad && document.getElementById("capital") && document.getElementById("application") && document.getElementById("searchCapitalWrapper") && document.getElementById("homeFooterSeparator") && document.getElementById("homeFooter") && document.getElementById("theme_home")) {
                window.GS.ad.hideAdBar();
                window.$(window).resize();
                if (timer) clearInterval(timer);
            }
        }
    };
    
    timer = setInterval(removeAds, 100);
    removeAds();
}