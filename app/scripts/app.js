'use strict';

/**
 * @ngdoc overview
 * @name sampleApp1App
 * @description
 * # sampleApp1App
 *
 * Main module of the application.
 */
var app = angular
  .module('sampleApp1App', [
    // 'ngCookies',
    // 'ngResource',
    // 'ngRoute',
    // 'ngSanitize',
    // 'ngTouch'
  ]);


app.factory("dataFactory", function($http) {
  console.log("Enterd dataFactory");
  return $http.get('../data.json');
});

app.controller('gameslist_controller', function(dataFactory, $scope) {
  console.log("inside controller");
  dataFactory.then(function(response) {
    console.log(response.data);
    $scope.gamesData = response.data;
    $scope.genre = findGenre($scope.gamesData);
    console.log($scope.genre);
  })

$scope.tabClicked= function(e){
  console.log(this.g);
  $scope.clickedGenre=this.g;
}

  //findGenre function
  function findGenre(data) {
    var allgenre = data.map(function(game) {
      return game.genre;
    });
    return allgenre.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
  }
});
