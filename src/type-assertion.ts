function kgToGram (param:string | number):string | number | undefined{
    if(typeof param === 'string'){
        const value = parseFloat(param)*1000;
        return `The result id ${value}`
    }
    if(typeof param === 'number'){
        const value =  param*1000;
        return `The Result is ${value}`
    }
}
// const resultValue = <number>kgToGram(10) as number;
const resultValue = <number>kgToGram(10);
console.log(resultValue);

 type CustomError = {
    message: string
 }

  try {
    
  } catch (error) {
    console.log((error as CustomError).message);
    
  }