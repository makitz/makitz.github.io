export {server as server};

const artDataURL = "https://api.artic.edu/api/v1/artworks/";
const artPicURL = (id)=>{
  return `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;
};
class server {
    
    constructor(){
        this.startFetch = fetchInfoWithFilter;
        this.artDataURL = artDataURL;
        this.artPicURL = artPicURL;
        this.readDataURL = readDataURL;
    
        
    }
}

const fetchInfoWithFilter = async (
  data = JSON.stringify({"def":"data"}),
  paraOne="",
  serverURL="",
  method='GET',
  funcAfter = (val)=>{console.log("fetch succesful")}
  )=>{
    const parameter = paraOne==="artpicget"?"":paraOne;
    var myRequest = new Request(serverURL+""+parameter);
    const retVar = await fetch(myRequest,{
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: method==='GET'? "omit":'include', // include, *same-origin, omit
        headers: {
          //'Access-Control-Allow-Headers':'x-requested-with, Content-Type, origin, authorization, accept, client-security-token',
          //'Content-Type': 'text/plain',
          //'Access-Control-Allow-Origin':'http://127.0.0.1:8080'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: method==='GET'? null:data // body data type must match "Content-Type" header
      }).then(async(response)=>{
        if (!response.ok){
            throw new Error("HTTP error, status = " + response.status); 
          }
          return paraOne==="artpicget"?response.blob():response.text();
      }).then(res=>{
        funcAfter(res);
        return paraOne==="artpicget"?readDataURL(res):res;
      }).catch(e=>{
        console.log(e);
    })
    return retVar;
}

const toMyDataUrl = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

const readDataURL = async(blob)=>{
  let parsedFile = null;
  parsedFile =  await toMyDataUrl(blob);
  return parsedFile;
}


