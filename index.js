var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

console.log('----------------------------')


app.get('/', function (req, res, next) {
    console.log('----------------------------')

    superagent.get('https://cnodejs.org/')
        .end(function (err, sres) {

            console.log('----------------------------')
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });

            res.send(items);
        });
});


app.listen(3001, function () {
    console.log('app is listening at port 3000');
});