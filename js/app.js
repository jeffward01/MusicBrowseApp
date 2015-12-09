angular.module('app', ['ui.router', 'ui.bootstrap', 'angular-loading-bar', 'ui.select', 'ngSanitize']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/browse');

    $stateProvider
        .state('app', { url: '/app', templateUrl: '/templates/app/app.html', controller: 'AppController' })
            .state('app.browse', { url: '/browse', templateUrl: '/templates/app/browse/grid.html', controller: 'BrowseController'});
    
});

//Ui-Select 'Props Filter' Code
angular.module('app').filter('propsFilter', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function (item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    }
});