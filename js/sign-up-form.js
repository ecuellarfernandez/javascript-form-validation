$().ready(function(){
    $("#forms__form__register").validate({
       rules:{
           register_email:{
               required:true,
               email:true
           },
           register_password:{
               required:true,
               minlength:8
           },
           register_confirmPassword:{
               required:true,
               minlength:8,
               equalTo: "#register_password"
           },
           register_address:{
               required:true,
               minlength:3
           },
           register_region:{
               required:true
           },
           register_city:{
               required:true,
               minlength:3
           },
           register_zip:{
               required:true,
               minlength:5,
               maxlength:5,
               number: true
           },
           register_agree:{
               required:true
           }
       },
       messages:{
           register_email:{
               required:"Complete the field please",
               email:"Enter a valid mail please"
           },
           register_password:{
               required:"Complete the field please",
               minlength:"Minimum 8 characters"
           },
           register_confirmPassword:{
               required:"Complete the field please",
               minlength: "Minimum 8 characters",
               equalTo: "Must be the same as the password"
           },
           register_address:{
               required:"Complete the field please",
               minlength:"Minimum 3 characters"
           },
           register_region:{
               required:"Please select something"
           },
           register_city:{
               required:"Complete the field please",
               minlength:"Minimum 3 characters"
           },
           register_zip:{
               required:"Complete the field please",
               minlength:"Minimum 5 numbers",
               maxlength:"Max 5 numbers",
               number:"Only numbers"
           },
           register_agree:{
               required:"Accept the terms please"
           }
       }
    });
});