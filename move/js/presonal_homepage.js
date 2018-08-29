$(document).ready(function() {
    //查看更多
   $("#more").click(function () {
       $(this).toggleClass("active");
       $(".view-more").fadeToggle();
   });
    //已关注or未关注
    $("#follow").click(function () {
        $(this).hide();
        $("#no-follow").fadeIn();
        $("#more").addClass("green");
    });
    $("#no-follow").click(function () {
        $(this).hide();
        $("#follow").fadeIn();
        $("#more").addClass("active").removeClass("green");
        $(".view-more").fadeIn();
    });
    //导航最右分享
    $("#share").click(function () {

        $(".share-bg").fadeIn();
        $(".share").slideDown();
    });

    //特别关注按钮（收藏）
    $(".glyphicon-star-empty").click(function () {
        $(this).toggle();
        $("#no-special").toggle();
        $(".share-bg").fadeIn();
        $(".special_focus").fadeIn();
    });
    $(".glyphicon-star").click(function () {
        $(this).toggle();
        $(".glyphicon-star-empty").toggle();
    });
    //特别关注内容
    $(".special_focus").click(function () {
        $(this).fadeOut();
        $(".share-bg").fadeOut();
    });

    //缩略图切换
    $(".glyphicon-tasks,.glyphicon-th").click(function () {
        $(".thumbnail-list").toggle();
        $(".share-list").fadeToggle();
        $(".glyphicon-th,.glyphicon-tasks").toggle();
    });
    //顶部导航
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
        if (scrollY > 165){ //如果滚动距离满足条件则出现，否则删除隐藏类
            $(".middle").fadeIn();
            $('.nav').addClass("top-nav");
        }
        else {
            $(".middle").hide();
            $('.nav').removeClass("top-nav");
        }
    });
});
