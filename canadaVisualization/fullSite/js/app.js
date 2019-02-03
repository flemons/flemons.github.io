var currentPos = -1;
//var currentCord = $(document.body.scrollLeft)

$('.quickJump').click(function () {

    var item = event.target.id;
    console.log(item);
    if (item === "land") {
        $(this).addClass("highlight");
        $("#1984").removeClass("highlight");
//        $("#19841").removeClass("highlight");
        $("#1988").removeClass("highlight");
//        $("#19881").removeClass("highlight");
        $("#1992").removeClass("highlight");
//        $("#19921").removeClass("highlight");
        $("#1996").removeClass("highlight");
//        $("#19961").removeClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        currentPos = -1;
        $('html, body').animate({
            scrollLeft: "0px"
        });
    } else if (item === "1984") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").removeClass("highlight");
//        $("#19881").removeClass("highlight");
        $("#1992").removeClass("highlight");
//        $("#19921").removeClass("highlight");
        $("#1996").removeClass("highlight");
//        $("#19961").removeClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        currentPos = 0;
        $('html, body').animate({
            scrollLeft: "0px"
        });
        currentPos = 0;
    } else if (item === "1988") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").removeClass("highlight");
//        $("#19921").removeClass("highlight");
        $("#1996").removeClass("highlight");
//        $("#19961").removeClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $('html, body').animate({
            scrollLeft: "1536px"
        });
        currentPos = 1;
    } else if (item === "1992") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").removeClass("highlight");
//        $("#19961").removeClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $('html, body').animate({
            scrollLeft: "3072px"
        });
        currentPos = 2;
    } else if (item === "1996") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $('html, body').animate({
            scrollLeft: "4608px"
        });
        currentPos = 3;
    } else if (item === "2000") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $('html, body').animate({
            scrollLeft: "6144px"
        });
        currentPos = 4;
    } else if (item === "2004") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $('html, body').animate({
            scrollLeft: "7680px"
        });
        currentPos = 5;
    } else if (item === "2008") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").addClass("highlight");
//        $("#20081").addClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $('html, body').animate({
            scrollLeft: "9216px"
        });
        currentPos = 6;
    } else if (item === "2012") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").addClass("highlight");
//        $("#20081").addClass("highlight");
        $("#2012").addClass("highlight");
//        $("#20121").addClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $('html, body').animate({
            scrollLeft: "10724px"

        });

        currentPos = 7;
    } else if (item === "2016") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").addClass("highlight");
//        $("#20081").addClass("highlight");
        $("#2012").addClass("highlight");
//        $("#20121").addClass("highlight");
        $("#2016").addClass("highlight");
//        $("#20161").addClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $('html, body').animate({
            scrollLeft: "12228px"
        });
        currentPos = 8;
    }
    //    else if (item === "2020") {
    //        $(this).toggleClass("highlight");
    //        $("#20201").toggleClass("highlight");
    //    }
    else if (item === "end") {
        $(this).addClass("highlight");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").addClass("highlight");
//        $("#20081").addClass("highlight");
        $("#2012").addClass("highlight");
//        $("#20121").addClass("highlight");
        $("#2016").addClass("highlight");
//        $("#20161").addClass("highlight");
        $("#end").addClass("highlight");
//        $("#end1").addClass("highlight");

        $('html, body').animate({
            scrollLeft: "12228px"
        });

        currentPos = 9;
    }
    //    event.target.id.classList.add('highlight');
    //        $(item).css('background-color', '#ec2d26');
});
$('.arrowCont').hover(function (event) {
    var changeFill = document.getElementById('nextItem');
    changeFill.classList.add('pointer2');
}, function (event) {
    var changeFill = document.getElementById('nextItem');
    $(changeFill).removeClass("pointer2");
});
$('.arrowCont').click(function () {
    if (currentPos == -1) {
        $("#overlay1").remove();
        $("#1984").removeClass("highlight");
//        $("#19841").removeClass("highlight");
        $("#1988").removeClass("highlight");
//        $("#19881").removeClass("highlight");
        $("#1992").removeClass("highlight");
//        $("#19921").removeClass("highlight");
        $("#1996").removeClass("highlight");
//        $("#19961").removeClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#corvette").removeClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#carCost").html("27,000");
        $("#carTitle").html("Chevrolet Corvette");
        $("#gasDig1").html("0");
        $("#gasDig2").html("3");
        $("#gasDig3").html("9");
        $("#gasDig4").html("9");
        $("#houseCost").html("76,351");
        $("#eggsCost").html("0.94");
        $("#milkCost").html("1.40");
        $("#house1").removeClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
        currentPos += 1;
    }
    if (currentPos == 0) {
        currentPos += 1;
        $("#overlay1").addClass("hide");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").removeClass("highlight");
//        $("#19881").removeClass("highlight");
        $("#1992").removeClass("highlight");
//        $("#19921").removeClass("highlight");
        $("#1996").removeClass("highlight");
//        $("#19961").removeClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#corvette").removeClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#carCost").html("27,000");
        $("#carTitle").html("Chevrolet Corvette");
        $("#gasDig1").html("0");
        $("#gasDig2").html("3");
        $("#gasDig3").html("9");
        $("#gasDig4").html("9");
        $("#houseCost").html("76,351");
        $("#eggsCost").html("0.94");
        $("#milkCost").html("1.40");
        $("#house1").removeClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if (currentPos == 1) {
        $('html, body').animate({
            scrollLeft: "1536px"
        });
        currentPos += 1;
        $("#overlay1").addClass("hide");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").removeClass("highlight");
//        $("#19921").removeClass("highlight");
        $("#1996").removeClass("highlight");
//        $("#19961").removeClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").removeClass("hide");
        $("#carTitle").html("Lincoln Continental");
        $("#carCost").html("23,316");
        $("#gasDig1").html("0");
        $("#gasDig2").html("4");
        $("#gasDig3").html("8");
        $("#gasDig4").html("1");
        $("#houseCost").html("129,702");
        $("#eggsCost").html("0.94");
        $("#milkCost").html("1.57");
        $("#house1").addClass("hide");
        $("#house2").removeClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if (currentPos == 2) {
        $('html, body').animate({
            scrollLeft: "3072px"
        });
        currentPos += 1;
        $("#overlay1").addClass("hide");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").removeClass("highlight");
//        $("#19961").removeClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#corvette").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#bmw").removeClass("hide");
        $("#carTitle").html("BMW 325i");
        $("#carCost").html("29,100");
        $("#gasDig1").html("0");
        $("#gasDig2").html("4");
        $("#gasDig3").html("5");
        $("#gasDig4").html("5");
        $("#houseCost").html("149,864");
        $("#eggsCost").html("1.20");
        $("#milkCost").html("1.70");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if (currentPos == 3) {
        $('html, body').animate({
            scrollLeft: "4608px"
        });
        currentPos += 1;
        $("#overlay1").addClass("hide");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").removeClass("highlight");
//        $("#20001").removeClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#bmw").addClass("hide");
        $("#corvette").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").removeClass("hide");
        $("#carCost").html("17,825");
        $("#carTitle").html("Dodge Grand Caravan");
        $("#gasDig1").html("0");
        $("#gasDig2").html("5");
        $("#gasDig3").html("6");
        $("#gasDig4").html("1");
        $("#houseCost").html("150,899");
        $("#eggsCost").html("1.63");
        $("#milkCost").html("1.29");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if (currentPos == 4) {
        $('html, body').animate({
            scrollLeft: "6144px"
        });
        currentPos += 1;
        $("#overlay1").addClass("hide");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").removeClass("highlight");
//        $("#20041").removeClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#dodge").addClass("hide");
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#eggsCost").html("1.82");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#ford").removeClass("hide");
        $("#carTitle").html("Ford Focus");
        $("#carCost").html("15,475");
        $("#gasDig1").html("0");
        $("#gasDig2").html("7");
        $("#gasDig3").html("0");
        $("#gasDig4").html("8");
        $("#houseCost").html("164,374");
        $("#milkCost").html("1.41");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if (currentPos == 5) {
        $('html, body').animate({
            scrollLeft: "7680px"
        });
        currentPos += 1;
        $("#overlay1").addClass("hide");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").removeClass("highlight");
//        $("#20081").removeClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#mazda").removeClass("hide");
        $("#carTitle").html("Mazda 3");
        $("#carCost").html("17,195");
        $("#gasDig1").html("0");
        $("#gasDig2").html("7");
        $("#gasDig3").html("6");
        $("#gasDig4").html("6");
        $("#houseCost").html("226,604");
        $("#eggsCost").html("2.19");
        $("#milkCost").html("1.61");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if (currentPos == 6) {
        $('html, body').animate({
            scrollLeft: "9216px"
        });
        currentPos += 1;
        $("#overlay1").addClass("hide");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").addClass("highlight");
//        $("#20081").addClass("highlight");
        $("#2012").removeClass("highlight");
//        $("#20121").removeClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#eggsCost").html("2.50");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#audi").removeClass("hide");
        $("#carTitle").html("Audi R8");
        $("#carCost").html("109,000");
        $("#gasDig1").html("1");
        $("#gasDig2").html("1");
        $("#gasDig3").html("0");
        $("#gasDig4").html("2");
        $("#houseCost").html("304,663");
        $("#milkCost").html("1.89");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if (currentPos == 7) {
        $('html, body').animate({
            scrollLeft: "10724px"
        });
        currentPos += 1;
        $("#overlay1").addClass("hide");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").addClass("highlight");
//        $("#20081").addClass("highlight");
        $("#2012").addClass("highlight");
//        $("#20121").addClass("highlight");
        $("#2016").removeClass("highlight");
//        $("#20161").removeClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#hyundai").removeClass("hide");
        $("#carTitle").html("Hyundai Elantra");
        $("#carCost").html("15,345");
        $("#gasDig1").html("1");
        $("#gasDig2").html("2");
        $("#gasDig3").html("1");
        $("#gasDig4").html("3");
        $("#houseCost").html("363,606");
        $("#eggsCost").html("3.09");
        $("#milkCost").html("2.28");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if (currentPos == 8) {
        $('html, body').animate({
            scrollLeft: "12228px"
        });
        //            $('html, body').animate({
        //                scrollLeft: "17280px"
        //            });
        currentPos += 1;
        $("#overlay1").addClass("hide");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").addClass("highlight");
//        $("#20081").addClass("highlight");
        $("#2012").addClass("highlight");
//        $("#20121").addClass("highlight");
        $("#2016").addClass("highlight");
//        $("#20161").addClass("highlight");
        $("#end").removeClass("highlight");
//        $("#end1").removeClass("highlight");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#honda").removeClass("hide");
        $("#carCost").html("19,515");
        $("#carTitle").html("Honda Civic");
        $("#gasDig1").html("0");
        $("#gasDig2").html("9");
        $("#gasDig3").html("2");
        $("#gasDig4").html("6");
        $("#houseCost").html("442,464");
        $("#eggsCost").html("3.41");
        $("#milkCost").html("2.32");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if (currentPos == 9) {
        $("#overlay1").addClass("hide");
        $("#land").addClass("highlight");
        $("#1984").addClass("highlight");
//        $("#19841").addClass("highlight");
        $("#1988").addClass("highlight");
//        $("#19881").addClass("highlight");
        $("#1992").addClass("highlight");
//        $("#19921").addClass("highlight");
        $("#1996").addClass("highlight");
//        $("#19961").addClass("highlight");
        $("#2000").addClass("highlight");
//        $("#20001").addClass("highlight");
        $("#2004").addClass("highlight");
//        $("#20041").addClass("highlight");
        $("#2008").addClass("highlight");
//        $("#20081").addClass("highlight");
        $("#2012").addClass("highlight");
//        $("#20121").addClass("highlight");
        $("#2016").addClass("highlight");
//        $("#20161").addClass("highlight");
        $("#end").addClass("highlight");
//        $("#end1").addClass("highlight");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");

        $("#lincoln").addClass("hide");
        $("#honda").removeClass("hide");
        $("#carCost").html("19,515");
        $("#carTitle").html("Honda Civic");
        $("#gasDig1").html("0");
        $("#gasDig2").html("9");
        $("#gasDig3").html("2");
        $("#gasDig4").html("6");
        $("#houseCost").html("442,464");
        $("#eggsCost").html("3.41");
        $("#milkCost").html("2.32");
        $("#overlay2").removeClass("hide");
        $("#overlay2").removeClass("lowZ");
    }
});
$(window).on("scroll", function () {
    if ($("body").scrollLeft() === 0) {
        $("#corvette").removeClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#carCost").html("27,000");
        $("#carTitle").html("Chevrolet Corvette");
        $("#gasDig1").html("0");
        $("#gasDig2").html("3");
        $("#gasDig3").html("9");
        $("#gasDig4").html("9");
        $("#houseCost").html("76,351");
        $("#eggsCost").html("0.94");
        $("#milkCost").html("1.40");
        $("#house1").removeClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if ($("body").scrollLeft() === 1536) {
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").removeClass("hide");
        $("#carTitle").html("Lincoln Continental");
        $("#carCost").html("23,316");
        $("#gasDig1").html("0");
        $("#gasDig2").html("4");
        $("#gasDig3").html("8");
        $("#gasDig4").html("1");
        $("#houseCost").html("129,702");
        $("#eggsCost").html("0.94");
        $("#milkCost").html("1.57");
        $("#house1").addClass("hide");
        $("#house2").removeClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if ($("body").scrollLeft() === 3072) {

        $("#corvette").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#bmw").removeClass("hide");
        $("#carTitle").html("BMW 325i");
        $("#carCost").html("29,100");
        $("#gasDig1").html("0");
        $("#gasDig2").html("4");
        $("#gasDig3").html("5");
        $("#gasDig4").html("5");
        $("#houseCost").html("149,864");
        $("#eggsCost").html("1.20");
        $("#milkCost").html("1.70");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if ($("body").scrollLeft() === 4608) {

        $("#bmw").addClass("hide");
        $("#corvette").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").removeClass("hide");
        $("#carCost").html("17,825");
        $("#carTitle").html("Dodge Grand Caravan");
        $("#gasDig1").html("0");
        $("#gasDig2").html("5");
        $("#gasDig3").html("6");
        $("#gasDig4").html("1");
        $("#houseCost").html("150,899");
        $("#eggsCost").html("1.63");
        $("#milkCost").html("1.29");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if ($("body").scrollLeft() === 6144) {
        $("#dodge").addClass("hide");
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#eggsCost").html("1.82");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#ford").removeClass("hide");
        $("#carTitle").html("Ford Focus");
        $("#carCost").html("15,475");
        $("#gasDig1").html("0");
        $("#gasDig2").html("7");
        $("#gasDig3").html("0");
        $("#gasDig4").html("8");
        $("#houseCost").html("164,374");
        $("#milkCost").html("1.41");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if ($("body").scrollLeft() === 7680) {
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#mazda").removeClass("hide");
        $("#carTitle").html("Mazda 3");
        $("#carCost").html("17,195");
        $("#gasDig1").html("0");
        $("#gasDig2").html("7");
        $("#gasDig3").html("6");
        $("#gasDig4").html("6");
        $("#houseCost").html("226,604");
        $("#eggsCost").html("2.19");
        $("#milkCost").html("1.61");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if ($("body").scrollLeft() === 9216) {
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#eggsCost").html("2.50");
        $("#hyundai").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#audi").removeClass("hide");
        $("#carTitle").html("Audi R8");
        $("#carCost").html("109,000");
        $("#gasDig1").html("1");
        $("#gasDig2").html("1");
        $("#gasDig3").html("0");
        $("#gasDig4").html("2");
        $("#houseCost").html("304,663");
        $("#milkCost").html("1.89");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if ($("body").scrollLeft() === 10724) {

        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#honda").addClass("hide");
        $("#lincoln").addClass("hide");
        $("#hyundai").removeClass("hide");
        $("#carTitle").html("Hyundai Elantra");
        $("#carCost").html("15,345");
        $("#gasDig1").html("1");
        $("#gasDig2").html("2");
        $("#gasDig3").html("1");
        $("#gasDig4").html("3");
        $("#houseCost").html("363,606");
        $("#eggsCost").html("3.09");
        $("#milkCost").html("2.28");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        $("#overlay2").addClass("hide");
        $("#overlay2").addClass("lowZ");
    } else if ($("body").scrollLeft() === 12228) {
        $("#corvette").addClass("hide");
        $("#bmw").addClass("hide");
        $("#dodge").addClass("hide");
        $("#ford").addClass("hide");
        $("#mazda").addClass("hide");
        $("#audi").addClass("hide");
        $("#hyundai").addClass("hide");

        $("#lincoln").addClass("hide");
        $("#honda").removeClass("hide");
        $("#carCost").html("19,515");
        $("#carTitle").html("Honda Civic");
        $("#gasDig1").html("0");
        $("#gasDig2").html("9");
        $("#gasDig3").html("2");
        $("#gasDig4").html("6");
        $("#houseCost").html("442,464");
        $("#eggsCost").html("3.41");
        $("#milkCost").html("2.32");
        $("#house1").addClass("hide");
        $("#house2").addClass("hide");
        //        $("#overlay2").removeClass("hide");
        //        $("#overlay2").removeClass("lowZ");
    }
});

$('.hideBox').hover(function (event) {
    $("#expand").removeClass("hide");
}, function (event) {
    $("#expand").addClass("hide");
});
$('.hideBox2').hover(function (event) {
    $("#expand-2").removeClass("hide");
}, function (event) {
    $("#expand-2").addClass("hide");
});
$('.hideBox3').hover(function (event) {
    $("#expand-3").removeClass("hide");
}, function (event) {
    $("#expand-3").addClass("hide");
});
$('.hideBox4').hover(function (event) {
    $("#expand-4").removeClass("hide");
}, function (event) {
    $("#expand-4").addClass("hide");
});
$('.hideBox5').hover(function (event) {
    $("#expand-5").removeClass("hide");
}, function (event) {
    $("#expand-5").addClass("hide");
});
$('.hideBox6').hover(function (event) {
    $("#expand-6").removeClass("hide");
}, function (event) {
    $("#expand-6").addClass("hide");
});
$('.hideBox7').hover(function (event) {
    $("#expand-7").removeClass("hide");
}, function (event) {
    $("#expand-7").addClass("hide");
});
$('.hideBox8').hover(function (event) {
    $("#expand-8").removeClass("hide");
}, function (event) {
    $("#expand-8").addClass("hide");
});
$('.hideBox9').hover(function (event) {
    $("#expand-9").removeClass("hide");
}, function (event) {
    $("#expand-9").addClass("hide");
});
$('.hideBox10').hover(function (event) {
    $("#expand-10").removeClass("hide");
}, function (event) {
    $("#expand-10").addClass("hide");
});
$('.hideBox11').hover(function (event) {
    $("#expand-11").removeClass("hide");
}, function (event) {
    $("#expand-11").addClass("hide");
});
$('.hideBox12').hover(function (event) {
    $("#expand-12").removeClass("hide");
}, function (event) {
    $("#expand-12").addClass("hide");
});
$('.hideBox13').hover(function (event) {
    $("#expand-13").removeClass("hide");
}, function (event) {
    $("#expand-13").addClass("hide");
});
$('.hideBox14').hover(function (event) {
    $("#expand-14").removeClass("hide");
}, function (event) {
    $("#expand-14").addClass("hide");
});
$('.hideBox15').hover(function (event) {
    $("#expand-15").removeClass("hide");
}, function (event) {
    $("#expand-15").addClass("hide");
});
$('.hideBox16').hover(function (event) {
    $("#expand-16").removeClass("hide");
}, function (event) {
    $("#expand-16").addClass("hide");
});
$('.hideBox17').hover(function (event) {
    $("#expand-17").removeClass("hide");
}, function (event) {
    $("#expand-17").addClass("hide");
});
$('.hideBox18').hover(function (event) {
    $("#expand-18").removeClass("hide");
}, function (event) {
    $("#expand-18").addClass("hide");
});
$('.hideBox19').hover(function (event) {
    $("#expand-19").removeClass("hide");
}, function (event) {
    $("#expand-19").addClass("hide");
});
$('.hideBox20').hover(function (event) {
    $("#expand-20").removeClass("hide");
}, function (event) {
    $("#expand-20").addClass("hide");
});
$('.hideBox21').hover(function (event) {
    $("#expand-21").removeClass("hide");
}, function (event) {
    $("#expand-21").addClass("hide");
});
$('.hideBox22').hover(function (event) {
    $("#expand-22").removeClass("hide");
}, function (event) {
    $("#expand-22").addClass("hide");
});
$('.hideBox23').hover(function (event) {
    $("#expand-23").removeClass("hide");
}, function (event) {
    $("#expand-23").addClass("hide");
});
$('.hideBox24').hover(function (event) {
    $("#expand-24").removeClass("hide");
}, function (event) {
    $("#expand-24").addClass("hide");
});
$('.hideBox25').hover(function (event) {
    $("#expand-25").removeClass("hide");
}, function (event) {
    $("#expand-25").addClass("hide");
});
$('.hideBox26').hover(function (event) {
    $("#expand-26").removeClass("hide");
}, function (event) {
    $("#expand-26").addClass("hide");
});
$('.hideBox27').hover(function (event) {
    $("#expand-27").removeClass("hide");
}, function (event) {
    $("#expand-27").addClass("hide");
});
$('.hideBox28').hover(function (event) {
    $("#expand-28").removeClass("hide");
}, function (event) {
    $("#expand-28").addClass("hide");
});
$('.hideBox29').hover(function (event) {
    $("#expand-29").removeClass("hide");
}, function (event) {
    $("#expand-29").addClass("hide");
});
$('.hideBox30').hover(function (event) {
    $("#expand-30").removeClass("hide");
}, function (event) {
    $("#expand-30").addClass("hide");
});
$('.hideBox31').hover(function (event) {
    $("#expand-31").removeClass("hide");
}, function (event) {
    $("#expand-31").addClass("hide");
});
$('.hideBox32').hover(function (event) {
    $("#expand-32").removeClass("hide");
}, function (event) {
    $("#expand-32").addClass("hide");
});
$('.hideBox33').hover(function (event) {
    $("#expand-32").removeClass("hide");
}, function (event) {
    $("#expand-32").addClass("hide");
});
$('.hideBox34').hover(function (event) {
    $("#expand-33").removeClass("hide");
}, function (event) {
    $("#expand-33").addClass("hide");
});
$('.hideBox35').hover(function (event) {
    $("#expand-34").removeClass("hide");
}, function (event) {
    $("#expand-34").addClass("hide");
});