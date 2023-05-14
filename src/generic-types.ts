type GenericType<T> = Array<T>
const rollNumber4: GenericType<number> = [2,5,6];
const rollNumber5: GenericType<string> = ["2","5","6"];

type NumberRollType = {
    name:string;
    roll:number
}
const useInfo :GenericType<NumberRollType>=[
    {
        name:'Raju',
        roll:2
    },
    {
        name:'Rose',
        roll:3
    }
]
type GenericTuple <R, T> = [R, T];
type InputType = {
    name:string;
    salary:number
}
const relationWithSalary : GenericTuple<InputType, string>=[
    {
        name:'Raju',
        salary:1000000
    },
    'GIGI'
    

]
type GenericInfo <T> =  {
    name:string;
    husband:T
}
const infoData:GenericInfo<{name:string, age:number}>={
    name:'Raju',
    husband:{
        name: 'Roni',
        age:22
    }


}
interface CrushType<T,U>{
    name:string;
    husband:T;
    wife:U


}
const crsh1:CrushType<object,object> = {
    name: 'GIGI',
    husband:{
        name:'Raju',
        age:24
    },
    wife:{
        name:'Roja',
        age:20
    }
    


}
const crsh2:CrushType<string, boolean>={
    name:'Salina',
    husband:'Raju',
    wife:true
}
