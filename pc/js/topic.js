$(function () {
    var $div_li = $("div.topic-body-nav ul>li");
    $div_li.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        $(this).addClass("selected")
            .siblings().removeClass("selected");
        var index = $div_li.index(this);
        $("div.menu>div").eq(index).show()
            .siblings().hide();

    });
});
//TOP回到顶端
//onscroll 事件在元素滚动条在滚动时触发。  使用 CSS overflow 样式属性来创建元素的滚动条。
var backBtn = document.getElementById("topic-top");
document.onscroll = function(){
    var showBackPos = document.documentElement.scrollHeight*0.1;
    if(document.documentElement.scrollTop>=showBackPos){
        backBtn.classList.add("show");
    }else{
        backBtn.classList.remove("show");
    }
};
backBtn.onclick = function(){
    document.documentElement.scrollTop = 0; //scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。
};