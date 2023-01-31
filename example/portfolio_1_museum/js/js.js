$(document).ready(function(){

    //브라우저의 높이값 찾기
    let ht = $(window).height();

    // gnb의 높이를 찾아라
    let gnbht = $('#gnb').height();
    console.log(gnbht)

    //gnb의 가로값을 찾아라
    let gnbwd = $('#gnb').width();
    console.log(gnbwd)


    // 전체설정
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


    // 스크롤바의 위치값 찾아내기
    $(window).scroll(function(){

        let sc = $(this).scrollTop();

        $('.floor h2').text(sc)

        
        let ht = $(window).height();


        //반복문 설정
        for(var ab=0; ab<9; ab++) {

            if(sc>=ht*ab && sc<ht*(ab+1)){

                $('section').removeClass('on')
                $('section').eq(ab).addClass('on')
            }
        }




        // 5. 층별안내
        if(sc>3500){
            $('.flow').addClass('on')
            $('.location').addClass('on')
            $('.bg').addClass('on')
        }

        else if(sc<3500){
            $('.flow').addClass('on')
            $('.location').addClass('on')
            $('.bg').addClass('on')
        }
    



        // 6. 공지사항 쓰기
        if(sc>4800 && sc<5200){
            $('.polygon01').addClass('on')

        }

        else if(sc>5200){
            $('.polygon01').removeClass('on')
        }

        else if(sc<4000){
            $('.polygon01').removeClass('on')
        }


        // 7. 오시는길
        if(sc>4970 && sc<10000){
            $('.mountain').addClass('on')

        }

        else if(sc>10000){
            $('.mountain').removeClass('on')
        }

        else if(sc<4970){
            $('.mountain').removeClass('on')
        }
    












    //따라다니는 태그 설정 
        // $('.txt p').eq(0).find('span').text(sc);
        // scrolltop이 header높이값보다 커질때 logoFix는 fixd가 되어라.
        if(sc>=hdht){
            $('.logoFix').addClass('on')
        }

        else {
            $('.logoFix').removeClass('on')
        }
    });
            let hdht= $('section').eq(1).offset().top;





    //따라오는 원 설정
        $(window).scroll(function(){

            // let i = $(this).scrollTop();
            let aht =$('section').eq(1).offset().top;
    
            
            if(sc>0 && sc<5000) {

            $('section>article').removeClass('on')
            $('section>article').eq(0).addClass('on')

            $('.menu li').removeClass('on')
            $('.menu li').eq(0).addClass('on')
        }


            $('.main .follow').css({'left':'47%'}).animate({scrollTop:aht},800)
            // $('.main .follow').stop()
    
    
        })
        
        

            
    











    //마우스에서 휠을 올렸을 떄, 내렸을 떄 움직인다.
    $('section').mousewheel(function(event,delta){

        if(delta>0) {

            //이전페이지로 이동
            let prev = $(this).prev().offset().top;
            $('html, body').stop().animate({scrollTop:prev}, 1400)
        }

        else if(delta<0) {

            //다음페이지로 이동
            let next = $(this).next().offset().top;
            $('html, body').stop().animate({scrollTop:next}, 1400)
            //animate 앞에는 stop을 항상 짝궁처럼 붙여다니기
        }
    })

// #################################################



    //3. 체험안내 설정
    // section에서 마우스가 움직였을 때, 이미지의 위치값을 바꾸어라.
    $('.info').mousemove(function(e){

        let poseX = e.pageX;
        let poseY = e.pageY;

        $('.info .flower').css({'bottom': 20-poseY/20, 'right': 20-poseX/20})

    })




    //4. 체험예약 설정

    // +-버튼을 눌렀을때 숫자가 커짐
    $('').click(function(){
        let now = new Date();
        let sec = now.getSeconds();


        let Num ; 

        if(sec>=10){
            Num = sec}
        else{
            Num = '0' +sec}


        $('.pm .num').text(hNum)

    });






    // 5. 층별안내 설정
    // 층수를 클릭했을때 on값을 부여해라.
    $('.guideMap .txtBox .flow li').click(function(){

        let i = $(this).index();
        let className ='on'+(i+1)
        console.log(className)

        $('.guideMap .txtBox .flow li').removeClass('on')
        $('.guideMap .txtBox .flow li').eq(i).addClass('on')
        

        $('.guideMap .imgBox>div').removeClass()
        $('.guideMap .imgBox>div').addClass(className)

        // $('.guideMap .imgBox>div').removeClass('on1')
        // $('.guideMap .imgBox>div').removeClass('on3')
        // $('.guideMap .imgBox>div').eq(i).addClass('on2')

        // $('.guideMap .imgBox>div').removeClass('on1')
        // $('.guideMap .imgBox>div').removeClass('on2')
        // $('.guideMap .imgBox>div').eq(i).addClass('on3')

    })

    $('.guideMap .location p').click(function(){
            
            let i = $(this).index();

            $('.location p').removeClass('on')
            $('.location p').eq(i).addClass('on')

    })










})