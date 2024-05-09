  
        const msg=document.querySelector('.msg');
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const receivedText = urlParams.get("t");
        msg.innerHTML=receivedText
    