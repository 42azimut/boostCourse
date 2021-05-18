var links = {
  setColor: function(color) {
  //   var alist = document.querySelectorAll('a');
  //   var i = 1;
  //     while(i < alist.length){
  //       alist[i].style.color = color;
  //       i++;
  //     }
  $('a').css('color', color)  
  }
}

var fontSize = {
  h1_Size: function(size) {
    $('h1').css('font-size', size)
  }
}

var body = {
  setColor: function (color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
    },
  setBackgroundColor: function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color)
    },
}

function night_day (셀프) {
  //var target = document.querySelector('body')
  if ( 셀프.value === 'night' ) {
    body.setBackgroundColor('black'); 
    body.setColor('white')
    셀프.value = 'day'
    links.setColor('pink');
    fontSize.h1_Size('14px');
  } else {
    body.setBackgroundColor('white'); 
    body.setColor('black')
    셀프.value = 'night'
    links.setColor('blue');
    fontSize.h1_Size('32px');
  }
}

