$(document).ready(function(){

    // body의 높이값과 section의 가로값 통일시키기
    // article 갯수를 구하고 article의 가로값을 구해서 두개를 곱한 값을
    // section의 가로값으로 변환
    let a = $('article').size(); //size는 갯수를 세어주는 함수
    let aWd = $('article').width()

    $('section').width(a*(aWd+20)+600)
    $('body').height(a*(aWd+20)+600) //괄호 안과 같이 같은 값으로 변환시켜라

        // -> 통일시키는 이유: 스크롤 할때 section의 가로값이랑 같이 움직여야 하기 때문



    $(window).resize(function(){
    // 화면이 resize될때마다 body의 높이값과 section의 가로값 통일시키기
    // article 갯수를 구하고 article의 가로값을 구해서 두개를 곱한 값을 section의 가로값으로 변환.
    // 일반 버전/resize버전 항상 같이 만들어두기. 안그러면 반쪽짜리임.
    let a = $('article').size();
    let aWd = $('article').width()

    $('section').width(a*(aWd+20)+600)
    $('body').height(a*(aWd+20)+600) //괄호 안과 같이 같은 값으로 변환시켜라

    })


    // 화면에서 스크롤바가 움직일 때 스크롤 상단의 위치값을 찾아라.

    $(window).scroll(function(){

        let sc = $(window).scrollTop()

        $('h1').text(sc)
        $('section').stop().animate({'left':-sc},600)
    })



    $('.gnb li').click(function(){
        // li를 클릭하는 함수는 안쓰더라도 순번을 무조건 찾아놓을것. 

        let i = $(this).index()

        $('html,body').scrollTop(1000*i)
    })




    // article을 클릭했을 때 내가 클릭한 
    // 그 아이에게 addClass를 해라.
    // 모든 article에게는 removeClass를 먼저 해라.
    $('article h2').click(function(e){
        e.preventDefault(); //기존에 있었던 a(html의 링크연결)의 이벤트값을 없애라.

        $('article').removeClass('on')
        $(this).parent().addClass('on')
    })

    //span을 클릭했을때(close임) article에 removeClass를 해라.
    $('article span').click(function(){

        $(this).parent().removeClass('on')
        
    })





})