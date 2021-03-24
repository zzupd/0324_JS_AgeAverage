$(function(){

    $("button").click(function(){

        var age1 = parseInt($("input:first-child").val());
        var age2 = parseInt($("input:nth-child(3)").val());
        var age3 = parseInt($("input:nth-child(5)").val());
        var avg = (age1+age2+age3)/3;

        $("#res").text("평균 : " + avg.toFixed(0)  );
        // 값.toFixed(소수자리수); => 표기된 소수자리수까지 표시함

    });


});
