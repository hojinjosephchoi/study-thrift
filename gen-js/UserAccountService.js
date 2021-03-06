//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

UserAccountService_getAccounts_args = function(args) {
};
UserAccountService_getAccounts_args.prototype = {};
UserAccountService_getAccounts_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserAccountService_getAccounts_args.prototype.write = function(output) {
  output.writeStructBegin('UserAccountService_getAccounts_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserAccountService_getAccounts_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [UserAccount]);
    }
  }
};
UserAccountService_getAccounts_result.prototype = {};
UserAccountService_getAccounts_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new UserAccount();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserAccountService_getAccounts_result.prototype.write = function(output) {
  output.writeStructBegin('UserAccountService_getAccounts_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserAccountService_insertAccounts_args = function(args) {
  this.userAccount = null;
  if (args) {
    if (args.userAccount !== undefined && args.userAccount !== null) {
      this.userAccount = new UserAccount(args.userAccount);
    }
  }
};
UserAccountService_insertAccounts_args.prototype = {};
UserAccountService_insertAccounts_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.userAccount = new UserAccount();
        this.userAccount.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserAccountService_insertAccounts_args.prototype.write = function(output) {
  output.writeStructBegin('UserAccountService_insertAccounts_args');
  if (this.userAccount !== null && this.userAccount !== undefined) {
    output.writeFieldBegin('userAccount', Thrift.Type.STRUCT, 1);
    this.userAccount.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserAccountService_insertAccounts_result = function(args) {
};
UserAccountService_insertAccounts_result.prototype = {};
UserAccountService_insertAccounts_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserAccountService_insertAccounts_result.prototype.write = function(output) {
  output.writeStructBegin('UserAccountService_insertAccounts_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserAccountServiceClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
UserAccountServiceClient.prototype = {};
UserAccountServiceClient.prototype.getAccounts = function(callback) {
  this.send_getAccounts(callback); 
  if (!callback) {
    return this.recv_getAccounts();
  }
};

UserAccountServiceClient.prototype.send_getAccounts = function(callback) {
  this.output.writeMessageBegin('getAccounts', Thrift.MessageType.CALL, this.seqid);
  var args = new UserAccountService_getAccounts_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_getAccounts();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

UserAccountServiceClient.prototype.recv_getAccounts = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new UserAccountService_getAccounts_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getAccounts failed: unknown result';
};
UserAccountServiceClient.prototype.insertAccounts = function(userAccount, callback) {
  this.send_insertAccounts(userAccount, callback); 
  if (!callback) {
  this.recv_insertAccounts();
  }
};

UserAccountServiceClient.prototype.send_insertAccounts = function(userAccount, callback) {
  this.output.writeMessageBegin('insertAccounts', Thrift.MessageType.CALL, this.seqid);
  var params = {
    userAccount: userAccount
  };
  var args = new UserAccountService_insertAccounts_args(params);
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_insertAccounts();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

UserAccountServiceClient.prototype.recv_insertAccounts = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new UserAccountService_insertAccounts_result();
  result.read(this.input);
  this.input.readMessageEnd();

  return;
};
