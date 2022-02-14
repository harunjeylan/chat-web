var sideNav_is_opend = false;
function openNav(){
    var nav = document.getElementById("pills-tab");
    nav.style.width = "20rem";
    sideNav_is_opend = true;
    
}
function closeNav() {
    var nav = document.getElementById("pills-tab");
    nav.style.width = "3.5rem";
    sideNav_is_opend = false;


}

function sideNav(){
    if (sideNav_is_opend == false){
        openNav();
        console.log("nav is opend");
    }
    else{
        closeNav()
        console.log("nav is close");
    }

}
