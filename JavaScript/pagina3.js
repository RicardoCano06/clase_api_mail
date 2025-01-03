document.addEventListener('DOMContentLoaded', function() {
    console.log("Script de página 3 cargado correctamente");

    const loginPageButton = document.getElementById('loginPage');
    const paginaPrincipalButton = document.getElementById('paginaPrincipal');
    const pagina4Button = document.getElementById('pagina4');

    // Navegación entre páginas
    if (loginPageButton) {
        loginPageButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    if (paginaPrincipalButton) {
        paginaPrincipalButton.addEventListener('click', function() {
            window.location.href = 'pagina2.html';
        });
    }

    if (pagina4Button) {
        pagina4Button.addEventListener('click', function() {
            window.location.href = 'pagina4.html';
        });
    }

    document.getElementById('personalDataForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Formulario enviado");

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        console.log("Datos del formulario:", {
            firstName: firstName,
            lastName: lastName,
            age: age,
            address: address,
            phone: phone,
            email: email,
            city: city,
            country: country
        });

        emailjs.send("service_ab8c7ns", "template_qdwwn9q", {
            firstName: firstName,
            lastName: lastName,
            age: age,
            address: address,
            phone: phone,
            email: email,
            city: city,
            country: country
        })
        .then((response) => {
            console.log("Correo enviado con éxito", response.status, response.text);
            alert("Datos enviados con éxito.");
            document.getElementById('personalDataForm').reset();
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
            alert("Hubo un error al enviar los datos.");
        });
    });
});