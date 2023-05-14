type User = {
    name:string;
    age: number;
}
type extendedUser = User &{
    role:number

}
interface IUser{
    name:string;
    age:number;
}
interface IExtendUser extends IUser{
    role:number;
}
const user: extendedUser = {
    name:'Rose',
    age: 30,
    role:10
}
type NumberType = (num1: number, num2:number) => number;

const addNumber: NumberType = (num1, num2)=> num1 + num2

interface NumberTypeInterface{
    (num1:number,num2:number):number;
}
const addNumber1: NumberTypeInterface = (num1, num2)=> num1 + num2
type rollNumberType = number[]
const rollNumber2:rollNumberType = [1,3,5,8]

 interface IRollNumberType{
    [index:number]:number
 }
 const rollNumber3:IRollNumberType = [1,3,5,8]
 console.log(rollNumber3);