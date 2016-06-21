(function(){
    angular.module('movieflix')
        .controller('HomeController',HomeController)
    function HomeController(movies,$scope){
        var hVm=this;
        hVm.myInterval = 5000;

        //console.log(movies.length);
        hVm.movies=movies;
        //console.log(movies[1]);

        /*hVm.goTomoviecontent= fucntion(imgposter){
            $location.path("/moviecontent").search({param1:imgposter});
        }*/
        /*hVm.groupedSlides=[];

        hVm.slides=function(movies){
            var i, a = [], b;
            for (i = 0; i < movies.length; i += 2) {
                b = { image1: movies[i] };

                if (movies[i + 1]) {
                    b.image2 = movies[i + 1];
                }
                if (movies[i + 2]) {
                    b.image3 = movies[i + 2];
                }
                if (movies[i + 3]) {
                    b.image4 = movies[i + 3];
                }
                a.push(b);
            }
            hVm.groupedSlides=a;
        }*/

        $scope.$watch('movies', function(values) {
            var i, a = [], b;
            for (i = 0; i < movies.length; i += 2) {
                b = { image1: movies[i] };

                if (movies[i + 1]) {
                    b.image2 = movies[i + 1];
                }
                if (movies[i + 2]) {
                    b.image3 = movies[i + 2];
                }
                if (movies[i + 3]) {
                    b.image4 = movies[i + 3];
                }
                a.push(b);
            }
            $scope.groupedSlides = a;
        }, true);


       /* hVm.slide=[];
        hVm.groupedSlides=groupedSlides;

        function groupedSlides(movies){
            console.log(kjbskadf);
            var i, a = [], b;
            for (i = 0; i < movies.length; i += 2) {
                b = { image1: movies[i] };

                if (movies[i + 1]) {
                    b.image2 = movies[i + 1];
                }
                if (movies[i + 2]) {
                    b.image3 = movies[i + 2];
                }
                if (movies[i + 1]) {
                    b.image4 = movies[i + 1];
                }
                a.push(b);
            }
            hVm.slide=a;
        }*/
    }



})()