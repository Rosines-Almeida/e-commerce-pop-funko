function renderIndex() {
	return `
  <div class='container-index'>
  <div class = "img-index" style = "background-image: url(./dist/img/808fe-img_1341.jpg);">
  <div class = "container h-100">
    <div class = "linha h-100 align-items-center">
      <div class = "col-12">
        <div class = " hero-content">
          <a href="/products" class=" mt-5 btn btn-outline-warning btn-index  text-btn"> Aumente sua coleção </a> 
        </ div>
      </ div>
    </ div>
  </ div>
</ div>
</div>
`
}

function renderProductsList(products) {
	var docs = products.results;
	return `
  <div class="area-item"> ${docs.map(docs => 
    `<div class="item">
        <h3 id = 'title' class="demo">${docs.title}<h3>

         <img src="${docs.thumbnail}" "width="200" height="100" > 
         <p class="demo font-weight-bold" > R$ ${docs.price}</p>
         <div id="teste">
          
         <button type="button" id= ${docs.id} class="btn btn-color btn-sm demo produto1"   onclick="addCarrinho(['${docs.title}' , '${docs.thumbnail}', '${docs.price}', '${docs.id}', '${docs.attributes[0].value_name}'],)"><i class="fas fa-cart-plus"></i>  </button>  
         
                    </div>
                    </div>
                    `).join("")}
                    </div>    
                    `
}

function renderCarrinho() {
	return `
    <h2 class="mt-0 title-card mt-5 ml-5"> Carrinho de compras</h2>
    <div class=" item-card media">
    <img id="img" src="productImg" "width="90" height="90">   
    <div class="media-body"> 
      <p id="produto" > </p>
      <span><strong> Preço </strong></span>
      <span id="price" class="mb-0 font-weight-bold"> </span>

      <div class ="d-flex justify-content-end">
      <button class= " btn btn-color btn-sm"onClick="removeItem()" class ="demo" id'remove'> Remover Item </button>
      </div >
      <p class="mb-0"> </p>
    </div>
  </div>
    `
}

function addCarrinho(produto) {
	if (typeof (Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		} else {
			localStorage.clickcount = 1;
		}
		document.getElementById("counter").innerHTML = localStorage.clickcount;
	} else {
		document.getElementById("counter").innerHTML = "Sorry, your browser does not support web storage...";
	}
	productInf = produto;
	productTitle = productInf[0]
	productImg = productInf[1]
	productPrice = productInf[2]
	localStorage.setItem('title', productTitle);
	localStorage.setItem('img', productImg);
	localStorage.setItem('price', productPrice);
	$('.btn').replaceWith(`<button class="remove-button text-white fw-600 m-1 pt-1 pb-1 pr-4 pl-4" id="${btn.id}" onclick="removeFromRecipeBook(this)">REMOVE</button>`);

}

function removeItem() {
	alert('item removido, atualize a página!');
	localStorage.removeItem('title');
	localStorage.removeItem('price');
	localStorage.removeItem('img');
}