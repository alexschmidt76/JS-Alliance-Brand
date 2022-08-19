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

    let socialLinks = document.getElementById('social-links');
    socialLinks.style.visibility = 'hidden';
};

 function addText() {

    let intropara1 = document.getElementById('intropara1');
    intropara1.textContent = 'Alliance was founded in 1931 by Albert Daniels.';

    let intropara2 = document.getElementById('intropara2');
    intropara2.textContent ='The company is a leader in P.C. Manufacturing';

     let aboutpara1 = document.getElementById('aboutpara1');
     aboutpara1.textContent = 'We deliver the best service this side of creation';

    let aboutpara2 = document.getElementById('aboutpara2');
    aboutpara2.textContent = 'Our motto is satisfaction guaranteed';

    let addresspara = document.getElementById('addresspara');
    addresspara.textContent = '1-800-565-5656';

}; 



