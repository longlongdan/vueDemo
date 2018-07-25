/**
 * Created by shanrou on 15-11-23.
*/
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    var mainMoudle = {
        /*============================ 内部变量 ==========================*/

        /*============================ 内部函数 ==========================*/
        /** 事件初始化 */
        initEvent: function () {
            document.write("我是初使用seajs");
        },
        main: function () {
            mainMoudle.initEvent();
        }
    };
    $(function () {
        mainMoudle.main();
    })
});