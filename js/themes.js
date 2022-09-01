export {themes as themes};
const srcArr = [
    "./images/makicons/1.webp",
    "./images/makicons/2.webp",
    "./images/makicons/3.webp",
    "./images/makicons/4.webp",
    "./images/makicons/5.webp",
    "./images/makicons/6.webp",
];
const img = {"disSrc":"","title":"","artist":""};

var currentTheme = "dark";

class themes {


    constructor(){
     this.addThemes = this.addThemes;
     this.applyThisTheme = applyThisTheme;
     this.applyMakIcons = this.applyMakIcons;
     this.getArt = getArt;
     this.makIconAnime = 0;
     this.currentTheme = currentTheme;
     this.sideFilterClicksMob = sideFilterClicksMob;



     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.currentTheme = "dark"; 
        this.applyThisTheme("dark");
     }else{
        this.currentTheme = "light";
        this.applyThisTheme("light");
     }
     positionMakiCons();
     this.applyMakIcons();
     this.sideFilterClicksMob();
        
    }

  

    async addThemes (e){
        e.stopPropagation();
        e.preventDefault();
        const lePath = await (async()=>{
            return e.composedPath();
        })().then(async(l)=>{
            l.forEach(el=>{
                if(el.nodeType===9||el.nodeType===undefined){}else{
                    if(el.classList.contains("themeop")){
                        applyThisTheme(el.classList[0]==="opt1"?"dark":"light");
                    }
                } 
            })
            return l;
        })
        this.currentTheme = "dark";  
    }

    applyMakIcons (){
        const time = 6942;
        var counter = 0;
        const makIconAnime = window.setInterval(()=>{
//            const img = document.querySelectorAll(".framesmom")[0].querySelectorAll("img")[0];
  //          const imgClone = img.cloneNode(true);
            //imgClone.style.top = "0px";
         
            document.querySelectorAll(".framesmom").forEach(ele=>{
                const img = ele.querySelectorAll("img")[0];
                const imgClone = img.cloneNode(true);
                //imgClone.style.top = "0px";    
            if(counter < srcArr.length-1){
                imgClone.src = srcArr[counter];
                imgClone.style.top = "0px";
                img.parentNode.appendChild(imgClone);
                img.style.transform = "translate(190px,0)";
                pauseForTheseSeconds(1000,()=>{
                    img.remove();
                }).then(pauseForTheseSeconds(100,()=>{
                    imgClone.style.top = "-169px";
                }))
                //counter++;
            }else{
                imgClone.src = srcArr[counter];
                imgClone.style.top = "0px";
                img.parentNode.appendChild(imgClone);
                img.style.transform = "translate(190px,0)";
                pauseForTheseSeconds(1000,()=>{
                    img.remove();
                }).then(pauseForTheseSeconds(100,()=>{
                    imgClone.style.top = "-169px";
                }))
                //counter = 0;
            } 
            })
            
            if(counter<srcArr.length-1){
                    counter++;
            }else{
                    counter = 0;
            }
        },time);
        //this.dupliMakiCons();
        this.makIconAnime = makIconAnime;
    }

    dupliMakiCons(){
        const maKiCon = document.querySelectorAll(".framesmom")[0];
        maKiCon.remove();
        const mom = document.querySelectorAll(".momofall")[0];
        const momStyles = window.getComputedStyle(document.querySelectorAll(".momofall")[0]);
        
        const width = parseFloat(momStyles.getPropertyValue("width")
        .slice(0,momStyles.getPropertyValue("width").length-2));
        const height = parseFloat(momStyles.getPropertyValue("height")
        .slice(0,momStyles.getPropertyValue("height").length-2));

        var theHeight = 110;
        var theWidth = 187;

        const columns = parseInt(width/theWidth);
        

        for(let i = 0; i < 2; i++){
            for(let j = 0; j < columns; j++){
                const elClone = maKiCon.cloneNode(true);
                elClone.style.top = `${theHeight+16}px`;
                elClone.style.left = `${theWidth-120}px`;
                mom.appendChild(elClone);
                theWidth = theWidth + 187;
            }
            theWidth = 187;
            theHeight = theHeight + 269;
        }
    }


}


const pauseForTheseSeconds = async(seconds=100,action=()=>{})=>{
    const thisTimeout = window.setTimeout(()=>{
        action();
        window.clearTimeout(thisTimeout);
    },seconds)
  }


const applyThisTheme= (theme)=>{
    if(theme==="light"){
        //dark green back to light green
        document.querySelectorAll("body, .footertop p,.footertop ul").forEach(ele=>{
            if(ele.nodeType){
                ele.style.backgroundColor = "#5FE8B4";
            }
        })
        //vice versa
        document.querySelectorAll(".makitit,.hero p, div.caption h4,div.tag").forEach(ele=>{
            if(ele.nodeType){
                ele.style.color = "#0B6342";
            }
        })
        //whitetoblack
        document.querySelectorAll(".footertop p,.social-links li a").forEach(ele=>{
            if(ele.nodeType){
                ele.style.color = "#000000";
            }
        })
        document.querySelectorAll(".filter-container ul.filters li a.filter").forEach(ele=>{
            if(ele.nodeType){
                ele.style.color = "#fff";
            }
        })
        document.querySelectorAll("footer").forEach(ele=>{
            if(ele.nodeType){
                ele.style.background = "#f5f5f5";
            }
        })
     
        document.querySelectorAll(".brand")[0].querySelectorAll("img")[0].src ="./images/logotoo.png";
        currentTheme = "light";
        document.querySelectorAll(".themeop").forEach(e=>e.style.border = "none");
        document.querySelectorAll(".opt2")[0].style.border = ".69px dotted #0B6342";
        console.log(currentTheme);

        

    }else{
        //light green back to dark green
        document.querySelectorAll("body, .footertop p,.footertop ul").forEach(ele=>{
            if(ele.nodeType){
                ele.style.backgroundColor = "#0B6342";
            }
        })
        //vice versa
        document.querySelectorAll(".makitit,.hero p, div.caption h4,div.tag,.filter-container ul.filters li a.filter").forEach(ele=>{
            if(ele.nodeType){
                ele.style.color = "#5FE8B4";
            }
        })
          //blacktowhite
          document.querySelectorAll(".footertop p,.social-links li a").forEach(ele=>{
            if(ele.nodeType){
                ele.style.color = "#fff";
            }
        })
        document.querySelectorAll("footer").forEach(ele=>{
            if(ele.nodeType){
                ele.style.background = "#323e38";
            }
        })
        document.querySelectorAll(".brand")[0].querySelectorAll("img")[0].src ="./images/logo.png";
        currentTheme = "dark";
        document.querySelectorAll(".themeop").forEach(e=>e.style.border = "none");
        document.querySelectorAll(".opt1")[0].style.border = ".69px dotted #0B6342";
        console.log(currentTheme);
    }
}




const getArt = async (server)=>{
const array = new Uint32Array(1);
self.crypto.getRandomValues(array);
const arrToo = Array.from(array.toString());
const page = {"no":""};
const row = {"no":""};

for(let i=0; i<arrToo.length;i++){
    if(i==0||i==1){
        page.no = page.no + arrToo[i];
    }else if(i==arrToo.length-1){
        row.no = arrToo[i]>0?arrToo[i]:1;
    }
}
const randArt = JSON.parse(
    await server.startFetch(
        JSON.stringify({"no":"data"}),
        `search?limit=${row.no}&page=${page.no}`,
        server.artDataURL,
        )
)
var randArtId = randArt.data[0].api_link.split("artworks/");
randArtId = randArtId[1];

const randArtData = JSON.parse(
    await server.startFetch(
        JSON.stringify({"no":"data"}),
        `${randArtId}?fields=id,title,image_id,artist_title`,
        server.artDataURL,
        )
)
const artCanvas = document.querySelectorAll(".art")[0];
const heightsToMatch = [
    {"height":window.getComputedStyle(document.querySelectorAll("footer")[0]).getPropertyValue("height")},
    {"height":window.getComputedStyle(document.querySelectorAll("footer")[1]).getPropertyValue("height")}]
heightsToMatch.forEach(h=>{
    h.height = parseInt(h.height.slice(0,h.height.length-2),10);
})
artCanvas.style.height = `${(heightsToMatch[0].height+heightsToMatch[1].height)}px`;
const imgSrc = 
    await server.startFetch(
        JSON.stringify({"no":"data"}),
        `artpicget`,
        server.artPicURL(randArtData.data.image_id),
        )
img.disSrc = imgSrc;


randArtData.data.title = (()=>{
   if(randArtData.data.title===null||randArtData.data.title==="null"||randArtData.data.title===undefined||randArtData.data.title==="undefined")
    {randArtData.data.title="Unknown";
    }else{
        randArtData.data.title =randArtData.data.title;
    }
    return randArtData.data.title;
})();

img.title = randArtData.data.title;

randArtData.data.artist_title = (()=>{
    if(randArtData.data.artist_title===null||randArtData.data.artist_title==="null"||randArtData.data.artist_title===undefined||randArtData.data.artist_title==="undefined")
     {randArtData.data.artist_title="Unknown";
     }else{
         randArtData.data.artist_title =randArtData.data.artist_title;
     }
     return randArtData.data.artist_title;
 })();
 img.artist = randArtData.data.artist_title;

artCanvas.style.backgroundImage = `url(${imgSrc})`;
artCanvas.querySelectorAll("h4")[0].querySelectorAll("span")[0].innerHTML = `${randArtData.data.title}`;
artCanvas.querySelectorAll("h4")[0].querySelectorAll("span")[1].innerHTML = `${randArtData.data.artist_title}`;
artCanvas.querySelectorAll("a")[0].addEventListener("click",imageShower)
}

const sideFilterClicksMob = ()=>{
    if(window.screen.width<992){
        document.querySelectorAll(".filtera").forEach(e=>{
            e.addEventListener("click",()=>{
                console.log("I was clicked")
                document.querySelectorAll("ul.filters")[0].click();
            })
        })
    } 
}

function fullImgTab(imgsrc,artist,title) {
    var newTab = window.open();
    const someVals = (()=>{
        const valarr = []
        if(true){
            valarr.push({"left":"0px"});
            valarr.push({"width":"100%"});
        }
        return valarr;
    })();
    console.log(someVals);
    newTab.document.body.innerHTML = `
    <img
    style="
    display:block;
    position:relative;
    margin:0 auto;
    " 
    src="${imgsrc}" width="100%" height="auto" style="display:block; margin:0 auto;">

    <p class="popuppart"style="
    position: absolute;
    margin:0 auto;
    font-family: 'Merriweather';
    background-color:#0B6342;
    color:white !important;
    padding:6px 9px;
    top:69vh;
    left:${someVals[0].left};
    width:${someVals[1].width};
    box-sizing:border-box;
    height:69px;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;">
    <span>${artist}</span>
    <span>by</span>
    <span>${title}</span>
    <p>
    `;
  
    return "ifrm.location.href";
  }


  function positionMakiCons(){
    const momwidth = window.getComputedStyle(document.querySelectorAll(".framesmom")[0]).getPropertyValue("width");
    const childwidth = window.getComputedStyle(document.querySelectorAll(".frame")[0]).getPropertyValue("width");
    const vals = [{"w":momwidth},{"w":childwidth}];
    console.log(vals);
    vals.forEach(val=>{
        val.w = val.w.slice(0,val.w.length-2);
        val.w = parseInt(val.w,10);
    })
    const leftVal = (vals[0].w-vals[1].w)/2;
    console.log(leftVal);
    document.querySelectorAll(".frame")[0].style.left = leftVal+"px";
  }


  const imageShower = (e)=>{
    e.target.removeEventListener("click",imageShower);
    e.preventDefault();
     e.stopPropagation();
     fullImgTab(img.disSrc,img.title,img.artist);
   }