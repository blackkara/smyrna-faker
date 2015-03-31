smyrna-sentence
=========

A Simple, tracking and geofencing protocol for kipyo, like nmea sentences. Sentence includes device id and android location object properties. e.g provider, latitude, longitude, speed, bearing

Basically, responses below questions
*   Device id,   Which device did send this sentence ?
*   Provider, How did device obtain location ?
*   Location, Where is the device ?
*   Date,  When did device obtain this location ?
*   Speed, What's speed of device ?
*   Bearing, What's bearing of device ?
*   Accuracy, How accurate this location ?


### $KPYT
It's tracking sentence. When devices get location, creates this sentence
```javascript
/**
 * Device id  : DEVICE_ID_123
 * Provider   : fused:root
 * Accuracy   : 10
 * Latitude   : 38.428428
 * Longitude  : 27.133139
 * Date       : 1424992557
 * Speed      : 10
 * Bearing    : 5
 */
 var sentence = '$KPYT,DEVICE_ID_123,fused:root,10,38.428428,27.133139,1424992557,10,5';
```

### $KPYG
It's geofencing sentence. When occured geofencing, creates this sentence
```javascript
/**
 * Device       : DEVICE_ID_123
 * Provider     : fused:root
 * Accuracy     : 10
 * Latitude     : 38.428428
 * Longitude    : 27.133139
 * Date         : 1424992557
 * Speed        : 10
 * Bearing      : 5
 * Geofence id      : GEOFENCE_ID_123
 * Geofencing type  : 1
 */
 var sentence = '$KPYG,DEVICE_ID_123,fused:root,10,38.428428,27.133139,1424992557,10,5,GEOFENCE_ID_123,1';
```
