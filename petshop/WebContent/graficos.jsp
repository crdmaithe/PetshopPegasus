<%@include file="topoAdm.jsp"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Gráficos</title>

<!-- CSS -->
<link rel="stylesheet" href="css/grafico.css">
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js"></script>
</head>
<body>

	<div class="main-panel">
		<div class="principal">

			<div class="myAlert-top alert alert-info">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i
					class="far fa-thumbs-up"></i> <strong>Seja bem-vindo!</strong> A
				Pegasus deseja uma ótima sessão de trabalho.
			</div>
			</div>

			<!-- Gráfico novos pedidos finalizados -->
			<div class="chart-container3" id="g3">
				<canvas id="chart3"></canvas>
			</div>
			<script src="js/chart3.js"></script>

			<!-- Gráfico novos clientes cadastrados -->
			<div class="chart-container2" id="g2">
				<canvas id="chart2"></canvas>
			</div>
			<script src="js/chart2.js"></script>

			<!-- Gráfico serviços prestados-->
			<div class="chart-container" id="g1">
				<canvas id="chart"></canvas>
			</div>
			<script src="js/chart.js"></script>

		<!-- FIM DO PRINCIPAL -->
	</div>
	<!-- FIM DO MAIN PANEL -->

</body>
</html>