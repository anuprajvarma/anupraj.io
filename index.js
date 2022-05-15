document.querySelector(".home").style.display="block";
document.querySelector(".about").style.display="none";
document.querySelector(".project").style.display="none";
document.querySelector(".blog").style.display="none";
document.querySelector(".blog-section").style.display="none";
document.querySelectorAll("a")[0].style.color="blue";


document.querySelectorAll("a")[0].addEventListener("click",function(){
        document.querySelector(".home").style.display="block";
        document.querySelector(".about").style.display="none";
        document.querySelector(".project").style.display="none";
        document.querySelector(".blog").style.display="none";
        document.querySelector(".blog-section").style.display="none";

        document.querySelectorAll("a")[0].style.color="blue";
        document.querySelectorAll("a")[1].style.color="black";
        document.querySelectorAll("a")[2].style.color="black";
        document.querySelectorAll("a")[3].style.color="black";
})
document.querySelectorAll("a")[1].addEventListener("click",function(){
  document.querySelector(".home").style.display="none";
  document.querySelector(".about").style.display="block";
  document.querySelector(".project").style.display="none";
  document.querySelector(".blog").style.display="none";
  document.querySelector(".blog-section").style.display="none";
  
  document.querySelectorAll("a")[0].style.color="black";
  document.querySelectorAll("a")[1].style.color="blue";
  document.querySelectorAll("a")[2].style.color="black";
  document.querySelectorAll("a")[3].style.color="black";
})
document.querySelectorAll("a")[2].addEventListener("click",function(){
  document.querySelector(".home").style.display="none";
  document.querySelector(".about").style.display="none";
  document.querySelector(".project").style.display="block";
  document.querySelector(".blog").style.display="none";
  document.querySelector(".blog-section").style.display="none";

  document.querySelectorAll("a")[0].style.color="black";
  document.querySelectorAll("a")[1].style.color="black";
  document.querySelectorAll("a")[2].style.color="blue";
  document.querySelectorAll("a")[3].style.color="black";
})
document.querySelectorAll("a")[3].addEventListener("click",function(){
  document.querySelector(".home").style.display="none";
  document.querySelector(".about").style.display="none";
  document.querySelector(".project").style.display="none";
  document.querySelector(".blog").style.display="block";
  document.querySelector(".blog-section").style.display="none";

  document.querySelectorAll("a")[0].style.color="black";
  document.querySelectorAll("a")[1].style.color="black";
  document.querySelectorAll("a")[2].style.color="black";
  document.querySelectorAll("a")[3].style.color="blue";
})


document.querySelector(".blog-heading").addEventListener("click",function(){
  document.querySelector(".blog-section").style.display="block";
  document.querySelector(".blog").style.display="none";

  document.querySelectorAll("a")[0].style.color="black";
  document.querySelectorAll("a")[1].style.color="blue";
  document.querySelectorAll("a")[2].style.color="black";
  document.querySelectorAll("a")[3].style.color="black";
})



