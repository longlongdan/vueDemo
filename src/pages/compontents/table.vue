<template>
	<!--表格部分-->
	<div id="Table">
	   <table class="table table-bordered" >
	        <thead id="t_head">
	        <tr>
	            <th style="text-align: left">姓名</th>
	            <th style="text-align: center">技能类型</th>
	            <th style="text-align: center">热爱程度</th>
	            <th style="text-align: center">熟练程度</th>
	            <th style="text-align: center">学习周期</th>
	            <th style="text-align: center">期望薪酬</th>
	            <th style="text-align: right">操作</th>
	        </tr>
	        </thead>
	        <tbody id="t_body">
				<tr v-for='(person,index) in data'>
		            <td>{{person.name}}</td>
		            <td style="text-align: center">{{person.skill}}</td>
		            <td style="text-align: center">{{person.love}}</td>
		            <td style="text-align: center">{{person.using}}</td>
		            <td style="text-align: center">{{person.btime}}至{{person.etime}}</td>
		            <td style="text-align: center">{{person.payment}}</td>
		            <td style="text-align: right"><a href="javascript:void(0);" @click='showChange=true;num=index;'>修改</a><br><a href="javascript:void(0);" @click='show=true;num=index;'>删除</a></td>
		           </tr>
	        </tbody>
	    </table>
	    <div id="messageBox" v-show="show">
		  	<div class="mHader">确定删除？</div>
		  	<button  @click='delet()'>是</button>
		  	<button @click='show=false'>取消</button>
		</div>
		<div id="messageBox" v-show="showChange">
		  	<div class="mHader">熟练程度&nbsp;&nbsp;&nbsp; <input type="text" v-model='using'></div>
		  	<button  @click='change()'>确定</button>
		  	<button @click='showChange=false'>取消</button>
		</div>
	</div>
</template>
<script>
export default {
  name: 'indexTable',
  data () {
  	return {
  		datas: [],
  		show: false,
  		showChange: false,
  		using: 0,
  		num: 0
  	}
  },
  methods: {
  	change () {
  		this.using = this.using.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
  		var reg = /^([\d]+|([\d]+[.]?|[\d]+[.]?[\d]+))$/;
        var reg2 = /^[0-9]+[0-9]*]*$/;
        if (!reg.test(this.using)) {
        	alert('false')
            return false
        }
        else if (reg.test(this.using)) {
            var t = parseInt(this.using, 10);
            if (t < 0 || t > 100) {
                alert('false')
            	return 
            }
            this.showChange = false
  			var index = this.datas.length - this.num-1
            this.$store.commit('changePerson',{num:index,using:`${this.using}%`})
            return
        }
        else {
        	this.showChange = false
  			var index = this.datas.length - this.num-1
        	this.$store.commit('changePerson',{num:index,using:`${this.using}%`})
            return
        }
  	},
  	delet () {
  		this.show =false
  		var index = this.datas.length - this.num-1
  		this.$store.commit('delPerson',index)
  	}
  },
  	computed:{
	    data () {
	    	this.datas = []
	    	this.$store.state.data.forEach((val,index)=>{
	    		this.datas.unshift(val)
	    	})
	    	return this.datas
	    }
	}
}
</script>

<style scoped>
#Table
{
    width:1024px;
    height:100%;
    margin:0px auto;
}
#t_head
{
    background-color: #F7FDFB;

}
#messageBox
{
	width: 300px;
	height: 100px;
	border: 1px solid #000;
	border-radius: 8px;
	background-color: #fff;
	position: fixed;
	top: 240px;
	left: 40%;
}
.mHader {
	height: 33px;
	line-height: 30px;
	text-align: center;
	background-color: rgb(0, 150, 216);
	color: #fff;
}
#messageBox button:nth-child(2){
	position: absolute;
	left: 60px;
	bottom: 15px;
	width: 60px;
}
#messageBox button:nth-child(3){
	position: absolute;
	right: 60px;
	bottom: 15px;
	width: 60px;
}
</style>
