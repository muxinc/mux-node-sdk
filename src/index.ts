const Library = require('./mux');

// because we have old clients who are using this, we will still need
// to use old-style exports at the module edge.
module.exports = Library.Mux;
