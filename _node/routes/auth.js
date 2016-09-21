var express = require('express');
var router = express.Router();
var request = require('request');

/**
 *	Basic SessionID storage
 *	TODO: Create a better Keygen
 *	TODO: Allow multiple sessions
 */
router.post('/login', function(req, res, next) {
	if (req.body.memberObject === undefined) return res.end();
	req.session.sessions = {
		sessionID: Math.random(),
		memberObject: req.body.memberObject
	};

	console.log(req.session);
	res.end();
});

/**
 *	Destroys the session object on logout
 */
router.get('/logout', function(req, res, next) {
	req.session.sessions.destroy(function(err) {
		err ? console.log(err) : res.redirect('/');
	});
});

/**
 *	Renews the current session
 */
router.get('/ping', function(req, res, next) {
	if (req.body.sessionID && req.body.sessionID != req.session.sessions.sessionID) {
		req.session.destroy(function(err) {
			err ? console.log(err) : res.redirect('/');
		});	
	} else {
		// renew logic goes here
		console.log('renewed');
		res.end();
	}
});

module.exports = router;