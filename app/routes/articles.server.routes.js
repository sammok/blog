"use strict";

module.exports = function (app) {
    var article = require('../controllers/articles.server.controller');

    app.route('/api/articles')
        .post(article.create)
        .get(article.list);

    app.route('/api/articles/detail/:articleId')
    .get(article.detail);

    app.param('articleId', article.getArticleById);

    /**  test post */
    // curl -X POST -H "Content-Type: application/json" -d '{"title":"First Article", "content":"这是一首可爱的小情歌, 可爱的要去你吗啦个B 哦哦哦也"}' localhost:3000/api/articles
};