const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh'; // CAN UPDATE THIS AS NEEDED
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) { // SWAP #1
    // authMiddleware: function ({ req }) { SWAP #1
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization; // SWAP #2
    // let token = req.body.token || req.query.token || req.headers.authorization; SWAP #2

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' }); // SWAP #3
      // return req; SWAP #3
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' }); // REMOVE WHEN TRANSITIONING
    }

    // send to next endpoint
    next(); // REMOVE WHEN TRANSITIONING
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

// TODO: COMPLETE SWAPS AND REMOVALS ACCORDING TO COMMENTS ONCE READY
