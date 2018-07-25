/**
 * Created by shanrou on 15-11-23.
 */
define(function(require, exports, module){
   /* require("layer");
    layer.alert("我是弹出层");*//**/
    require.async("layer",function(){
        layer.alert("我是弹出层");
    });
  var brower = require("browerInfo");
    document.write("浏览器的版本是："+brower.getBrowerInfo());
    require.async("browerInfo",function(a){
        document.write("浏览器的版本是："+a.getBrowerInfo());
    });
});