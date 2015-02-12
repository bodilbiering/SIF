/**
 * Created by bodilbiering on 02/02/15.
 */

angular.module("SIF").
    controller("loginCtrl", function($scope, $auth){
        $scope.succes = false;
        $scope.login = function() {
            $auth.login({ email: $scope.email, password: $scope.password })
                .then(function() {
                    return ({
                        content: 'You have successfully logged in',
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                })
                .catch(function(response) {
                    return({
                        content: response.data.message,
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                });
        };
        $scope.authenticate = function(provider) {
            console.log("in authenticate");
            $auth.authenticate(provider)
                .then(function() {
                    console.log("in then");
                    $scope.loadFriends();
                    $scope.succes = true;
                    return({
                        content: 'You have successfully logged in',
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                })
                .catch(function(response) {
                    console.log("in catch");
                    return({
                        content: response.data ? response.data.message : response,
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                });
        };
        $scope.loadFriends = function() {

            FB.api('/me/friends', function(response) {
                $scope.$apply(function() {
                    $scope.myFriends = response.data;
                    console.log($scope.myFriends);
                });

            });
        };


    });


