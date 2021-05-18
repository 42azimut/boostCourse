    var links = {
      setColor: function(color) {
        var alist = document.querySelectorAll('a');
        var i = 1;
          while(i < alist.length){
            alist[i].style.color = color;
            i++;
          }
        }
    }

    var body = {
      setColor: function (color) {
        document.querySelector('body').style.color = color;
        },
      setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
        },

    }


    function night_day (셀프) {
      var target = document.querySelector('body')
      if ( 셀프.value === 'night' ) {
        body.setBackgroundColor('black'); 
        body.setColor('white')
        셀프.value = 'day'
        links.setColor('powderblue');
      } else {
        body.setBackgroundColor('wheat'); 
        body.setColor('black')
        셀프.value = 'night'

        links.setColor('blue');
      }
    }

