var quantUsuarios= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var grafico = db.collection("Usuarios").where('date', '>=', new Date(2019, 00, 01)).where('date', '<=', new Date(2019, 11, 31)).get().then(function(query){
	query.forEach(function(doc){
		
		switch(mes(doc.data().date)){
		case "Jan": quantUsuarios[0]=quantUsuarios[0]+1;
		break;
		case "Feb": quantUsuarios[1]=quantUsuarios[1]+1;
		break;
		case "Mar": quantUsuarios[2]=quantUsuarios[2]+1;
		break;
		case "Apr": quantUsuarios[3]=quantUsuarios[3]+1;
		break;
		case "May": quantUsuarios[4]=quantUsuarios[4]+1;
		break;
		case "Jun": quantUsuarios[5]=quantUsuarios[5]+1;
		break;
		case "Jul": quantUsuarios[6]=quantUsuarios[6]+1;
		break;
		case "Aug": quantUsuarios[7]=quantUsuarios[7]+1;
		break;
		case "Sep": quantUsuarios[8]=quantUsuarios[8]+1;
		break;
		case "Oct": quantUsuarios[9]=quantUsuarios[9]+1;
		break;
		case "Nov": quantUsuarios[10]=quantUsuarios[10]+1;					
		break;
		case "Dec": quantUsuarios[11]=quantUsuarios[11]+1;
		break;
	}
	});
		
}).then(function(a){
	var data = {
		    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
		    datasets: [{
		        label: "Clientes novos",
		        backgroundColor: "rgba(75,179,137,0.2)",
		        borderColor: "rgba(75,179,137,1)",
		        borderWidth: 2,
		        hoverBackgroundColor: "rgba(75,179,137,0.4)",
		        hoverBorderColor: "rgba(75,179,137,0,1)",
		        data: quantUsuarios
		      }
		    ]
		  };
		  
		  var options = {
		    title: {
		      display: true,
		      text: 'Novos clientes cadastrados',
		      fontSize: 15
		    },
		    maintainAspectRatio: false,
		    scales: {
		      yAxes: [{
		          gridLines: {
		            display: true,
		            color: "rgba(0,0,0,0.2)"
		          },
		          ticks: {
		            beginAtZero: true,
		            stepSize: 1
		          }
		        }],
		      xAxes: [{
		          gridLines: {
		            display: false
		          }
		        }]
		    }
		  };
		  Chart.defaults.global.defaultFontColor = 'black';
		  Chart.defaults.global.defaultFontSize = 12;
		  Chart.Bar('chart2', {
		    options: options,
		    data: data
			});
});


  function mes(data){
		 var mes = new Date(data.seconds*1000);
		 var mes = mes+"";
		 return mes.substring(4, 7);
	}