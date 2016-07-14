/**
 * Created by hehe on 2016/6/17.
 */
$(function () {
    //tab栏切换
    $(".lines .th span").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".lines .main").eq(index).addClass("selected").siblings().removeClass("selected");
    });
    //notes

    $(".col img").mouseenter(function () {
        $(this).animate({
            "opacity": "0.7"
        }, 500)
    });
    $(".col img").mouseleave(function () {
        $(this).animate({
            "opacity": "1"
        }, 500)
    });
//girl 进入事件
    $(".girls li a").mouseenter(function () {
        $(this).css("opacity", "0.7");
        //$(this).children("div").css("display","block");
        $(this).children("div").stop().slideDown();

    });
    $(".girls li a").mouseleave(function () {
        $(this).css("opacity", "1");
        //$(this).children("div").css("display","none");
        $(this).children("div").stop().slideUp();
    });
    //进入盒子 箭头出现
    $(".girls .tb").mouseenter(function () {
        $(".girls .prev").show().next().show();
        //$(".girls .next").show();
    });
    $(".girls .tb").mouseleave(function () {
        $(".girls .prev").hide().next().hide();
        //$(".girls .next").hide();
    });

    var ul = $(".girls ul")[0];
    //var firstLi = $(".girls li").clone(true);
    //$(".girls ul").prepend(firstLi);
    /*var $lastLi= $(".girls ul .last").clone(true);
     ul.appendChild($lastLi[0]);*/
    var length = ul.children.length;
    var pic = 0;
    var left = $(".girls .prev")[0];
    var right = $(".girls .next")[0];
    var liWidth = $(".girls li")[0].offsetWidth;
    var box = $(".box")[0];
    left.onclick = function () {
        clearInterval(timer);
        /* if (pic === 0) {
         ul.style.left = -liNum * ( liWidth+5) + "px";
         pic = liNum+1;
         }*/
        if (pic === 0) {
            ul.style.left = -(length - 5) * ( liWidth + 5) + "px";
            pic = length - 5;
        }

        pic--;
        //目标 和 pic有关 和 图片宽度有关 而且是负数
        var target = -pic * ( liWidth + 5);
        animate(ul, target);
    }
    right.onclick = function () {
        clearInterval(timer);
        playNext();

    };
    ul.onmouseover = function () {
        clearInterval(timer);
    };
    ul.onmouseout = function () {
        timer = setInterval(playNext, 2000);
    };
    //当图片在最后一张时，图片经过的张数
    var liNum = length - parseInt(box.offsetWidth / liWidth);
    //alert(liNum);
    timer = setInterval(playNext,2000);
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
        var target = -pic * ( liWidth + 5);
        animate(ul, target);
    }

});



