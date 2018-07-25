/**
 * Created by shanrou on 15-6-1.
 */
define(function (require, exports, module) {
    exports.getBrowerInfo = function () {
        var sys = {},
            ua = navigator.userAgent.toLowerCase(),
            s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
            (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
                (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
                    (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
                        (s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
                            (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
        if (sys.ie) {
            return "IE:" + sys.ie;
        }
        if (sys.firefox) {
            return "FireFox:" + sys.firefox;
        }
        if (sys.chrome) {
            return "Chrome:" + sys.chrome;
        }
        if (sys.opera) {
            alert('http://www.phpernote.com' + sys.opera);
            return "Opera:" + sys.opera;
        }
        if (sys.safari) {
            alert('http://www.phpernote.com' + sys.safari);
            return "Safari:" + sys.safari;
        }
    };
    ////判断浏览器的内核
    exports.getBrowerKernel = function () {
        var ua = navigator.userAgent;
        var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
        var browser = "";
        if (!!window.attachEvent && !isOpera) {
            browser = "IE" + ua.substring(ua.indexOf('MSIE') + 5, ua.indexOf('Windows') - 2);
        } else if (ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1) {
            browser = "Gecko" + ua.substr(ua.indexOf('Firefox') + 8);
        } else if (isOpera) {
            browser = "Opera" + ua.substr(ua.indexOf('Version') + 8);
        } else if (ua.indexOf('AppleWebKit/') > -1) {
            browser = "WebKit";
        } else if (/Apple.*Mobile/.test(ua)) {
            browser = "MobileSafari";
        }
        return browser;
    };
    //获取浏览器的版本
    exports.getBrowerVersion = function () {
        var userAgent = navigator.userAgent,
            rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
            rFirefox = /(firefox)\/([\w.]+)/,
            rOpera = /(opera).+version\/([\w.]+)/,
            rChrome = /(chrome)\/([\w.]+)/,
            rSafari = /version\/([\w.]+).*(safari)/;
        var browser;
        var version;
        var ua = userAgent.toLowerCase();

        function uaMatch(ua) {
            var match = rMsie.exec(ua);
            if (match != null) {
                return { browser: "IE", version: match[2] || "0" };
            }
            var match = rFirefox.exec(ua);
            if (match != null) {
                return { browser: match[1] || "", version: match[2] || "0" };
            }
            var match = rOpera.exec(ua);
            if (match != null) {
                return { browser: match[1] || "", version: match[2] || "0" };
            }
            var match = rChrome.exec(ua);
            if (match != null) {
                return { browser: match[1] || "", version: match[2] || "0" };
            }
            var match = rSafari.exec(ua);
            if (match != null) {
                return { browser: match[2] || "", version: match[1] || "0" };
            }
            if (match != null) {
                return { browser: "", version: "0" };
            }
        }

        var browserMatch = uaMatch(userAgent.toLowerCase());
        if (browserMatch.browser) {
            browser = browserMatch.browser;
            version = browserMatch.version;
        }
        return browser + version;
    }
});
