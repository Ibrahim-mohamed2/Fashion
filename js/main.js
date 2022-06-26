//start button to top
let btn = document.querySelector(".button-to-top");
window.onscroll = function ()
{
    if (window.scrollY >= 300) {
        btn.style.display = "block";
    } else
    {
        btn.style.display = "none";
        }
    }
btn.onclick = function ()
{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
//end button to top


//start active navbar
let links = document.querySelectorAll(".navbar .nav-item .nav-link");
let arraylinks = Array.from(links);
arraylinks.forEach(e => {
    e.addEventListener("click", function (ele) {
        arraylinks.forEach(e => {
            e.classList.remove("active");
        });
        ele.currentTarget.classList.add("active");
    });
});
//end active navbar


