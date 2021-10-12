let yaricap = process.argv[2];

function area(p) {
    return Math.PI * (p ** 2);
}

console.log(`Yarıçapı ${yaricap} olan dairenin alanı:${area(yaricap)}`);