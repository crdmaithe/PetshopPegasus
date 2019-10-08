<%@include file="topoAdm.jsp" %>
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Tasks</title>
	<!-- CSS -->
	<link rel="stylesheet" href="css/tasks.css">
	

</head>

<body onload="mostrarTarefas()">
<!-- CONTEÚDO -->
	<div class="main-panel">
	
	<div class="principal"></div>
	
		<div class="row">
			<div class="col-6">
				<form class="border border-grey p-3" id="form">
					<h2>TAREFAS</h2>
					<div class="form-group">
						<label id="task-subtitle"><i class="fas fa-tasks"></i> Adicionar tarefas</label>
						<input type="text" autocomplete="off" class="form-control" id="name"
							placeholder="Especifique a tarefa">
					</div>
					<div id="botoes">
					<button type="submit" class="btn btn-primary" id="button-task">
						<i class="fas fa-plus"></i>  Adicionar
					</button>
					</div>
				</form>
			</div><!-- FIM COL-6 -->
			<div class="col">
				<div class="user" id="nameTR">

				</div><!-- FIM USER -->

			</div><!-- FIM COL -->
		</div><!-- FIM ROW -->
</div><!-- FIM DO MAIN-PANEL -->

	<script src="js/tasks.js"></script>
</body>

</html>