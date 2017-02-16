/**
 * Created by admin on 2017/2/16.
 */

/**
 *  Module
 *
 * Description
 */

angular.module('ngSearch', []).directive('searchBox', function(){
    // Runs during compile
    return {
        name: 'serachBox',
        scope: {
            ngModel:'=',
            placeholder:'@',
            method:'&',
        },
        restrict: 'EA',
        // template:'<div><style> input{border:red solid 1px;} </style>' +
        // '<input type="text" ng-keypress="search($event)" ng-model="ngModel" placeholder="请输入关键字">' +
        // '<button ng-click="method()">Search</button>' +
        // '</div>',

        template:  '<div class="input-group">'
            +'<input  ng-keypress="search($event)" ng-model="ngModel" class="input-sm form-control ng-pristine ng-valid ng-empty ng-touched" placeholder="{{placeholder}}" type="text">'
            +'<span class="input-group-btn">'
            +   '<button ng-click="method()" class="btn btn-sm btn-default" type="button">Go!</button>'
            +'</span>'
            +'</div>',
        replace: true,
        transclude: true,
        link: function($scope, iElm, iAttrs, controller) {
            $scope.search=function(e){
                var keycode = window.event?e.keyCode:e.which;
                if(keycode==13){
                    console.log();

                    $scope.method();
                }
            };
        }
    };
});





