
let imageList = [];
imageList[0] = "../imgs/dreng/avatar-dreng-uden-cirkel.png";
imageList[1] = "../imgs/dreng/avatar-dreng-1.png";
imageList[2] = "../imgs/dreng/avatar-dreng-2.png";
imageList[3] = "../imgs/dreng/avatar-dreng-3.png";
imageList[4] = "../imgs/dreng/avatar-dreng-4.png";

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

document.getElementById("btnHair").addEventListener("click", function(){
    currentIndex--;
    
    if(imageList[0] == imageList[0]){
        location.replace("../html/gendermanhaar.html")
    } else if(imageList[1] == imageList[1]) {
        location.replace("http://www.tv2.dk")
    }
    
})