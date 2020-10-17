var express = require('express');
var router = express.Router();

var VideoLink = '';
var timeStamp = '';

router.get('/VideoList.xml', function(req, res, next) {
  res.set('Content-Type', 'text/xml');
  res.send('<?xml version="1.0"?>\n' +
      '<rss version="2.0">\n' +
      '<channel>\n' +
      '<item>\n' +
      '    <title><![CDATA['+VideoLink+']]></title>\n' +
      '    <link><![CDATA['+VideoLink+']]></link>\n' +
      '    <description><![CDATA[Playing: '+VideoLink+']]></description>\n' +
      '    <icon>images/logo/tele_baern.png</icon>\n' +
      '    <timestamp>'+timeStamp+'</timestamp>\n' +
      '    <command>PLAY</command>\n' +
      '    <commandTimestamp>'+timeStamp+'</commandTimestamp>\n' +
      '</item>\n' +
      '</channel>\n' +
      '</rss>');
});

router.get('/setVideo', function(req, res, next) {
  VideoLink = req.query.videoURL;
  timeStamp = Math.floor(Date.now() / 1000);
  res.send();
});

module.exports = router;
