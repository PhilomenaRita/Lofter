$(document).ready(function () {
    //爱心（热度）
    $(".glyphicon-heart").click(function () {
        $(this).toggleClass("red");
        var num = $(this).parent().siblings("p.hot").find("span");
        if ($(this).hasClass('red')){
            num.text(parseInt(num.text())+1);
        }
        else {
            num.text(parseInt(num.text())-1);
        }
    });
    //赞
    $(".glyphicon-thumbs-up").click(function () {
        $(this).toggleClass("blue");
    });
    //图片分享
    $(".glyphicon-option-horizontal").click(function () {

        $(".share-bg").fadeIn();
        $(".share1").slideDown();
    });
    //转载
    $(".glyphicon-share").click(function () {
        $(".share-bg").fadeIn();
        $(".share2").slideDown();
    });
    //分享灰色背景，取消按钮
    $(".share-bg,.cancel").click(function () {
        $(".share-bg").fadeOut();
        $(".share,.share1,.share2").slideUp();
        $(".special_focus").fadeOut();
    });
});
