var sensor_controller=angular.module('sensor_controller',[])


sensor_controller.controller('sensor_control',['$scope','$http','$window',function($scope,$http,$window){
var user_email;

	$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);

	});
//-------------------------------- to add a fitbit to network
	$scope.fitbit_start_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){

		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/new_fitbit/'+response+'/'+date).success(function(response){
			console.log(response);
		});
		
		$window.alert("New Fitbit connected !");
	});
	}


//-------------------------------- to remove fitbit from network

	$scope.fitbit_end_date=function(){
		$http.get('/session_req_sensor_controller').success(function(response){

		$http.get('/user_activeSensor_query/'+response).success(function(response1){
			console.log(response1+"-----------"+response1[0].fitbit.length);
		
		if(response1[0].fitbit.length!=0){
		console.log(new Date());
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/stop_fitbit/'+response+'/'+date).success(function(response){
			console.log(response);
		});
		$window.alert("Fitbit disconnected !!");
		}
		else{

			console.log("No fitbit to disconnected");
			$window.alert("No fitbit to disconnected !!");
		}

		});


	});
	}

//-------------------------------- to add a phone to network
		$scope.phone_start_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/new_phone/'+response+'/'+date).success(function(response){
			console.log(response);
		});
		
		$window.alert("New phone connected !");

	});
	}

//-------------------------------- to remove phone from network

	$scope.phone_end_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){

		$http.get('/user_activeSensor_query/'+response).success(function(response1){
			console.log(response1+"-----------"+response1[0].fitbit.length);

		if(response1[0].phone.length!=0){
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/stop_phone/'+response+'/'+date).success(function(response){
			console.log(response);
		});
		$window.alert("Phone disconnected !!");
		}
		else{

			console.log("No phone to stop");
			$window.alert("No Sensors Avaialable for Deprovision");
		}			

	});
	});
	}

//---------------------------- to add a car
		$scope.car_start_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/new_car/'+response+'/'+date).success(function(response){
			console.log(response);
		});
	
	$window.alert("New car connected !");
	
	});
	}
//-------------------------------- to remove car from network

	$scope.car_end_date=function(){

		console.log(new Date());
		$http.get('/session_req_sensor_controller').success(function(response){

		$http.get('/user_activeSensor_query/'+response).success(function(response1){
			console.log(response1+"-----------"+response1[0].fitbit.length);
		if(response1[0].car.length!=0){	
		console.log("inside");
		console.log(response);
		var date = new Date();
		$http.post('/stop_car/'+response+'/'+date).success(function(response){
			console.log(response);
		});
			$window.alert("Car disconnected");
		}
		else{

				console.log("No cat to disconnect");
				$window.alert("No car to disconnect");
		}			

		});

	});
	}



}

]);