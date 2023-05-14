type a1 = null;
type a3 = undefined;
type a4 = number;
type d =  a1 extends number ? number: a3 extends undefined? undefined: a4 extends number? number:never


type Sheikh = {
    wife1: string;
    wife2:string;
};
type CheckData<T,K> = K extends keyof Sheikh ? true : false
type CheckData1 = CheckData<Sheikh, 'wife2'>

type genericFriend<T> = T extends 'Nayeem'? never : T


type friend = 'Ibrahim' | 'Nayeem' | 'Peyal'

type genericFriend1<T,U> = T extends U? never:T

type currentFriend = genericFriend1<friend,'Nayeem'>
// const dataFried:genericFriend1<friend,string> = 


// const dataShow= (param1:string, param2:string)=>{
//     return {param1, param2}

// }
// const currentData = dataShow("20",'Nayeem')
// // console.log(currentData);
interface Person3 {
    name: string;
    age: number;
  }
  
  type Employee = Person3 & {
    id: string;
  };
  
  const dataUpdate:Employee = {
    name:'Raju',
    age:24,
    id:"124"

  }
  console.log(dataUpdate);