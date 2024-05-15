const Array = [22, 'likj', 'kikll', 'jane', 'kkio', 98];
const sum = Array.reduce((acc, val) => {
    if ( typeof val === 'number' && !isNaN(val))  {
        return acc + val;
    }
 else { 
    console.error('Not A Valid Number!');
    return acc;
 }

}, 0);
console.log(sum);
