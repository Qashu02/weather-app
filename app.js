const apiKey = '59d8ed585f9bfeaf93e469ff131cbc03';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
let input=document.querySelector("input")
let card = document.querySelector('.card');

let cardbody= document.querySelector(".card-body");
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind');


async function getupdate(){
  try{
cityname=" ";
    cityname=input.value
     
      let res =await axios.get(apiUrl+cityname+`&appid=${apiKey}`);
      
      

        let city= document.querySelector(".city");
        city.innerHTML=res.data.name;
         city.style.textAlign="center";
         city.style.fontSize="2rem";
      city.style.marginTop='1rem'
         city.style.color='white'
         
         let temp=document.querySelector(".temp")
         temp.innerHTML=Math.round(res.data.main.temp)+'&deg C';
         
        
         
         temp.style.textAlign="center" ;
         temp.style.fontSize="2.5rem";
         temp.style.paddingLeft='4.5rem'
         temp.style.fontWeight="bold";
         temp.style.color='white'
       
    

         humidity.innerText=res.data.main.humidity+' Humidity';
         wind.innerText=res.data.wind.speed+'km/h'+' Wind';
        
         
         
      console.log(res)
      let weatherimg=document.querySelector(".weather-image");
    if(res.data.weather[0].main=='Smoke'){
weatherimg.src='./images/mist.png'
    }else if(res.data.weather[0].main=='Clouds'){
      weatherimg.src='./images/clouds.png';
    }
    else if(res.data.weather[0].main=='Rain'){
      weatherimg.src='./images/rain.png';
    }
    else if(res.data.weather[0].main=='Drizzle'){
      weatherimg.src='./images/drizzle.png';
    
    }
    else if(res.data.weather[0].main=='Snow'){
      weatherimg.src='./images/snow.png';
    
    }else{
      weatherimg.src='./images/clear.png'
    }
   } catch(e){
    console.log(e);
    alert("city not found")
  }


 
}

async function ShowCard(){
  
  card.style.visibility= "visible";

}
let btn=document.querySelector("button");

btn.addEventListener('click',function(){
  ShowCard();
   getupdate();
  

    
})

