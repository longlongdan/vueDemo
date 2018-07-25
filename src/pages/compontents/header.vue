<template>
	<div id="indexHeader">
	    <div id="left">
	        <h1><strong>517培训-前端基础考核</strong></h1>
	    </div>
	    <div id="right">
	         <a href=""><img src="@/assets/img/logo.png"/></a>
	        <p>欢迎你，<strong style="color: #ff8c2e;">517Na的新同学</strong><a>&nbsp;[退出]</a></p>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'indexHeader'
}
</script>

<style scoped>
	#indexHeader
	{
	    width:1024px;
	    height: 50px;
	    margin:10px auto 30px;/*Ë®Æ½¾àÖÐ*/

	}
	#left
	{
	    float: left;
	    width:600px;
	    height: 50px;
	}

	#right{

	    margin-left:600px;
	    width:424px;
	    height: 50px;
	    position: relative;
	}

	#right p{

	    position: absolute;
	    right:0px;
	    top: 20px;

	}
	h1{
	    font-size: 38px;
	    margin-top: 20px;
	    margin-bottom: 10px;
	    font-family: inherit;
	    font-weight: 500;
	}
</style>
