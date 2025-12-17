load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 091 activates: corrupt');
  return {phase: 2.57554};
});

print('Mongoose OS Brain 091 online – hydrogen valve ready');
