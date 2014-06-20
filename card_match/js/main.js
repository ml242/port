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

  var choice1 = '';
  var choice2 = '';

  var game;

  function win(){
      // console.log('winner');
      $('#winner').fadeIn( "slow" );
      $('#choice').fadeIn(" slow" );
  };

  function checkWin(){
     
    if ( game == 'easy' && $('.winners').length >= 7) {
      
      $(".timer").addClass('freeze');
      $('.freeze').removeClass('timer');
      $(".card").addClass('winners');
      $('.winners').removeClass('clicked');
      debugger;      
      win()
      // location.reload();
    } else if ( game == 'int' && $('.winners').length >= 15) {
      alert('YOU WIN');
      $(".timer").addClass('freeze');
      $('.freeze').removeClass('timer');
      $(".card").addClass('winners');
      $('.winners').removeClass('clicked');

      win()

      location.reload();
    } else if ( game == 'int' && $('.winners').length >= 33) {
      $(".timer").addClass('freeze');
      $('.freeze').removeClass('timer');
      $(".card").addClass('winners');
      $('.winners').removeClass('clicked');

      win()

      location.reload();
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





// function startGame(){
//   var game = $( "#start-game option:selected" ).text();
//       // console.log(game);
//       if(game == "Easy"){
//         startEasy();
//       } else if(game == "Intermediate") {
//         startInt();
//       } else if (game=="Difficult"){
//         startHard();
//       }

//     showScore();

//     };


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

  // console.log('easy');
  $('#selector').hide();
  $('#choice').hide();
  showScore();

  $('#easy-game').show();
  
  var eGame = $('.easycard');
  for(i=0; i < eGame.length; i++){
    eGame[i].src = easyGame[i];
  }
    setTimeout(function() {
    eGame.css('opacity', 0.0)
  }, 2000);

}

function startInt(){
  $('#selector').hide();
  $('#choice').hide();
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
  setTimeout(function() 
  {
    eGame.css('opacity', 0.0)
    //do something special
  }, 2000);}

function startIns(){
  // console.log('insane');
}





  function showScore(){
    $('#scoreboard').show();

    function startClock(){
      //use the jquery setInterval method to update the time every 1sec
      setInterval(function(){ 
          time = parseInt($('.timer').text());
          time += 1;
          $('.timer').text(time);

      }, 1000);
      
  }


  $('.timer').text(startClock());
};


});
