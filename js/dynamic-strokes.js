function TotalLengthCyan(){
  var path = document.querySelector('#circle-1');
  var len = (path.getTotalLength() );
  var percent = 0.8; //here is the percentage that the circle is filled
  var gap = 0.2; //here is the gap 
  var gaplen = len * gap;
//  alert("Path total length - " + len + "stoke length filled - " + strokelen + "stroke gap - " + gaplen);
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = gaplen; 
  };

  function TotalLengthPink(){
    var path = document.querySelector('#circle-2');
    var len = (path.getTotalLength() );
    var percent = 0.4; //here is the percentage that the circle is filled
    var gap = 0.6; //here is the gap 
    var gaplen = len * gap;
//    alert("Path total length - " + len + "stoke length filled - " + strokelen + "stroke gap - " + gaplen);
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = gaplen; 
    };
  
    function TotalLengthYellow(){
      var path = document.querySelector('#circle-3');
      var len = (path.getTotalLength() );
      var percent = 0.75; //here is the percentage that the circle is filled
      var gap = 0.25; //here is the gap 
      var gaplen = len * gap;
  //    alert("Path total length - " + len + "stoke length filled - " + strokelen + "stroke gap - " + gaplen);
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = gaplen; 
      };
    
    