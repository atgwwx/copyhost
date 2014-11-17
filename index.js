#!/usr/bin/env node
var exec = require('child_process').exec;
var os = require('os');
function getIpv4() {
  var networkInterfaces = os.networkInterfaces();
  var ipv4 = null;
  for(var key in networkInterfaces) {
    networkInterfaces[key].forEach(function (network) {
      if (network.family === 'IPv4' && !network.internal) {
        ipv4 = network.address;
        return;
      }
    });
  }
  //执行复制到剪切板命令
  exec('echo ' + ipv4 + '| pbcopy');
  console.log(ipv4, '已复制到剪切板');
  return ipv4;
};
getIpv4();