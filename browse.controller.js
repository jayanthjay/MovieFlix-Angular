(function(){
    angular.module('movieflix')
        .controller('BrowseController',BrowseController);
    
    function BrowseController($routeParams,movies){
        var browseVm=this;

        console.log('hellooooooo');

        browseVm.display=displaySelectedBrowse(movies);
        browseVm.selected=$routeParams.selected;



        function displaySelectedBrowse(movies){
            console.log('displaySelectedBrowse');
            var i,genre;
            var temp=[];
            console.log($routeParams.selected);
            for(i=0;i<movies.length;i++){
                genre=movies[i].Genre;

                if($routeParams.selected=="TvShows"){

                    if(movies[i].Type=="series"){
                        console.log($routeParams.selected);
                        console.log(movies[i]);
                         temp.push(movies[i]);
                    }
                }
                else if(genre.includes($routeParams.selected)) {
                    console.log(genre);
                    console.log(movies[i]);
                    temp.push(movies[i]);
                }
            }
            browseVm.displaySelected=temp;

        }


    }
})()