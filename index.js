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
