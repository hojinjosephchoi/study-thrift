
var thrift = require('thrift');
var UserAccountService = require('./gen-nodejs/UserAccountService');
var ttypes = require('./gen-nodejs/user_types');
const assert = require('assert');

var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

var connection = thrift.createConnection("localhost", 9090, {
  transport : transport,
  protocol : protocol
});

connection.on('error', function(err) {
  assert(false, err);
});

// Create a UserAccountService client with the connection
var client = thrift.createClient(UserAccountService, connection);

client.getAccounts((err, response) => {
  console.log('getAccounts()');
  console.log(response);
});

const account = new ttypes.UserAccount();
account.email = 'hello@world.com';
account.name = 'hello';

client.insertAccounts(account, (err, response) => {
  console.log('insertAccount()');

  client.getAccounts((err, response) => {
    console.log('getAccounts()');
    console.log(response);
    connection.end();
  });
  
});


