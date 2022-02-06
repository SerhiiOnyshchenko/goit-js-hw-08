import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let videoplayerCurrentTime =0
player.on('timeupdate', function (data) {
   videoplayerCurrentTime = data.seconds;
   console.log('seconds:',videoplayerCurrentTime);
});
player
   .setCurrentTime(videoplayerCurrentTime)
	.then(function (seconds) {
      // seconds = videoplayerCurrentTime
   })
   .catch(function (error) {
      switch (error.name) {
         case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

         default:
            // some other error occurred
            break;
      }
   });
