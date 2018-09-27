page ('/', index);
page ('/products', products ); 
page ('/carrinho', carrinho );//esta no head
// page ('/product/:productId', product); product id e variável 
page();

    function index(){
        console.log('ok oi')
        $("main").html(renderIndex());
        //esta ´pegando a tag main do html e está renderizando para função renderIndex
     //essa função esta renderizando uma outra função que está no app.js    onde está os templetes 
    }
    //
    async function products(){
        const mercadoLivreProducts = await getProducts()
        $("main").html(renderProductsList(mercadoLivreProducts));//app.js renderProducts
        // $("#are-btn").html(addCarrinho(mercadoLivreProducts)); 
    }
    function getProducts( ){
        return fetch ("https://api.mercadolibre.com/sites/MLB/search?q=pop funko").then((response)=> response.json())
        .then((json)=>json);
     
    }
    function carrinho(){
      
        $("main").html(renderCarrinho());
        document.getElementById("produto").innerHTML = localStorage.getItem("title");
        document.getElementById("price").src = localStorage.getItem("price");
        document.getElementById("id").innerHTML = localStorage.getItem("id");
        //esta ´pegando a tag main do html e está renderizando para função renderIndex
     //essa função esta renderizando uma outra função que está no app.js    onde está os templetes 
    }

    // async function product(context){
    //     const mercadoLivreProduct = await getProduct (context.params.productId);
    //     $("main").html(renderProduct(mercadoLivreProduct));
    //     $("#js-cart").html(renderCart()); 

    // }

    // function getProduct(id) {
    //     return fetch ('').then((response) =>response.json())
    //     .then((json)=>json)
    // }