//AGENDAMENTO
 const date = document.querySelector("#btnCalendarAg");	
 const tabela = document.querySelector("#tabelaAg");	
 
 carregarTabela();

 function carregarTabela() {
	 document.getElementById("avisoAgenda").innerHTML="<div><p style='text-align: center; color:#42210D; font-weight: bold; font-size:22px;'><i class='fas fa-spinner'></i></p></div>";
	 var iQuery = 0;
	    if(date.value!=""){
	    	tabela.innerHTML="<div></div>";
	    	db.collection("Agenda").where('dia', '==', timeStamp()).get().then(
	    	 		function(query){
	    	 			if(!query.empty){
	    	 				var array =[];
	    	 				query.forEach(
	    	    	 				function(doc){
	    	    	 					var iArray = 0;
	    	    	 					iQuery++;
	    	    	 					doc.data().agendamentos.forEach(
	    	    	 						function(map){
	    	    	 							iArray++;
	    	    	 							map["tipo"]=doc.data().tipo;
	    	    	 							array.push(map);
	    	    	 							if(iQuery==query.docs.length && 
	    	    	 									doc.data().agendamentos.length==iArray){
	    	    	 								array.sort(function(a, b){
	    	    	 									return a.hora.seconds - b.hora.seconds;
	    	    	 								}).forEach(function(map){ 
	    	    	 									var ref = db.collection("Usuarios").doc(map.idUser);
	    	    	    	 							ref.collection("pets").doc(map.idPet).get().then(
	    	    	    	 								function(pet){
	    	    	    	 									ref.get().then(
	    	    		    	    	 								function(docCliente){
	    	    		    	    	 									document.getElementById("avisoAgenda").innerHTML="<div></div>";
	    	    		    	    	 									tabela.innerHTML += `
	    	    		    	    	    	 								<tr>
	    	    		    	    									            <td>`+hora(map.hora)+`</td>
	    	    		    	    									            <td>`+map.tipo+`</td>
	    	    		    	    									            <td>`+docCliente.data().nome+`</td>
	    	    		    	    									            <td>`+pet.data().nome+`</td>
	    	    		    	    									            <td>`+porte(pet.data().porte)+`</td>
	    	    		    	    									            <td><button type="submit" class="btn btn-success"
	    	    		    	    									             id="btnDelAg" onclick='cancelar("`+doc.id+`", "`+map.hora+`")'>Cancelar</td>
	    	    		    	    									        </tr>
	    	    		    	    	    	 							`;
	    	    		    	    	 								}
	    	    		    	    	 							);
	    	    	    	 								}
	    	    	    	 							);
	    	    	 								}
	    	    	 								
	    	    	 								
	    	    	 								);
	    	    	 							}
	    	    	 						}
	    	    	 					);
	    	    	 				}
	    	    	 			);
	    	 			}else{
	    	 				document.getElementById("avisoAgenda").innerHTML="<div><p style='text-align: center; color:#42210D; font-weight: bold; font-size:17px;'>Ainda n\u00e3o h\u00e1 agendamentos para esta data!</p></div>";
	    	 			}
	    	 		}
	    	 	);
	    	
	    }
	}
 
 date.addEventListener("change", function(){
	 carregarTabela();
 });

 
 function hora(data){
	 var hora = new Date(data.seconds*1000);
	 var hora = hora+"";
	 var i = hora.indexOf(":");
	 return hora.substring(i-2, i+3);
 }
 
 
 function timeStamp(){
	 var ano = date.value.substring(0, 4);
	 var mes = date.value.substring(5, 7);
	 var dia = date.value.substring(8, 10);
	 var timestamp = new Date(ano, mes-1, dia);
	 return timestamp;
 }
 
 
  function getCliente(id) {
	  	var nome;
		var ref = db.collection("Usuarios").doc(id).then(
			function(doc){
				nome = doc.data().nome;
			}
		);
		
 		return nome;
  }
  
  function porte(porte){
	  if(porte==null){
		  return "Pequeno";
	  }else{
		  return porte.charAt(0).toUpperCase()+porte.substring(1, porte.length);
	  }
  }
  
  
function cancelar(id, hora){
	$(document).on('click', '#btnDelAg', function(e) {
		swal({
			title : "Lista menor de afazeres!",
			text : "Agendamento cancelado!",
			icon : "success",
			button : "OK",
		}).then(function() {
	  var list = new Array();
	  db.collection("Agenda").doc(id).get().then(
			  function(doc){
					if(doc.data().agendamentos.length<=1){
						doc.ref.delete();
						carregarTabela();
					}else{
					doc.data().agendamentos.forEach(function(map){
						if(map.hora!=hora){
							list.push(map);
						}
					});		
					
					doc.ref.update({
						agendamentos : list
					}).then(function(){
						carregarTabela();
					});
				  }
				}  
	  );
	});
});
}
  
  
 
 
 