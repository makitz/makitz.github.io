export {titleanimation as titleanimation};

class titleanimation {
    
    constructor(){
        this.start = this.start;
        this.counter1 = 0;
        this.interval1 = this.interval1;
        this.counter2 = {"zero":["u","dhu","i"],"one":["di","gi","ta","li"],"num":0};
        this.title1 =  document.getElementsByClassName("title1")[0];
        this.doTitleAnimation = this.doTitleAnimation;
        this.pauseForTheseSeconds = this.pauseForTheseSeconds;
        this.interval2 = this.interval2;
    
        
    }

    interval1 = 36;
    interval2 = 0;

    

    start () {
        
        this.interval2 = setInterval(()=>{this.doTitleAnimation(this.interval1,this.counter1)},this.interval1);
        
    }

    doTitleAnimation (){
        const span = document.createElement("span");
        const span2 = document.createElement("span");
        const currColor = window.getComputedStyle(document.querySelectorAll(".makitit")[0]).getPropertyValue("color");
        span.style.fontWeight = "300";
        span2.style.fontWeight = "500";
        span.style.color = currColor;
        span2.style.color = currColor;
       
        if(this.counter1==0&&this.counter2.num>=0){
            if(this.counter2.num>2){

            }else{
                span.innerHTML = this.counter2.zero[this.counter2.num];
                document.getElementById("ma").appendChild(span);
            }
            span2.innerHTML = this.counter2.one[this.counter2.num];
            document.getElementById("ki").appendChild(span2);   
            if(this.counter2.num>=3){
                this.counter1 = 1;
                document.getElementById("spacespan1").innerHTML = " ";
                this.pauseForTheseSeconds(1669);
            }else{
                this.counter2.num++;
            }
             
        }else{
            if(this.counter2.num>=1){
                document.getElementById("ma").querySelectorAll("span")[this.counter2.num].remove();
            }
            document.getElementById("ki").querySelectorAll("span")[this.counter2.num+1].remove();
            if(this.counter2.num==0){
                this.counter1 = 0;
                document.getElementById("spacespan1").innerHTML = "";
                this.pauseForTheseSeconds(2069);
            }else{
                this.counter2.num--;
            }

        }
    }


    pauseForTheseSeconds (seconds){
        window.clearInterval(this.interval2);
        const thisTimeout = window.setTimeout(()=>{
            this.start();
            window.clearTimeout(thisTimeout);
        },seconds)
    }

}