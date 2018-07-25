<template>
	<div id="content">
	    <div id="inputMsg">

	        <div class="form-group">
	            <b>尊姓大名&nbsp;:</b>
	            <input style="margin-left: 15px" v-model="name" @blur='nameIn'></input><span style="font-size: large;color:red;" v-show="name_NullInput">名字不能为空</span>
	        </div>
	        <br/>
	        <div class="form-group">
	            <b>会的技能&nbsp;:</b>
	            <span  style="margin-left: 15px">
	                <label>
	                    <input id="skill1" type="radio" name="skill" value="C#基础" checked="checked" @click='type="C#基础"'/>C#基础
	                </label>
	                <label>
	                    <input id="skill2" type="radio" name="skill" value="MVC" @click='type="MVC"'/>MVC
	                </label>
	                <label>
	                    <input id="skill3" type="radio" name="skill" value="数据库" @click='type="数据库"'/>数据库
	                </label>
	            </span>
	        </div>
	        <br/>
	        <div class="form-group">
	            <span style="margin-right: 15px">
	                 <b>热爱程度&nbsp;:</b>
	            </span>
	            <select class="form-control input-sm" id="like" style="width:170px;" v-model='love'>
	                <option>喜欢</option>
	                <option>很喜欢</option>
	                <option>非常喜欢</option>
	            </select>
	        </div>
	        <br/>
	        <div class="form-group">
	           <span style="margin-right: 15px">
	                 <b>熟练程度&nbsp;:</b>
	            </span>
	            <input type="text" class="form-control input-sm" style="width:80px;" placeholder="0.0" id="level" onfocus="this.placeholder=''"
	                   @blur="usingIn" required="required" v-model='using'>
	           <span>%</span>
	            <span style="font-size: large;color:red; display:none;" id="check_level1" v-show='using_isNum'>输入不合法，请输入0-100的整数！</span>
	            <span style="font-size: large;color:red; display:none;" id="check_level2" v-show='using_NullInput'>输入不能为空！</span>
	        </div>
	        <br/>
	        <!--技能为MVC时显示-->

	        <div class="form-group" style="display: none" id="MVC" v-show="type==='MVC'">
	           <span style="margin-right: 15px">
	                 <b>期望薪酬&nbsp;:</b>
	            </span>
	            <input type="text" class="form-control input-sm" style="width:80px; "placeholder="0" id="payment" onfocus="this.placeholder=''"
	                   @blur="paymentIn" required="required" v-model='payment'>
	            <span>元</span>
	            <span style="margin-left: 15px">
	               <button type="button" class="btn btn-warning btn-xs" id="reset" @click='payment = 0'><span style="font-size: 15px" >&nbsp;重&nbsp;置&nbsp;</span></button>
	            </span>
	            <span style="font-size: large;color:red; display:none;" id="check_payment1" v-show='payment_isNum'>格式不正确，请输入整数！</span>
	            <span style="font-size: large;color:red; display:none;" id="check_payment2" v-show='payment_NullInput'>输入不能为空！</span>

	        </div>

	        <!--技能为C#基础时显示-->
	        <div class="form-group" style="display: none" id="C" v-show="type==='C#基础'">
	            <span style="margin-right: 15px">
	                 <b>学习周期&nbsp;:</b>
	            </span>
	            <el-date-picker
				  v-model="dataStart"
				  type="date"
				  id="beginTime"
				  format="yyyy-MM-dd"
				  value-format="yyyy-MM-dd"
				  placeholder="选择日期"
				  @blur='checkTime'>
				</el-date-picker>
	            <!-- <input type="data" id="beginTime"/> -->
	            <label style="font-size: large">-</label>
	            <el-date-picker
				  v-model="dataEnd"
				  type="date"
				  id="endTime"
				  format="yyyy-MM-dd"
				  value-format="yyyy-MM-dd"
				  placeholder="选择日期"
				  @blur='checkTime'>
				</el-date-picker>
	            <!-- <input type="data" id="endTime"/> -->
	            &nbsp; &nbsp; &nbsp; &nbsp;
	            <span style="font-size: large;color:red; display:none;" id="check_Time1" v-show='time_NullInput'>开始或结束时间不能为空！</span>
	            <span style="font-size: large;color:red; display:none;" id="check_Time3" v-show='time_err'>开始时间不能大于结束时间！</span>
	        </div>
	        <div class="form-group" style="margin-left:89px; ">
	            <br/>
	            <button type="button" class="btn btn btn-primary btn-xs" id="save"><span style="font-size: 15px" @click='add'>&nbsp;保&nbsp;存&nbsp;</span></button>
	            <span style="margin-right: 15px;"></span>
	            <button type="button" class="btn btn btn-default btn-xs" id="cancel_c"><span style="font-size: 15px" >&nbsp;返&nbsp;回&nbsp;</span></button>
	        </div>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'indexContent',
  data () {
  	return {
  		name: '',
  		name_NullInput: false,
  		type: 'C#基础',
  		dataStart: '',
  		dataEnd: '',
  		using_isNum: false,
  		using_NullInput: false,
  		using: '',
  		payment: '0',
  		payment_isNum: false,
  		payment_NullInput: false,
  		time_NullInput: false,
  		time_err: false,
  		love: '喜欢'
  	}
  },
  methods: {
  	nameIn () {
  		if (!this.name) {
  			this.name_NullInput = true
  		}
  		else this.name_NullInput = false
  	},
  	usingIn () {
  			console.log(this.using)
	  		this.using = this.using.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
	  		console.log(this.using)
            if (this.using.length === 0) {
                this.using_NullInput = true
                this.using_isNum = false
                return 
            }
            else {
                var reg = /^([\d]+|([\d]+[.]?|[\d]+[.]?[\d]+))$/;
                var reg2 = /^[0-9]+[0-9]*]*$/;
                if (!reg.test(this.using)) {
                	this.using_isNum = true
                	this.using_NullInput = false
                    return false
                }
                else if (reg.test(this.using)) {
                    var t = parseInt(this.using, 10);
                    if (t < 0 || t > 100) {
                        this.using_isNum = true
                        this.using_NullInput = false
                    	return 
                    }
                    this.using_NullInput = false
                    this.using_isNum = false
                    return
                }
                else {
                	this.using_NullInput = false
                    this.using_isNum = false
                    return
                }
                //  }

            }
  	},
  	paymentIn () {
            if (this.payment === '') {
                this.payment_NullInput = true
                this.payment_isNum = false
                return 
            }

            else {
                var reg = /^([\d]+|([\d]+[.]?|[\d]+[.]?[\d]+))$/;
                if (!reg.test(this.payment)) {
                   this.payment_NullInput = false
               	   this.payment_isNum = true
                    return
                } else {
                   this.payment_NullInput = false
               	   this.payment_isNum = false
                    return true;
                }
            
  			}
  		},
  	checkTime () {
  		if (!this.dataStart || !this.dataEnd) {
  			this.time_NullInput = true
  			this.time_err = false
  		}
  		else {
  			var Start = this.dataStart.split('-')
            var End = this.dataEnd.split('-')
            var start1 = new Date(Start[0], Start[1] - 1, Start[2]);    //因为当前时间的月份需要+1，故在此-1，不然和当前时间做比较会判断错误
            var end1 = new Date(End[0], End[1] - 1, End[2]);
            if (start1 > end1) {
            	this.time_NullInput = false
	  			this.time_err = true
            }
	  		else {
	  			this.time_NullInput = false
	  			this.time_err = false
	  		}
  		}
  		
  	},
  	add () {
  		if (this.type === 'C#基础') {
  			if(!this.name || !this.using || this.using_isNum || this.time_NullInput||this.time_err || !this.dataStart || !this.dataEnd === true)
  			{
  				alert('信息还没有填写完毕')
  			}
  			else {
  				//添加信息
	  			this.$store.commit('addPerson',{
		            "name": this.name,
		            "skill": this.type,
		            "love": this.love,
		            "using": `${this.using}%`,
		            "btime": this.dataStart,
		            "etime": this.dataEnd,
		            "payment": 0
	        	})
	        	alert('添加信息成功！')
  			}
  		}
  		else if (this.type === 'MVC') {
  			if (!this.name || !this.using || this.using_isNum || this.payment_isNum ||this.payment_NullInput ===true) {
  				alert('信息还没有填写完毕')
  			}
  			else {
  				//添加信息
	  			this.$store.commit('addPerson',{
		            "name": this.name,
		            "skill": this.type,
		            "love": this.love,
		            "using": `${this.using}%`,
		            "btime": '',
		            "etime": '',
		            "payment": this.payment
	        	})
	        	alert('添加信息成功！')
  			}
  		}
  		else {
  			if (!this.name || !this.using || this.using_isNum ===true) {
  				alert('信息还没有填写完毕')
  			}
  			else {
  				//添加信息
	  			this.$store.commit('addPerson',{
		            "name": this.name,
		            "skill": this.type,
		            "love": this.love,
		            "using": `${this.using}%`,
		            "btime": '',
		            "etime": '',
		            "payment": 0
	        	})
	        	alert('添加信息成功！')
  			}
  		}
  	}
  }
}
</script>

<style>
.el-picker-panel.el-date-picker {
	background-color: #fff;
}
#dataStart {
	float: left;
}
#content
{
    width:1024px;
   /* height:300px;*/
    margin:30px auto ;
}
#inputMsg
{
    font-family: inherit;
    font-size: 15px;
    width:100%;
    margin:20px 0px 0px 120px;
}
#skill2,#skill3
{
    margin-left: 10px;
}
</style>
