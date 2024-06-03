const buttonArray=document.querySelectorAll("button");
function toggleButtonAria(t){
    t.addEventListener("click",(()=>{
            "true"==t
            .getAttribute("aria-expanded")?t
            .setAttribute("aria-expanded","false"):t
            .setAttribute("aria-expanded","true")
        }
    )
)
}
buttonArray.forEach(toggleButtonAria)
,window.onscroll=function(){
    myFunction()};
    var header=document
    .getElementById("sticky-navbar")
    ,sticky=header.offsetTop;
    function myFunction(){
        window.scrollY>sticky?header
        .classList.add("sticky"):
        header.classList
        .remove("sticky")
    }
    document.querySelectorAll(".accordian-header")
    .forEach((t=>{t.addEventListener("click",(e=>{t.parentElement.classList.toggle("active")}))}));