type Person = {
    name:string;
    age:number;
    address:string;
}
function getData<T, U extends keyof T> (obj:T, key:U){
    obj[key]
}
const result4= getData({name:'Raju', age:20},'age')