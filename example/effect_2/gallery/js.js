$(document).ready(function(){

    // container 안에 li를 클릭했을 때 각 순번을 찾아라.
    $('.container li').click(function(){

        let i = $(this).index()
        console.log(i)

        //변환받은 i 값을 gallery에 img의 p값에 부여해라.
        //변환받은 p값은 보여라.
        $('#image p').fadeOut('slow')
        $('#image p').eq(i).fadeIn('fast') //fadeIn은 서서히 보이라는 뜻, fadeOut은 서서히 사라져라(괄호 안에는 속도를 입력)

    });


    //left를 클릭하면 일정 거리만큼 container를 움직여라.
    let a = 0;
    $('.left').click(function(){
        if(a<14)a++;
        let wd = $('.container li').width()
        console.log(a)

        $('.container ul').css({'left':(-wd)*a})
        $('#image p').fadeOut('slow')
        $('#image p').eq(a).fadeIn('fast')

        
    });

    //right를 클릭하면 일정 거리만큼 container를 움직여라.
    $('.right').click(function(){
        if(a>0)a--;
        let wd = $('.container li').width()
        console.log(a)

        $('.container ul').css({'left':(-wd)*a})
        $('#image p').fadeOut('slow')
        $('#image p').eq(a).fadeIn('fast')

    });




    //자동으로 #image p가 순차적으로 보여라.
    //setInterval(함수,지연시간) --> 지연시간을 자동으로 반복시키겠다. 몇초에 한 번 반복시키겠다.
        let b = 0;
        setInterval(function(){
            if(b<5) b++;
            if(b==5) b=0;
            console.log(b);

        $('#image p').fadeOut('slow')
        $('#image p').eq(b).fadeIn('fast')

    },2000)
})