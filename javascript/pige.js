//Haarstil af pige:

let imageListPige = [];
imageListPige[0] = "../imgs/pige/avatar-pige.png";
imageListPige[1] = "../imgs/pige/avatar-pige-2.png";
imageListPige[2] = "../imgs/pige/avatar-pige-3.png";
imageListPige[3] = "../imgs/pige/avatar-pige-4.png";
imageListPige[4] = "../imgs/pige/avatar-pige-5.png";

let currentIndexGirl = 0;
let currentImageNumberGirl = currentIndexGirl + 1;


document.getElementById("btnNextGirl").addEventListener("click", function(){
    currentIndexGirl++;
    
    if(currentIndexGirl >= imageListPige.length){
        currentIndexGirl = 0;
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

//Haarfarve af pige:

document.getElementById("btnHair").addEventListener("click", function(){
    
    if(currentIndexGirl == 0){
        location.replace("../html/genderwomanhaar.html")
    } else if(currentIndexGirl == 1){
        location.replace("../html/genderwomanhaar-2.html")
    } else if(currentIndexGirl == 2){
        location.replace("../html/genderwomanhaar-3.html")
    } else if(currentIndexGirl == 3){
        location.replace("../html/genderwomanhaar-4.html")
    } else if(currentIndexGirl == 4){
        location.replace("../html/genderwomanhaar-5.html")
    }
    
})