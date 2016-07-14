/**
 * Created by tao on 2016/6/17.
 */
//导航效果
$(function () {
    $(".nav-list li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".nav-list li").mouseleave(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    //鼠标经过图片特效
    $(".wrap .col").mouseenter(function () {
        $(this).find("div").stop().fadeIn(300);
    });
    $(".wrap .col").mouseleave(function () {
        $(this).find("div").stop().fadeOut(300);
    });
    //滚动新闻
    var inx = 0;
    setInterval(function () {
        if (inx === $(".caption>p").length - 1) {
            inx = 0;
        }
        $(".caption>p").eq(inx).fadeIn(400).siblings().fadeOut(400);
        inx++;
    }, 3000);
    //微信二维码
    $(".weixin").mouseenter(function () {
        $(this).children().eq(0).stop().fadeIn();
    });
    $(".weixin").mouseleave(function () {
        $(this).children().eq(0).stop().fadeOut();
    });
});


