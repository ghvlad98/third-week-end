
function validate() {
    let name = document.form.nome.value;
    if (name == "") {
        alert( "Please provide your name!" );
        document.form.nome.focus();
    }

    let surname = document.form.cognome.value;
    if (surname == "") {
        alert( "Please provide your surname!" );
        document.form.cognome.focus();
    }

    let identifier = document.form.matricola.value;
    if (identifier == "") {
        alert( "Please provide your identifier!" );
        document.form.matricola.focus();
    }

    if (isNaN(identifier)) {
        alert( "Please write only numbers for identifier!" );
        document.form.matricola.focus();
    }

    let region = document.form.regione.value;
    if (region == "") {
        alert( "Please provide your region!" );
        document.form.regione.focus();
    }

    let email = document.form.email.value;
    let tel = document.form.tel.value;
    if (email == "" && tel == "") {
        alert( "Please provide your email or you telephone number!" );
        document.form.email.focus();
        document.form.tel.focus();
    }

    return false;
}