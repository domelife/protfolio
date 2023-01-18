$(document).ready(function(){

    //브라우저의 높이값 찾기
    let ht = $(window).height();

    // gnb의 높이를 찾아라
    let gnbht = $('#gnb').height();
    console.log(gnbht)

    //gnb의 가로값을 찾아라
    let gnbwd = $('#gnb').width();
    console.log(gnbwd)


    // 문제점: 화면크기가 조정될때마다 달라짐
    $('.main').height(ht);
    $('.category').height(ht);
    $('.info').height(ht);
    $('.reservation').height(ht);
    $('.floor').height(ht);
    $('.notice').height(ht);

    $('.road').height('1971px');




    // 해결책: 브라우저가 리사이즈 될때마다, 브라우저의 높이를 찾아 
    // section의 높이값에 대입해라
    $(window).resize(function(){

        let ht = $(window).height();
        $('.main').height(ht);
        $('.category').height(ht);
        $('.info').height(ht);
        $('.reservation').height(ht);
        $('.floor').height(ht);
        $('.notice').height(ht);

        $('.road').height('1971px');
    })









})