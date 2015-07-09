// Javascript document

angular.module('homePage.service', [])

.factory('homePageDb', function($http) { 

    var mainInfo = $http.get('../../plan/json/db.json').success(function(response) {
        return response.data;
    });

    var db = {};

    db.getMainInfo = function() { 
        return mainInfo; 
    };

    return db;

});