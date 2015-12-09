angular.module('app').controller('AppController', function ($rootScope, $scope, $http, $state) {


    $scope.songs = [];



    $http.get('data/songData.json')
        .then(function (res) {
            var json = res.data;

            for (var i = 0; i < json.length; i++) {
                $scope.songs.push(json[i]);
            }

            $scope.data = {
                selectedDifficulty: {},
                selectedSongs: {}
            };

            $scope.clear = function () {
                $scope.data.selectedDifficulty = {};
                $scope.data.selectedSongs = {};

            };



            $scope.$watch('data.selectedSongs', function (n, o) {
                if (o !== n) {
                    $rootScope.$broadcast('songChanged', n);
                }
            });

            $scope.$watch('data.selectedDifficulty', function (n, o) {
                if (o !== n) {
                    $rootScope.$broadcast('difficultyChanged', n);
                }
            });
        });
    clearListener();

    function clearListener() {

        $('#group2').on('click', function () {
            alert("clicked");
            $scope.data.selectedSongs = {};
        });
        $('#selectedDropDown2').on('click', function () {
            alert("clicked");

            $scope.data.selectedDifficulty = {};
        })
    }
});