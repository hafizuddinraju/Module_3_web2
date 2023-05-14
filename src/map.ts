const dataArray = [1,4,5,6];
const arrayD = dataArray.map((number)=> number.toString())
console.log(arrayD);
type volume ={
    h:number;
    w:number;
    d:number;
}
type Area<T> = {
    [key in keyof T]:T[key]
}
const area1:Area<{h:number, w:number,d:number}> = {
    h:10,
    w:20,
    d:30
}
console.log(area1);