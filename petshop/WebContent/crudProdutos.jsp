<%@include file="topoAdm.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Projeto Base</title>

<!-- CSS -->
<link rel="stylesheet" href="css/crudProdutos.css">

</head>
<body>
<!-- CONTEÚDO -->
	<div class="main-panel">

	<div class="principal"></div>

    <div class="container" id="cadastroProduto">
    	
    	<div class="adition" id="adition">
    	
        <h2 id="titulo-cadastro">Cadastrar produto</h2>
        <input type="text" id="titulo" placeholder="Nome do produto" class="form-control my-3" maxlength="12">
        <select id="categoria">
        </select>
        <input type="text" id="marca" placeholder="Marca" class="form-control my-3" maxlength="15">
        <select id="especie">
        	<option value="todas">Todas</option>
        	<option value="cachorro">Cachorro</option>
        	<option value="gato">Gato</option>
        </select>
        <input type="text" id="descricao" placeholder="Descrição" class="form-control my-3">
        <input type="number" id="preco" placeholder="Preco (R$00.00)" class="form-control my-3">
        <select id="promocao">
        	<option value=null >Sem promoção</option>
        	<option value=10 >10% OFF</option>
        	<option value=20 >20% OFF</option>
        	<option value=30 >30% OFF</option>
        	<option value=40 >40% OFF</option>
        	<option value=50 >50% OFF</option>
        </select>
        <input type="number" id="estoque"placeholder="Quantidade em estoque" class="form-control my-3">
        <input class="file-chooser" type="file" accept="image/*" id="imagem">
        <img class="preview-img" id="img">
        <div id="botoes"><button class="btn btn-info" id="boton">Cadastrar</button></div>
        
        </div><!-- FIM adition -->
        
        <script>
            const $ = document.querySelector.bind(document);
            const previewImg = $('.preview-img');
            const fileChooser = $('.file-chooser');

            fileChooser.onchange = e => {
                const fileToUpload = e.target.files.item(0);
                const reader = new FileReader();

                // evento disparado quando o reader terminar de ler 
                reader.onload = e => previewImg.src = e.target.result;

                // solicita ao reader que leia o arquivo 
                // transformando-o para DataURL. 
                // Isso disparará o evento reader.onload.
                reader.readAsDataURL(fileToUpload);
            };

        </script>
        <table class="table my-3">
                <thead>
                  <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Espécie</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Preço(R$)</th>
                    <th scope="col">Desconto</th>
                    <th scope="col">Estoque</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Apagar</th>
                  </tr>
                </thead>
                <tbody id="tabla">
                </tbody>
              </table>
    
    
    
    </div>


</div><!-- FIM DO MAIN-PANEL -->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/produtos.js"></script>
    
    </body>
    </html>
	