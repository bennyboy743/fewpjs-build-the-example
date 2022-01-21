// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById('modal')
const getAllLikeTags = document.querySelectorAll('.like-glyph')
const clickMessage = document.getElementById('clicked-heart')
// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', (e) => {
  console.log('Page first loaded');
  modal.classList = "hidden"
  clickMessage.classList = "hidden"
  addHeartsToPost()
});

function addHeartsToPost() {
  for (let index = 0; index < getAllLikeTags.length; index++) {
    const element = getAllLikeTags[index];
    let flag = false
    element.addEventListener('click',(e) => {
      mimicServerCall()
      .then(res => {
        flag = !flag
        if(flag){
          element.classList = "activated-heart"
          clickMessage.classList.add('clicked-heart')
          clickMessage.classList.remove("hidden")
          setTimeout(()=>{
            clickMessage.classList.add('hidden')
          },1000)
          element.textContent = FULL_HEART
          return
        }
        if(!flag) {
          element.classList.remove('activated-heart')
          clickMessage.classList.remove('clicked-heart')
          element.textContent = EMPTY_HEART
        }
         
      })
      .catch(err => {
        modal.classList.remove("hidden")
        modal.textContent = err
        setTimeout( () => {
          modal.textContent = " "
          modal.classList.add("hidden")
        },5000)
        console.log(`catched error ${err}`)
      })
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
