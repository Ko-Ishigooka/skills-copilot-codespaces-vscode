// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Create a route
// 4. Create a request handler
// 5. Send a response
// 6. Listen on a port
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const comments = require('./comments.js');

const hostname = '