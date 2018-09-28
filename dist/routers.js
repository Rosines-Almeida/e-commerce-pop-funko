page ('/', index);
page ('/products', products ); 
page ('/carrinho', carrinho );//esta no head
// page ('/product/:productId', product); product id e variável 
page();

 

    function index(){
        console.log('ok oi')
        $("main").html(renderIndex());
         
    }
    
    async function products(){
        const mercadoLivreProducts = await getProducts()
        $("main").html(renderProductsList(mercadoLivreProducts)); 
      
    }
    function getProducts( ){
        return fetch ("https://api.mercadolibre.com/sites/MLB/search?q=popfunko").then((response)=> response.json())
        .then((json)=>json);
     
    }
    function carrinho(){
      
        $("main").html(renderCarrinho());
        document.getElementById("produto").innerHTML = localStorage.getItem("title");
        document.getElementById("img").src = localStorage.getItem("img");
        document.getElementById("price").innerHTML = 'Valor R$ '+ localStorage.getItem("price");
 
    }

     