// Crawl all the Request names and it's corresponding fields from https://testardor.jelurida.com/test
// @output ../constants/requestList.json 
const Crawler = require("crawler");
const fs = require('fs');

const requiredField = ['chain', 'secretPhrase', 'account', 'feeNQT'];

let apis = {};

const crawler = new Crawler({
  maxConnections: 1000,
  callback: function (error, res, done) {
    if (!error) {

      console.log("Crawling Started. Please wait.");

      const $ = res.$;
      $(".panel-default.api-call-All .panel-heading .panel-title > a").each(function (i, e) {
        let requestType = $(this).text();
        let requestMethod = requestType.slice(0, 3) === 'get' ? 'GET' : 'POST';

        apis[requestType] = {};
        apis[requestType]['method'] = requestMethod;

        let fields = {};

        $(`#collapse${$(this).text()} .api-call-input-tr td`).each(function (j, v) {
          let fieldValue = $(this).text();
          if (fieldValue !== '') {
            fieldValue = fieldValue.replace(':', '');
            fields[fieldValue];
            let isRequiredField = requiredField.includes(fieldValue);
            if (isRequiredField) {
              fields[fieldValue] = { 'optional': false };
            } else {
              fields[fieldValue] = { 'optional': true };
            }
          }
        })

        apis[requestType]['fields'] = fields;

      });
      fs.writeFile(__dirname + '/src/constants/requestLists.json', JSON.stringify(apis), function () { })
    }
    done();
  }
});

crawler.queue('https://testardor.jelurida.com/test');
