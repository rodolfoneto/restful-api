var sinon = require('sinon');
exports.test_handler_GET_request = function (test) {
    var response = {'writeHead' : function () {}, 'end' : function() {}};
    var responseMock = sinon.mock (response);
    responseMock.expects('end').once().withArgs('Get action was requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type': 'text/plain'});
    
    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'GET';
    
    var http_module = require('../modules/http-module');
    http_module.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
}

exports.test_handler_POST_request = function (test) {
    var response = {'writeHead' : function () {}, 'end' : function() {}};
    var responseMock = sinon.mock (response);
    responseMock.expects('end').once().withArgs('Post action was requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type': 'text/plain'});
    
    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'POST';
    
    var http_module = require('../modules/http-module');
    http_module.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
}

exports.test_handler_PUT_request = function (test) {
    var response = {'writeHead' : function () {}, 'end' : function() {}};
    var responseMock = sinon.mock (response);
    responseMock.expects('end').once().withArgs('Put action was requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type': 'text/plain'});
    
    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'PUT';
    
    var http_module = require('../modules/http-module');
    http_module.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
}

exports.test_handler_HEAD_request = function (test) {
    var response = {'writeHead' : function () {}, 'end' : function() {}};
    var responseMock = sinon.mock (response);
    responseMock.expects('end').once().withArgs('Head action was requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type': 'text/plain'});
    
    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'HEAD';
    
    var http_module = require('../modules/http-module');
    http_module.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
}

exports.test_handler_DELETE_request = function (test) {
    var response = {'writeHead' : function () {}, 'end' : function() {}};
    var responseMock = sinon.mock (response);
    responseMock.expects('end').once().withArgs('Delete action was requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type': 'text/plain'});
    
    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'DELETE';
    
    var http_module = require('../modules/http-module');
    http_module.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
}

exports.test_handle_bad_request = function (test) {
    var response = {'writeHead' : function () {}, 'end' : function() {}};
    var responseMock = sinon.mock (response);
    responseMock.expects('end').once().withArgs('Bad request');
    responseMock.expects('writeHead').once().withArgs(400, {'Content-Type': 'text/plain'});
    
    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'others';
    
    var http_module = require('../modules/http-module');
    http_module.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
}