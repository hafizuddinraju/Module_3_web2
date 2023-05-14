const addmyMind = <T>(myInfo:[T])=>{
    const data= [1,2,3,4,5]
    const newData = [...myInfo,...data];
    return newData;
}
const result2 = addmyMind([6])
console.log(result2);
type MyInfoType = {
    name:string;
    age:number;
    salary:number;
    other1:boolean;
    gender:string

}
const myData:MyInfoType = {
    name:'Raju',
    age:24,
    salary:10000,
    other1:true,
    gender:'Male'
    

}
const addmyMind2 = <T extends MyInfoType>(myInfo:T)=>{
    const data= 'Rose'
    const newData = {...myInfo,data};
    return newData;
}
const result3 = addmyMind2(myData)
console.log(result3);