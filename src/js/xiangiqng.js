function getUrlParam(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
   var r = window.location.search.substr(1).match(reg); //匹配目标参数
   if (r != null) return unescape(r[2]); return null; //返回参数值
  }
var id=getUrlParam("id");

$.getJSON("../json/list.json",function(data){
//var data=JSON.parse(data);
for(var i =0;i<data.length;i++){
	
		
		if(data[i].id==id){
		console.log(data[i].title)
		$('.imgg').eq(0).attr('src',data[i].src);
		$('.title').eq(0).text(data[i].title);
		$('.price1').eq(0).text(data[i].price1);
		$('.price2').eq(0).text(data[i].price2);
		}
		
	
}




})