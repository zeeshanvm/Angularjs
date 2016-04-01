'use strict';

eventsApp.controller('EventController',
       function EventController($scope){

                      $scope.e =  {name:'Kiba',
                      Dob:'9/9-1012',
                      age:56,
                      location : {
                          Address: 'Army HeadQuartes Destruction',
                          city : 'Guantonamobay',
                          Province: 'Japan'

                       },
                      imgUrl:'/img/angularjs-logo.png',
                      session : [
                          {
                              name:"Directive to watse time",
                              Story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                              Rate:0,
                          },
                          {
                              name:"Code for fun",
                              Story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                              Rate:0,


                          },
                          {
                              name:"The big bang destroyer",
                              Story:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                              Rate:0,

                          }
                      ]

                      }
                      $scope.incrementVote = function(session){
                        session.Rate++;
                      };
                  }
);
