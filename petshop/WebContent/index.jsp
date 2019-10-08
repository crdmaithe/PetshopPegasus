<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/index.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap" rel="stylesheet">
    
    <!-- JQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-auth.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
 	
 	<!-- JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
    <script src="sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
    <link rel="stylesheet" href="sweetalert2.min.css">
    
     <!--Logo-->
    <link rel="shortcut icon" href="images/favicon.ico.ico" type="image/x-icon" />

    <title>Pegasus</title>
</head>
<body>
    <header>
        <nav>
            <a href="#contenedor-sobre-nosotros" id="icono1" class="icono">Sobre</a>
            <a href="#footer" id="icono2" class="icono">Contato</a>
            <a href="#" id="loginButton" class="icono" onclick="document.getElementById('modal-wrapper').style.display='block'">Logar Admin</a>
            
        </nav>
        <div class="container">
        <div class="textos">
            <h1>Pegasus Petshop</h1>
            <h2><br>Tudo para seu PET ao alcance da sua mão.</h2>
            <a href="https://play.google.com/store/apps" id="buttonBaixar">BAIXAR APP</a>
        </div>
        <img src="images/indexImage.png" alt="Pessoas com celular" class="imagemCapa">
    </div><!--FIM CONTAINER-->
    </header>
        <div class="wave">
            <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
        </div>
            
    <main>
        <section class="contenedor-sobre-nosotros">
        
        <div class="contenedor-sobre-nosotros" id="contenedor-sobre-nosotros">
            <img src="images/clientesImagem.png" alt="clientes" class="imagen-about-us">
            <div class="contenido-textos">
                <h2 class="titulo" id="tituloDescricao">App para clientes</h2>
                <h3><span>1</span>Agilidade e comodidade</h3>
                <p>- Um aplicativo leve para seu celular.
                	<br>
                    <br>- Multi plataformas (IOS e Android).
                    <br>
                    <br>- Agora tudo fica mais fácil, com a solução na ponta dos seus dedos.
                </p>
                <h3><span>2</span>Perfil exclusivo para o Pet</h3>
                <p>
                    <br>- Crie quantos perfis precisar para seus Pets.
                    <br>
                    <br>- Receba sugestões de promoções especializadas.
                    <br>
                    <br>- Agende os serviços de consulta e banho e tosa de acordo com o perfil.
                    <br>
                    <br>É demais!
                </p>
            </div>
        </div>
    </section>

    <section class="about-services">
        <div class="contenedor">
            <h2 class="titulo" id="tituloDescricao">O que você pode fazer?</h2>
            <div class="servicio-cont">
                <div class="servicio-ind">
                        <img src="images/pedidos1Admin.png" alt="">
                        <h3>Faça suas compras online</h3>
                        
                        <p>Contamos com os melhores produtos disponíveis no mercado pet atual. Faça seu pedido e receba em casa.</p>
                    </div>
                    <div class="servicio-ind">
                            <img src="images/produtosAdmin.png" alt="">
                            <h3>Faça seus agendamentos pelo app</h3>
                         
                            <p>Contamos com o serviço Banho&Tosa e consultas veterinárias que podem ser agendados através do aplicativo.</p>
                        </div>
                    <div class="servicio-ind">
                            <img src="images/numerosAdmin.png" alt="">
                            <h3>Confira nossas promoções</h3>
                            
                            <p>Sempre temos produtos em promoção para deixar seu pet mais contente. Baixe o app e não fique de fora.</p>
                        </div>
            </div>
        </div>
    </section>
    
    <!--POPUP-->
            <div id="modal-wrapper" class="modal">
                <form class="modal-content animate" id="popupContainer">
                    <div class="imgcontainer" id="teste">
                        <span onclick="document.getElementById('modal-wrapper').style.display='none'" class="close"
                            title="Fechar PopUp">X</span>
                        <img src="images/iconPetshop.jpg" alt="Avatar" class="avatar">
                    </div>

                    <div class="containerPopup">
                        <input type="text" id="uname" placeholder="Email" class="form-control">
                        <input type="password" id="psw" placeholder="Senha" class="form-control">
                        <button type="button" class="btn btn-primary my-2 my-sm-0 border-0" id="entrarButton"
                            onclick="logar(); validar();">Entrar</button>
                    </div>
                </form>
            </div>
            
<!-- Validação form login -->
<script>
	function validar(){
		var email = $("#uname").val();
		var senha = $("#psw").val();
		
		if(email == '' && senha == ''){
			swal({
				  title: "Formulário vazio",
				  text: "Preencha o formulário corretamente!",
				  icon: "warning",
				  button: "OK",
				});
			
		}else if(email == ''|| email.indexOf('@') == -1 || email.indexOf('.com') == -1){
			swal({
				  title: "Campo E-mail!",
				  text: "Preencha o formulário corretamente!",
				  icon: "warning",
				  button: "OK",
				});
			
		}else if(senha =="" || senha.length < 6){
			swal({
				  title: "Campo senha!",
				  text: "Preencha o formulário corretamente!",
				  icon: "warning",
				  button: "OK",
				});
			
		}else if(email == "adm@gmail.com" && senha =="admadm"){
			swal({
				  title: "Sessão iniciada!",
				  icon: "success",
				  button: "OK",
				});
		}else{
			swal({
				  title: "Acesso negado!",
				  text: "Você não possui permissão.",
				  icon: "error",
				  button: "OK",
				});
		}
		
	}

</script>
    </main>
    <footer id="footer">
        <div class="contenedor-footer">
            <div class="content-foo">
                <h4>Telefone</h4>
                <p>(47)0000-0000</p>
            </div>
            <div class="content-foo">
                    <h4>Email</h4>
                    <p>pegasuspetshop@gmail.com</p>
                </div>
                <div class="content-foo">
                        <h4>Localização</h4>
                        <p>Rua Fictícia, 934<br>Blumenau - SC</p>
                    </div>
        </div>
        <div class="logoFooter">
        <img src="images/Logo.png" alt="logo" id="logoFoot">
        </div>
        <h2 class="titulo-final">&copy;Software</h2>
    </footer>
    <script src="js/topoCliente.js"></script>
</body>
</html>