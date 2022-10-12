function validateName(){
    var name = document.Form.Name.value;
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name)){
        alert('Ingrese un nombre valido');
        return false;
    }
    return true;
}


function validateEmail() {
    var emailID = document.Form.Email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Por favor ingrese un Email correcto")
       document.Form.Email.focus() ;
       return false;
    }
    return( true );
 }

function submitForm(){
    
    let name = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let text = document.getElementById("textarea").value;
    
    let form = {Nombre:name, Email:email,Mensaje:text}
    var json = JSON.stringify(form);

    console.log(json)
    // document.getElementById("Form").submit();

}
function validation(){
    if( document.Form.Name.value == "" ) {
        alert( "Por favor introduce tu nombre" );
        document.Form.Name.focus() ;
        return false;
     }else{
        validateName()
        if( document.Form.Email.value == "" ) {
            alert( "Por favor introduce tu Email!" );
            document.Form.Email.focus() ;
            return false;
         }else{
            validateEmail()
            if( document.Form.Textarea.value == "" ) {
                alert( "Por favor introduce un mensaje" );
                document.Form.Textarea.focus() ;
                return false;
             }else{
                submitForm()
             }
        
        }
    
    
    }

     

   

    
}