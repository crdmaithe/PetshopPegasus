var userTR = document.getElementById("nameTR");
var divBotoes = document.getElementById("botoes");

document.getElementById("form").addEventListener("submit",(e)=>{
	e.preventDefault();
	criar();
});

function criar(){
	var field = document.getElementById("name").value;
	if(field.length<1){
		swal({
			  title: "Campo vazio!",
			  text: "Preencha o campo.",
			  icon: "error",
			  button: "OK",
			});	
	}else{
		db.collection("Tarefas").add({
			tarefa : field
		}).then(function(){
			document.getElementById("name").value ="";
			swal({
				  title: "Tudo certo!",
				  text: "Sua tarefa foi adicionada.",
				  icon: "success",
				  button: "OK",
				});	
		});
	}
	
}


function mostrarTarefas(){
	db.collection("Tarefas").onSnapshot(function(query){
		userTR.innerHTML='<div></div>';
		query.forEach(function(doc){
			userTR.innerHTML+=`
                <div class="bg-white border border-grey text-dark card mb-2">
                    <div class="card-body">
                    <p><i class="fas fa-plus"></i> Tarefa: ${doc.data().tarefa}</p>
                    <button class="col-5 text-white btn btn-warning" onclick='Update("`+doc.id+`", "`+doc.data().tarefa+`")'>
                    <i class="fas fa-edit"></i>  Editar </button>
                    <button class="col-5 text-white btn btn-dark" onclick='Delete("`+doc.id+`"
                        )'><i class="far fa-trash-alt"></i>Apagar</button>
                    </div>
				</div>
			`;
		});
	});
}


function Update(id, tarefa){
	console.log(id);
	document.getElementById("name").value=tarefa;
	divBotoes.innerHTML="<div></div>";
	divBotoes.innerHTML+=`
		<button type="button" class="btn btn-primary" id="button-task" onclick='cancelar()'>
						<i class="fas fa-plus"></i>  Cancelar
					</button>
		<button type="button" class="btn btn-primary" id="button-task" onclick='Update2("`+id+`")'>
						<i class="fas fa-plus"></i>  Editar
					</button>			
     `;

}

function Update2(id){
	console.log(id);
	var task = document.getElementById("name").value;
	db.collection("Tarefas").doc(id).set({tarefa:task}).then(function(){
		cancelar();
	});
	swal({
		  title: "Sempre mudando...",
		  text: "Sua tarefa foi alterada.",
		  icon: "success",
		  button: "OK",
		});
}


function Delete(id){
	db.collection("Tarefas").doc(id).delete();
	cancelar();
	swal({
		  title: "Melhor que borracha!",
		  text: "Sua tarefa foi apagada.",
		  icon: "success",
		  button: "OK",
		});
}

function cancelar(){
	document.getElementById("name").value="";
	divBotoes.innerHTML="<div></div>";
	divBotoes.innerHTML+=`
		<button type="submit" class="btn btn-primary" id="button-task">
			<i class="fas fa-plus"></i>  Adicionar
		</button>	
     `;
}
