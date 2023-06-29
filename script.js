const inputs = document.querySelectorAll ('.input');

const button = document.querySelector('.login__button');

const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target}) => {
    
    if(target.value == '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    }
}

const handleChange = () => {
    
    const [username, password] = inputs;
  
    if (username.value && password.value.length >= 8) {
      button.removeAttribute('disabled');
      
    } 
    
    else {
      button.setAttribute('disabled', '');
    }
  }
    

inputs.forEach ((input) => input.addEventListener('focus', handleFocus));

inputs.forEach ((input) => input.addEventListener('focusout', handleFocusOut));

inputs.forEach ((input) => input.addEventListener('input', handleChange));


var audio = document.getElementById("myAudio");
audio.volume="0.2"

        function playMusic() {
            audio.play();
        }

        function toggleMusic() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }

        function restartMusic() {
            audio.currentTime = 0;
            audio.play();
        }