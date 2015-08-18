"use strict";

angular.module('articles.admin', [

])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('blog.articles.admin', {
                url: 'articles/admin',
                views: {
                    'body@': {
                        controller: 'ArticlesAdminController as articlesAdminCtrl',
                        templateUrl: '/articles/admin/articles-admin.tmpl.html'
                    }
                }
            });
    }])

    .controller('ArticlesAdminController', [function () {
        var articlesAdminCtrl = this;
    }]);
