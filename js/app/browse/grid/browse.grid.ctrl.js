angular.module('app').controller('BrowseController', function($rootScope, $scope, $http, $state){
    
    $scope.songs = [];
    
    
    
    $http.get('data/songData.json')
        .then(function(res){
        var json = res.data;
        
        for(var i =0; i < json.length; i++){
            $scope.songs.push(json[i]);
        }
        
   

    $scope.data = {
        selectedDifficulty: '',
        selectedSong:''
    };
        
        $rootScope.$on('difficultyChanged', function(ev,arg) {
            $scope.data.selectedDifficulty = arg.difficulty;
        })
        $rootScope.$on('songChanged', function(ev,arg) {
            $scope.data.selectedSongs = arg.title;
        })
 })
    


$scope.timeConvert = function rectime(secs) {
	var hr = Math.floor(secs / 3600);
	var min = Math.floor((secs - (hr * 3600))/60);
	var sec = secs - (hr * 3600) - (min * 60);
	
	while (min.length < 2) {min = '0' + min;}
	while (sec.length < 2) {sec = '0' + min;}
	if (hr) hr += ':';
    var time = hr + min + ':' + Math.round(sec);
    if(time == "NaN:NaN"){
        return "Not Listed";
    }
	return time;
}
});

