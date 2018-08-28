    $(function () {
        var $div_li = $("div.header ul li");
        $div_li.click(function () {       //定义了tan_menu对应的单击事件，也就是类别的单击事件。
            $(this).addClass("selected")
                .siblings().removeClass("selected");
            var index = $div_li.index(this);
            $("div.menu>div").eq(index).show()
                .siblings().hide();
        }).hover(function () {         //定义了鼠标滑过特效
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });
    });
$(function () {
    var $div_li = $("div.sidebar ul li");
    $div_li.click(function () {       //定义了tan_menu对应的单击事件，也就是类别的单击事件。
        $(this).addClass("focus")
            .siblings().removeClass("focus");
        var index = $div_li.index(this);
        $("div.info>div").eq(index).show()
            .siblings().hide();
    }).hover(function () {         //定义了鼠标滑过特效
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
});
    $(function () {
        var $div_li = $("div.inviteside ul li");
        $div_li.click(function () {       //定义了tan_menu对应的单击事件，也就是类别的单击事件。
            $(this).addClass("invite")
                .siblings().removeClass("invite");
            var index = $div_li.index(this);
            $("div.invitemain>div").eq(index).show()
                .siblings().hide();
        }).hover(function () {         //定义了鼠标滑过特效
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });
    });