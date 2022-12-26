$(document).ready(function(){

    //브라우저의 높이값 찾기
    let ht = $(window).height();
    console.log(ht)

    // gnb의 높이를 찾아라
    let gnbht = $('#gnb').height();
    console.log(gnbht)

    //gnb의 가로값을 찾아라
    let gnbwd = $('#gnb').width();
    console.log(gnbwd)


    //문제점: 화면크기가 조정될때마다 달라짐
    $('section').height(ht)




    //해결책: 브라우저가 리사이즈 될때마다, 브라우저의 높이를 찾아 
    //section의 높이값에 대입해라
    $(window).resize(function(){

        let ht = $(window).height();
        $('section').height(ht)
    })




    //마우스 움직임 찾아내기
    // .p11 {bottom: 20px; right: 20px;}
    // .p12 {bottom:-40px; right: 130px;}
    // .p13 {top: 180px; right: 60px;}
    
    
    // .p21 {bottom: -480px; right: -130px;}
    // .p22 {bottom: -40px; right: 130px;}
    
    
    // .p31 {bottom: 30px; right: 180px;}
    // .p32 {bottom: -270px; right: 110px;}
    // .p33 {bottom: -130px; right: -70px;}
    
    
    // .p41 {bottom: -120px; right: 20px;}
    // .p42 {bottom: -180px; right: 0px;}



    // section에서 마우스가 움직였을 때, 이미지의 위치값을 바꾸어라.
    $('section').mousemove(function(e){

        let poseX = e.pageX;
        let poseY = e.pageY;

        $('.box h2').eq(0).text(poseX);
        $('.box h2').eq(1).text(poseY);


        $('.p11').css({'bottom': 20-poseY/20, 'right': 20-poseX/20})
        $('.p12').css({'bottom': -20+poseY/20, 'right': 130-poseX/20})
        $('.p11').css({'bottom': 200-poseY/20, 'right': 60-poseX/20})


        $('.p21').css({'bottom': -400+poseY/30, 'right': -130-poseX/30})
        $('.p22').css({'bottom': -40-poseY/30, 'right': 130-poseX/30})


        $('.p31').css({'bottom': 30-poseY/30, 'right': 180-poseX/30})
        $('.p32').css({'bottom': -270-poseY/30, 'right': 110-poseX/30})
        $('.p33').css({'bottom': -130-poseY/30, 'right': -70-poseX/30})


        $('.p41').css({'bottom': -120-poseY/30, 'right': 20-poseX/30})
        $('.p42').css({'bottom': -180-poseY/30, 'right': -poseX/30})

    })
})