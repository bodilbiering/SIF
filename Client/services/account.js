angular.module('SIF')
  .factory('Account', function($http) {
    return {
      getProfile: function() {
        return $http.get('/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put('/api/me', profileData);
      },
      //todo
      getFriends: function(){
        console.log("in account.getFrineds")
        return $http.get({url: 'https://graph.facebook.com/me/friends', qs: accessToken, json: true}
            );
      }
    };
  });