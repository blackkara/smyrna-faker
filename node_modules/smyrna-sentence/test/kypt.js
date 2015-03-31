var assert = require('assert');
var dummy = require('../dummy.js');
var ks = require('../index.js');
var Log = false;



var wrongSentence01,
    wrongSentence02 = null,
    wrongSentence03 = undefined,
    wrongSentence04 = 1,
    wrongSentence05 = {},
    wrongSentence06 = [],
    wrongSentence07 = function(){};
    
var wrongSentence08 = '',
    wrongSentence09 = 'Evet bu  cümle tam olarak sekiz parçadan oluşuyor',
    wrongSentence10 = 'Evet,bu,,cümle,tam,olarak,sekiz,parçadan,oluşuyor',
    wrongSentence11 = '$KPYT,bu,,cümle,tam,olarak,sekiz,parçadan,oluşuyor';
    
var wrongSentence12 = '$XXX,1,fused:root,,38.467416,27.159084,1423167000,90,90',
    wrongSentence13 = '1,fused:root,,38.467416,27.159084,1423167000,90,90';

var validSentence01 = '$KPYT,1,fused:root,,38.467416,27.159084,1423167000,90,90';


describe('KPYT SENTENCE (SINGLE)', function(){
    
    var sentence = dummy.kpyt();
    var parsed = ks.parse(sentence);
    
    if(Log) console.log('Sentence: ' + sentence);
    if(Log) console.log('Sentence token length : ' + Object.keys(parsed).length);
    
    it('throws not string error', function(){
        assert.throws(function(){ks.parse(wrongSentence01)});
    });
    it('throws not string error', function(){
        assert.throws(function(){ks.parse(wrongSentence02)});
    });
    it('throws not string error', function(){
        assert.throws(function(){ks.parse(wrongSentence03)});
    });
    it('throws not string error', function(){
        assert.throws(function(){ks.parse(wrongSentence04)});
    });
    it('throws not string error', function(){
        assert.throws(function(){ks.parse(wrongSentence05)});
    });
    it('throws not string error', function(){
        assert.throws(function(){ks.parse(wrongSentence06)});
    });
    it('throws not string error', function(){
        assert.throws(function(){ks.parse(wrongSentence07)});
    });
    it('throws string length error', function(){
        assert.throws(function(){ks.parse(wrongSentence08)});
    });
    it('throws string length error', function(){
        assert.throws(function(){ks.parse(wrongSentence09)});
    });
    it('should not be a string', function(){
        assert.throws(function(){ks.parse(wrongSentence10)});
    });
    it('should not be a string', function(){
        assert.doesNotThrow(function(){ks.parse(wrongSentence11)});
    });
    it('throws identifier error', function(){
        assert.throws(function(){ks.parse(wrongSentence12)}, function(err){
            if(Log) console.log(err);
            return true;
        });
    });
    it('throws token length error', function(){
        assert.throws(function(){ks.parse(wrongSentence13)}, function(err){
            if(Log) console.log(err);
            return true;
        });
    });
    
    
    var current;
    for(var j=0; j<5; j++){
        it('should not be a string', function(){
            assert.doesNotThrow(function(){
                current = dummy.kpyt();
                parsed = ks.parse(current);
                if(Log) console.log(current + '\n' + JSON.stringify(parsed));
            });
        });
    }
    
});

describe('KPYT SENTENCE (MULTI)', function(){
  
    var wrongMergedSentence01 = ';'
    var mergedSentence02 = validSentence01 + ';' + validSentence01;
    var mergedSentence03 = validSentence01 + ';' + validSentence01 + ';' + mergedSentence02;
    
    it('should be succeeded', function(){
        
        assert.doesNotThrow(function(){
            var parsed = ks.parse(mergedSentence02);
            if(Log) console.log(parsed);
        });
    });
    
    it('should be succeeded', function(){
        
        assert.doesNotThrow(function(){
            var parsed = ks.parse(mergedSentence03);
            if(Log) console.log(parsed);
        });
    });
    
    it('should be failed', function(){
        
        assert.throws(function(){
            var parsed = ks.parse(wrongMergedSentence01 + wrongMergedSentence03);
            if(Log) console.log(parsed);
        }, function(err){
            if(Log) console.log(err);
            return true;
        });
    });
    
    it('should be failed', function(){
        
        assert.throws(function(){
            var parsed = ks.parse(wrongMergedSentence01);
            if(Log) console.log(parsed);
        }, function(err){
            if(Log) console.log(err);
            return true;
        });
    });
    
    
});