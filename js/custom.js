const obj = {
  "params": [
      {
          "initVal": "initKey",
          "action": "login",
          "token": "letMeIn",
          "dataObj": {"name":"Kil",
                      "email":"Roy",
                      "message":"WasHere!",
                  "subject":"Vibes n Inshallah!"}
      }
  ]
};

var serverC = "";
var animeC = "";


const string1 = (()=>{
  const string = {"str":""};
  if(window.location.hostname.includes("ismailisimba.github.io")){
    string.str = "/home";
  }else if(window.location.hostname.includes("127.0.0.1")){
    string.str = "/githome";
  }else{
    string.str = "";
  }
  
  return string.str;
})();
(async () => {
      
    
      const anime = await import(string1+"/js/titleanimation.js");
      const theme = await import(string1+"/js/themes.js");
      const serve = await import(string1+"/js/server.js");
      const googan = await import("https://www.googletagmanager.com/gtag/js?id=G-ENZL0PWCH0");
    
    return {anime,theme,serve,googan};
  })().then(({anime,theme,serve,googan})=>{
    const themes = new theme.themes();
    const server = new serve.server();
    serverC = server;
    animeC = themes;
    document.querySelectorAll(".themeop").forEach(e=>{
      e.addEventListener("click",themes.addThemes);
    })

    if(window.location.pathname.includes("/pages/")){
      if(window.location.pathname.includes("rates")||window.location.pathname.includes("about")||window.location.pathname.includes("contact")){
          console.log("gothere")
          const form = document.getElementById("send");
          if (form.attachEvent) {
              form.attachEvent("submit", processForm);
          } else {
              form.addEventListener("submit", processForm);
              form.addEventListener("click", processForm)
          }
    
        
      }
    }else{
      const animate = new anime.titleanimation();
    animate.start();
    }
    themes.getArt(server);
    window.setInterval(()=>{
      themes.getArt(server);
    },14692)
    console.log(googan);

    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ENZL0PWCH0');
  const meta = document.createElement("meta");
  meta.name = `google-site-verification`;
  meta.content = `wSzcNyp9exETjj0c3TU0wf4ZueB6G4HNiUdM7Rqs7r8`;
  document.head.appendChild(meta);
  });


  const processForm = (e)=>{
    animeC.startload("sending...");
    e.preventDefault();
    e.stopPropagation();
    const form = e.composedPath()[2];
    const name = form[0].value;
    const number = form[1].value;
    const email = form[2].value;
    const websiteurl = form[3].value;
    const message = `Website : ${websiteurl}<br>${form[4].value}`;

    obj.params[0].dataObj = {name,email,number,message}

       serverC.startFetch(
          JSON.stringify(obj),
          ``,
          serverC.emailURL,
          "POST",
          animeC.stopload
          )
  

  }

