(function(){
    angular.module('movieflix',['ngRoute','ui.bootstrap','ngMessages'])
        .config(function ($routeProvider){

            $routeProvider
                .when('/', {
                    templateUrl: 'home.html',
                    controller: 'HomeController',
                    controllerAs: 'hVm',
                    resolve: {
                        movies: function(MoviesList){
                            return  MoviesList.getMovies();
                        }
                    }
                })
                .when('/home', {
                    templateUrl: 'home.html',
                    controller: 'HomeController',
                    controllerAs: 'hVm',
                    resolve: {
                        movies: function(MoviesList){
                            return  MoviesList.getMovies();
                        }
                    }
                })
                .when('/browse', {
                    templateUrl: 'browse.html',
                    controller: 'BrowseController',
                    controllerAs: 'browseVm',
                    resolve: {
                        movies: function(MoviesList){
                            return  MoviesList.getMovies();
                        }
                    }
                })
                .when('/moviecontent', {
                    templateUrl: 'moviecontent.html',
                    controller: 'MoviesContentController',
                    controllerAs: 'mcontentVm',
                    resolve: {
                        movies: function(MoviesList){
                            return  MoviesList.getMovies();
                        }
                    }
                })
                .otherwise({redirectTo:'/'});
        });



})();
