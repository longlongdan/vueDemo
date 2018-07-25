<template>
	<div id="indexNav">
	    <div class="mainNav">
	        <ul id="nav_ul">
	            <li>
	                <a href="#">c#基础</a>
	            </li>

	            <li>
	                <a href="#">面向对象</a>
	            </li>
	            <li>
	                <a href="#" class="mouse_hover">web开发及MVC</a>
	            </li>

	            <li>
	                <a href="#">服务路由</a>
	            </li>
	            <li>
	                <a href="#">数据库路由
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'indexNav'
}
</script>

<style scoped>
	#indexNav{
    width:1024px;
    height:45px;
    margin:0px auto;
    background-color: rgb(0, 150, 216);
    border-radius: 7px;
	}
	#indexNav .mainNav
	{
	    margin-top: 5px;
	    width:1024px;
	    height:50px;
	    float:left;
	}
	#indexNav .mainNav ul
	{
	    margin-left:2px;
	}
	#indexNav .mainNav ul li
	{
	    list-style-type:none;/*È¥µôÔ²µã*/
	    margin-left:25px;
	    height:40px;
	    float:left;
	    line-height:36px;
	    text-align:center;/*ÎÄ×ÖË®Æ½¾àÖÐ*/
	    font-size:16px;
	    font-family: inherit;

	}
	#indexNav .mainNav ul li a{
	    height:32px;
	    padding:0px 8px 3px 8px;
	    display: block;
	    color:#fff;
	    text-decoration:none;
	}
	#indexNav .mainNav ul li a.mouse_hover{
	    background: rgb(255, 255, 255);
	    border-radius: 6px;
	    color: #007cb3;
	    font-weight:bold;/*¼Ó´Ö*/
	}



	#indexNav .mainNav ul li a:hover{
	    background: rgb(255, 255, 255);
	    border-radius: 6px;
	    color: #007cb3;
	    text-decoration:none;
	    font-weight:bold;/*¼Ó´Ö*/
	}
</style>
