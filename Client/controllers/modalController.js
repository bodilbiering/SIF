/**
 * Created by bodilbiering on 20/01/15.
 */

angular.module('SIF').controller('ModalCtrl', function ($scope, $modal) {

    $scope.items = ['item1', 'item2', 'item3'];



    $scope.open = function (size, shop) {
        //$scope.shop = shop;


        $scope.editshop =
        {
            stars: shop.stars,
            name: shop.name,
            link: shop.link,
            description: shop.description,
            logo: "",
            category: shop.category
        };
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                },
                //shop: function(){return shop;},
                editshop: function(){
                    return $scope.editshop;
                }
            }
        });

        modalInstance.result.then(function (editshop) {
            $scope.shop = editshop;
            //console.log(angular.module('SIF').shopController.shops);

        });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('SIF').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, editshop) {

    //$scope.shop = shop;
    $scope.editshop = editshop;

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.editshop);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});