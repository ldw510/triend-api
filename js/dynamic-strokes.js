window.onload =  function TotalLengthCyan(){
  var path = document.querySelector('#circle-1');
  var pathmid = document.querySelector('#circle-2');
  var pathinner = document.querySelector('#circle-3');
  var len = (path.getTotalLength() );
  var lenmid = (pathmid.getTotalLength() );
  var leninner = (pathinner.getTotalLength() );

  var gap = 0.2; //here is the gap (the missing % from the score)
  var gaplen = len * gap;
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = gaplen; 

  var gapmid = 0.6;
  var gapmidlen = lenmid * gapmid
  pathmid.style.strokeDasharray = lenmid;
  pathmid.style.strokeDashoffset = gapmidlen; 

  var gapinner = 0.25
  var gapinnerlen = leninner * gapinner
  pathinner.style.strokeDasharray = leninner;
  pathinner.style.strokeDashoffset = gapinnerlen; 
  };

