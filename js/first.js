//can use jquery $('div.section:empty').hide();
//this hides divs if they have empty section

//make array with list of elements with triend-review as class
let group = document.querySelectorAll('.triend-review')
 
//loop through and attach div element with rating to each element 
for (let i = 0; i < group.length; i++) {
   //this is where the api will need to recognise what score is attached to what element
  //also will need to hide the element if this value is empty (place does not exist on triend)
  //e.g.) if placeName == triendapi-placename then DO the following
  const triendScore = document.createElement('a');
  triendScore.textContent = "95";
  //this is where the api will need to open modal to specfic place review
  triendScore.href = "#"
  //adds the class name to each element added
  triendScore.classList.add('triend-score');
  //adds to each element with classname triend-review a triend-score
  group[i].appendChild(triendScore);

  //here a div is created in modal form to each individual review
  const triendModal = document.createElement('div');
  //this is where api should spit out data in modal
  triendModal.textContent = "I am a modal for an individual triend review object."
  triendModal.setAttribute("id","triend-modal");
  //can specify the inner part of the modal's html
  triendModal.innerHTML = "<div class='modal-content'><span class='close'>&times;</span><p>Some text in the Modal..</p></div>"
  group[i].appendChild(triendModal);
}

//now loop has been made that has created a button w/ a score and a modal w/ each review's data

// Get all buttons with class="triend-score" inside the dom
//add active state to whichever is pressed
var modals = document.getElementsByClassName("triend-score");
for (var i = 0; i < modals.length; i++) {
  modals[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}