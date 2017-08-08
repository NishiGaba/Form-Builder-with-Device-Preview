angular.module('formBuilder')
	.controller('mainCtrl',function($scope) {

	//Bydefault Input Types
	$scope.inputTypes = ['Heading','Text','Address','Select','Date','Month','Checkbox'];

		//Counter Set for the ID of the Fields
	$scope.counter = 0;
	$scope.formInputFields = [];

	//Save Field in the Form
	$scope.saveField = function(field) {

		var newField = {
			id 	 : $scope.counter++,
			name : field.name,
			type : field.type,
			req  : field.req
		}

		$scope.formInputFields.push(newField);
		document.getElementById("formInputName").value = "";
		console.log($scope.formInputFields);
	}

	//Update Form Input Fields
	$scope.editField = function(field) {
		console.log(field);

		//Map Selcts the Item from Array and Update it and return it into the Array
		$scope.formInputFields.map(function(item) {
			if(field.id == item.id) {
				return field;
			}
		});
		console.log('Updated Fields Array',$scope.formInputFields);
	}

	//Delete Form Input Fields
	$scope.deleteField = function(field) {
		
		//Filters the Item Out of Array according to Specific condition
		$scope.formInputFields = $scope.formInputFields.filter(function(item) {
			return item.id != field.id ;
		}); 
		console.log('Updated Array After Deletion',$scope.formInputFields);
	}

	});