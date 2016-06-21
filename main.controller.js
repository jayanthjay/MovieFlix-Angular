/**
 * Created by JayanthKumar on 6/16/2016.
 */
(function(){
    angular.module('movieflix')
        .controller('MainController',MainController);

    function MainController($location)
    {

        var mVm=this;
        
        mVm.name="MovieFlix";
        mVm.dropdown1=[
            {
                id:'1',
                name:'TvShows'
            },
            {
                id:'2',
                name:'Sci-Fi'
            },
            {
                id:'3',
                name:'Action'
            },
            {
                id:'4',
                name:'Thriller'
            },
            {
                id:'5',
                name:'Drama'
            }
        ]

        mVm.dropdown2=[
            {
                id:'1',
                name:'Documentary'
            },
            {
                id:'2',
                name:'Mystery'
            },
            {
                id:'3',
                name:'Indian'
            },
            {
                id:'4',
                name:'Comedy'
            },
            {
                id:'5',
                name:'Talk-Show'
            }
        ]

        mVm.dropdown3=[
            {
                id:'1',
                name:'My List'
            },
            {
                id:'2',
                name:'New Arrivals'
            }
        ]
        mVm.dropdown4=[
            {
                id:'1',
                name:'Manage Profiles'
            },
            {
                id:'2',
                name:'Your Account'
            },
            {
                id:'3',
                name:'Sign Out'
            }
        ]

        mVm.idSelectedVote = null;
        mVm.setSelected = function(idSelectedVote) {
            
            mVm.idSelectedVote = idSelectedVote;
            console.log('/'+mVm.idSelectedVote);
            $location.path('/browse').search({selected:idSelectedVote});
        }

    }
})();
