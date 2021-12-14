
export  const tabs = () => {
    var tabLinks = document.querySelectorAll(".tablinks");
    var tabContent = document.querySelectorAll(".tabcontent");

    tabLinks.forEach(function(el) {
        el.addEventListener("click", openTabs);
    });

    function openTabs(el) {
        el.preventDefault();
        var btnTarget = el.currentTarget;
        var tab = btnTarget.dataset.tab;

        tabContent.forEach(function(el) {
            el.classList.remove("active");
        });

        tabLinks.forEach(function(el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + tab).classList.add("active");
        
        btnTarget.classList.add("active");
    }
}