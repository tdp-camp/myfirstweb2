
  let Links = {
    setColor:function (color){
  const alist = document.querySelectorAll('a');
  let i = 0;
  while(i < alist.length){
    alist[i].style.color = color ;
    i = i + 1;
    }
   } 
  }




  let Body = {
    setColor:function (color) {
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
      document.querySelector('body').style.backgroundColor = color;
    }

  }

function nightDayHandler(self){
  let target = document.querySelector('body');
  if (self.value === 'night') { 
  Body.setBackgroundColor('black');
  Body.setColor('white');
  self.value = 'day';
  Links.setColor('powderblue');
  }
  else { 
  Body.setBackgroundColor('white');
  Body.setColor('black');
  self.value = 'night';
  Links.setColor('blue');

  }
  }
