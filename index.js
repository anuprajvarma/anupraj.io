
document.querySelector(".home").style.display="block";
document.querySelector(".about").style.display="none";
document.querySelector(".project").style.display="none";
document.querySelector(".blog").style.display="none";
document.querySelector(".blog-section").style.display="none";
document.querySelector(".close-icon").style.display="none";

document.querySelector(".home-menu").addEventListener("click",function(){
        document.querySelector(".home").style.display="block";
        document.querySelector(".about").style.display="none";
        document.querySelector(".project").style.display="none";
        document.querySelector(".blog").style.display="none";
        document.querySelector(".blog-section").style.display="none";
})
document.querySelector(".about-menu").addEventListener("click",function(){
  document.querySelector(".home").style.display="none";
  document.querySelector(".about").style.display="block";
  document.querySelector(".project").style.display="none";
  document.querySelector(".blog").style.display="none";
  document.querySelector(".blog-section").style.display="none";
})
document.querySelector(".project-menu").addEventListener("click",function(){
  document.querySelector(".home").style.display="none";
  document.querySelector(".about").style.display="none";
  document.querySelector(".project").style.display="block";
  document.querySelector(".blog").style.display="none";
  document.querySelector(".blog-section").style.display="none";
})
document.querySelector(".blog-menu").addEventListener("click",function(){
  document.querySelector(".home").style.display="none";
  document.querySelector(".about").style.display="none";
  document.querySelector(".project").style.display="none";
  document.querySelector(".blog").style.display="block";
  document.querySelector(".blog-section").style.display="none";
})

document.querySelector(".blog-heading").addEventListener("click",function(){
  document.querySelector(".blog-section").style.display="block";
  document.querySelector(".blog").style.display="none";
})

document.querySelector(".menu-icon").addEventListener("click",function(){
  document.querySelector(".close-icon").style.display="block";
  document.querySelector(".menu-icon").style.display="none";
})
document.querySelector(".close-icon").addEventListener("click",function(){
  document.querySelector(".menu-icon").style.display="block";
  document.querySelector(".close-icon").style.display="none";
})

