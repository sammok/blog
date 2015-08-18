angular.module('articles.model', [])
    .service('Articles', ['$http', function ($http) {
        var model = this;
        var URLS = {
            POST: '/api/articles',
            GET_ARTICLE: '/api/articles/detail/'
        };

        function extract(article) {
            return article.data;
        }

        //  create article
        this.createArticle = function (article) {
            if (article.title && article.content) {
                $http.post(URLS.POST, article)
                    .then(function (article) {
                        return extract(article);
                    });
            }
        };

        //  get single article
        this.getArticleById = function (id) {
            return $http.get(URLS.GET_ARTICLE + id).then(extract);
        };
    }]);
