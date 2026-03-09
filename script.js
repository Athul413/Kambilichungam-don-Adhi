document.addEventListener("keydown",function(event){
  if(event.key==="k"||event.key=="K"){
    let video = document.getElementById("video");
    if(video.requestFullscreen){
      video.requestFullscreen();
    }
    else if (video.webkitRequestFullscreen){
      video.webkitRequestFullscreen();
    }
    else if (video.msRequestFullscreen){
      video.msRequestFullscreen();
    }
    video.currentTime=0;
    video.play()
  }
});