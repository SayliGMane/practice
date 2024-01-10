function validation(){
//    alert ("testing")
    // const email=document.login_form.login_form.email.value;
    // const password= document.login_form.password.value.length;
    const password= document.forms[0].password.value.length;
    const email = document.forms[0].email.value;
    if (password != 0 && password < 8)
    {
        alert ("passwprd should be greater than 8 char.")
    }
    if (email.endsWith('@dci-student.org')== false )
    {
        alert ("ERegister with DCI email ID")
    }


}