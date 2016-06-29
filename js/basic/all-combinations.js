// allComb([1, 2], ['b', 'z'], ['etc.', 'you get the idea'])

var array1 = [1, 2, 3, 4];
var array2 = ["a", "b", "c", "d"];
var array3 = ["One", "Two", "Three", "Four",]


for (var i = 0; i < array1.length; i++){
    for (var j = 0; j < array2.length; j++){
        for (var k = 0; k < array3.length; k++){
            console.log(array1[i] + " , " + array2[j] + " , " + array3[k]);
        }
    }
}
