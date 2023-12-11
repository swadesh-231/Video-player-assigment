
var apiKey = 'AIzaSyBSnSLq_Hom9anb-sN_FwiacwpnKgEThH0';


var videoId = 'Bn56WahG';
function loadYouTubePlayerAPI() {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
  var player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}


function onPlayerStateChange(event) {
  // Do something when the state changes (e.g., track video progress)
}

loadYouTubePlayerAPI();