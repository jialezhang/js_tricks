window.onload = function(){
  //define the size of canvas
  var s = document,q = document.getElementById('q');
  var w =s.width,h =s.height;
  q.width = s.width,q.height = s.height;
  var m = Math.random;
  //strore the characters in of a 256 length array
  var p = Array(256).join(1).split('');
  function draw(){

    q.getContext('2d').fillStyle='rgba(0,0,0,.05)';
    q.getContext('2d').fillRect(0,0,w,h);
    q.getContext('2d').fillStyle='#0F0';
    p.map(function(y_pos, index){
      //unicode 30000-30033
      var text = String.fromCharCode(3e4+m()*33);
      var x_pos = index * 10;
      q.getContext('2d').fillText(text, x_pos, y_pos);
      p[index] = (y_pos > 758 + m() * 1e4) ? 0 : y_pos + 10;
    });
  }
  setInterval(draw,33);
};