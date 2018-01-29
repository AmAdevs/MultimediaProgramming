       function greet(){
            var txtName = document.getElementById('txtName');
            var userName = txtName.value;   
            var output = document.getElementById('output');
            output.innerHTML = "Hi, " + userName; 
            //alert("Hello World " + userName);
            // alert("Hi " + txtName.value)
        }