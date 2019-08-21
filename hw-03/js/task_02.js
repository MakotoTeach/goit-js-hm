'use strick';


const countProps = function (obj) {

    const PropValues = Object.values(obj);
    
    console.log(PropValues)

    const total  = PropValues.length;
    
    
    return total;
}

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


