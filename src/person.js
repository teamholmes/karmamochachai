function Person (name, age) {
	var name = name
		, age = age;

	var api = {};

	api.getName = function(){
		return name;
	};

	api.doubleAge = function(){
		return double(age);
	};

	api.nameReversal = function(){
		return name.split('').reverse().join('');
	}


	var double = function(input){
		return input * 2;
	}

	return api;

}