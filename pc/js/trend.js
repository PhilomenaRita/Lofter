$(function(){
    $('.samebottomimg').hover(function(){
        $(this).attr('src','../images/lixin2.png');
    });
    $('.samebottomimg').mouseleave(function(){
        $(this).attr('src','../images/lixin1.png');
    });
    console.log($('.samebottomimg'));
    var i=0;
    // var number = $('.number').text();
    // console.log(number);
    $('.samebottomimg').click(function(){
        var number = parseInt($(this).next().html());
        if(i%2==0){
            $(this).attr('src','../images/lixin3.png');
            number=number+1;
            // $('.number').text(number);
        }
        else{
            $(this).attr('src','../images/lixin2.png');
            number=number-1;
            // $('.number').text(number);
        }
        $(this).next().html(number);
        i++;
    });
    $('.sameButton1').click(function () {//sameButton1是关注
        $(this).next().show();//让取消关注出现
        $(this).hide();//关注隐藏
        $('#middle-top1').slideDown(500);//关注成功下滑出现
        setTimeout(function () {//三秒后上划消失
            $('#middle-top1').slideUp(500);
        }, 3000);
    });
    $('.sameButton2').click(function(){//和上面相反
        $(this).prev().show();
        $(this).hide();
        $('#middle-top2').slideDown(500);
        setTimeout(function(){
            $('#middle-top2').slideUp(500)
        },3000);
    });
});