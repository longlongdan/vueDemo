/**
 * Created by shanruo on 2015/11/27.
 */
// 所有模块都通过 define 来定义
define(function (require, exports, module) {

    /**
     * jsrender数据
     */
    var data = [
        {
            "name": "珊若（meggie）",
            "skill": "c#基础",
            "love": "喜欢",
            "using": "20%",
            "btime": "2015-11-01",
            "etime": "2015-11-26",
            "payment": "90000"
        },
        {
            "name": "珊若（meggie）",
            "skill": "MVC",
            "love": "很喜欢",
            "using": "60%",
            "btime": "2015-11-01",
            "etime": "2015-11-26",
            "payment": "190000"
        },
        {
            "name": "珊若（meggie）",
            "skill": "数据库",
            "love": "非常喜欢",
            "using": "70%",
            "btime": "2015-11-01",
            "etime": "2015-11-26",
            "payment": "2290000"
        },
        {
            "name": "珊若（meggie）",
            "skill": "数据库",
            "love": "喜欢",
            "using": "80%",
            "btime": "2015-11-01",
            "etime": "2015-11-26",
            "payment": "2290000"
        },
        {
            "name": "珊若（meggie）",
            "skill": "数据库",
            "love": "very喜欢",
            "using": "100%",
            "btime": "2015-11-01",
            "etime": "2015-11-26",
            "payment": "2290000"
        }
    ];


    var mainMoudle = {
        /*============================ 内部变量 ==========================*/

        /*============================ 内部函数 ==========================*/
        ChangSkill: function () {
            mainMoudle.clean();
            var Skill = $('#inputMsg input[name="skill"]:checked').val();
            if (Skill == "C#基础") {
                $("#save").click(function () {
                    // layer.msg("保存成功！", 1, 1);
                    if (mainMoudle.checkLevel() && mainMoudle.checkTime()) {
                        layer.msg("保存成功！", 1, 1);
                    }
                });
                $("#C").show();
                $("#MVC").hide();

            }
            else if (Skill === "MVC") {
                $("#save").click(function () {
                    if (mainMoudle.checkLevel() && mainMoudle.checkPayment()) {
                        layer.msg("保存成功！", 1, 1);
                    }
                });
                $("#MVC").show();
                $("#C").hide();
            }
            else {
                $("#save").click(function () {
                    if (mainMoudle.checkLevel()) {
                        layer.msg("保存成功！", 1, 1);
                    }
                });
                $("#C").hide();
                $("#MVC").hide();
            }
        },
        checkLevel: function () {
            $("#check_level1").hide();
            $("#check_level2").hide();
            var level = $("#level").val().trim();
            if (level.length === 0) {
                $("#check_level2").show();
                return false;
            }

            else {
                //  var str = document.getElementById('level').value.trim();
                // if(level.length!=0){
                var reg = /^([\d]+|([\d]+[.]?|[\d]+[.]?[\d]+))$/;
                var reg2 = /^[0-9]+[0-9]*]*$/;
                if (!reg.test(level)) {
                    $("#check_level1").show();
                    return false;
                }
                else if (reg.test(level)) {
                    var t = parseInt(level, 10);
                    if (t < 0 || t > 100) {
                        $("#check_level1").show();
                        return false;
                    }
                    return true;
                }
                else {
                    $("#check_level1").hide();
                    return true;
                }
                //  }

            }

        },
        checkPayment: function () {
            $("#check_payment1").hide();
            $("#check_payment2").hide();
            var payment = $("#payment").val().trim();
            if (payment.length === 0) {
                $("#check_payment2").show();
                return false;
            }

            else {
                var reg = /^([\d]+|([\d]+[.]?|[\d]+[.]?[\d]+))$/;
                if (!reg.test(payment)) {
                    $("#check_payment1").show();
                    return false;
                } else {
                    $("#check_payment1").hide();
                    return true;
                }
            }
        },
        checkTime: function () {
            $("#check_Time1").hide();
            $("#check_Time3").hide();
            var beginTime = $("#beginTime").val();
            var endTime = $("#endTime").val();
            if (beginTime.length == 0 || endTime.length == 0) {
                $("#check_Time1").show();
                return false;
            }
            else {

                beginTime = beginTime.split('-');
                endTime = endTime.split('-');
                var start1 = new Date(beginTime[0], beginTime[1] - 1, beginTime[2]);    //因为当前时间的月份需要+1，故在此-1，不然和当前时间做比较会判断错误
                var end1 = new Date(endTime[0], endTime[1] - 1, endTime[2]);
                if (start1 > end1) {
                    $("#check_Time3").show();
                    return false;
                }
            }
            return true;
        },
        reset: function () {
            $("#payment").val(0);
            $("#level").val('0.0');

        },
        btn_click: function () {
            $("#reset").click(function () {
                mainMoudle.reset();
            });
            $("#level").change(function () {
                mainMoudle.checkLevel();
            });
            $("#payment").change(function () {
                mainMoudle.checkPayment();
            });
            $("#skill1").click(function () {
                mainMoudle.ChangSkill();
            });
            $("#skill2").click(function () {
                mainMoudle.ChangSkill();
            });
            $("#skill3").click(function () {
                mainMoudle.ChangSkill();
            });
            $("#beginTime").blur(function () {
                mainMoudle.checkTime();
            });
            $("#endTime").blur(function () {
                mainMoudle.checkTime();
            });
        },
        clean: function () {
            $("#check_payment1").hide();
            $("#check_payment2").hide();
            $("#check_level1").hide();
            $("#check_level2").hide();
            $("#check_Time1").hide();
            $("#check_Time3").hide();
        },
        change_nav: function () {
            $("#nav_ul li").click(function () {
                $("#nav_ul li .mouse_hover").removeClass('mouse_hover');
                $(this).find('a').addClass('mouse_hover');
            });
        },
        /** 事件初始化 */
        initEvent: function () {
            var html_table = $("#temple_table").render(data);
            $("#t_body").html(html_table);
            mainMoudle.ChangSkill();
            mainMoudle.btn_click();
            mainMoudle.change_nav();

        },
        main: function () {
            mainMoudle.initEvent();
        }


    };
    $(function () {
        mainMoudle.main();
    });
});

