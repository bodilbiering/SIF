(function(){
	var app = angular.module("SIF", ["ui.bootstrap"]);
	
	app.controller('shopController', function(){
		this.shops = myShops;
	});
	
	app.controller('addShopController', function($timeout) {
	this.showAlert = false;
	console.log("1: ", this.showAlert);
    this.shop = {};

	var that = this;
	this.fadeAlert = function() {
      console.log("3: ", this.showAlert);
      console.log("3: shop: ", this.shop);
      //console.log("that.showAlert pre", that.showAlert);
      that.showAlert = false; 
      console.log("fadeAlert: this.showAlert", this.showAlert);
      	};

    this.addShop = function() {
    console.log("2: ", this.showAlert);
      myShops.push(this.shop);
	  this.shop = {};
      
      this.showAlert = true;
      console.log("show alert");
      $timeout(this.fadeAlert, 2000)
      
      
    };
    });

//dropdown controller    
app.controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});
	
	var myShops = [{
		stars: 4,
		name: 'Enzo',
		link: "http://www.enzoshop.dk/",
		description: "Great clothes",
		logo: ""
	},
	{
		name: 'Superlove',
		link: "http://www.superlove.dk/",
		description: "Great clothes and accessories",
		logo: ""
	},
	{
		name: 'Greenskin',
		link: "http://www.greenskin.dk/",
		description: "Green skincare and beauty treatments",
		logo: ""
	}
	]
	
})();