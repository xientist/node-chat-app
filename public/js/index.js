let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');


});

//fist argument on socket.on is the name of the "emitter reciever - listener". Call the argument
//To send it over to where the argument originally exists.

socket.on('newMessage', function( message ) {
    console.log('newMessage', message);
    let li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});
  

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});


jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {
        
    });
});

let locationButton = jQuery('#send-location');
locationButton.on('click', function() {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser');
    }

    navigator.geolocation.getCurrentPosition(function (position) {
        socket.emit('cerateLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function () {
        alert('unable to fetch location');
    })
});

