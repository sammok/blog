"use strict";

angular.module('articles.detail', [

])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('blog.articles.detail', {
                url: 'articles/detail/:articleId',
                views: {
                    'body@': {
                        controller: 'ArticlesDetailController as articlesDetailCtrl',
                        templateUrl: '/articles/detail/articles-detail.tmpl.html'
                    }
                }
            });
    }])

    .controller('ArticlesDetailController', [function () {
        var articlesDetailCtrl = this;
    }]);
