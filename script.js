var buttons = document.getElementsByClassName('btn');

const handleClick = (e) => {

    let previousActiveBtn = document.getElementsByClassName('active-btn');
    let previousActiveExp = document.getElementsByClassName('active-exp');

    previousActiveBtn[0].setAttribute('class', 'btn');
    previousActiveExp[0].setAttribute('class', 'professional-experience');


    switch (e.target.getAttribute('id')) {

        case "btn-home":
            window.location.href = './index.html';
            break;

        case "btn-about-us":
            window.location.href = './about-us.html';
            break;

        case "btn-contact":
            window.location.href = './contact.html'
            break;

        default:
            document.getElementById('btn-home').setAttribute('class', 'btn active-btn');
            document.getElementById('home').setAttribute('class', 'top-fleet active-exp');
    }
}

const setActiveBtn = (item) => {
    item.target.setAttribute('class', 'btn active-btn');
}

const setActiveExp = (company) => {
    document.getElementById(company).setAttribute('class', 'professional-experience active-exp');
}

const handleButtonsHamburger = (buttons, isVisble) => {

    for (let button of buttons) {
        button.setAttribute('style', isVisble ? 'display:block' : 'display:none');
    }
}

const handleHamburgerMenu = () => {

    let menuBar = document.getElementById('menu');

    if (menuBar.getAttribute('class') === 'closed') {

        menuBar.setAttribute('class', 'open');
        menuBar.setAttribute('style', 'height: 20rem; align-items: flex-start');

        handleButtonsHamburger(document.getElementsByClassName('btn'), true);

    } else {

        menuBar.setAttribute('class', 'closed');
        menuBar.setAttribute('style', 'height: 3rem');

        handleButtonsHamburger(document.getElementsByClassName('btn'), false);

    }
}

const controlResizeAndOrientationChange = () => {

    let menuBar = document.getElementById('menu');

    if (screen.width > 671) {

        menuBar.removeAttribute('style');
        menuBar.setAttribute('class', 'closed');

        handleButtonsHamburger(buttons, true);

    } else {

        if (menuBar.getAttribute('class') === 'closed') {
            handleButtonsHamburger(document.getElementsByClassName('btn'), false);
        }
    }
}

for(button of buttons){
    button.addEventListener('click', (e) => handleClick(e), false);
}

window.addEventListener('resize', controlResizeAndOrientationChange);

window.addEventListener("orientationchange", controlResizeAndOrientationChange);


$(document).ready(function(e){
    $('#contact-form').on('submit', function(event) {
        
        event.preventDefault();
        var formData = new FormData(this);
        formData.append('service_id', 'service_ub2aq6y');
        formData.append('template_id', 'template_mga6b9i');
        formData.append('user_id', 'Pyj2SYyTA7pMMpTeZ');
        
        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false 
        }).done(function() {
            alert('Your mail is sent!');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    });
})