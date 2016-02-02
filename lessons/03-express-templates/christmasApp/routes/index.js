var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var d = new Date();
	if (d.getMonth === 11 && d.getDate === 25) {
		var message = "YES"
	} else {
		var message = "NO"
	}
	res.render('index', { answer: message });
});

module.exports = router;
