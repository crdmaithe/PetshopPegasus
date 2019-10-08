//1709
  const imagem = document.querySelector("#imagem");
  const cadastroProduto = document.querySelector("#cadastroProduto");
  
  const titulo = document.querySelector("#titulo");
  const especie = document.querySelector("#especie");
  const marca = document.querySelector("#marca");
  const descricao = document.querySelector("#descricao");
  const preco = document.querySelector("#preco");
  const estoque = document.querySelector("#estoque");
  const categoria = document.querySelector("#categoria");
  const promocao = document.querySelector("#promocao");
  const table = document.getElementById('tabla'); 
  const botoes = document.querySelector("#botoes");  
	  
  function disabled(){
	  titulo.setAttribute("disabled", true);
	  especie.setAttribute("disabled", true);
	  marca.setAttribute("disabled", true);
	  descricao.setAttribute("disabled", true);
	  preco.setAttribute("disabled", true);
	  estoque.setAttribute("disabled", true);
	  categoria.setAttribute("disabled", true);
	  promocao.setAttribute("disabled", true);
	  
	  setTimeout(
			  function(){ 
				  enabled();
			  }, 2800);
	  
  	}
  
  function enabled(){
	  titulo.removeAttribute("disabled");
	  especie.removeAttribute("disabled");
	  marca.removeAttribute("disabled");
	  descricao.removeAttribute("disabled");
	  preco.removeAttribute("disabled");
	  estoque.removeAttribute("disabled");
	  categoria.removeAttribute("disabled");
	  promocao.removeAttribute("disabled");
  	}
  
  function numAleatorio() {
	  return Math.random() * (99999999 - 11111) + 11111;
	}
  
	    db.collection("Produtos").get().then((querySnapshot) => {
	        querySnapshot.forEach((doc) => {
	            categoria.innerHTML += "<option value="+doc.id+">"+doc.data().titulo+"</option>"
	        });
	    });

  //ADICIONAR IMAGEM AO STORAGE THEN CADASTRAR PRODUTO NO FIREBASE
  document.getElementById("boton").addEventListener("click", function(){
	  disabled();
	  var storageRef = firebase.storage().ref().child(imagem.files[0].name+numAleatorio());
	  
	  var imageRef = storageRef.put(imagem.files[0]).then(
			  function(url){
				  url.ref.getDownloadURL().then(function(urlImg){
					  
					  if(promocao.value=="null"){
						  db.collection("Produtos").doc(categoria.value).collection("itens").add({
							  	titulo : titulo.value,
							    especie : especie.value,
							    marca : marca.value,
							    descricao : descricao.value,
							    preco : parseFloat(preco.value),
							    estoque : parseInt(estoque.value),
							    imagem : urlImg
						  }).then(function(doc){
							  addRow(doc.id, urlImg);
							  cancelar();
							  swal({
								  title: "Vamos vender!",
								  text: "Seu produto foi adicionado.",
								  icon: "success",
								  button: "OK",
								});	
						  });
					  }else{
						  db.collection("Produtos").doc(categoria.value).collection("itens").add({
							  	titulo : titulo.value,
							    especie : especie.value,
							    marca : marca.value,
							    descricao : descricao.value,
							    preco : parseFloat(preco.value),
							    estoque : parseInt(estoque.value),
							    imagem : urlImg,
							    desconto : promocao.value
						  }).then(function(doc){
							  addRow(doc.id, urlImg);
							  cancelar();
							  swal({
								  title: "Vamos vender!",
								  text: "Seu produto foi adicionado.",
								  icon: "success",
								  button: "OK",
								});	
						  });	
					  }					  
				  });
			  }
	  );
	  
	});
  
  	function addRow(idDoc, imagem){
  		var desconto;
	    var desconto2;
	    if(promocao.value=="null"){
			desconto="Sem promo\u00e7\u00e3o";
			desconto2=null;
		}else{
			desconto=promocao.value;
			desconto2=promocao.value;
		}
  		var now = new Date();  
  		var secondsSinceEpoch=0;
  		var secondsSinceEpoch = Math.round(now.getTime() / 1000);
  		tabla.insertRow(0).id=secondsSinceEpoch;
  		document.getElementById(secondsSinceEpoch).innerHTML=`
  			<td>`+titulo.value+`</td>
  			<td>`+categoria.value+`</td>
	        <td>`+especie.value+`</td>
	        <td>`+marca.value+`</td>
	        <td>`+descricao.value+`</td>
	        <td>`+preco.value+`</td>
	        <td>`+desconto+`</td>
	        <td>`+estoque.value+`</td>
	        <td><a href="#cadastroProduto"><button class="btn btn-warning" onclick=
	        "alterar('${idDoc}', '${titulo.value}','${especie.value}',
	        '${marca.value}', '${descricao.value}','${preco.value}',
	        '${estoque.value}', '${desconto2}', '${categoria.value}', '${imagem}'
	        , '${secondsSinceEpoch}')">Editar</button></a></td>
	        <td><button class="btn btn-dark" onclick='excluir("`+categoria.value+`", "`+idDoc+`", 
	        "`+imagem+`", "`+secondsSinceEpoch+`")'>Excluir</button></td>
  		`;
  		
  	}
  		
  	function gerarTabela(){
  	  var index=0;
	  db.collection("Produtos").get().then(
				function(query){
					query.forEach((doc)=>{
						doc.ref.collection("itens").get().then(
							function(query2){
								query2.forEach((prod)=>{
									var desconto;
									if(prod.data().desconto==null){
										desconto="Sem promo\u00e7\u00e3o";
									}else{
										desconto=prod.data().desconto;
									}
									tabla.innerHTML +=`
								        <tr id=`+index+`>
								        <td>${prod.data().titulo}</td>
								        <td>${doc.id}</td>
								        <td>${prod.data().especie}</td>
								        <td>${prod.data().marca}</td>
								        <td>${prod.data().descricao}</td>
								        <td>${prod.data().preco}</td>
								        <td>`+desconto+`</td>
								        <td>${prod.data().estoque}</td>
								        <td><a href="#cadastroProduto"><button class="btn btn-warning" onclick=
								        "alterar('${prod.id}', '${prod.data().titulo}','${prod.data().especie}',
								        '${prod.data().marca}', '${prod.data().descricao}','${prod.data().preco}',
								        '${prod.data().estoque}', '${prod.data().desconto}', '${doc.id}', '${prod.data().imagem}'
								        , '${index}')">Editar</button></a></td>
								        <td><button class="btn btn-dark" onclick='excluir("`+doc.id+`", "`+prod.id+`", 
								        "`+prod.data().imagem+`", "`+index+`")'>Excluir</button></td>
								        </tr>
								        `;
									index++;
								});
							}
						);
					});
				}	  
			  );
  	}
  	
  	gerarTabela();

  
  	function excluir(categoria, id, imgUrl, i){
  	  var refImg = firebase.storage().refFromURL(imgUrl);
  		  db.collection("Usuarios").get().then(function(query){
  			  query.forEach(function(user){
  				 user.ref.collection("carrinho").get().then(function(prods){
  					 prods.forEach(
  						function(prod){
  							if(prod.id==id){
  								prod.ref.delete();
  							}
  						}
  					 );
  				 }); 
  			  });
  		  }
  	  );
  		  refImg.delete().then(function(){
  			  
  			  db.collection("Produtos").doc(categoria).collection("itens").doc(id).delete().then(
  					  function(){
  							  var rowIndex = document.getElementById(i).rowIndex-1;
  							  table.deleteRow(rowIndex);
  							  zerarCampos();
  							swal({
								  title: "E l\u00e1 se foi!",
								  text: "Seu produto foi apagado.",
								  icon: "success",
								  button: "OK",
								});
  						});	
  			  
  		  })
    }
  
  
  function zerarCampos(){
	  
	  titulo.value= "";
	  especie.value= "todas";
	  marca.value= "";
	  descricao.value= "";
	  preco.value= "";
	  estoque.value= "";
	  categoria.value= categoria.options[0].value;
	  promocao.value= null;
	  imagem.value = null;
	  document.getElementById('img').src='';
  }
  
  function alterar(id, titulo, especie, marca, descricao, preco, estoque, promocao, categoria, image, idRow){

	  	document.getElementById('img').src=image;
	    document.getElementById('titulo').value = titulo;
	    document.getElementById('especie').value = especie;
	    document.getElementById('marca').value = marca;
	    document.getElementById('descricao').value = descricao;
	    document.getElementById('preco').value = preco;
	    document.getElementById('estoque').value = estoque;
	    document.getElementById('categoria').value = categoria;
	    
	    if(promocao=="undefined"){
	    	document.getElementById('promocao').value="null";
	    }else{
	    	document.getElementById('promocao').value=promocao;
	    }
	    
	    botoes.innerHTML = `
	  		<button class="btn btn-dark" style="border: 0; text-align: center; outline: none; color: white; transition: 0.25s; cursor: pointer; margin-bottom: 10px;" onclick='cancelar()'>Cancelar</button>
	  		<button class="btn btn-warning" style="border: 0; text-align: center; outline: none; color: white; transition: 0.25s; cursor: pointer; margin-bottom: 10px;" onclick='mudouCategoria("`+id+`", "`+categoria+`", "`+image+`", "`+idRow+`")'>Alterar item</button>
		  	`;  
  }
  
  function mudouCategoria(id, lastCategoria, imgUrl, idRow){
	  disabled();
	  if(lastCategoria==categoria.value){
		  alterarBanco(id, imgUrl, idRow);
	  }else{
		  db.collection("Produtos").doc(lastCategoria).collection("itens").
		  doc(id).get().then(function(doc){
			  db.collection("Produtos").doc(categoria.value).collection("itens").
			  add(doc.data()).then(function(novoDoc){
				  doc.ref.delete();
				  alterarBanco(novoDoc.id, imgUrl, idRow);
			  });
		  });
	  }
	  
  }
  
  function alterarBanco(id, imgUrl, idRow){
	  if(imagem.files[0]==null){
		  if(promocao.value=="null"){
			  db.collection("Produtos").doc(categoria.value).collection("itens").doc(id).update({
				  	titulo : titulo.value,
				    especie : especie.value,
				    marca : marca.value,
				    descricao : descricao.value,
				    preco : parseFloat(preco.value),
				    estoque : parseInt(estoque.value),
			  }).then(function(){
				  alterarRow(idRow, id, imgUrl);
				  window.location.href = "#"+idRow;
				  cancelar();
				  swal({
					  title: "Ele precisava mudar!",
					  text: "Seu produto foi modificado.",
					  icon: "success",
					  button: "OK",
					});  
			  });
		  }else{
			  db.collection("Produtos").doc(categoria.value).collection("itens").doc(id).update({
			  	titulo : titulo.value,
			    especie : especie.value,
			    marca : marca.value,
			    descricao : descricao.value,
			    preco : parseFloat(preco.value),
			    estoque : parseInt(estoque.value),
			    desconto : promocao.value
			  }).then(function(){
				  alterarRow(idRow, id, imgUrl);
				  window.location.href = '#${idRow}';
				  cancelar();
				  swal({
					  title: "Ele precisava mudar!",
					  text: "Seu produto foi modificado.",
					  icon: "success",
					  button: "OK",
					});  
			  });
		  }
	  }else{
		  var storageRef = firebase.storage().ref().child(imagem.files[0].name+numAleatorio());
		  
		  var imageRef = storageRef.put(imagem.files[0]).then(
				  function(url){
					  url.ref.getDownloadURL().then(function(novaimg){
						  firebase.storage().refFromURL(imgUrl).delete();
						  if(promocao.value=="null"){
							  db.collection("Produtos").doc(categoria.value).collection("itens").doc(id).update({
								  	titulo : titulo.value,
								    especie : especie.value,
								    marca : marca.value,
								    descricao : descricao.value,
								    preco : parseFloat(preco.value),
								    estoque : parseInt(estoque.value),
								    imagem : novaimg
							  }).then(function(){
								  alterarRow(idRow, id, novaimg);
								  cancelar();
								  swal({
									  title: "Ele precisava mudar!",
									  text: "Seu produto foi modificado.",
									  icon: "success",
									  button: "OK",
									});  
							  });
						  }else{
							  db.collection("Produtos").doc(categoria.value).collection("itens").doc(id).update({
								  	titulo : titulo.value,
								    especie : especie.value,
								    marca : marca.value,
								    descricao : descricao.value,
								    preco : parseFloat(preco.value),
								    estoque : parseInt(estoque.value),
								    imagem : novaimg,
								    desconto : promocao.value
							  }).then(function(){
								  alterarRow(idRow, id, novaimg);
								  cancelar();
								  swal({
									  title: "Ele precisava mudar!",
									  text: "Seu produto foi modificado.",
									  icon: "success",
									  button: "OK",
									});  
							  });
						  }
						  
					  });
				  }
		  );
	  }
  }
  
  function cancelar(){
	  zerarCampos();
	  botoes.innerHTML = `
	  		<button class="btn btn-dark" id="boton" style="margin-bottom: 10px;">Cadastrar</button>
	`;	  
  }
  
  function alterarRow(idRow, idDoc, imagem){
	    var desconto;
	    var desconto2;
	    if(promocao.value=="null"){
			desconto="Sem promo\u00e7\u00e3o";
			desconto2=null;
		}else{
			desconto=promocao.value;
			desconto2=promocao.value;
		}
	  document.getElementById(idRow).innerHTML=`
		  	<td>`+titulo.value+`</td>
		  	<td>`+categoria.value+`</td>
	        <td>`+especie.value+`</td>
	        <td>`+marca.value+`</td>
	        <td>`+descricao.value+`</td>
	        <td>`+preco.value+`</td>
	        <td>`+desconto+`</td>
	        <td>`+estoque.value+`</td>
	        <td><a href="#cadastroProduto"><button class="btn btn-warning" onclick=
	        "alterar('${idDoc}', '${titulo.value}','${especie.value}',
	        '${marca.value}', '${descricao.value}','${preco.value}',
	        '${estoque.value}', '${desconto2}', '${categoria.value}', '${imagem}'
	        , '${idRow}')">Editar</button></a></td>
	        <td><button class="btn btn-dark" onclick='excluir("`+categoria.value+`", "`+idDoc+`", 
	        "`+imagem+`", "`+idRow+`")'>Excluir</button></td>
		`;
  }
