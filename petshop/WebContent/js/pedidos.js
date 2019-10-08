const div = document.querySelector("#pedidos");
	var codigo = "";	
	var index=0;
	db.collection("Pedidos").get().then(
		function(query){
			query.forEach(
				function(doc){

					var prods = [];

					var total = doc.data().total;	
					
					//produtos do pedido
					doc.data().produtos.forEach(
					function(prod){
						prods.push(prod);
					});
					
					index++;
					div.innerHTML+=`
						<div class="card-header" style="width: 100%; background-color:#f5f5f5; margin-right:550px; margin-left: 50px;">
				            <ul class="nav nav-tabs card-header-tabs justify-content-center">
				                <li class="nav-item">
				                    <button class="nav-link active" onclick='tela1("`+index+`", "`+doc.id+`", "`+total+`")' id="botaoNav" style="font-weight: bold">Detalhes do Pedido</button>
				                </li>
				                <li class="nav-item">
				                    <button class="nav-link active" onclick='tela2("`+index+`", "`+doc.id+`")' id="botaoNav" style="font-weight: bold">Status do Pedido</button>
				                </li>
				                <li class="nav-item">
				                    <button class="nav-link active" onclick='tela3("`+index+`", "`+doc.id+`")' id="botaoNav" style="font-weight: bold">Informa\u00e7\u00f5es do cliente</button>
				                </li>
						    </ul>
						  </div>
						  <div class="card-body" style='background-color: #f5f5f5;' id="body`+index+`">
						    <p class="card-text"></p>						    
						    `;
					var body = document.querySelector("#body"+index);
					prods.forEach(
							function(prod){
								body.innerHTML += "<p style='color: #42210D;font-weight: 700;'>- Produto (quant.): "+prod.quantidade+"x "+prod.titulo+"</p>";
								body.innerHTML += "<p style='color: #42210D;font-weight: 700;'>- Marca: "+prod.marca+"</p>";
							}
						);
						body.innerHTML += "<p style='color: #42210D;font-weight: 700;'>- Total: R$ "+total+"</p>";
					div.innerHTML+=`</div>
						</div>
					`;
				}
			);
		}
	);	
	
	function tela1(num, id, total){
		var contador=0;
		var html="";
		var body = document.querySelector("#body"+num);

		db.collection("Pedidos").doc(id).get().then(function(doc){
				doc.data().produtos.forEach(
					function(prod){
						contador++;
						html+= "<p style='color: #42210D;font-weight: 700;'>- Produto (quant.): "+prod.quantidade+"x "+prod.titulo+"</p>";
						html+= "<p style='color: #42210D;font-weight: 700;'>- Marca: "+prod.marca+"</p>";
					}
				);
			html+="<p style='color: #42210D;font-weight: 700;'>- Total: R$ "+total+"</p>";
			body.innerHTML=html;
		});


	}
	
	function tela2(num, id){
		db.collection("Pedidos").doc(id).onSnapshot(
			function(doc){
				document.querySelector("#body"+num).innerHTML = `
					<div class="card-body" style='background-color: #f5f5f5;'>
		                <br>
		                <br>
		                <button onclick='alterarStatus(1, "${id}")' id="status1`+id+`" class="btn btn-primary" style='width: 140px; font-weight: 700; height: 130px; background-color:white; color: rgb(184,184,184); text-transform: uppercase; text-decoration: none; padding: 20px; border-radius: 50%; display: inline-block; border: none; transition: all 0.4s ease 0s; margin-left: 20px; margin-right: 20px;'>Prepara\u00e7\u00e3o</button>
		                <button onclick='alterarStatus(2, "${id}")' id="status2`+id+`" class="btn btn-primary" style='width: 140px; font-weight: 700; height: 130px; background-color:white; color: rgb(184,184,184); text-transform: uppercase; text-decoration: none; padding: 20px; border-radius: 50%; display: inline-block; border: none; transition: all 0.4s ease 0s; margin-left: 20px; margin-right: 20px;'>Transporte</button>
		                <button onclick='alterarStatus(3, "${id}")' id="status3`+id+`" class="btn btn-primary" style='width: 140px; font-weight: 700; height: 130px; background-color:white; color: rgb(184,184,184); text-transform: uppercase; text-decoration: none; padding: 20px; border-radius: 50%; display: inline-block; border: none; transition: all 0.4s ease 0s; margin-left: 20px; margin-right: 20px;'>Entregue</button>
		       
		            </div>
				`;
				
				for(var i=doc.data().status; i>0; i--){
					document.querySelector("#status"+i+""+id).style.backgroundColor= "limegreen";
					document.querySelector("#status"+i+""+id).style.color= "white";
				}
			}
		);
	}
	
	function tela3(num, id){
		db.collection("Pedidos").doc(id).get().then(
			function(docPed){
				db.collection("Usuarios").doc(docPed.data().usuario).get().then(function(docUser){
					
					fetch('https://viacep.com.br/ws/'+docPed.data().cep+'/json/').then(
							function(resposta){
								return resposta.json();
							}
						).then(function(endereco){
							console.log(endereco);
							document.querySelector("#body"+num).innerHTML = `
								<p style='color: #42210D;font-weight: 700;'>- Cliente: `+docUser.data().nome+` `+docUser.data().sobrenome+`</p>
								<p style='color: #42210D;font-weight: 700;'>- Estado: `+endereco.uf+`</p>
								<p style='color: #42210D;font-weight: 700;'>- Cidade: `+endereco.localidade+`</p>
								<p style='color: #42210D;font-weight: 700;'>- Bairro: `+endereco.bairro+`</p>
								<p style='color: #42210D;font-weight: 700;'>- Rua: `+endereco.logradouro+`</p>
								<p style='color: #42210D;font-weight: 700;'>- N\u00famero: `+docPed.data().numero+`</p>
							`;
						});
					
				});
			}
		);
		
		
	}
	
	function alterarStatus(num, id){
		db.collection("Pedidos").doc(id).update({
			status: num
		}).then(function() {
			swal({
				title : "Status alterado!",
				icon : "success",
				button : "OK",
			})
		});
}