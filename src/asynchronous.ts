const makePromise = ():Promise<string>=>{
   return new Promise ((reslove, reject)=>{
        const data: string = 'Hello user';
        if(data){
            reslove(data)
        }else{
            reject('failed')
        } 
    })
}
const getDataPromise = async(): Promise<string>=>{
    const data = await makePromise();
    return data;
}

// const fetchApi = async()=>{
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return await data.json()
   

// }

// const getAPIData = async()=>{
//     const data = await fetchApi();
//     console.log(data);
// }
// getAPIData()
interface User1 {
    id: number;
    name: string;
    email: string;
  }
  
  async function getUsers(): Promise<User1[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as User1[];
  }
  async function showdata22():Promise<void>{
    const res = await getUsers()
    console.log(res);
  }
  showdata22()