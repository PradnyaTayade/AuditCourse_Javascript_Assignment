function registration()
          {
      
              var fname= document.getElementById("t1").value;
              var lname= document.getElementById("t2").value;
              var phone= document.getElementById("t3").value;
              var email= document.getElementById("t4").value;
              var pass= document.getElementById("t5").value;
              var selValue = document.querySelector('input[name="gender"]:checked').value;
              var e = document.getElementById("t6");
              var l = e.value;
              const checkboxes = document.querySelector('input[name="mail"]:checked').value;
    

              
              //email id expression code
              var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
              var letters = /^[A-Za-z]+$/;
              var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      
              function ValidateEmail(email) 
               {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
                 {
                   return (true)
                 }
                   alert("You have entered an invalid email address!")
                   return (false)
               }
               if(isNaN(phone)){
                   alert("Phone number should be in digits");
                   return false;
               }
               else if(phone.length!=10)
               {
                   alert("Phone number must be 10 digit number.");
                   return false;
               }
               
               else{
               alert("Thank you for your registration in this singing competition "+fname+"\nWe have saved your response as follows: "+"\nEmail : "+email+"\nPhone : "+phone+"\nGender : "+selValue
                     +"\nChoosen Genre : "+l +"\nYou have accepted all terms and conditions\nIf you want to change your response please mail on our offical email-id." ); 
               }
          resetForm()
          }
function resetForm() {
    var frm = document.getElementsByName('info-form')[0];
    frm.reset();  // Reset all form data
}