//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var UserAccount = module.exports.UserAccount = function(args) {
  this.email = null;
  this.name = null;
  if (args) {
    if (args.email !== undefined && args.email !== null) {
      this.email = args.email;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
  }
};
UserAccount.prototype = {};
UserAccount.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserAccount.prototype.write = function(output) {
  output.writeStructBegin('UserAccount');
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 1);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

