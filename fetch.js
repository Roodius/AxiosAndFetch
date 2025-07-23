

// now you can use async await 
// .then or catch syntax 
// try and catch 
// promisfies also 

function main(){
     fetch("link") // http or https
    .then(async (response) => {
        const json = await response.json();  // awaiting here to convert into json
        console.log(json)
    })
}

// ------------------other hand you do this also------------
 async function main(){
     const response =  await fetch("link") // http or https
        const json = await response.json(); // text() if they send  // awaiting here to convert into json
        console.log(json)
}   // more clearner way no jargon 


// in react you wiil use in useEffect


//--------- how can you send POST request -----------------
async function main(){
     const response =  await fetch("link",{
        method:"POST"
     }) // http or https
        const json = await response.json();  // awaiting here to convert into json
        console.log(json)
}   // same as POST -> PUT, DELETE , GET , 


// --------------Headers----------------

async function main(){
     const response =  await fetch("link",{
        method:"POST",
        headers:{
            "Authorization": "Bearer 123"
        } ,
        body:{
            username:"rooduis"
        },
     }) // http or https
        const json = await response.json();  // awaiting here to convert into json
        console.log(json)
}