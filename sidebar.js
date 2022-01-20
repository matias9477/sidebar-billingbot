let arrow = document.querySelectorAll(".arrow");

for (let index = 0; index < arrow.length; index++) {
    arrow[index].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle("showMenu");
    });
}