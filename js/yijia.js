/*首页底部弹出红线动画*/
$(function(){
	$(".dhang li").hover(function(){
//  	alert(0);
       $(this).animate({"border-bottom-width":'6px'});
   },function(){
         $(this).animate({"border-bottom-width":'0px'});
   });
})

