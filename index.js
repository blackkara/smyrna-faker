var ss = require('smyrna-sentence');
module.exports = {
    
    tracking: function(id, period){
        
        var currentIndex = 0;
        var currentSentence = null;
        var currentPoint;
        var currentObj = {
            deviceId: id ||'DEMO',
            provider: 'FUSED',
            accuracy: 5,
            bearing: 40,
            speed: 75
        };
        
        var path = require('./paths/Penn Station - Wall St');
        var pathLen = Object.keys(path).length;
        
        return {
            duration: pathLen * period,
            start: function(done){
                console.log('--STARTED--');
                var interval = setInterval(function(){
                    if(pathLen === currentIndex){
                        done(true, currentSentence);
                        clearInterval(interval);
                        console.log('--FINISHED--');
                        return;
                    }
                    currentPoint = path[currentIndex++];
                    currentObj.latitude = currentPoint.lat;
                    currentObj.longitude = currentPoint.lng;
                    currentObj.date = new Date();
                    currentSentence = ss.kpyt(currentObj);
                    done(false, currentSentence);
                }, period)
            }
        }
    }
}