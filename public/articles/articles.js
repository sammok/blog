angular.module('articles', [
    'articles.detail',
    'articles.create'
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
    .controller('ArticlesController', [function () {
        var articlesCtrl = this;
    }]);