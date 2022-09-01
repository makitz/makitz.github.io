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
    
    return {anime,theme,serve};
  })().then(({anime,theme,serve})=>{
    const themes = new theme.themes();
    const server = new serve.server();
    document.querySelectorAll(".themeop").forEach(e=>{
      e.addEventListener("click",themes.addThemes);
    })
    const animate = new anime.titleanimation();
    animate.start();
    themes.getArt(server);
    window.setInterval(()=>{
      themes.getArt(server);
    },14692)
  });

