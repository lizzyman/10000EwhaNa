var RtmClient = require('slack-client').RtmClient;
var WebClient = require('slack-client').WebClient;
var token = 'xoxb-78654270758-22Ls7me8dQw7DXrhuiCRq12n';
var web = new WebClient(token);
var rtm = new RtmClient(token, {logLevel: 'error'});

rtm.start();


var RTM_EVENTS = require('slack-client').RTM_EVENTS;

rtm.on(RTM_EVENTS.MESSAGE, function (message) {

    var channel = message.channel;
    var user = message.user;
    var text = message.text;
    if (text == 'hello')

        web.chat.postMessage(channel, 'World!', {username: "NoticeBot"});
});


