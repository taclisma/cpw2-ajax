/*
Implemente um código JS que carrega imagens a medida que o usuário realiza a rolagem (scroll) até o final da página. Nesse sentido, siga os seguintes passos:

1 – Implemente um array contento pelo menos 15 endereços de imagens

2 – Crie uma função para escolher randomicamente uma imagem do array. Dica:

https://www.w3schools.com/js/js_random.asp

3 – Quando o usuário entrar na página carregue, por meio do DOM, conjunto de imagens randômicas na página e, quando o usuário realizar o scroll até o final, continue carregando infinitamente. Dica:

if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // você está no final da página
}
*/


// func do w3schools
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*
var urls = [{url : "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
{url : "https://images.unsplash.com/photo-1568878801942-6fc477a748db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJjaGl0ZWN0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
{url : "https://images.unsplash.com/photo-1542359498-13ebad248020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
{url : "https://images.unsplash.com/photo-1486551937199-baf066858de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80"}, 
{url : "https://images.unsplash.com/photo-1551946650-60a22105bcb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJjaGl0ZWN0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1507964878701-3fc78c90510f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFyY2hpdGVjdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1506499984411-860f50ae4acb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyY2hpdGVjdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1496134497985-0d86687e843e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFyY2hpdGVjdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1523285367489-d38aec03b6bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1422284763110-6d0edd657b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFyY2hpdGVjdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1506438186214-2b7b17c8f832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFyY2hpdGVjdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1506499802526-830edae0cb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFyY2hpdGVjdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"}, 
{url : "https://images.unsplash.com/photo-1561495376-dc9c7c5b8726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"}]; 
*/

var tela = document.getElementById("tela");
var link, x, doc;

//1
var xhr = new XMLHttpRequest;
//2
xhr.open("GET","https://jsonplaceholder.typicode.com/albums/1/photos",true)
//3
xhr.onreadystatechange = loadAjax;
window.onload = loadAjax;
//4
xhr.send();

function loadAjax(){
    if(xhr.readyState === 4 && xhr.status === 200){
        doc = xhr.response;
        doc = JSON.parse(doc); // sem essa linha nao funciona
        //console.log(doc[x].url);
    }
}

//// fim ajax

function loadImgs(){    
    
    for(let i = 0; i < 12; i++){
        
        let imgBlock = document.createElement("img");
        imgBlock.width = '200';
        x = getRndInteger(0, 40);
        link = doc[x].url;
        console.log(link)
        imgBlock.src = link;
        tela.appendChild(imgBlock);
    }
    
}

function scrolada(){
    //func prof
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // você está no final da página
        for(let i = 0; i < 3; i++){
            let imgScroll = document.createElement("img");
            imgScroll.width = '200';
            x = getRndInteger(0, 40);
            link = doc[x].url;
            console.log(link)
            imgScroll.src = link;
            tela.appendChild(imgScroll);
        }
        
    }
    
}
