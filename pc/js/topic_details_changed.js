/*点击参与话题*/
$(function () {
    var $div_li = $("div.btns >a");
    $div_li.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        $("div.layer").toggleClass("layer-hover")
    });
});
/*点击切换最新和最热*/
$(function () {
    var $div_li = $("div.tabarea>a");
    $div_li.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        $(this).addClass("j-crt")
            .siblings().removeClass("j-crt");
        var index = $div_li.index(this);
        $("div.body_middle_bottom>div").eq(index).show()
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