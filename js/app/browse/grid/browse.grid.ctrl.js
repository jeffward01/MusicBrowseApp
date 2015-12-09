angular.module('app').controller('BrowseController', function($rootScope, $scope, $http, $state){
    
    $scope.songs = [];
    
    
    
    $http.get('data/songData.json')
        .then(function(res){
        var json = res.data;
        
        for(var i =0; i < json.length; i++){
            $scope.songs.push(json[i]);
        }
        
   

        
       
 })
    


$scope.timeConvert = function rectime(secs) {
	var hr = Math.floor(secs / 3600);
	var min = Math.floor((secs - (hr * 3600))/60);
	var sec = secs - (hr * 3600) - (min * 60);
	
	while (min.length < 2) {min = '0' + min;}
	while (sec.length < 2) {sec = '0' + min;}
	if (hr) hr += ':';
	return hr + min + ':' + Math.round(sec);
}
});

