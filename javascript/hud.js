let imageList = [];
imageList[0] = "../imgs/dreng/avatar-dreng-uden-cirkel.png";
imageList[1] = "../imgs/dreng/avatar-dreng-uden-cirkel-brunhud.png";
imageList[2] = "../imgs/dreng/avatar-dreng-uden-cirkel-sort.png";

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