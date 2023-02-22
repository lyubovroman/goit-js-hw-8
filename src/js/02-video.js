import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

function savedTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');

  if (currentTime) {
    return currentTime;
  }
  return 0;
}
player.setCurrentTime(savedTime());








