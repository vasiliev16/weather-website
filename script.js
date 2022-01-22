let vremea ={
     "apiKey" : "0f4df95fdeaf8692d455e9b813325e2d",
    fetchVremea: function(oras){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ oras +"&units=metric&appid="+this.apiKey)
        .then((raspuns) => raspuns.json())
        .then((data) => this.afisareVreme(data));
    },
    afisareVreme: function(data){
        const {name} = data;
        const { icon, description} =data.weather[0];
        const {temp, humidity}=data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".oras").innerHTML = "Vremea in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.querySelector(".temp").innerHTML= temp+"°C";
        document.querySelector(".descriere").innerHTML= description;
        document.querySelector(".umiditate").innerHTML= "Umiditatea: " + humidity + "%";
        document.querySelector(".vant").innerHTML= "Viteza vantului: " + speed + "km/h";
        document.querySelector(".vremea").classList.remove("incarcare")
    },
    cautare:function(){
        this.fetchVremea(document.querySelector(".bara-cautare").value);
    }
};

document.querySelector(".cautare button").addEventListener("click" ,function(){
    vremea.cautare();
});

document.querySelector(".bara-cautare").addEventListener("keyup" ,function(event){
    if(event.key=="Enter"){
        vremea.cautare();
    }
});