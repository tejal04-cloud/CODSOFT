document.addEventListener('DOMContententLoaded',()=>{
    const form = document.querySelector('form');

    form.addEventListener('submit',(e) =>{
        e.preventDefault();                                    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message){
            alert('Thankyou for your message,'+name+'!');
            form.reset();
        }else{
            alert('Please fill out all the field');

        }
        });
    });
     




















































































gj