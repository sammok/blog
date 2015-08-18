"use strict";

angular.module('utils', [

])
    .service('Utils', [function () {
        var model = this;

        model.formatDate = function (dateInfo) {
            /**
             * Transform Time Object String to a formatted time string
             * @param {String} dateInfo  date object string
             * */

             var date = new Date(dateInfo);

            //  format: 2015/08/08 17:20:34 pm
            return date.getFullYear() + '/' + (date.getMonth()+1)
                + '/' + date.getDate() + ' ' + date.getHours() + ':'
                + date.getMinutes() + ':' + date.getSeconds() + ' '
                + (date.getHours() >= 12 ? 'pm' : 'am');
        };
    }]);
