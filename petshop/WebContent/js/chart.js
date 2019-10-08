var banhotosa= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var consulta= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var grafico = db.collection("Agenda").where('dia', '>=', new Date(2019, 00, 01)).where('dia', '<=', new Date(2019, 11, 31)).get().then(function(query){
	query.forEach(function(doc){
		
		doc.data().agendamentos.forEach(function(map){
			if(doc.data().tipo=="Consulta"){
				console.log(mes(doc.data().dia));
				switch(mes(doc.data().dia)){
					case "Jan": consulta[0]=consulta[0]+1;
					break;
					case "Feb": consulta[1]=consulta[1]+1;
					break;
					case "Mar": consulta[2]=consulta[2]+1;
					break;
					case "Apr": consulta[3]=consulta[3]+1;
					break;
					case "May": consulta[4]=consulta[4]+1;
					break;
					case "Jun": consulta[5]=consulta[5]+1;
					break;
					case "Jul": consulta[6]=consulta[6]+1;
					break;
					case "Aug": consulta[7]=consulta[7]+1;
					break;
					case "Sep": consulta[8]=consulta[8]+1;
					break;
					case "Oct": consulta[9]=consulta[9]+1;
					break;
					case "Nov": consulta[10]=consulta[10]+1;					
					break;
					case "Dec": consulta[11]=consulta[11]+1;
					break;
				}
			}else if(doc.data().tipo=="Banho & Tosa"){
				console.log(mes(doc.data().dia));
				switch(mes(doc.data().dia)){
					case "Jan": banhotosa[0]=banhotosa[0]+1;
					break;
					case "Feb": banhotosa[1]=banhotosa[1]+1;
					break;
					case "Mar": banhotosa[2]=banhotosa[2]+1;
					break;
					case "Apr": banhotosa[3]=banhotosa[3]+1;
					break;
					case "May": banhotosa[4]=banhotosa[4]+1;
					break;
					case "Jun": banhotosa[5]=banhotosa[5]+1;
					break;
					case "Jul": banhotosa[6]=banhotosa[6]+1;
					break;
					case "Aug": banhotosa[7]=banhotosa[7]+1;
					break;
					case "Sep": banhotosa[8]=banhotosa[8]+1;
					break;
					case "Oct": banhotosa[9]=banhotosa[9]+1;
					break;
					case "Nov": banhotosa[10]=banhotosa[10]+1;					
					break;
					case "Dec": banhotosa[11]=banhotosa[11]+1;
					break;
				}
			}
		});
	});
		
}).then(function(a){
	var data = {
			  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
			  datasets: [{
			      label: "Banho e tosa",
			      backgroundColor: "rgba(75,179,137,0.2)",
			      borderColor: "rgba(75,179,137,1)",
			      borderWidth: 2,
			      hoverBackgroundColor: "rgba(75,179,137,0.4)",
			      hoverBorderColor: "rgba(75,179,137,0,1)",
			      data: banhotosa
			    },
			    {
			      label: "Consultas",
			      backgroundColor: "rgba(255,159,140,0.2)",
			      borderColor: "rgba(255,159,140,1)", 
			      borderWidth: 2,
			      hoverBackgroundColor: "rgba(255,159,140,0.4)",
			      hoverBorderColor: "rgba(255,159,140,1)",
			      data: consulta
			    }
			  ]
			};




			var options = {
			  title: {
			    display: true,
			    text: 'Servi\u00e7os prestados',
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
			Chart.Bar('chart', {
			  options: options,
			  data: data
			});


			//var grafico = db.collection("Agenda").where('tipo', '==', 'Consulta').get().then(function(query){
				//query.forEach(function(doc){
					
					//doc.data().agendamentos.forEach(function(map){
						//numero1++;
						//data.datasets[0].data[0]=data.datasets[0].data[0]+1;
						
				//	});
//				});
					
			//}).then(function(a){
				//console.log(data.datasets[0].data[0]);
			//});


});


function mes(data){
	 var mes = new Date(data.seconds*1000);
	 var mes = mes+"";
	 return mes.substring(4, 7);
}

