(function(){
      var config, moment, request, stripTags;
      request = require('request');
      config = require('../config.json');
      config = config.command.emptyTime;

      stripTags = function(string) {
            	return string.replace(/<.+?>/g, '');
     };

     module.exports.names = 'ㄱ 공강 g gonggang'.split(' ');

     module.exports.onMessage = function(slack, channel, user, message, rawMessage){
            	var args, i, j, k, day[5];
            	var timetable = [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]];
                        // command 사용법 : *ㅅ 1.2.3/3.4/2.3/0/6.7
            	args =  message.arg.split('/');
            	for (i = 0; i < 5; i++){
            		day[i] = args._[i];
            		day[i] = day[i].split('.');
            		for (j = 0; j <  day[i].length; j++){
            			day[i][j] = Number(day[i][j]);
            			for (k = 0; k < 7; k++){
            				if (day[i][j] == k+1)
            					timetable[i][k] = 1;
            			}
            		}
            	}
            	var emptyTime = [['X','X','X','X','X','X','X'], ['X','X','X','X','X','X','X'], ['X','X','X','X','X','X','X'], ['X','X','X','X','X','X','X'], ['X','X','X','X','X','X','X']]
            	for (i = 0; i < 5; i++){
            		for (j =0; j <7; j++){
            			if ((i == 0) && (timetable[i][j] != 1))
            				emptyTime[0][j] = j;
            			else if ((i==1) && (timetable[i][j] != 1))
            				emptyTime[1][j] = j;
            			else if ((i==2) && (timetable[i][j] != 1))
            				emptyTime[2][j] = j;
            			else if ((i==3) && (timetable[i][j] != 1))
            				emptyTime[3][j] = j;
            			else if ((i==4) && (timetable[i][j] != 1))
            				emptyTime[4][j] = j;
            		}
            	}
            	channel.send('월요일 : ' + emptyTime[0] + '\n');
            	channel.send('화요일 : ' + emptyTime[1] + '\n');
            	channel.send('수요일 : ' + emptyTime[2] + '\n');
            	channel.send('목요일 : ' + emptyTime[3] + '\n');
            	channel.send('금요일 : ' + emptyTime[4]);
            	return;
            };

}).call(this);
