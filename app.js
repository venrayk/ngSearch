/**
*  Mappodule
*
* Description
*/
var app=angular.module('app', ['ngSearch'])

.controller('mainCtrl',function($scope){

	//获取
	$scope.getData=function (keyworlds) {
		console.log('keyworlds------------>:',keyworlds);

		alert('搜索获取数据方法:关键字--->'+keyworlds);
    };
});