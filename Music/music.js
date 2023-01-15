const playbtn=document.getElementById("puntero");
const title=document.getElementById("song-name");
const previous=document.getElementById("pre");
const next = document.getElementById("next");
const songimg= document.getElementById("song-img");
const audio= document.getElementById("audio");
const disk=document.getElementById("disk");
const seekBar =document.getElementById("seek-bar");
const currentTime = document.getElementById("current-time");
const musicDuration = document.getElementById("song-duration");
const body= document.getElementById("music-box");


songs=[
  {
    name:"Paris ka trip",
    image:"https://dns2.vippendu.com/thumbmed/4159.jpg",
    path:"https://dns2.vippendu.com/320k/34297/4159/Paris-Ka-Trip-Yo-Yo-Honey-Singh--Millind-Gaba.mp3",
  },
  {
    name:"De talli",
    image:"https://dns2.vippendu.com/thumbmed/3144.jpg",
    path:"https://dns2.vippendu.com/320k/34297/3144/De-Taali-Yo-Yo-Honey-Singh--Armaan-Malik.mp3",
  },
  {
    name:"Ka Kha Ga",
    image:"https://dns2.vippendu.com/thumbmed/35719375.jpg",
    path:"https://dns4.vippendu.com/download/128k-wsdds/Ka-Kha-Ga.mp3",
  },
  {
    name:"Bhool Bhulaiyaa 2",
    image:"https://api.pendu-jatt.com/thumbmed/35411926.jpg",
    path:"https://dns4.vippendu.com/download/128k-wsapk/Bhool-Bhulaiyaa-2-Title-Track.mp3",
  },
  {
    name:"Saiyaan Ji",
    image:"https://dns2.vippendu.com/thumbmed/21410.jpg",
    path:"https://dns4.vippendu.com/download/128k-dqfrr/Saiyaan-Ji.mp3",
  },
  {
    name:"Hai Rama",
    image:"https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_419245055.jpg",
    path:"https://pagalsong.in/uploads/systemuploads/mp3/Rangeela/Hai%20Rama%20-%20Rangeela%20128%20Kbps.mp3",
  },

];





window.counter=0;




window.music= function(i){
  audio.src=songs[i].path;

    title.innerHTML=songs[i].name;
   
   songimg.src=songs[i].image;
   currentTime.innerHTML = '00:00';
   setTimeout(() => {
    seekBar.max = audio.duration;
    musicDuration.innerHTML = formatTime(audio.duration);
  }, 100);
 
};

music(0);




playbtn.onclick= function(){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
 
}



next.onclick= window.next_song =function (){
 
  if(counter>songs.length-1){counter=0} 
  
  else {
   counter++;
  };
  music(counter);
  audio.play();
};

previous.onclick=function pre_song(){
 
  if(counter<=0){counter=songs.length} 
  
  else {
   counter--;
  };
  music(counter);
  audio.play();
};



setInterval(() => {
  seekBar.value = audio.currentTime;
  currentTime.innerHTML = formatTime(audio.currentTime);
  if(Math.floor(audio.currentTime) === Math.floor(seekBar.max)){
      next_song();
     
  }
}, 500);

seekBar.addEventListener('change', () => {
  audio.currentTime = seekBar.value;
})



// Time

function formatTime (time) {
  let min = Math.floor(time / 60);
  if(min < 10){
      min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if(sec < 10){
      sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
}