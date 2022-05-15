document.querySelector(".home").style.display="block";
document.querySelector(".about").style.display="none";
document.querySelector(".project").style.display="none";
document.querySelector(".blog").style.display="none";


document.querySelectorAll("a")[0].addEventListener("click",function(){
        document.querySelector(".home").style.display="block";
        document.querySelector(".about").style.display="none";
        document.querySelector(".project").style.display="none";
        document.querySelector(".blog").style.display="none";
})
document.querySelectorAll("a")[1].addEventListener("click",function(){
  document.querySelector(".home").style.display="none";
  document.querySelector(".about").style.display="block";
  document.querySelector(".project").style.display="none";
  document.querySelector(".blog").style.display="none";
})
document.querySelectorAll("a")[2].addEventListener("click",function(){
  document.querySelector(".home").style.display="none";
  document.querySelector(".about").style.display="none";
  document.querySelector(".project").style.display="block";
  document.querySelector(".blog").style.display="none";
})
document.querySelectorAll("a")[3].addEventListener("click",function(){
  document.querySelector(".home").style.display="none";
  document.querySelector(".about").style.display="none";
  document.querySelector(".project").style.display="none";
  document.querySelector(".blog").style.display="block";
})


