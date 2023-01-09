$(document).ready(function(){

    let i = 0
        setInterval(function(){
            i++;

            if(i==3) i=0;
            $('.box1 li').eq(i-1).css({'left':0}).stop().animate({'left':'-100%'})
            $('.box1 li').eq(i).css({'left':'100%'}).stop().animate({'left': 0})
        },3000)


    
})