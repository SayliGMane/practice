


function validation()
{
    const password= document.forms[0].password.value.length;
    const email = document.forms[0].email.value;
    if (password != 0 && password < 8)
    {
        alert ("Password should be greater than 8 char.")
        return false;
    }
    if (email.endsWith('@dci-student.org')== false )
    {
        alert ("ERegister with DCI email ID")
        return false;
    }
}

// Function to toggle the password
function ShowPassword()
{
    var EnteredPassword = document.getElementById("Password");
    if (EnteredPassword.type === "password") 
    {
        EnteredPassword.type = "text";
    } else 
    {
        EnteredPassword.type = "password";
    }
}



// Function to Activate and Deactivate the SignIn Button
function activateSubmit()
{    
    const password= document.forms[0].password.value;
    const email = document.forms[0].email.value;
    const SignIn_button = document.getElementById('SignInButton')

    if (password.length > 0 && email.length > 0)
    {
        
        SignIn_button.classList.remove("SignInDisabled")  
    }
    else
    {
        SignIn_button.classList.add("SignInDisabled")
    }
}


//  {  var flag=1;
//     if (flag == 1)
//     {
//         const EnteredPassword=document.getElementById("Password");
//         EnteredPassword.type = "EnteredPassword";
//         flag = 0;
//     }
//     else 
//     {
//         EnteredPassword.type = "text";
//     }
   
//   if (onclick.ShowPassword== true)
//   {
   

// function checkInput()
// {
//     const password= document.forms[0].password.value;
//     const email = document.forms[0].email.value;

//     if (password.length == 0 && email.length == 0)
//     {
//         alert ("Email and Password cannot be empty")
//         return false;
//     }
// }




