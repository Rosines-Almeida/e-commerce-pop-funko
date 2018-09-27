//Página index
function renderIndex(){
    console.log('ok')
    return `
    <div class= "img-index" style="background-image: url(teste.jpg);">
        <h3> Página do index </h3>
        <h5> Uma imagem aqui </h5>
      

        <img class = "img-index" src = "teste.jpg" > 
         <a class="nav-link"  href="/products">Produtos</a>
     </div>
   `  
 } 
//  <img class = "img-index" src ="/dist/download.png" > 
//  <img class = "img-index" src = "download.png" > 
//  <img class = "img-index" src = "(teste.jpg);" ></img>
// 

//     <img class = "img-index" src ="teste.jpg" > 
// function renderCard() {}

//Página dos produtosn 
function renderProductsList(products) {
    // console.log(products.results);
     
        var docs = products.results; //a apartir do respons está acessando a api que é um objeto
        console.log('docs',docs)
        // exibePosts();
        return `
          <div class="area-item"> ${docs.map(docs => 
            `<div class="item">
                <h3 class="demo">${docs.title}<h3>

                 <img src="${docs.thumbnail}" "width="200" height="200" > 
                 <p class="demo" > R$ ${docs.price}</p>
                 <div id="teste">
                 <button class = "demo" id ="btn" type="button" value ="${docs.title}"onclick="addCarrinho()"  >Adicionar a estante</button>
                
                 </div>
            </div>
        `).join("")}
        </div>`
         
 
}

//testando value do botão
function addCarrinho(event){
    
    // event.preventDefault();
    const products = new XMLHttpRequest(); // nova requisição /XMl É UM OBJETO para acessar com alguns método, no caso open, 
    // console.log('products',products)
    products.open("GET",`
    https://api.mercadolibre.com/sites/MLB/search?q=pop funko`);
     //PEGANDO PARAMETROS DO CMT
    //sequencia sempre a mesma
    products.onload = carregarProdutos; //método onload depois que os dados forem carregados = o que será feito depois s
    // pegarNoticia.onerror = erro; //mostrar erro 
    products.send(); 
    return carregarProdutos();

}

function carregarProdutos(){
    docs = JSON.parse(this.responseText).results; //a apartir do respons está acessando a api que é um objeto
    console.log('docscarrega',docs)
    addLocalStorage();
}
function addLocalStorage(){
    
    for (var results of docs) {
        var botao = document.getElementById("btn").value[0];
      
     localStorage.setItem('produto',botao)   
}
}
 
//  /Funções para addicionar no local storage
function addCarrinho(event){
    // event.preventDefault();
    const products = new XMLHttpRequest(); // nova requisição /XMl É UM OBJETO para acessar com alguns método, no caso open, 
    console.log(products)
    products.open("GET",`
    https://api.mercadolibre.com/sites/MLB/search?q=pop funko`);
     //PEGANDO PARAMETROS DO CMT
    //sequencia sempre a mesma
    products.onload = carregarProdutos; //método onload depois que os dados forem carregados = o que será feito depois s
    // pegarNoticia.onerror = erro; //mostrar erro 
    products.send(); 
    return carregarProdutos();

}

// function carregarProdutos(){
//     docs = JSON.parse(this.responseText).results; //a apartir do respons está acessando a api que é um objeto
//     console.log('docscarrega',docs)
//     addLocalStorage();
// }
// function addLocalStorage(){
//     // console.log('id', docs[0].title )
//     for  (var results of docs){
       
//         console.log(results.title)
//       localStorage.setItem('produto', results.title)   
// }
// }
// function addListCart(name, price){

//     let itemsCart= [];

//     //variable para crear un objeto en donde se sustituira los atributos encontrados 
//     let itemSelected= {
//         name: name,
//         price: price,
//     }

//     //Accediendo a local storage
//     if(window.localStorage.eCommerceJewel){
//         console.log('existe!');
//         //Si ya hay datos en el localStorage se meten en la variable para ralizar un array de objetos
//         itemsCart = JSON.parse(window.localStorage.eCommerceJewel);
//         console.log(itemsCart)
//     }
//     if(window.localStorage.eCommerceJewel){
//         console.log('existe!');
//         //Si ya hay datos en el localStorage se meten en la variable para ralizar un array de objetos
//         itemsCart = JSON.parse(window.localStorage.eCommerceJewel);
//         console.log(itemsCart)
//     }

//     //Cada articulo agregado se guarda en el array
//     itemsCart.push(itemSelected);
//     console.log('it',itemsCart.push(itemSelected))
//     window.localStorage.eCommerceJewel = JSON.stringify(itemsCart);//se hace en string

// }



 

    // let exibeBusca = document.getElementById("exibe-busca");
    // //criando templete para html//
    // exibeBusca.innerHTML = `
    // <div class="area-noticia"> ${docs.map(doc => `<div class="noticia">
    // <h3>${doc.title}<h3>
    // <h3>${doc.thumbnail}<h3>
    // <img src="${doc.thumbnail}"width="100" height="100" > 
    // <p>${doc.price}</p>
    // // <a href="${doc.web_url}">Link para original</a>
    // </div>
    // `).join("")}
    // </div>`;
// } 




// <img class = "img-index" src ="teste.jpg" > 
// "width="200px" "height="200px"

// 
    // function exibePosts (){ 
    //     //aparece o array com os produtos
    //     return `
    //       <div class="area-item"> ${docs.map(docs => 
    //         `<div class="item">
    //             <h3 class="demo">${docs.title}<h3>
                
               
    //              <img src="${docs.thumbnail}"width="100" height="100" > 
    //              <p> R$ ${docs.price}</p>
    //           </div>
    //     `).join("")}
    //     </div>`; 
    // }
       
        //nessa ele usou o map e join
   