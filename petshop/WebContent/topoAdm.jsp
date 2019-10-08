<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<title>Pegasus-Administrativo</title>

<meta
	content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
	name='viewport' />
<meta name="viewport" content="width=device-width" />

<!-- JQuery -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
<script
	src="https://www.gstatic.com/firebasejs/6.2.4/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-auth.js"></script>
<script
	src="https://www.gstatic.com/firebasejs/5.9.1/firebase-storage.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
	integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
	integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
	crossorigin="anonymous"></script>
<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
	integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
	crossorigin="anonymous"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<!--CSS-->
<!-- Bootstrap -->
<link rel="stylesheet" href="css/estiloLayoutPadrao.css" />
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
	integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
	crossorigin="anonymous">
<link rel="stylesheet" href="sweetalert2.min.css">

<!-- JS -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.8.3.min.js"></script>

<!--Logo-->
<link rel="shortcut icon" href="images/favicon.ico.ico"
	type="image/x-icon" />

<!--Fonte-->
<link href='http://fonts.googleapis.com/css?family=Open+Sans'
	rel='stylesheet' type='text/css'>
</head>
<body>

	<!-- Sair / Notificação -->
	 <script>
		function sair() {
			$(document).on('click', '#admButton', function(e) {
				swal({
					title : "Au au!",
					text : "Sessão encerrada!\nAgradecemos sua visita!",
					icon : "success",
					button : "OK",
				}).then(function() {
					auth.signOut();
					window.location.replace("index.jsp");
				})

			});

		}
	</script>
	<div class="wrapper">
		<!--WRAPPER-->

		<div class="menu-principal">
			<!--Início cabeçalho-->
			<div class="logo">
				<img src="images/Logo.png" />
				<nav class="header-2" id="navBotao">
					<button class='btn btn-primary my-2 my-sm-0' id="admButton"
						onclick="sair()">
						<i class="fas fa-user"></i>Sair do ADM
					</button>
				</nav>
			</div>
		</div>
		<div class="sidebar-container">
			<div class="sidebar-logo">PEGASUS ADMIN</div>
			<ul class="sidebar-navigation">
				<li><a href="graficos.jsp"> <i class="fa fa-home" aria-hidden="true"></i>
						Dashboard
				</a></li>
				<li><a href="crudProdutos.jsp"> <i class="fa fa-plus"
						aria-hidden="true"></i> Cadastrar produtos
				</a></li>
				<li><a href="pedidos.jsp"> <i class="fas fa-cart-plus"
						aria-hidden="true"></i> Pedidos
				</a></li>
				<li><a href="agenda.jsp"> <i class="fas fa-edit"
						aria-hidden="true"></i> Agendamentos
				</a></li>
				<li><a href="tasks.jsp"> <i class="fa fa-cog"
						aria-hidden="true"></i> Tarefas
				</a></li>
			</ul>
		</div>

		<!-- Navbar -->
		<nav class="navbar navbar-expand-lg navbar-dark position-fixed"
			style="background-color: rgb(255, 150, 0)">
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!--Itens de navegação-->
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<!--Form de pesquisa-->
					<!--  <form>
						<input type="search" placeholder="Procurar">
					</form>-->

					<!--Itens Fixos/Navbar 1-->
					<li class="nav-item active"><a class="nav-link"
						href="" style="font-weight: bold;">Início <span
							class="sr-only">(current)</span></a></li>
					<!--Dropdown-->
					<li class="nav-item dropdown"><a
						class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
						role="button" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false" style="font-weight: bold;"> Serviços</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<strong><a class="dropdown-item" href=""
								style="font-weight: bold;">Banho e tosa</a></strong>
						</div></li>

					<li class="nav-item dropdown"><a
						class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
						role="button" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false" style="font-weight: bold;"> Produtos </a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown"
							id="dropProdutos">
							<div class="dropdown-divider"></div>
						</div></li>

					<!--Itens Fixos/Navbar 2-->

					<li class="nav-item active"><a class="nav-link" href=""
						style="font-weight: bold;">Cadastro<span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item active"><a class="nav-link"
						href="" style="font-weight: bold;">Avaliação <span
							class="sr-only">(current)</span></a></li>
					<li class="nav-item active"><a class="nav-link"
						href="" style="font-weight: bold;">Quem somos? <span
							class="sr-only">(current)</span></a></li>
					<li class="nav-item active"><a class="nav-link"
						href="" style="font-weight: bold;">Contato <span
							class="sr-only">(current)</span></a></li>

					<li class="nav-item active"><a class="nav-link"
						href="" style="font-weight: bold;">Pedidos <span
							class="sr-only">(current)</span></a></li>
				</ul>

			</div>
		</nav>
		<!--Fim cabeçalho-->

	</div>
	<!--FIM DO WRAPPER-->
		
		<!-- CONTEÚDO -->
		<div class="main-panel"></div>
		<!--FIM DO MAIN-PANEL-->

</body>
<script src="js/topoAdm.js"></script>
<script>
	carregarDropdown()
</script>

</html>