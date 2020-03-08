function goHere(num) {

  if(num === 0) { goTop(); } // 0이 인수로 올시 맨 위로 이동
  else { // 아닐 시 다른 곳으로 이동하기위한 좌표 알아내기
    $(".elements li").each(function (index, item) {
      var position = $(item).offset().top;
      if(num === index + 1) { moveToTag(position); return false; }
    });
  }
}

function moveToTag(position) {
  var middle = position - (window.innerHeight / 2 - 450 / 2);
  $('html, body').animate({scrollTop : middle}, 400);
}

function goTop() {
  $('html, body').animate({scrollTop : 0}, 400);
}
