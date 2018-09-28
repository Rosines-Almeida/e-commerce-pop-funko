function renderIndex(){
  console.log('ok')
  return `
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/dist/img/808fe-img_1341.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/dist/img/download.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/dist/img/808fe-img_1341.jpg " alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
`
}

function renderProductsList(products) {
  // console.log(products.results);
   
      var docs = products.results; //a apartir do respons está acessando a api que é um objeto
      console.log('docs',docs)
      // exibePosts();
      return `
        <div class="area-item"> ${docs.map(docs => 
          `<div class="item">
              <h3 id = 'title' class="demo">${docs.title}<h3>

               <img src="${docs.thumbnail}" "width="200" height="200" > 
               <p class="demo" > R$ ${docs.price}</p>
               <div id="teste">
               <button type="button"  id= "btn" class ="demo produto1"
                onclick="addCarrinho(['${docs.title}' , '${docs.thumbnail}', '${docs.price}', '${docs.id}', '${docs.attributes[0].value_name}'],)"> Adiconar ao carrinho </button> 
               
          </div>
          </div>
          `).join("")}
          </div>`
  }  

  function renderCarrinho () {

    return `
    <h2> Carrinho de compras</h2>
    <div class="media">
    <img id="price" src="productInf" width="200" height="200">  
    <div class="media-body">
      <h5 class="mt-0">Produtos adicionados </h5>
       <p id='main'> Carrinho Vazio  </p>
       <div id='title'> titulo </div>
    </div>
  </div>
    `
  }
  function addCarrinho(produto) {

    productInf = produto; 
    console.log(productInf)
    
    productTitle = productInf[0]
    // console.log('productTitle', productTitle)
    productPrice = productInf[1]
    // console.log('productPrice', productPrice)
    productValor = productInf[2]
    // console.log('productValor',productValor) 
    localStorage.setItem('title', productTitle);
    localStorage.setItem('price', productPrice);
    localStorage.setItem('valor', productValor);
     titleLocal = localStorage.getItem("title");
 
  
  }

  
 
     
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM 
 
  
   
   
  
 
//Página index




//index dando certo
// {/* <div class = "img-index" style = "background-image :url(/dist/img/808fe-img_1341.jpg );">
  
   
// <h3> Página do index </h3>
// <h5> Uma imagem aqui </h5>



//  <a class="nav-link"  href="/products">Produtos</a>

// // </div> */}

// <img class = "img-index" src =/dist/img/808fe-img_1341.jpg ></img> 
//   <div style = "background-image:url(/dist/download.png);">
//<img class = "img-index" src = /dist/download.png ></img>
//  <img class = "img-index" src = "(teste.jpg);" ></img>
// <img class = "img-index" src ="/dist/download.png" > 

//     <img class = "img-index" src ="teste.jpg" > 
// function renderCard() {}

//Página dos produtosn 
  
              
       
/*  */

/*Carrinho</a> */

/* <button class = "demo" id ="btn" type="button" value ="${docs.id}"onclick="addCarrinho()"  >Adicionar a estante</button> */
/* <a class="nav-link"  href="/carrinho"> <button type="button"  id = 'btn' class ="demo produto1" onclick="renderCarrinho('${docs.title}' + '${docs.price}', document.getElementById('qtd1'), '2.00', 1)"> Adiconar e ver carrinho </button> </a>
                */
 
//  function addCarrinho(produto, qtd, valor, posicao)
//  { 
//   var produtosLocal = produto; 
//   console.log('addCarrinho', produtosLocal)
//  localStorage.setItem('produto', produto);
//  localStorage.setItem("qtd" + posicao, qtd);
//  valor = valor * qtd;
//  localStorage.setItem("valor" + posicao, valor);
//  alert("Produto adicionado ao carrinho!");
//  return `
//  <div class="modal fade" id="modalRestautante">
//         <div class="modal-dialog modal-sm ">
//           <div class="modal-content px-5 py-2">
//             <div class="modal-header">
//               <button type="button" class="close" data-dismiss="modal">&times;</button>
//             </div>
//             <h2 id="name-restaurant"></h2>
//             <p id="type-modal">TIPO: </p>
//             <p id="description-modal">DESCRIÇÃO: </p>
//           </div>
//         </div>
//       </div>
//  `
// }






// function renderCarrinho () {

//   return `
//   <h2> Carrinho de compras</h2>
//   <div class="media">
//   <img id="price" src="productInf" "width="200" height="200">  
//   <div class="media-body">
//     <h5 class="mt-0">Produtos adicionados </h5>
//     <p id ='title2' >   </p>
//     <p>  valor =   </p>
//     <p class="mb-0">  Condição do produtos: </p>
//     <p class="mb-0"> Informação do vendedor</p> 

//     <button onclick="removeItem()">Click me</button>
  
//     <p class="mb-0"> </p>
//   </div>
// </div>
//   `
// }
 
 

 


function removeItem (){
  alert ('item removido');
  console.log('remove')
 
  localStorage.removeItem('title');
  localStorage.removeItem('price');
 localStorage.removeItem('id');
}





 


//  function addCarrinho(produto, qtd, valor, posicao) 
//  { 
//   produtosLocal = produto; 
//   arrayProdutosLocal =  produtosLocal
//   console.log('renderCarrinho', produtosLocal)
//  localStorage.setItem('produto', produto);
//  localStorage.setItem("qtd" + posicao, qtd);
//  valor = valor * qtd;
//  localStorage.setItem("valor" + posicao, valor);
//  document.getElementById("carrinho").innerHTML = localStorage.getItem("produto");
//  document.getElementById("cart").innerHTML = localStorage.getItem("produto");
//  alert("Produto adicionado ao carrinho!");
 
 
// }
//pegar todos os dados do botão, salvar em um array 
//e na página do carrinho separar as informações 
//
 

 
  

























// $('.btn').click(function () {
//   altert()
//   var inputValue = $('.user-text').val().toUpperCase();
//   consle.log(inputValue)
//   $("img").each(function () {
//     if ($(this).attr("alt") !== inputValue) {
//       $(this).fadeOut('slow');
//     }
//   });
// })

// //testando value do botão
// function addCarrinho(event){
    
//     // event.preventDefault();
//     const products = new XMLHttpRequest(); // nova requisição /XMl É UM OBJETO para acessar com alguns método, no caso open, 
//     // console.log('products',products)
//     products.open("GET",`
//     https://api.mercadolibre.com/sites/MLB/search?q=pop funko`);
//      //PEGANDO PARAMETROS DO CMT
//     //sequencia sempre a mesma
//     products.onload = carregarProdutos; //método onload depois que os dados forem carregados = o que será feito depois s
//     // pegarNoticia.onerror = erro; //mostrar erro 
//     products.send(); 
//     return carregarProdutos();

// }

// function carregarProdutos(){
//     docs = JSON.parse(this.responseText).results; //a apartir do respons está acessando a api que é um objeto
//     console.log('docscarrega',docs)
//     addLocalStorage();
// }
// function addCarrinho(){
   
//     var botao = document.getElementById("btn").value;
 
//     console.log(botao)
//      localStorage.setItem('produto',botao)   
// }
 


//  /Funções para addicionar no local storage
// function addCarrinho(event){
//     // event.preventDefault();
//     const products = new XMLHttpRequest(); // nova requisição /XMl É UM OBJETO para acessar com alguns método, no caso open, 
//     console.log(products)
//     products.open("GET",`
//     https://api.mercadolibre.com/sites/MLB/search?q=pop funko`);
//      //PEGANDO PARAMETROS DO CMT
//     //sequencia sempre a mesma
//     products.onload = carregarProdutos; //método onload depois que os dados forem carregados = o que será feito depois s
//     // pegarNoticia.onerror = erro; //mostrar erro 
//     products.send(); 
//     return carregarProdutos();

// }

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
 