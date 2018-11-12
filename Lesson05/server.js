var net = require('net');
var server = net.createServer(function (connection) {
    console.log('Client Connected');

    connection.on('end', function () {
        console.log('client disconnected');
    });

    setInterval(function () {
        var currentValue = Math.round(12 * Math.random());
        console.log('Current value is ' + currentValue.toString())
        connection.write(currentValue.toString());
        connection.pipe(connection);
    }, 5000);

});

server.listen(4001, function () {
    console.log('Server running on http://localhost:4001');
});