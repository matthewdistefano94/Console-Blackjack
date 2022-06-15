var deck = ['AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH'];
var playerHand = [];
var score = 0;

var shuffle = function() {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
  return deck;
};


var deal = function(){
  var ranNum = Math.floor(Math.random() * deck.length);
  var card = deck.splice(ranNum, 1).toString();
  playerHand.push(card);
};

var playerTurn = function(){
  while(playerHand.length < 2){
  shuffle();
  deal();
  deal();
  }
};

var checkScore = function(){
  score = 0;
  for(var i = 0; i < playerHand.length; i++){
    switch(playerHand[i]){
      case '2S':
      case '2C':
      case '2H':
      case '2D':
        score += 2;
        break;
      case '3S':
      case '3C':
      case '3H':
      case '3D':
        score += 3;
        break;
      case '4S':
      case '4C':
      case '4H':
      case '4D':
        score += 4
        break;
      case '5S':
      case '5C':
      case '5H':
      case '5D':
        score += 5;
        break;
      case '6S':
      case '6C':
      case '6H':
      case '6D':
        score += 6;
        break;
      case '7S':
      case '7C':
      case '7H':
      case '7D':
        score += 7;
        break;
      case '8S':
      case '8C':
      case '8H':
      case '8D':
        score += 8;
        break;
      case '9S':
      case '9C':
      case '9H':
      case '9D':
        score += 9;
        break;
      case '10S':
      case '10C':
      case '10H':
      case '10D':
        score += 10;
        break;
      case 'JS':
      case 'JC':
      case 'JH':
      case 'JD':
        score += 10;
        break;
      case 'QS':
      case 'QC':
      case 'QH':
      case 'QD':
        score += 10;
        break;
      case 'KS':
      case 'KC':
      case 'KH':
      case 'KD':
        score += 10;
        break;
      case 'AS':
      case 'AC':
      case 'AH':
      case 'AD':
        score += 11;
        break;      
    }
  }
  
  if(score > 21){
    for(var i = 0; i < playerHand.length; i++){
      if(playerHand[i] === 'AS' || playerHand[i] === 'AC' || playerHand[i] === 'AH' || playerHand[i] === 'AD'){
        score -= 10;
        if(score > 21){
          return 'bust';
        }
        else if(score == 21){
          return '21, you win!';
        }
        hit();
      }
    }
    return 'bust';
  }
  else if(score == 21){
    return '21, you win!';
  }
};

var hit = function (){
  if(score == 21 && playerHand.length == 2){
    alert('Player Hand ' + playerHand + '.\nBlackJack, you win!');
  }
    else if(score == 21){
      alert('Player Hand ' + playerHand + '.\n21, you win!');
    }
    else if(score > 21){
      alert('Player Hand ' + playerHand + '\nPlayer Score ' + score + '.\nBust!');
    }
  else{
var move = prompt('Your current hand is ' + playerHand + '\nYour current score is '+ score + '.\nPlease enter Hit or Stay.');
if(move != 'Hit' && move != 'Stay' && move != null){
  hit();
}
  else if(move == 'Hit'){
  deal();
  checkScore();
  hit();
  }
  else if (move == 'Stay'){
    alert ('Final score is ' + score + '.');
  }
}
}

shuffle();
playerTurn();
checkScore();
hit();
