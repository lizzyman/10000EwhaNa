(function(){
      var config, moment, request, stripTags;

      request = require('request');
      config = require('../config.json');

      stripTags = function(string) {
                  return string.replace(/<.+?>/g, '');
      };

      module.exports.names = 'ㅅ 시간표 t timetable'.split(' ');

      module.exports.onMessage = function(slack, channel, user, message, rawMessage){
            var timetable = "";
            timetable += message.arg; // message.arg? message?

            channel.send(timetable); // 일단 의미상 이렇게 적어둠

      };

}).call(this);