
var user_metrics = angular.module('user_metrics',['zingchart-angularjs']);

user_metrics.controller('user_metrics_controller',['$scope','$http',function($scope, $http) {

    console.log("Hello World from controller");

    $http.get('/session_req_sensor_controller').success(function(response)
 	{
 		console.log("inside");
 		console.log(response);
 		//---------------------- stopped sensor data--------------------------
 		$http.get('/user_metrics_query/'+response).success(function(response){
 				console.log(response);
 				var length=response.length;
 				var i=0;
 				var stopped_fitbit=0;
 				var stopped_car=0;
 				var stopped_phone=0;

 				for(i=0;i<length;i++)
 				{
 					if(response[i].sensor_name=="fitbit")
 					{
 						stopped_fitbit=stopped_fitbit+1;
 					}
 					else if(response[i].sensor_name=="phone")
 					{
 						stopped_phone=stopped_phone+1;	
 					}
 					else if(response[i].sensor_name=="car")
 					{
 					 	stopped_car=stopped_car+1;	
 					}
 				}
 				console.log("Stopped fitbit"+stopped_fitbit);
 				console.log("Stopped car"+stopped_car);
 				console.log("Stopped phone"+stopped_phone);
 				


				Highcharts.chart('container', {
				    chart: {
				        type: 'column'
				    },
				    title: {
				        text: 'Past Sensors'
				    },
				    xAxis: {
				              categories: [
				                  'device name'
				              ],
				              crosshair: true
				          },
				    yAxis: {
				        min: 0,
				        title: {
				            text: 'Number of devices connected'
				        }
				    },
				    tooltip: {
				        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
				        footerFormat: '</table>',
				        shared: true,
				        useHTML: true
				    },
				    plotOptions: {
				        column: {
				            pointPadding: 0.2,
				            borderWidth: 0
				        }
				    },
				    series: [{
				        name: 'Fitbit',
				        data: [stopped_fitbit]

				    }, {
				        name: 'Phone',
				        data: [stopped_phone]

				    }, {
				        name: 'Car',
				        data: [stopped_car]

				    }]
				});




 		});


 	$http.get('/user_activeSensor_query/'+response).success(function(response){
 			var car_length=response[0].car.length;
 			var fitbit_length=response[0].fitbit.length;
 			var phone_length=response[0].phone.length;

 			console.log("Active Car"+response[0].car.length);
 			console.log("Active phone"+response[0].phone.length);
 			console.log("Active fitbit"+response[0].fitbit.length);


 			Highcharts.chart('container_2', {
 			    chart: {
 			        type: 'bar'
 			    },
 			    title: {
 			        text: 'Active devices'
 			    },
 			    xAxis: {
 			        categories: ['device name'],
 			        title: {
 			            text: null
 			        }
 			    },
 			    yAxis: {
 			        min: 0,
 			        title: {
 			            text: 'Number of devices',
 			            align: 'high'
 			        },
 			        labels: {
 			            overflow: 'justify'
 			        }
 			    },
 			    tooltip: {
 			        valueSuffix: ''
 			    },
 			    plotOptions: {
 			        bar: {
 			            dataLabels: {
 			                enabled: true
 			            }
 			        }
 			    },
 			    legend: {
 			        layout: 'vertical',
 			        align: 'right',
 			        verticalAlign: 'top',
 			        x: -40,
 			        y: 80,
 			        floating: true,
 			        borderWidth: 1,
 			        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
 			        shadow: true
 			    },
 			    credits: {
 			        enabled: false
 			    },
 			    series: [{
 			        name: 'Fitbit',
 			        data: [fitbit_length]
 			    }, {
 			        name: 'Phone',
 			        data: [phone_length]
 			    }, {
 			        name: 'Car',
 			        data: [car_length]
 			    }]
 			});
 	 	
 	});



 	$http.get('/user_total_Sensor_query/'+response).success(function(response){
 		var total_fitbit=response[0];
 		var total_car=response[1];
 		var total_phone=response[3]
 		console.log("for total-------"+response[0]);

 		var total =response[0]+response[1]+response[2];

 		var fitbit_per=(response[0]/total)*100;
 		console.log("-------------"+fitbit_per);
 		var car_per=(response[1]/total)*100;
 		var phone_per=(response[2]/total)*100;







 		Highcharts.chart('container_3', {
 		    chart: {
 		        plotBackgroundColor: null,
 		        plotBorderWidth: null,
 		        plotShadow: false,
 		        type: 'pie'
 		    },
 		    title: {
 		        text: 'Device - Wise Usage'
 		    },
 		    tooltip: {
 		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
 		    },
 		    plotOptions: {
 		        pie: {
 		            allowPointSelect: true,
 		            cursor: 'pointer',
 		            dataLabels: {
 		                enabled: true,
 		                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
 		                style: {
 		                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
 		                }
 		            }
 		        }
 		    },
 		    series: [{
 		        name: 'Brands',
 		        colorByPoint: true,
 		        data: [{
 		            name: 'Fitbit',
 		            y: fitbit_per
 		        }, {
 		            name: 'Phone',
 		            y: phone_per,
 		            sliced: true,
 		            selected: true
 		        }, {
 		            name: 'Car',
 		            y: car_per
 		        }]
 		    }]
 		});
 	});


});
}]);



