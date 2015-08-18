"use strict";

angular.module('articles.create', [

])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('blog.articles.create', {
                url: 'articles/create',
                views: {
                    'body@': {
                        controller: 'ArticlesCreateController as articlesCreateCtrl',
                        templateUrl: '/articles/create/articles-create.tmpl.html'
                    }
                }
            });
    }])

    .controller('ArticlesCreateController', ['$http', 'Articles', function ($http, Articles) {
        var articlesCreateCtrl = this;

        articlesCreateCtrl.title = '';
        articlesCreateCtrl.content = '';

        /** create article */
        articlesCreateCtrl.createArticle = function () {
            var article = {
                title: articlesCreateCtrl.title,
                content: articlesCreateCtrl.content
            };

            Articles.createArticle(article);
            clearArticleForm();
        };

        //  clear article form
        function clearArticleForm () {
            articlesCreateCtrl.title = '';
            articlesCreateCtrl.content = '';
        }
    }]);
