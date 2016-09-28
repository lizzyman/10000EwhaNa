module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
        text : '공통 공강 시간은 월45 수23 목4 금7 입니다.' 
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}

