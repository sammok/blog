"use strict";

var mongoose =require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },

    title: {
        type: String,
        default: '',
        trim: true
    },

    content: {
        type:String,
        default: ''
    }
});

mongoose.model('Article', ArticleSchema);
