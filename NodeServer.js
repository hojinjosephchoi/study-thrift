
var thrift = require("thrift");
var UserAccountService = require("./gen-nodejs/UserAccountService");
var ttypes = require("./gen-nodejs/user_types");

const userAccountList = [];

var server = thrift.createServer(UserAccountService, {
  getAccounts(result) {
    console.log(`getAccounts`);
    console.log(userAccountList);
    result(null, userAccountList);
  },
  insertAccounts(userAccount) {
    console.log(`${userAccount.email}, ${userAccount.name}`);
    userAccountList.push(userAccount);
  }

});

server.listen(9090);