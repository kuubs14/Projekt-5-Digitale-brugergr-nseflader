
//Haarstil af dreng:



let imageList = [];
imageList[0] = "../imgs/dreng/avatar-dreng-uden-cirkel.png";
imageList[1] = "../imgs/dreng/avatar-dreng-1.png";
imageList[2] = "../imgs/dreng/avatar-dreng-2.png";
imageList[3] = "../imgs/dreng/avatar-dreng-3.png";
imageList[4] = "../imgs/dreng/avatar-dreng-4.png";

let currentIndex = 0;

function skiftDrengHøjre() {
    currentIndex++;
    
    if(currentIndex >= imageList.length){
        currentIndex = 0;
    }
    
    
    document.getElementById("sliderImage").src = imageList[currentIndex];
}

function skiftDrengVenstre() {
    currentIndex--;
    
    if(currentIndex <= - 1){
        currentIndex = imageList.length - 1;
    }
    
    
    document.getElementById("sliderImage").src = imageList[currentIndex];
}




//Haarfarve af dreng:




function drengHaarfarve() {
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
}




//Haarstil af pige:




let imageListPige = [];
imageListPige[0] = "../imgs/pige/avatar-pige.png";
imageListPige[1] = "../imgs/pige/avatar-pige-2.png";
imageListPige[2] = "../imgs/pige/avatar-pige-3.png";
imageListPige[3] = "../imgs/pige/avatar-pige-4.png";
imageListPige[4] = "../imgs/pige/avatar-pige-5.png";

let currentIndexGirl = 0;
let currentImageNumberGirl = currentIndexGirl + 1;

function skiftPigeHøjre() {
    currentIndexGirl++;
    
    if(currentIndexGirl >= imageListPige.length){
        currentIndexGirl = 0;
    }
    
    let currentImageNumberGirl = currentIndexGirl + 1;
    
    document.getElementById("sliderImageGirl").src = imageListPige[currentIndexGirl];
}

function skiftPigeVenstre() {
    currentIndexGirl--;
    
    if(currentIndexGirl <= - 1){
        currentIndexGirl = imageListPige.length - 1;
    }
    
    let currentImageNumberGirl = currentIndexGirl + 1;
    
    document.getElementById("sliderImageGirl").src = imageListPige[currentIndexGirl];
}




//Haarfarve af pige:




function pigeHaarfarve() {
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
}




//Tilbage knap




function gåTilbage() {
    window.history.back();
}




//Hudfarve af dreng: 




let imageListDrengHud = [];
imageListDrengHud[0] = "../imgs/dreng/avatar-dreng-uden-cirkel.png";
imageListDrengHud[1] = "../imgs/dreng/avatar-dreng-uden-cirkel-brunhud.png";
imageListDrengHud[2] = "../imgs/dreng/avatar-dreng-uden-cirkel-sorthud.png";

let currentIndexDrengH = 0;


function skiftHudDrengH(){
    currentIndexDrengH++;
    
    if(currentIndexDrengH >= imageListDrengHud.length){
        currentIndexDrengH = 0;
    }
    
    document.getElementById("sliderImage").src = imageListDrengHud[currentIndexDrengH];    
}

function skiftHudDrengV(){
    currentIndexDrengH--;
    
    if(currentIndexDrengH <= - 1){
        currentIndexDrengH = imageListDrengHud.length - 1;
    }
    
    document.getElementById("sliderImage").src = imageListDrengHud[currentIndexDrengH];
}

function drengHaarStil(){
    
    if(currentIndexDrengH == 0){
        location.replace("../html/gendermanstil.html")
    } else if(currentIndexDrengH == 1){
        location.replace("../html/gendermanstil-1.html")
    } else if(currentIndexDrengH == 2){
        location.replace("../html/gendermanstill-2.html")
    } 
}




//Indstillinger




let imageListIndstillingerLyd = [];
imageListIndstillingerLyd[0] = "../imgs/speaker.png";
imageListIndstillingerLyd[1] = "../imgs/højtaler-off.png";

let currentIndexLyd = 0;
let currentImageNumberLyd = currentIndexLyd + 1;

function skiftLyd() {
    currentIndexLyd++;
    
    if(currentIndexLyd >= imageListIndstillingerLyd.length) {
        currentIndexLyd = 0;
    }
    
    let currentImageNumberLyd = currentIndexLyd + 1;
    
    document.getElementById("sliderImage").src= imageListIndstillingerLyd[currentIndexLyd];
}

let imageListIndstillingerNotifikation = [];
imageListIndstillingerNotifikation[0] = "../imgs/notifikation.png";
imageListIndstillingerNotifikation[1] = "../imgs/notifikation-off.png";

let currentIndexNotifikation = 0;
let currentImageNumberNotifikation = currentIndexNotifikation + 1;

function skiftNotifikation() {
    currentIndexNotifikation++;
    
    if(currentIndexNotifikation >= imageListIndstillingerNotifikation.length) {
        currentIndexNotifikation = 0;
    }
    
    let currentImageNumberNotifikation = currentIndexNotifikation + 1;
    
    document.getElementById("sliderImageBell").src= imageListIndstillingerNotifikation[currentIndexNotifikation];
}



// Clothes selection


 function testSolbrille() {
        document.getElementById("solbrille").className = 'solbrille1';
    }        
function testSolbrille1() {
        document.getElementById("solbrille").className = 'solbrille2';
    }
function testHue() {
        document.getElementById("hue").className = 'hue1';
    }   
function testHue1() {
        document.getElementById("hue").className = 'hue2';
    }  
function testJakke() {
        document.getElementById("jakke").className = 'jakke1';
    }    
function testJakke1() {
        document.getElementById("jakke").className = 'jakke2';
    }