function produceDrivingRange(blockRange) {
    return function (start, end) {
    debugger;
    const distance = parseInt(end, 10) - parseInt(start, 10)
    debugger;
    if (blockRange > distance)
        {
        debugger;
        return `within range by ${blockRange - distance}`
        }
    else
        {
        return `${distance - blockRange} blocks out of range`
        }
    }
}

// it('takes an argument of blockRange which is then used to calculate if something is within range', function(){
//     let eightBlockRange = produceDrivingRange(8)
//     expect(eightBlockRange('10th', '20th')).to.equal('2 blocks out of range')
//     expect(eightBlockRange('10th', '14th')).to.equal('within range by 4')
//   })
let eightBlockRange = produceDrivingRange(8)
eightBlockRange('10th', '20th');
function produceTipCalculator (tip) {
    return function (fare ) {
        debugger;
        const product = fare * tip
        debugger;
    return product
    }
}
let tenPercentTip = produceTipCalculator(.10);
// expect(tenPercentTip(50)).to.equal(5)
tenPercentTip(50);
// expect(tenPercentTip(30)).to.equal(3)
tenPercentTip(30);
function createDriver (name) {
    let driverId = 0
    return function Driver (name) {
        this.name = name
        this.id = driverId++
    }
}
let Driver = createDriver('sam');
let Driver2 = createDriver('bob');
Driver === Driver2;
