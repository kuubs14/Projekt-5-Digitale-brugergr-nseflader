
//Haarstil af dreng:

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

//Haarfarve af dreng:

document.getElementById("btnHair").addEventListener("click", function(){
    
    if(currentIndex == 0){
        location.replace("../html/gendermanhaar.html")
    } else if(currentIndex == 1){
        location.replace("../html/gendermanhaar-1.html")
    } else if(currentIndex == 2){
        location.replace("../html/gendermanhaar-2.html")
    } else if(currentIndex == 3){
        location.replace("../html/gendermanhaar-3.html")
    } else if(currentIndex == 4){
        location.replace("../html/gendermanhaar-4.html")
    }
    
})



//Haarstil af pige:

let imageListPige = [];
imageListPige[0] = "../imgs/pige/avatar-pige.png";
imageListPige[1] = "../imgs/pige/avatar-pige-2.png";
imageListPige[2] = "../imgs/pige/avatar-pige-3.png";
imageListPige[3] = "../imgs/pige/avatar-pige-4.png";
imageListPige[4] = "../imgs/pige/avatar-pige-5.png";

let currentIndexGirl = 0;
let currentImageNumberGirl = currentIndex + 1;


document.getElementById("btnNextGirl").addEventListener("click", function(){
    currentIndex++;
    
    if(currentIndexGirl >= imageListPige.length){
        currentIndex = 0;
    }
    
    let currentImageNumberGirl = currentIndexGirl + 1;
    
    document.getElementById("sliderImageGirl").src = imageListPige[currentIndexGirl];    
})

document.getElementById("btnPrevGirl").addEventListener("click", function(){
    currentIndexGirl--;
    
    if(currentIndexGirl <= - 1){
        currentIndexGirl = imageListPige.length - 1;
    }
    
    let currentImageNumberGirl = currentIndexGirl + 1;
    
    document.getElementById("sliderImageGirl").src = imageListPige[currentIndexGirl];
})