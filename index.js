let images = ['tom1', 'tom2', 'tom4', 'tom3', 'snare', 'crash', 'kick'];
let sound = ['tom-1','tom-2','tom-4','tom-3','snare','crash','kick-bass']
let letters = ['w', 'a', 's', 'd', 'j', 'k', 'l']
let r = document.querySelectorAll(".drum");

function buttonAnimation(currentButton){
    let activeButton = document.querySelector('.' + currentButton);
    activeButton.classList.add("pressed");
    setTimeout(() => {activeButton.classList.remove("pressed")},200);
}

for(let i = 0; i < r.length; i++)
    {
        let n = './images/' + images[i] + '.png';
        document.querySelectorAll(".drum")[i].style.backgroundImage = "url('" + n + "')";
        
        r[i].addEventListener("click", function handleSound(){
            let audio = new Audio('./sounds/' + sound[i] + '.mp3');
            audio.play();
            setTimeout(buttonAnimation(letters[i]),5000);

        } );

        document.querySelector("body").addEventListener("keypress", (event) => {
            if(event.key === letters[i])
            {
                let audio = new Audio('./sounds/' + sound[i] + '.mp3');
                audio.play();
                buttonAnimation(letters[i]);
            }цц
    
        })

    }




    