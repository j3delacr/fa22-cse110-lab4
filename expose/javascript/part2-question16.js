
for(var property in statistics) {
    var first = property.substring(0, 1);
    var num = statistics[property] % 2;

    if((first == 'r') || (num == 1 )) {
        console.log(statistics[property]);
    }
}

