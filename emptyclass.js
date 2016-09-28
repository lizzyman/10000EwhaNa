module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
        text : '빈 강의실은 b129, b132, b151, b321 입니다. '
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}

