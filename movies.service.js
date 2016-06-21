(function(){

    angular.module('movieflix')
        .service('MoviesList',MoviesList);

    function MoviesList($http,$q){
        var self=this;
        self.getMovies=getMovies;

        function getMovies(){

            var defer=$q.defer();
            /*console.log(defer);*/
            $http.get('movies.json')
                .then(function(res){
                    console.log(res);
                    defer.resolve(res.data);

                },function(err){
                    defer.reject(err.data);
                })

            return defer.promise;
        }
    }
})()