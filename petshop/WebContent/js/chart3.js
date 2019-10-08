
        var totalPed = 0;
        var quantPedidos= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var grafico = db.collection("Pedidos").where('date', '>=', new Date(2019, 00, 01)).where('date', '<=', new Date(2019, 11, 31)).get().then(function(query){
        	query.forEach(function(doc){
        		if (doc.data().date!=null){
        		totalPed++;
        		}
        		switch(mes(doc.data().date)){
        		case "Jan": quantPedidos[0]=quantPedidos[0]+1;
        		break;
        		case "Feb": quantPedidos[1]=quantPedidos[1]+1;
        		break;
        		case "Mar": quantPedidos[2]=quantPedidos[2]+1;
        		break;
        		case "Apr": quantPedidos[3]=quantPedidos[3]+1;
        		break;
        		case "May": quantPedidos[4]=quantPedidos[4]+1;
        		break;
        		case "Jun": quantPedidos[5]=quantPedidos[5]+1;
        		break;
        		case "Jul": quantPedidos[6]=quantPedidos[6]+1;
        		break;
        		case "Aug": quantPedidos[7]=quantPedidos[7]+1;
        		break;
        		case "Sep": quantPedidos[8]=quantPedidos[8]+1;
        		break;
        		case "Oct": quantPedidos[9]=quantPedidos[9]+1;
        		break;
        		case "Nov": quantPedidos[10]=quantPedidos[10]+1;
        		break;
        		case "Dec": quantPedidos[11]=quantPedidos[11]+1;
        		break;
        	}
        	});
        	
        	
        		
        }).then(function(a){
        	for(var i=0; i<quantPedidos.length; i++){
        		quantPedidos[i]=Math.round(quantPedidos[i]*100/totalPed);
            }
        var data = {
        	labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [{
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)',
                				  'orange', 'brown', 'gray', 'green', 'purple', 'yellow', 'pink', 'cyan', 'magenta'],
                data: quantPedidos
            }]            
        };
        

        var options= {
            cutoutPercentage: 50,
        	responsive: true,
        	maintainAspectRatio: false,
            title: {
  		      display: true,
  		      text: 'Pedidos (%)'+' - Total ('+totalPed+')',
  		      fontSize: 15,
  		    },
            legend: {
                display: true,
                position: "top",
            labels: {
                	boxWidth: 12,
                	padding: 8
                }
            }
     };
        var ctx = document.getElementById("chart3");
        var donutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
});

        function mes(data){
   		 var mes = new Date(data.seconds*1000);
   		 var mes = mes+"";
   		 return mes.substring(4, 7);
   	}