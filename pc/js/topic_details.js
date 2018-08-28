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
/*点击参与话题*/
$(function () {
    var $div_li = $("div.participate_subject>a");
    $div_li.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        $("div.layer").toggleClass("layer_hover")
    });
});
/*点击切换最新和最热*/
$(function () {
    var $div_li = $("div.topic_header_bottom ul>li");
    $div_li.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        $(this).addClass("newlist")
            .siblings().removeClass("newlist");
        var index = $div_li.index(this);
        $("div.topic_left_con>div").eq(index).show()
            .siblings().hide();
    });
});
/*点击评论和分享*/
$(function () {
    var $div_span = $(".opti>a");
    $div_span.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        var index = $div_span.index(this)
        $("div.a_isaym2").eq(index).toggleClass("a_isaym2_hover")
            .siblings().removeClass("a_isaym2_hover");
    });
});
/*点击喜欢*/
$(function () {
    var $div_span = $(".opti_img");
    $div_span.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        var index = $div_span.index(this);
        $("a.opti_img").eq(index).toggleClass("opti_img_hover");
    });
});

/*下载APP*/
var downloadHeight=$(".download").offset().top;
document.onscroll =function () {
    if(document.documentElement.scrollTop>=downloadHeight){
        $(".download").addClass("fixed");
    }else{
        $(".download").removeClass("fixed");
    }
};