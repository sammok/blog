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

    .controller('ArticlesDetailController', ['Utils', '$stateParams', 'Articles', function (Utils, $stateParams, Articles) {
        var articlesDetailCtrl = this;

        articlesDetailCtrl.article = {
            title: '',
            date: '',
            content: ''
        };

        Articles.getArticleById($stateParams.articleId)
            .then(function (result) {
                articlesDetailCtrl.article.title = result.title;
                articlesDetailCtrl.article.date = Utils.formatDate(result.created);
                articlesDetailCtrl.article.content = result.content;
            });
    }]);
