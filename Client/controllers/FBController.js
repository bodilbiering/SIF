/**
 * Created by bodilbiering on 07/02/15.
 */

angular.module("SIF")

.controller('FBCtrl', function($scope, Facebook) {

    $scope.user =  Facebook.getUser(FB);

        $scope.loadFriends = function() {
            //console.log("in loadFriends");
            FB.api('/me/friends', function(response) {
                $scope.$apply(function() {
                    $scope.myFriends = response.data;
                    console.log($scope.myFriends);
                });

            });
        };

})

.service('Facebook', function($q, $rootScope) {

    // resolving or rejecting a promise from a third-party
    // API such as Facebook must be
    // performed within $apply so that watchers get
    // notified of the change
    resolve = function(errval, retval, deferred) {
        $rootScope.$apply(function() {
            if (errval) {
                deferred.reject(errval);
            } else {
                retval.connected = true;
                deferred.resolve(retval);
            }
        });
    }

    return {
        getUser: function(FB) {
            console.log("in FB getuser");
            var deferred = $q.defer();
            FB.getLoginStatus(function(response) {
                if (response.status == 'connected') {
                    console.log("in conectd");
                    FB.api('/me', function(response) {
                        resolve(null, response, deferred);
                    });
                } else if (response.status == 'not_authorized') {
                    FB.login(function(response) {
                        if (response.authResponse) {
                            FB.api('/me', function(response) {
                                resolve(null, response, deferred);
                            });
                        } else {
                            resolve(response.error, null, deferred);
                        }
                    });
                }
            });
            promise = deferred.promise;
            promise.connected = false;
            return promise;
        }
    };
});