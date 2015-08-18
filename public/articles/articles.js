angular.module('articles', [
    'utils',
    'articles.model',
    'articles.detail',
    'articles.create',
    'articles.admin'
])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('blog.articles', {
                url: '/',
                views: {
                    'header@': {
                        controller: 'HeaderController as headerCtrl',
                        templateUrl: '/common/header/header.tmpl.html'
                    },

                    'body@': {
                        controller: 'ArticlesController as articlesCtrl',
                        templateUrl: '/articles/articles.tmpl.html'
                    },

                    'footer@': {
                        controller: 'FooterController as footerCtrl',
                        templateUrl: '/common/footer/footer.tmpl.html'
                    }
                }
            });
    }])
    .controller('ArticlesController', ['Utils', '$http', '$state', function (Utils, $http, $state) {
        var articlesCtrl = this;

        //  get list
        $http.get('/api/articles').then(function (articles) {
            articlesCtrl.articles = articles.data;
        });

        // formatDate
        articlesCtrl.formatDate = Utils.formatDate;

        //  go article detail
        articlesCtrl.goArticleDetail = function (url) {
            if (url) {
                $state.go('blog.articles.detail', { articleId: url });
            }
        };
    }]);