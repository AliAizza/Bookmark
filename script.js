function change_tab(element, target_line){
    let words = document.querySelectorAll('.word');
    let lines = document.querySelectorAll('.line');

    words.forEach(function(word){
        word.classList.remove('activeword');
    });
    lines.forEach(function(line){
        line.classList.remove('activeline');
    });

    element.classList.add('activeword');
    let line = document.getElementById(target_line);
    line.classList.add('activeline');

    let tab1 = document.querySelector('.tab1');
    let tab2 = document.querySelector('.tab2');
    let tab3 = document.querySelector('.tab3');

    if (target_line === 'line1'){
        tab1.style.transform = 'translateX(0)';
        tab2.style.transform = 'translateX(100%)';
        tab3.style.transform = 'translateX(200%)';
    }
    else if (target_line === 'line2'){
        tab1.style.transform = 'translateX(-100%)';
        tab2.style.transform = 'translateX(0)';
        tab3.style.transform = 'translateX(100%)';
    }
    else if (target_line === 'line3'){
        tab1.style.transform = 'translateX(-200%)';
        tab2.style.transform = 'translateX(-100%)';
        tab3.style.transform = 'translateX(0)';
    }
};

function toggle_paragraph(element){
    let arrow = element.querySelector('#arrow');
    element.classList.toggle('answer-shown');
    arrow.classList.toggle('image-clicked');
};

function check_email(){
    let email = document.getElementById('email');
    let error = document.getElementById('error');

    if (email.checkValidity())
    {
        email.classList.remove('not-valid');
        error.classList.remove('error-shown');
    }
    else{
        email.classList.add('not-valid');
        error.classList.add('error-shown');
    }
};

var reminder = 1;

function show_navbar(element){
    let nav = document.querySelector('.nav');
    let book = document.getElementById('booklogo');
    let body = document.body;
    
    if (reminder === 1)
    {
        element.src = 'images/icon-close.svg';
        reminder++;
        element.classList.add('active');
        nav.style.top = '0';
        book.style.opacity = '0';
        body.style.overflow = 'hidden';
    }
    else if(reminder === 2)
    {
        element.src = 'images/icon-hamburger.svg';
        reminder--;
        element.classList.remove('active');
        nav.style.top = '-130%';
        book.style.opacity = '1';
        body.style.overflow = 'visible';
    }
};