"use strict";

var mongoose = require('mongoose'),
    Article = mongoose.model('Article');

/** error handle */
var getErrorMessage = function (err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                return err.errors[errName].message;
            }
            else {
                return 'Unknow server error';
            }
        }
    }
};

/** get article by id */
exports.getArticleById = function (req, res, next, id) {
    Article.findById(id).exec(function (err, article) {
        if (err) return next(err);

        if (!article) return next(new Error('Faild to load article ' + id));

        req.article = article;
        next();
    });
};

/** create */
exports.create = function (req, res) {
    var article = new Article(req.body);

    article.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(article);
        }
    });
};

/** list */
exports.list = function (req, res) {
    Article.find({},function (err, articles) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(articles);
        }
    });
};

/** read */
exports.detail = function (req, res) {
    res.json(req.article);
};
