let count = 0;
let seconds = 30
let progress = document.querySelector(".progress-bar");
let percentage = document.querySelector(".progress-percentage");
let h3= document.querySelector("h3");
let intr =setInterval(function (){
    if(count <=99){
        count ++;

    progress.style.width =`${count}%`;
    percentage.textContent= `${count}`
    }else{
        h3.textContent="Downloaded";
        clearInterval(intr);
    }

},(seconds *100)/100)

