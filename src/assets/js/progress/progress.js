/**
 * Created by shanrou on 15-11-23.
 */
define(function (require) {
    var commonJS = require("../../js/progress/commonJS.js");
    $.views.converters({
        convertersPrice: function (number1, numner2) {
            if (parseInt(number1, 10) > 0) {
                return "<span style='color:red'>" + number1 + "%(" + numner2 + ")</span>"
            } else {
                return number1 + "%(" + numner2 + ")";
            }
        }
    });

    var mainMoudle = {
        /* ============================ 内部变量 ========================== */

        /* ============================ 内部函数 ========================== */
        /** 事件初始化 */
        initEvent: function () {
            commonJS.getProductLine("productLine");
            commonJS.getServiceSet("serviceSet");
            commonJS.getIP("ipaddress");
            mainMoudle.query();
        },
        query: function () {
            $("#btnQuery").click(function () {
                var html = $("#ResultTemple").render(dataInfo);
                $("#result").html(html);
            });
        },
        main: function () {
            mainMoudle.initEvent();
        }
    };
    $(function () {
        mainMoudle.main();
        $("#btnQuery").click();
    });
});
