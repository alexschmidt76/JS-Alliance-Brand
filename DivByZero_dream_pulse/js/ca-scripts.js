var customerName = "Alliance  ";

function addCustomerName() {

    let title = document.getElementById('title');
    title.textContent = customerName;
    
    let h1 = document.querySelector('h1');
    h1.textContent = customerName;

    let introheader = document.getElementById('introheader');
    introheader.textContent = customerName;

};

function toggleColors() {

    let whiteRects = document.querySelectorAll('.tm-white-rect');
    whiteRects.forEach(rect => {
        rect.classList.add('tm-blue-rect');
        rect.classList.remove('tm-white-rect');
    });

};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

}; 



