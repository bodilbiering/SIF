(function(){
	var app = angular.module("SIF", ["ui.bootstrap", "ngRoute"]);
	
	app.config(['$routeProvider',
		function ($routeProvider){
		$routeProvider.when("/flocks", {templateUrl: 'views/flocks.html'});
		$routeProvider.when("/shops", {templateUrl: "views/shops.html"});
		$routeProvider.when("/lists", {templateUrl: "views/lists.html"});
		
		$routeProvider.otherwise({templateUrl: "views/home.html"});
		
	}]);
	
	app.controller('shopController', function(){
		this.shops = myShops;
	});
	
	app.controller('addShopController', function($timeout) {
	this.showAlert = false;
	//console.log("1: ", this.showAlert);
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
   { text: 'Profile', url: "profile"},
    {text: 'Settings', url: "settings"},
    {text: 'Log out', url: "logout"}
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