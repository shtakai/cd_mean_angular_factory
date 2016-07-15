console.log('start');

let app = angular.module('myApp',[]);

app.factory('studentFactory', function(){
  let students = [
    {name: 'Mike', age: 34},
    {name: 'John', age: 24},
    {name: 'Trey', age: 24},
  ];

  let factory = {};


  // example
  factory.someKeyName = 'somevalue';
  factory.someMethodName = function(){
    console.log('somemethodname');
  }

  // Add a getStudents key to the factory object with a value of a function.
  factory.getStudents = function (callback){
    // Pass the students to a callback to be used by whoever calls the methodp
    callback(students);
  }

  // return factory
  return factory;
});

// Create a controller (attached to this module), and inject the studentFactory in it.
app.controller('studentsController', [
   '$scope',
   'studentFactory', // <- inject! ↓args also use injected
   function($scope, studentFactory){
    //  initialize an empty array so $scope.students maintains a consistent data type
     $scope.students = [];

     // run the getStudents method and set $scope data in the callback
     studentFactory.getStudents(function(data){
         $scope.students = data;
     })
   }
])
