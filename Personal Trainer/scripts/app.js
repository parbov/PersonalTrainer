(function (global) {
    var mobileSkin = "",
    app = global.app = global.app || {};

    document.addEventListener("deviceready", function () {
        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" });
    }, false);
    
    document.addEventListener("pause", function() {
        window.localStorage.setItem("laststate", json.stringify(this.getState()));
    });
    
    document.addEventListener("offline", function() {
        alert("You're offline")
    }, false);
    
    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        navigator.notification.vibrate(2000);
        navigator.notification.alert("Application Resumed.", function() {
            navigator.app.exitApp();
        }, "Resumed", "Exit");
    }
    
})(window);