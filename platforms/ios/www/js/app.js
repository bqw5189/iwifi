// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','n3-line-chart'])
.controller('IndexCtrl', function($scope) {

 // Due to CodePen's API, it's not possible to include functions in dynamic CodePen's such as this one, therefore some closures might be missing (the axes' formatting functions, for example) and need to be added manually. Thanks ! :-)
  $scope.data = [
  {
    x: 1,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 2,
    val_0: 9,
    val_1: 8,
    val_2: 1
  },{
    x: 3,
    val_0: 9,
    val_1: 0,
    val_2: 9
  },{
    x: 4,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 5,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 6,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 7,
    val_0: 7,
    val_1: 9,
    val_2: 0
  },{
    x: 8,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 9,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 10,
    val_0: 9,
    val_1: 12,
    val_2: 0
  },{
    x: 11,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 12,
    val_0: 9,
    val_1: 8,
    val_2: 1
  },{
    x: 13,
    val_0: 9,
    val_1: 0,
    val_2: 9
  },{
    x: 14,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 15,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 16,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 17,
    val_0: 7,
    val_1: 9,
    val_2: 0
  },{
    x: 18,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 19,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 20,
    val_0: 9,
    val_1: 12,
    val_2: 0
  },{
    x: 21,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 22,
    val_0: 9,
    val_1: 8,
    val_2: 1
  },{
    x: 23,
    val_0: 9,
    val_1: 0,
    val_2: 9
  },{
    x: 24,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 25,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 26,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 27,
    val_0: 7,
    val_1: 9,
    val_2: 0
  },{
    x: 28,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 29,
    val_0: 9,
    val_1: 9,
    val_2: 0
  },{
    x: 30,
    val_0: 9,
    val_1: 12,
    val_2: 0
  }
];

$scope.items = [{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:'positive'},{selectedClass:''}]

  $scope.options = {
    axes: {
        x: {type: 'linear', min: 0, max: 31, ticks: 15},
        y: {type: 'data',ticksFormatter: function(data){return data + ":00";}, min: 7, max: 24, ticks: (24-7)/2},
      },
  stacks: [
    {
      axis: "y",
      series: [
        "id_0",
        "id_1",
        "id_2"
      ]
    }
  ],drawLegend:false,
  lineMode: "cardinal",
  series: [
    {
      id: "id_0",
      y: "val_0",
      label: "Foo",
      type: "column",
      color: "#fff"
    },
    {
      id: "id_1",
      y: "val_1",
      label: "Bar",
      type: "column",
      color: "#66ff66"
    },
    {
      id: "id_2",
      y: "val_2",
      label: "Baz",
      type: "column",
      color: "#f00"
    }
  ]}
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
