    $(function () {
        var $div_li = $("div.header ul li");
        $div_li.click(function () {
            $(this).addClass("selected")
                .siblings().removeClass("selected");
            var index = $div_li.index(this);
            $("div.menu>div").eq(index).show()
                .siblings().hide();
        }).hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });
    });
$(function () {
    var $div_li = $("div.sidebar ul li");
    $div_li.click(function () {
        $(this).addClass("focus")
            .siblings().removeClass("focus");
        var index = $div_li.index(this);
        $("div.info>div").eq(index).show()
            .siblings().hide();
    }).hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
});
    $(function () {
        var $div_li = $("div.inviteside ul li");
        $div_li.click(function () {
            $(this).addClass("invite")
                .siblings().removeClass("invite");
            var index = $div_li.index(this);
            $("div.invitemain>div").eq(index).show()
                .siblings().hide();
        }).hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });
    });