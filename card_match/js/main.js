// make the cards show for a longer amount of time for each level 3,5,10
// fix the set interval

$(document).ready(function(){
  console.log('ready to kick ass');
  $('#scoreboard').hide();
  $('#easy-game').hide();
  $('#int-game').hide();
  $('#hard-game').hide();
  $('#winner').hide();

  $('#easy').click(startEasy);
  $('#intermediate').click(startInt);
  $('#difficult').click(startHard);
  // $('#submit').on('click', startGame);

  $('#reset').click(playAgain);

  var choice1 = '';
  var choice2 = '';

  var game;

  function playAgain(){
    $('#easy-game').fadeOut( 'slow' );
    $('#int-game').fadeOut( 'slow' );
    $('#hard-game').fadeOut( 'slow' );
    $('#winner').fadeOut( 'slow');
    $('#scoreboard').fadeOut( 'slow');
    $('#selector').fadeIn('slow');
    $('#choice').fadeIn(" slow" );
  }

  function win(){
      // console.log('winner');
      $('#winner').fadeIn( "slow" );      
      $(".timer").addClass('freeze');
      $('.freeze').removeClass('timer');
      $(".card").addClass('winners');
      $('.winners').removeClass('clicked');
  };

  function checkWin(){
     
    if (game == 'easy' && $('.winners').length >= 7) {         
      win();
    } else if (game == 'int' && $('.winners').length >= 15) {
      win();
    } else if (game == 'hard' && $('.winners').length >= 33) {
      win();
    }
  
  };

  function checkCard(){

    setTimeout(function(){

      if (choice1 == choice2){
        $('.clicked').addClass('winners');
        $('.winners').removeClass('clicked');        
        $('.winners').removeClass('card');
        choice1 = '';
        choice2 = '';
        points = parseInt($('#points').text());
        points += 10;
        $('#points').text(points);
        checkWin();
      } else {
        $('.clicked').closest('.card').css('opacity', 0);
        $('.card').removeClass('clicked');
        choice1 = '';
        choice2 = '';
        points = parseInt($('#points').text());
        points -= 5;
        $('#points').text(points);
      }

    }, 500);
     

  };

function showCard(){

  if ($('.clicked').length == 2 || $(this).hasClass('winners')==true ){
    $('.card').click(false);
  } else if (choice1 == '') {
    choice1 = this.src;
    $(this).addClass('clicked');
    $(this).closest('.card').css('opacity', 1);  
  } else {
    choice2 = this.src;
    $(this).addClass('clicked');
    $(this).closest('.card').css('opacity', 1);  
    checkCard();
  }
};

$('.card').on('click', showCard);

function startEasy(){
$('#easy-game').css('width', '960px');

  game = 'easy';

  var easyGame = [
  'images/hj.png',
  'images/hq.png',
  'images/hk.png',
  'images/hj.png',
  'images/hq.png',
  'images/hk.png',
  'images/h1.png',
  'images/h1.png'
  ];

  easyGame = _.shuffle(easyGame) 

  $('#selector').hide();
  $('#choice').hide();

  $("#points").text('0');
  $(".freeze").text('-2').addClass('timer').removeClass('freeze');
  $(".winners").addClass('card').removeClass('winners');

  showScore();


  $('#easy-game').show();
  
  $('.easycard').each(function(i) {
    $(this).prop('src', easyGame[i]);
  });

  setTimeout(function() {
    $('.easycard').css('opacity', 0.0)
  }, 2000);

}

function startInt(){
  $('#selector').hide();
  $('#choice').hide();

  $("#points").text('0');
  $(".freeze").text('-2').addClass('timer').removeClass('freeze');
  $(".winners").addClass('card').removeClass('winners');

  showScore();

  
  game = 'int';

  $('#int-game').css('width', '1100px');
  $('.cardback').css('width', '14%');


  var intGame = [
    'images/hj.png',
    'images/hq.png',
    'images/hk.png',
    'images/hj.png',
    'images/hq.png',
    'images/hk.png',
    'images/h1.png',
    'images/h1.png',
    'images/sj.png',
    'images/sq.png',
    'images/sk.png',
    'images/sj.png',
    'images/sq.png',
    'images/sk.png',
    'images/s1.png',
    'images/s1.png'
  ];

  intGame = _.shuffle(intGame) 

  $('#int-game').show();

  var eGame = $('.intcard');
  for(i=0; i < eGame.length; i++){
    // $(eGame[i]).css('background-image', 'url(' + easyGame[i] + ')');
    eGame[i].src = intGame[i];
  }
  setTimeout(function() 
  {
    eGame.css('opacity', 0.0)
    //do something special
  }, 2000);
}

function startHard(){
  $('#selector').hide();
  $('#choice').hide();

  $("#points").text('0');
  $(".freeze").text('-2').addClass('timer').removeClass('freeze');
  $(".winners").addClass('card').removeClass('winners');

  showScore();



  $('#hard-game').css('width', '1100px');
  $('.cardback').css('width', '12%');

  game ='hard';
  
  var hardGame = [
    'images/hj.png',
    'images/hq.png',
    'images/hk.png',
    'images/hj.png',
    'images/hq.png',
    'images/hk.png',
    'images/h1.png',
    'images/h1.png',
    'images/sj.png',
    'images/sq.png',
    'images/sk.png',
    'images/sj.png',
    'images/sq.png',
    'images/sk.png',
    'images/s1.png',
    'images/s1.png',
    'images/dj.png',
    'images/dq.png',
    'images/dk.png',
    'images/dj.png',
    'images/dq.png',
    'images/dk.png',
    'images/d1.png',
    'images/d1.png',
    'images/cj.png',
    'images/cq.png',
    'images/ck.png',
    'images/cj.png',
    'images/cq.png',
    'images/ck.png',
    'images/c1.png',
    'images/c1.png'  
  ];

  hardGame = _.shuffle(hardGame) 

  $('#hard-game').show();

  var eGame = $('.hardcard');
  for(i=0; i < eGame.length; i++){
    // $(eGame[i]).css('background-image', 'url(' + easyGame[i] + ')');
    eGame[i].src = hardGame[i];
  }
  setTimeout(function(){
    eGame.css('opacity', 0.0)
  }, 2000);
};





  var clockTime;

  function showScore(){
    $('#scoreboard').show();

    function startClock(){
      if (clockTime) clearInterval(clockTime);
      //use the jquery setInterval method to update the time every 1sec
      clockTime = setInterval(function(){ 
          // time = parseInt($('.timer').text('-2'));
          time = parseInt($('.timer').text());
          time += 1;
          $('.timer').text(time);

      }, 1000);
    }

    $('.timer').text(startClock());
  };


  $('body').on('dragstart', 'img', function(e) {
    var crt = this.cloneNode(true);
    $(crt).prop('url', '../images/mugatu.gif');
    crt.style.position = "absolute"; crt.style.top = "0px"; crt.style.right = "0px";
    document.body.appendChild(crt);
    e.dataTransfer.setDragImage(crt, 0, 0);
  }, false);



});

