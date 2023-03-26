async function new_round() {
  document.getElementsByClassName('text')[2].style.display = "none";
  let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=2";
  let response = await fetch(url);
  let json = await response.json();
  let cards = json["cards"];
  let img_1=cards[0].image;
  let img_2=cards[1].image
  document.getElementById("img_1").src=img_1;
  document.getElementById("img_2").src=img_2;
  document.getElementsByClassName('text')[0].style.display = "inline-block";
  document.getElementsByClassName('text')[1].style.display = "inline-block";
  let value_1 = cards[0].value;
  let value_2 = cards[1].value;
  if (value_1 == value_2) {
    document.getElementById("result").innerHTML = "Ничья!";
    document.getElementsByClassName('text')[2].style.display = "inline-block";
  }
  else {
    if (value_1=='JACK') {value_1=11;}
    if (value_1=='QUEEN') {value_1=12;}
    if (value_1=='KING') {value_1=13;}
    if (value_1=='ACE') {value_1=14;}
    if (value_2=='JACK') {value_2=11;}
    if (value_2=='QUEEN') {value_2=12;}
    if (value_2=='KING') {value_2=13;}
    if (value_2=='ACE') {value_2=14;}  
    console.log(value_1,value_2);
    if (value_1 > value_2) {
      document.getElementById("result").innerHTML = "Вы выиграли!";
      document.getElementsByClassName('text')[2].style.display = "inline-block";
    }
    else {document.getElementById("result").innerHTML = "Вы проиграли!";
    document.getElementsByClassName('text')[2].style.display = "inline-block";
    }
  }
}