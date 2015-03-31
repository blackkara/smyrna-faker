
module.exports = {
    
    kpyt: function(){
        var provider = getProvider();
        var latlng = getLatLng();
        var fixdate = getFixdate();
        var speed = getSpeed();
        var bearing = getBearing();
        var accuracy = 10;
        return '$KPYT,DEVICE_ID,' + provider + ',' + accuracy + ',' + latlng + ',' + fixdate + ',' + speed + ',' + bearing;
    }
}

function getRandomInRange(a, b, fixed) {
    return (Math.random() * (b - a) + a).toFixed(fixed) * 1;
}

var providers = ['fused:root', 'gps:root', 'network:root'];

function getProvider(){
    return providers[Math.floor(Math.random() * providers.length)];
}
function getBearing(){
    return Math.random()*100;
}
function getSpeed(){
    return Math.random()*100;
}
function getFixdate(){
    return Math.floor(Date.now() / 1000);
}
function getLatLng(){
    return getRandomInRange(-180, 180, 3) + ',' +
           getRandomInRange(-180, 180, 3);
}
