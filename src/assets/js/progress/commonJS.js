/**
 * Created by shanrou on 15-11-23.
 */
define(function (require, exports, module){
    require("../../js/progress/jsdata.js")
    /**
     * 获取所有的产品线信息
     */
    exports.getProductLine = function (selectId){
        var strHtml = "<option value=''>全部</option>", dataCount = productLine.length;
        for (var i = 0; i < dataCount; i++) {
            strHtml += "<option value='" + productLine[i] + "'>" + productLine[i] + "</option>";
        }
        $("#" + selectId).html(strHtml);
    };

    /**
     * 获取所有的服务集信息
     */
    exports.getServiceSet = function (selectId){
        var strHtml = "<option value=''>全部</option>", dataCount = serviceSet.length;
        for (var i = 0; i < dataCount; i++) {
            strHtml += "<option value='" + serviceSet[i] + "'>" + serviceSet[i] + "</option>";
        }
        $("#" + selectId).html(strHtml);
    };

    /**
     * 获取所有的IP地址信息
     */
    exports.getIP = function (selectId){
        var strHtml = "<option value=''>全部</option>", dataCount = ipList.length;
        for (var i = 0; i < dataCount; i++) {
            strHtml += "<option value='" + ipList[i] + "'>" + ipList[i] + "</option>";
        }
        $("#" + selectId).html(strHtml);
    };
});
