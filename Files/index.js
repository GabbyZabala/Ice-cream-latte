
function menutogglebutton(){
    var box = document.getElementById("box");
    box.classList.toggle("frennen");
    setTimeout(() => {
        
    }, 300);

}
function menurecotoggle(){
    var recon = document.getElementById("menu-reco")
    let num = 1;
    recon.classList.toggle("menu-reco-hide")   
    recon.classList.toggle("menu-reco-show")
}