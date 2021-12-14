import {getFingerprint} from './collector.js';

export let renderForm = () => {

    let registerForm = document.getElementById("crud__user-form");
    let registerButton = document.getElementById("register-button");

    if(registerButton){

        registerButton.addEventListener("click", (event) => {

            event.preventDefault();
    
            let url = registerForm.action;
            let data = new FormData(registerForm);
            data.append("fingerprint",getFingerprint());
    
            let sendPostRequest = async () => {
        
                let request = await fetch(url, {
                    headers:{
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    method: 'POST', 
                    body: data
                })
                .then(response => {
                    if (!response.ok) throw response;
    
                    console.log(response.data);
    
                    return response.json();
                })
                .then(json => {
                    localStorage.setItem('token', json.data);
                    console.log(json.data);
                })
                .catch(error => {
                    
                    if(error.status == '400'){
    
                        error.json().then(jsonError => {
    
                            let errors = jsonError.data;
                            let labels = document.querySelectorAll("form label");  
    
                            Object.keys(errors).forEach( (key) => {
                                let errorMessage = document.createElement('li');
                                errorMessage.textContent = errors[key];
                                document.querySelector(".error-message").appendChild(errorMessage);
                                labels.forEach(function(el) {
                                    if(el.htmlFor == key){
                                        el.classList.add("input-error");
                                    }      
                                });
                            })
                        })   
                    }
    
                    if(error.status == '500'){
                        console.log(error);
                    }
                });
    
            };
    
            sendPostRequest();
            
        });
    }
};