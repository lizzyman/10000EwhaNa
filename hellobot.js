module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
	"```'This is how to Manewhana module.\n  *help : to help you to use useful commands of Manewhana.\n  *fec [day1][empty classes*] [day2][empty classes] : to find empty day and empty classes (ex. *fec 월45 화26 목23)\n  *fecr [day] [class] [builing] : to find empty builings(ex. *fecr 월 4 ecc)'```" 
 };
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
