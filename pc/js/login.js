$(document).ready(function(){
    $("#register").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".register").show().siblings().hide();
    });
    $("#login").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".login").show().siblings().hide();
    });
    $("#downApp").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".download-app").show().siblings().hide();
    });

    $("#emailLogin").click(function(){
        $(this).hide();
        $("#phoneLogin").show();
        $("#telLogin-box").hide();
        $("#emailLogin-box").show();
    });
    $("#phoneLogin").click(function(){
        $(this).hide();
        $("#emailLogin").show();
        $("#emailLogin-box").hide();
        $("#telLogin-box").show();
    });

    $(".prv").click(function () {
        $("#bg1").fadeIn();
        $("#bg2").hide();
        $("#bg-author1").fadeIn();
        $("#bg-author2").hide();

    });
    $(".nex").click(function () {
        $("#bg1").hide();
        $("#bg2").fadeIn();
        $("#bg-author1").hide();
        $("#bg-author2").fadeIn();
    });

    $("#downloadApp").click(function () {
        $("#download").fadeIn();
        $(".download-bg").fadeIn();
    });
    $("#close").click(function () {
        $("#download").fadeOut();
        $(".download-bg").fadeOut();
    });

    //底部导航
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

        if (scrollY > 800 && scrollY < 4500){ //如果滚动距离满足条件则出现，否则删除隐藏类
            $('.bottom-nav').fadeIn();
        }
        else {
            $('.bottom-nav').fadeOut();
        }
    });

    //中间图片切换
    $("#slider li img").click(function () {
        var halfWidth = $(window).width()/2;  //获得当前屏幕宽度的一半
        var e = event || window.event;
        var x = e.clientX ;             //获得鼠标点击时x轴的位置
        var left = $("#slider").offset().left;
        //最左边不再左移
        if (left>300 && x<halfWidth){
            return left;
        }
        else if (left<-3100 && x>halfWidth){
            return left;
        }
        //当鼠标点击位置在页面左半部分，向左移
        else if(x<halfWidth){
            $("#slider").css("left", left+720);
        }
        //当鼠标点击位置在页面右半部分，向右移
        else{
            $("#slider").css("left", left-720);
        }
    })

});
