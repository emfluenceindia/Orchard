﻿jQuery(function ($) {
    $("form").bind("orchard-admin-pickimage-open", function (ev, data) {
        data = data || {};
        // the popup will be doing full page reloads, so will not be able to retain
        // a pointer to the callback. We will generate a temporary callback
        // with a known/unique name and pass that in on the querystring so it
        // is remembers across reloads. Once executed, it calls the real callback
        // and removes itself.
        var callbackName = "_pickimage_" + new Date().getTime();
        data.callbackName = callbackName;
        $[callbackName] = function (returnData) {
            delete $[callbackName];
            data.callback(returnData);
        };

        var adminIndex = location.href.toLowerCase().indexOf("/admin/");
        if (adminIndex === -1) return;
        var url = location.href.substr(0, adminIndex)
            + "/MediaPicker?uploadpath=" + (data.uploadMediaPath || "")
            + "&callback=" + callbackName
            + "&editmode=" + (!!(data.img && data.img.src))
            + "&" + (new Date() - 0);
        var w = window.open(url, "_blank", data.windowFeatures || "width=800,height=600,status=no,toolbar=no,location=no,menubar=no,resizable=no");
        if (w.jQuery && w.jQuery.mediaPicker) {
            w.jQuery.mediaPicker.init(data);
        }
        else {
            w.mediaPickerData = data;
        }
    });
});
