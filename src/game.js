$(function(){
    let score = 0;
    let count = 30;
    let appearID, timer;

//UFOをいろんな位置に置くための命令
function getPosition(){
    return {
        left: Math.floor(Math.random() * 570),
        top: Math.floor(Math.random() * 370)
    };
}

function appear(){
      appearID = setInterval(function(){
        $('.chara:first-child')
        .clone()
        .appendTo('#stage')
        .css(getPosition())
        .animate({opacity: 1}, 2000)
        .animate(getPosition(), 1, function(){
          $(this).remove();
        });
    }, 200);
}

$('#stage').on('click', '.chara', function(){
    $(this)
    .prop('disabled', true)
    .stop(true, false).animate({opacity: 0}, 500, function(){
        $(this).remove();
    });
    score += 1;
    $('#score span').text(score);
});

//スタートボタンを押してゲームを始める命令
$('#start').click(function(){
    appear();
    $(this).animate({opacity: 0}, 300, function(){
        $(this).remove();
    });
    timer = setInterval(function(){
        if(count <= 0){
            clearInterval(timer);
            clearInterval(appearID);
            $('.chara').prop('disabled', true);
            if(score > 10){
                alert('割引クーポン:[dveghd]を入力！');
            }else{
                alert('残念！もう一度チャレンジしてみてね！');
            }
        } else {
            count--;
            $('#count span').text(count);
        }
    }, 1000);
});

})