// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById('modal')
const getAllLikeTags = document.querySelectorAll('.like-glyph')
// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', (e) => {
  console.log('Page first loaded');
  modal.classList = "hidden"
  addHeartsToPost()
});

function addHeartsToPost() {
  for (let index = 0; index < getAllLikeTags.length; index++) {
    const element = getAllLikeTags[index];
    element.addEventListener('click',(e) => {
      element.classList = "activated-heart"
      element.textContent = FULL_HEART
    })
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
