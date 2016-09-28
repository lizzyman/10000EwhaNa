module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
        text : '소요시간:23분, 환승역:합정 '
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
