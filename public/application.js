/**
 * Created by sammok on 7/08/15.
 */
"use strict";

angular.module('blog', [
    'ui.router',
    'header',
    'footer',
    'articles'
])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('blog', {
                url: '',
                abstract: true
            });

        $urlRouterProvider.otherwise('/');
    }])

.controller('MainController', ['$scope', function ($scope) {
    }]);