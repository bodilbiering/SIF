/**
 * Created by bodilbiering on 19/01/15.
 */

angular.module("SIF")
    .constant("collectionListActiveClass", "btn-primary")
    .controller("collectionsCtrl", function ($scope, $filter,
                                             collectionListActiveClass) {

        var selectedCategory = null;


        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;

        }

        $scope.categoryFilterFn = function (shop) {
            return selectedCategory == null ||
                shop.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? collectionListActiveClass : "";
        }

        $scope.getSelectedCategory = function(){
            if (selectedCategory != null)
                return selectedCategory;
            else return "All";
        }


    });