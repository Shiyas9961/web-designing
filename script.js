const menuBtn = document.querySelector('.menuBtn')
const sideBar = document.querySelector('.sideNav')

menuBtn.addEventListener("click",()=>{
    if(sideBar.style.right == "-250px" ){
        sideBar.style.right = "0"
    }else{
        sideBar.style.right = "-250px"
    }
})