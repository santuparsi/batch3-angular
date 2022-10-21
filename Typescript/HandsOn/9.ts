//arrays
let names:string[]=['Rohan','Charan','Sunil','Dev']
//assing value to array
names[4]='Karan'
//access a value
console.log(names[0])
console.log(names[8]) //undefined
//fetch array values using for loop
for(let k=0;k<names.length;k++)
{
    console.log(names[k])
}
console.log()
for(let o of names)
console.log(o);