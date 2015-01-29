(function(){
	var app = angular.module("SIF", ["ui.bootstrap", "ngRoute", "customFilters"]);
	
	app.config(['$routeProvider',
		function ($routeProvider){
		$routeProvider.when("/flocks", {templateUrl: 'views/flocks.html'});
		$routeProvider.when("/shops", {templateUrl: "views/shops.html"});
		$routeProvider.when("/lists", {templateUrl: "views/lists.html"});
		
		$routeProvider.otherwise({templateUrl: "views/home.html"});
		
	}]);
	
	app.controller('shopController', function() {
		this.shops = myShops;
		this.products = myProducts;

		this.deleteProduct = function(product){
			var i = myProducts.indexOf(product);
			myProducts.splice(i,1);
		};


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

	//product controller
	app.controller('addProductCtrl', function() {

		this.product = {};

		this.addProduct = function() {

			myProducts.push(this.product);

			this.product = {};

		};

	});
    
//header controller    
app.controller('HeaderCtrl', function ($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
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
		logo: "",
		category: "Clothes"
	},

	{
		name: 'Greenskin',
		link: "http://www.greenskin.dk/",
		description: "Green skincare and beauty treatments",
		logo: "",
		category: "Beauty"
	},
		{
			name: 'Superlove',
			link: "http://www.superlove.dk/",
			description: "Great clothes and accessories",
			logo: "",
			category: "Clothes"
		}
	];

	var myProducts = [
		{
			stars: 5,
			item: "mit største ønske",
			link: "www.abe.dk",
			description: "",
			category: "ønskeseddel 1",
			shop: "Enzo"
		},
		{
			item: "mit største ønske 2",
			link: "www.abe.dk",
			description: "",
			category: "ønskeseddel 1",
			shop: "Enzo"
		},
		{
			item: "mit største ønske 3",
			link: "www.abe.dk",
			description: "",
			category: "ønskeseddel 2",
			shop: ""
		},
		{
			item: "LEGO",
			link: "www.abe.dk",
			description: "",
			category: "Storms ønsker",
			shop: "BR"
		},
		{
			item: "minecraft",
			link: "www.abe.dk",
			description: "",
			category: "Storms ønsker",
			shop: "BR"
		}
	];
	
})();