<%@include file="topoAdm.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- CSS -->
<link rel="stylesheet" href="css/agenda.css">

</head>
<body>

	<!-- CONTEÚDO -->
	<div class="main-panel">
	
	<div class="principal"></div>
	
	
		<!-- Calendário -->
		<h3 class="title" id="tituloCalendar">Agenda</h3>
		<p id="dataAgenda">
			Data: <input type="date" id="btnCalendarAg">
		</p>

		<script>
			var teste = Date() + "";
			var dia = teste.substring(8, 10);
			var mes = teste.substring(4, 7);
			var ano = teste.substring(11, 15);
			switch (mes) {
			case "Jan":
				mes = "01";
				break;
			case "Feb":
				mes = "02";
				break;
			case "Mar":
				mes = "03";
				break;
			case "Apr":
				mes = "04";
				break;
			case "May":
				mes = "05";
				break;
			case "Jun":
				mes = "06";
				break;
			case "Jul":
				mes = "07";
				break;
			case "Aug":
				mes = "08";
				break;
			case "Sep":
				mes = "09";
				break;
			case "Oct":
				mes = "10";
				break;
			case "Nov":
				mes = "11";
				break;
			case "Dec":
				mes = "12";
			}
			var inicialDate = ano + "-" + mes + "-" + dia;
			document.querySelector("#btnCalendarAg").value = inicialDate;
		</script>



		<table class="content-table" border="1" id="tableAgenda">
			<thead>
				<tr>
					<th>Horário</th>
					<th>Tipo de agendamento</th>
					<th>Cliente</th>
					<th>Pet</th>
					<th>Porte</th>
					<th style="text-align: center" width="17%">Cancelar
						agendamentos</th>
				</tr>
			</thead>

			<tbody id="tabelaAg">
			</tbody>
		</table>
		<div id="avisoAgenda" style="margin-top: 20px"></div>

	</div><!-- FIM DO MAIN-PANEL -->
	<script src="js/agenda.js"></script>

</body>

</html>