var isScroll = false;
var currentProj = 1;

function change() {
    isScroll = false;
    enable_scroll();
}

function anima() {
    $('#aboutPoint').addClass("slideOut");
    $('#workPoint').addClass("slideOut");
    $('#workPoint').addClass("slideOut");
    $('#toyotaText').addClass("fadeOut");
    $('#bonciText').addClass("fadeOut");
    $('#chevRight').addClass("fadeOut");
    $('#chevLeft').addClass("fadeOut");
    $('#moveDown').addClass("fadeOut");
    $('#piece1').addClass("moveSign");
    $('#project1').addClass("moveSign");
    $('#backCov').addClass("fadeOut");
    setTimeout(function () {
        window.location.href = "/visualPortfolio/fullSite/toyotaRedesign/" //will redirect to your blog page (an ex: blog.html)
    }, 1000); //will call the function after 2 secs.
}

function anima2() {
    $('#aboutPoint').addClass("slideOut");
    $('#workPoint').addClass("slideOut");
    $('#workPoint').addClass("slideOut");
    $('#toyotaText').addClass("fadeOut");
    $('#bonciText').addClass("fadeOut");
    $('#chevRight').addClass("fadeOut");
    $('#chevLeft').addClass("fadeOut");
    $('#moveDown').addClass("fadeOut");
    $('#piece2').addClass("moveSign");
    $('#project2').addClass("moveSign");
    $('#backCov').addClass("fadeOut");
    setTimeout(function () {
        window.location.href = "/visualPortfolio/fullSite/bonci/" //will redirect to your blog page (an ex: blog.html)
    }, 1000); //will call the function after 2 secs.
}

function anima3() {
    $('#aboutPoint').addClass("slideOut");
    $('#workPoint').addClass("slideOut");
    $('#workPoint').addClass("slideOut");
    $('#toyotaText').addClass("fadeOut");
    $('#bonciText').addClass("fadeOut");
    $('#everyText').addClass("fadeOut");
    $('#chevRight').addClass("fadeOut");
    $('#chevLeft').addClass("fadeOut");
    $('#moveDown').addClass("fadeOut");
    $('#piece3').addClass("moveSign");
    $('#project3').addClass("moveSign");
    $('#backCov').addClass("fadeOut");
    setTimeout(function () {
        window.location.href = "/visualPortfolio/fullSite/theRest/" //will redirect to your blog page (an ex: blog.html)
    }, 1000); //will call the function after 2 secs.
}

function anim() {
           
    var obj = $('#aboutME');
    var bottom = obj.position().top + obj.height();
    var correct = ($(window).height());
    if (bottom == correct) {
        $('#aboutMe').addClass("float");
        console.log("Yep" + bottom);
    } else {
        $('#aboutME').removeClass("float");
        console.log("Nope " + bottom);
        console.log("Correct" + correct);
    }

}

$("#about").click(function () {
    if (!isScroll) {
        isScroll = true;
        $('html, body').animate({
            scrollTop: "1500px"
        }, 500);
    }
    setTimeout(change, 750);
});
$("#work").click(function () {
    if (!isScroll) {
        isScroll = true;
        $('html, body').animate({
            scrollTop: "5500px"
        }, 500);
    }
    setTimeout(change, 750);
});
$("#home").click(function () {
    if (!isScroll) {
        isScroll = true;
        $('html, body').animate({
            scrollTop: "0px"
        }, 500);
    }
    setTimeout(change, 750);
});
$("#contact").click(function () {
    if (!isScroll) {
        isScroll = true;
        $('html, body').animate({
            scrollTop: "7500px"
        }, 500);
    }
    setTimeout(change, 750);
});
$("#moveDown").click(function () {
    $("#piece1").css("opacity", "1");
    $("#project1").css("opacity", "1");
    $("#itemExtra").text("More Projects");
    $("#itemBonci").text("Bonci Restaurant App");
    if (!isScroll) {
        isScroll = true;
        var numScroll = $(document).scrollTop();
        if (numScroll <= 1499) {
            $('html, body').animate({
                scrollTop: "1500px"
            }, 500);
        } else if (numScroll >= 1500 && numScroll <= 5499) {
            $('html, body').animate({
                scrollTop: "5500px"
            }, 500);
        } else if (numScroll >= 5500 && numScroll <= 7499) {
            $('html, body').animate({
                scrollTop: "7500px"
            }, 500);
        }
    }
    setTimeout(change, 750);
});
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}
//DELAY THE SCROLL FOR SHORT TIME AFTER PAGE LOAD
$(document).scroll(function () {
    currentProj = 1;
    $("#piece1").css("opacity", "1");
    $("#project1").css("opacity", "1");
    $("#itemExtra").text("More Projects");
    $("#itemBonci").text("Bonci Restaurant App");
    var numScroll = $(document).scrollTop();
    if (!isScroll) {
        if (numScroll <= 749 && numScroll > 0) {
            isScroll = true;
            $('html, body').animate({
                scrollTop: "1500px"
            }, 500);
            setTimeout(change, 750);
            disable_scroll();
        } else if (numScroll >= 750 && numScroll <= 1499) {
            isScroll = true;
            $('html, body').animate({
                scrollTop: "0px"
            }, 500);
            setTimeout(change, 750);
            disable_scroll();
        } else if (numScroll >= 1501 && numScroll <= 3499) {
            isScroll = true;
            $('html, body').animate({
                scrollTop: "5500px"
            }, 500);
            setTimeout(change, 750);
            disable_scroll();
        } else if (numScroll >= 3500 && numScroll <= 5499) {
            isScroll = true;
            $('html, body').animate({
                scrollTop: "1500px"
            }, 500);
            setTimeout(change, 750);
            disable_scroll();
        } else if (numScroll >= 5501 && numScroll <= 6500) {
            isScroll = true;
            $('html, body').animate({
                scrollTop: "7500px"
            }, 500);
            setTimeout(change, 750);
            disable_scroll();
        } else if (numScroll >= 6501 && numScroll <= 7499) {
            isScroll = true;
            $('html, body').animate({
                scrollTop: "5500px"
            }, 500);
            setTimeout(change, 750);
            disable_scroll();
        } else if (numScroll > 7501) {
            isScroll = true;
            $('html, body').animate({
                scrollTop: "7500px"
            }, 500);
            setTimeout(change, 750);
            disable_scroll();
        }
    }
    if (numScroll == 5500) {
        $('.glowingWork').each(function () {
            $(this).css("stroke", "#4d263b");
        })
    } else {
        $('.glowingWork').each(function () {
            $(this).css("stroke", "#f772bb");
        })
    }


});

$("#chevRight").click(function () {
    if (currentProj == 3) {
        currentProj = 1;
    } else {
        currentProj += 1;
    }
    if (currentProj == 1) {
        $("#itemExtra").text("More Projects");
        $("#itemBonci").text("Bonci Restaurant App");

        $("#piece1").css("left", "5%");
        $("#project1").css("left", "5%");
        $("#piece1").css("opacity", "1");
        $("#project1").css("opacity", "1");

        $("#piece2").css("left", "205%");
        $("#project2").css("left", "205%");
        $("#piece2").css("opacity", "0");
        $("#project2").css("opacity", "0");

        $("#piece3").css("left", "-205%");
        $("#project3").css("left", "-205%");
        $("#piece3").css("opacity", "0");
        $("#project3").css("opacity", "0");
    } else if (currentProj == 2) {
        $("#itemExtra").text("Toyota Canada Website");
        $("#itemBonci").text("More Projects");

        $("#piece1").css("left", "-205%");
        $("#project1").css("left", "-205%");
        $("#piece1").css("opacity", "0");
        $("#project1").css("opacity", "0");

        $("#piece2").css("left", "5%");
        $("#project2").css("left", "5%");
        $("#piece2").css("opacity", "1");
        $("#project2").css("opacity", "1");

        $("#piece3").css("left", "205%");
        $("#project3").css("left", "205%");
        $("#piece3").css("opacity", "0");
        $("#project3").css("opacity", "0");
    } else if (currentProj == 3) {
        $("#itemExtra").text("Bonci Restaurant App");
        $("#itemBonci").text("Toyota Canada Website");

        $("#piece1").css("left", "205%");
        $("#project1").css("left", "205%");
        $("#piece1").css("opacity", "0");
        $("#project1").css("opacity", "0");

        $("#piece2").css("left", "-205%");
        $("#project2").css("left", "-205%");
        $("#piece2").css("opacity", "0");
        $("#project2").css("opacity", "0");

        $("#piece3").css("left", "5%");
        $("#project3").css("left", "5%");
        $("#piece3").css("opacity", "1");
        $("#project3").css("opacity", "1");
    }
})

$("#chevLeft").click(function () {
    if (currentProj == 1) {
        currentProj = 3;
    } else {
        currentProj -= 1;
    }
    if (currentProj == 1) {
        $("#itemExtra").text("More Projects");
        $("#itemBonci").text("Bonci Restaurant App");

        $("#piece1").css("left", "5%");
        $("#project1").css("left", "5%");
        $("#piece1").css("opacity", "1");
        $("#project1").css("opacity", "1");

        $("#piece2").css("left", "205%");
        $("#project2").css("left", "205%");
        $("#piece2").css("opacity", "0");
        $("#project2").css("opacity", "0");

        $("#piece3").css("left", "-205%");
        $("#project3").css("left", "-205%");
        $("#piece3").css("opacity", "0");
        $("#project3").css("opacity", "0");
    } else if (currentProj == 2) {
        $("#itemExtra").text("Toyota Canada Website");
        $("#itemBonci").text("More Projects");

        $("#piece1").css("left", "-205%");
        $("#project1").css("left", "-205%");
        $("#piece1").css("opacity", "0");
        $("#project1").css("opacity", "0");

        $("#piece2").css("left", "5%");
        $("#project2").css("left", "5%");
        $("#piece2").css("opacity", "1");
        $("#project2").css("opacity", "1");

        $("#piece3").css("left", "205%");
        $("#project3").css("left", "205%");
        $("#piece3").css("opacity", "0");
        $("#project3").css("opacity", "0");
    } else if (currentProj == 3) {
        $("#itemExtra").text("Bonci Restaurant App");
        $("#itemBonci").text("Toyota Canada Website");

        $("#piece1").css("left", "205%");
        $("#project1").css("left", "205%");
        $("#piece1").css("opacity", "0");
        $("#project1").css("opacity", "0");

        $("#piece2").css("left", "-205%");
        $("#project2").css("left", "-205%");
        $("#piece2").css("opacity", "0");
        $("#project2").css("opacity", "0");

        $("#piece3").css("left", "5%");
        $("#project3").css("left", "5%");
        $("#piece3").css("opacity", "1");
        $("#project3").css("opacity", "1");
    }
})

$("#piece1").hover(function () {
    $("#backCov").removeClass("hide");
})
$("#piece1").mouseleave(function () {
    $("#backCov").addClass("hide");
})
$("#piece2").hover(function () {
    $("#backCov").removeClass("hide");
})
$("#piece2").mouseleave(function () {
    $("#backCov").addClass("hide");
})
$("#piece3").hover(function () {
    $("#backCov").removeClass("hide");
})
$("#piece3").mouseleave(function () {
    $("#backCov").addClass("hide");
})

;
(function ($) {
    'use strict';
    var content = $('#main').smoothState({
        // onStart runs as soon as link has been activated
        onStart: {

            // Set the duration of our animation
            duration: 250,

            // Alterations to the page
            render: function () {

                // Quickly toggles a class and restarts css animations
                content.toggleAnimationClass('is-exiting');
            }
        }
    }).data('smoothState'); // makes public methods available
})(jQuery);
