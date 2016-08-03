/**
 * Created by tao on 2015/6/17.
 */
$(function() {
    //导航效果
    $(".nav-list li").mouseenter(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".nav-list li").mouseleave(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    //鼠标经过图片特效
    $(".wrap .col").mouseenter(function() {
        $(this).find("div").stop().fadeIn(300);
    });
    $(".wrap .col").mouseleave(function() {
        $(this).find("div").stop().fadeOut(300);
    });
    //滚动新闻
    var inx = 0;
    setInterval(function() {
        if (inx === $(".caption>p").length - 1) {
            inx = 0;
        }
        $(".caption>p").eq(inx).fadeIn(400).siblings().fadeOut(400);
        inx++;
    }, 3000);
    //微信二维码
    $(".weixin").mouseenter(function() {
        $(this).children().eq(0).stop().fadeIn();
    });
    $(".weixin").mouseleave(function() {
        $(this).children().eq(0).stop().fadeOut();
    });
    $(".lines .th span").mouseenter(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".lines .main").eq(index).addClass("selected").siblings().removeClass("selected");
    });
    //notes

    $(".col img").mouseenter(function() {
        $(this).animate({
            "opacity": "0.7"
        }, 500)
    });
    $(".col img").mouseleave(function() {
        $(this).animate({
            "opacity": "1"
        }, 500)
    });
    //游女郎部分
    $(".girls li a").mouseenter(function() {
        $(this).css("opacity", "0.7");
        //$(this).children("div").css("display","block");
        $(this).children("div").stop().slideDown();

    });
    $(".girls li a").mouseleave(function() {
        $(this).css("opacity", "1");
        //$(this).children("div").css("display","none");
        $(this).children("div").stop().slideUp();
    });
    //进入盒子 箭头出现
    $(".girls .tb").mouseenter(function() {
        $(".girls .prev").show().next().show();
        //$(".girls .next").show();
    });
    $(".girls .tb").mouseleave(function() {
        $(".girls .prev").hide().next().hide();
        //$(".girls .next").hide();
    });

    var ul = $(".girls ul")[0];
    var length = ul.children.length;
    var pic = 0;
    var left = $(".girls .prev")[0];
    var right = $(".girls .next")[0];
    var liWidth = $(".girls li")[0].offsetWidth;
    var box = $(".box")[0];
    left.onclick = function() {
        clearInterval(timer);
        if (pic === 0) {
            ul.style.left = -(length - 5) * (liWidth + 5) + "px";
            pic = length - 5;
        }
        pic--;
        //目标 和 pic有关 和 图片宽度有关 而且是负数
        var target = -pic * (liWidth + 5);
        animate(ul, target);
    }
    right.onclick = function() {
        clearInterval(timer);
        playNext();
    };
    ul.onmouseover = function() {
        clearInterval(timer);
    };
    ul.onmouseout = function() {
        timer = setInterval(playNext, 2000);
    };
    //当图片在最后一张时，图片经过的张数
    var liNum = length - parseInt(box.offsetWidth / liWidth);
    //alert(liNum);
    timer = setInterval(playNext, 2000);

    function playNext() {
        /*  if (pic === liNum) {
         ul.style.left = 0 + "px";
         pic = -1;
         }*/
        if (pic === length - 5) {
            ul.style.left = 0;
            pic = 0;
        }
        pic++;
        //目标 和 pic有关 和 图片宽度有关 而且是负数
        var target = -pic * (liWidth + 5);
        animate(ul, target);
    }

});
