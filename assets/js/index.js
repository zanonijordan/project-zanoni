window.sr = ScrollReveal({ reset: true });


sr.reveal('.intro-img', {duration: 2000});
sr.reveal('#logo-intro', {duration: 2000});
sr.reveal('.text-intro', {duration: 2500});
sr.reveal('.p-intro', {duration: 3000});

sr.reveal('#ale-lado', {duration: 2000});
sr.reveal('.aboutMe-description-text', {duration: 2500});
sr.reveal('.list-aboutMe', {duration: 3000});

/* --initial position */
let mainLocation = window.pageYOffset;
let menu = document.querySelector("#menu");

/* --event scroll */
window.addEventListener("scroll", function() {
    /* --show the location every time you scroll*/

    /* --where we are now */
    let currentOffSet = window.pageYOffset;

    /* --condition to hide or show the menu */
    if(mainLocation >= currentOffSet) {
        /* --if it is greater or equal it is displayed */
        menu.style.top = "0px";
    } else {
        /* --otherwise we hide it by adding a negative top */
        menu.style.top = "-105px";
    }
    /* --we update the main location */
    mainLocation = currentOffSet;
});
/* contact function */
function contact() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name == "" || email == "" || message == "") {
        alert("Please complete all fields");
    } else {
        alert("Thank you for your message, I will contact you soon");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica dos campos
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!firstName || !lastName || !email || !phone || !message) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }
        
        // Se todas as validações passarem, envia o formulário
        this.submit();
        
        // Opcional: Mostrar mensagem de sucesso (embora o redirecionamento já seja tratado pelo FormSubmit)
        alert('Mensagem enviada com sucesso!');
        
        // Opcional: Resetar o formulário após o envio
        this.reset();
    });
    
    // Função para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
