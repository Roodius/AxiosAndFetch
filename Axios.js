const axios = require("axios")


 // same as well use then catch or async await

async function main(){
       const res = await axios.get("link");   // now here we dont need to convert into json they do itself
       console.log(res.data);  // here you need to do .data then its actual data name like - {res.data.todos} 
}

//--------- how can you send POST request -----------------

async function main(){
       const res = await axios.post("link");   // now here we dont need to convert into json they do itself
       console.log(res.data);  // here you need to do .data then its actual data name like - {res.data.todos} 
}  // same as POST -> PUT, DELETE , GET , 



// --------------Headers ,body----------------

async function main(){
       const res = await axios.post("link",{
            username:"rooduis"  
       },{
          Headers:{
            "Authorization": "Bearer 123"
          },
          body
       });   
       console.log(res.data);  
}

