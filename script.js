const subscribe=document.querySelector('#sub-btn');
subscribe.addEventListener('click',()=>{
    let pattern = /[a-z\d]+@+[a-z]+.+[a-z]/;
    const err=document.querySelector('.err');
    err.innerHTML=""
    const emailInput=document.querySelector('#email');
    const email=emailInput.value;
    emailInput.classList.remove('err-cl')
    if(email){
        const testemail=pattern.test(email)
        if(testemail){
            let msgtext=email
            window.location.href = 'index2.html?t='+msgtext 
        }
        else{
            err.innerHTML='email invalid'
            emailInput.classList.add('err-cl')
        }
    }
    else{
        err.innerHTML='email input is empty'
        emailInput.classList.add('err-cl')
    }
})