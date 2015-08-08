"use strict";

angular.module('articles.create', [

])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('blog.articles.create', {
                url: 'articles/create',
                views: {
                    'header@': {
                    },
                    'body@': {
                        controller: 'ArticlesCreateController as articlesCreateCtrl',
                        templateUrl: '/articles/create/articles-create.tmpl.html'
                    },
                    'footer@': {
                    }
                }
            });
    }])

    .controller('ArticlesCreateController', [function () {
        var articlesCreateCtrl = this;
    }]);
