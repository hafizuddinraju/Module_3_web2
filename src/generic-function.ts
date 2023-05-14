const createArry = (param:string):string[]=>{
    return [param]

}
const createUser = createArry("Bangladesh",)
console.log(createUser);
const createArry1 = <T>(param: T): T[] =>{
    return [param]

}
const createUser1 = createArry1('Hello')
const createUser2 = createArry1(40)
console.log(createUser2);
type InfoType = {
    name:string;
    age:number
}

const createArry2 = <T, U>(param1:T, param2:U):[T,U]=>{
    return [param1, param2]

}
const createUser3 = createArry2<InfoType, InfoType>({name:'Raju', age:24},{name:'Rose', age:20})
const createUser4 = createArry2<InfoType, {myname:string, gender:boolean}>({name:'Raju', age:24},{myname:'Rose', gender:true})
console.log(createUser3);
console.log(createUser4);
const crush = 'Selina';
const myInfo ={
    name:'Raju',
    age:24,
    salary:1000000,
    gender:'Male'
}
const newData = {...myInfo, crush}

const addMeMyCrush  = <T>(param:[T])=>{
    const crushname = 'Selina';
    return [...param,crushname];
    
}
const sendInfo = addMeMyCrush([myInfo])
console.log(sendInfo);