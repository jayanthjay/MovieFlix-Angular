(function(){
    angular.module('movieflix')
        .controller('MoviesContentController',MoviesContentController)
    function MoviesContentController(movies,$routeParams){
        var mcontentVm=this;
       

        /*console.log(movies.Poster);*/
        var poster=$routeParams.poster;
        mcontentVm.movies=movies;

        /*$scope.details=getMoviedetails(movies);*/

        mcontentVm.details=getMoviedetails(movies);

        function getMoviedetails(movies){
            var i;

            for(i=0;i<movies.length;i++){
                if(poster==movies[i].Poster){
                    console.log(movies[i]);
                        return movies[i];

                }
            }

        }


        
    }
})()