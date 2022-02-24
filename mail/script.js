let mail = ['gino@mail.com', 'marco@mail.it', 'fra@mail.it', 'maria@mail.org', 'piero@mail.net', 'pero@mail.net', 'piro@mail.net', 'ale@mail.net', 'angela@mail.net', 'miele@mail.net',];
let login = false;
let risposta = document.querySelector('.risposta');
let insert = document.querySelector('#insert-mail');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    for (let i = 0; i < mail.length; i++) {
        if(mail[i] == insert.value){
            login = true
        }
    }
    
    if ( login == true ){
        risposta.innerHTML = 'access found';
    }else{
        risposta.innerHTML = 'negato';
    }
    
});
