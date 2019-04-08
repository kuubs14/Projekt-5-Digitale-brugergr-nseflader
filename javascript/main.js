
let imageList = [];
imageList[0] = "../imgs/avatar-dreng-uden-cirkel.png";
imageList[1] = "../imgs/avatar-dreng-1.png";
imageList[2] = "../imgs/avatar-dreng-2.png";
imageList[3] = "../imgs/avatar-dreng-3.png";
imageList[4] = "../imgs/avatar-dreng-4.png";

let currentIndex = 0;
let currentImageNumber = currentIndex + 1;


document.getElementById("btnNext").addEventListener("click", function(){
    currentIndex++;
    
    if(currentIndex >= imageList.length){
        currentIndex = 0;
    }
    
    let currentImageNumber = currentIndex + 1;
    
    document.getElementById("sliderImage").src = imageList[currentIndex];    
})

document.getElementById("btnPrev").addEventListener("click", function(){
    currentIndex--;
    
    if(currentIndex <= - 1){
        currentIndex = imageList.length - 1;
    }
    
    let currentImageNumber = currentIndex + 1;
    
    document.getElementById("sliderImage").src = imageList[currentIndex];
})