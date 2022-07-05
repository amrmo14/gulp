function hide(e) {
    if (window.innerWidth > 768) {
        var active = document.querySelectorAll(".show")[0]
        var resume = document.getElementById(e)
        console.log(e)
        active.style.transform = "translateX(-30vw)"
        active.style.opacity = 0;
        active.style.transition = " opacity 0.5s,transform 1s"
        setTimeout(function () {
            active.style.display = "none"
            resume.style.display = "block"
            resume.style.transform = "translateX(-300px)"
            resume.style.opacity = 0;
            resume.style.transition = " all 0s"
            setTimeout(function () {
                resume.style.transform = "translateX(0)"
                resume.style.opacity = 1;
                resume.style.transition = " opacity 2s,transform 3s"
            }, 200)

        }, 300)
        active.classList.remove("show")
        resume.classList.add("show")
    }
}
// function show(){
//     var mainDivs =document.querySelectorAll(".mainDIvs")
//     if(window.innerWidth <= 768){
//         for(let i =0 ; i<mainDivs.length;i++){
//             mainDivs[i].style.display = "block";
//         }
//    }
//    else{
//     for(let i =0 ; i<mainDivs.length;i++){
//         mainDivs[i].style.display = "none";
//     }
//     var active = document.querySelectorAll(".show")[0]
//     active.style.display="block"
//    }
// }
