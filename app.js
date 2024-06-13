//-----script para abrir e fechar o menu em telas menores----
var sidemeu = document.getElementById("sidemenu");
     
function openmenu(){
    sidemeu.style.right = "0";
 }
function closemenu(){
    sidemeu.style.right = "-200px";
 }
//------------------------------------------------------------





 //-----script que envia dados do formulario para uma planilha no google docs-------

    const scriptURL = 'https://script.google.com/macros/s/AKfycbypNbZ4E4q31BzaIK9AeVXzsMMOC06v5IZT3gXi6e4D5Z2CZh2UYl44DvGYxdGx4MZ9qw/exec'
    const form = document.forms['contact-form']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Mensagem enviada com sucesso"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })

        .catch(error => console.error('Error!', error.message))

    })

    //----------------------------------------------------------------

