import React from 'react';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import '../src/sass/styles.scss';

const modalStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
   },
};

// Render function for Prismic headless CMS pages
function Content() {
   const [modalIsOpen, setModalIsOpen] = React.useState(false);
   const [videoUrl, setVideoUrl] = React.useState('');
   let videoCode = 'EYi0r8NJlyM';
   if (videoUrl) {
      videoCode = videoUrl.split('v=')[1].split('&')[0];
   }

   const checkElapsedTime = (e) => {
      console.log(e.target.playerInfo.playerState);
      const duration = e.target.getDuration();
      const currentTime = e.target.getCurrentTime();
      if (currentTime / duration > 0.95) {
         setModalIsOpen(true);
      }
   };

   const opts = {
      playerVars: {
         // https://developers.google.com/youtube/player_parameters
         autoplay: 0,
         ng: 1,
         rel: 0,
         controls: 0,
      },
   };

   const handleExerciseComplete = () => console.log('Do something');

   return (
      <div>
         <div>
            <h1>Video</h1>
            <div></div>
         </div>
         <div>
            <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
            <div className="video-co">
               <YouTube
                  videoId={videoCode}
                  // containerClassName="embed embed-youtube"
                  onStateChange={(e) => checkElapsedTime(e)}
                  opts={opts}
               />
               <div className="lvp__captions">
                  <span className="lvp__caption" data-state="caption"></span>
               </div>
               <div className="lvp__controls">
                  <div className="lvp__progress-container">
                     <progress className="lvp__progress" data-state="progress" value="0" min="0">
                        <span className="lvp__progress-bar" data-state="progress-bar"></span>
                     </progress>
                  </div>
                  <button
                     className="lvp__play-pause"
                     type="button"
                     data-state="pause"
                     aria-label="Play, View From A Blue Moon"
                  >
                     <svg
                        fill="white"
                        width="18px"
                        height="18px"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M15.5615866,8.10002147 L3.87056367,0.225209313 C3.05219207,-0.33727727 2,0.225209313 2,1.12518784 L2,16.8748122 C2,17.7747907 3.05219207,18.3372773 3.87056367,17.7747907 L15.5615866,9.89997853 C16.1461378,9.44998927 16.1461378,8.55001073 15.5615866,8.10002147 L15.5615866,8.10002147 Z"></path>
                     </svg>
                  </button>
                  <button className="lvp__subtitles" type="button" data-state="subtitles">
                     <svg
                        fill="white"
                        width="18px"
                        height="18px"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <g fill-rule="evenodd">
                           <path d="M1,1 C0.4,1 0,1.4 0,2 L0,13 C0,13.6 0.4,14 1,14 L5.6,14 L8.3,16.7 C8.5,16.9 8.7,17 9,17 C9.3,17 9.5,16.9 9.7,16.7 L12.4,14 L17,14 C17.6,14 18,13.6 18,13 L18,2 C18,1.4 17.6,1 17,1 L1,1 Z M5.52,11.15 C7.51,11.15 8.53,9.83 8.8,8.74 L7.51,8.35 C7.32,9.01 6.73,9.8 5.52,9.8 C4.38,9.8 3.32,8.97 3.32,7.46 C3.32,5.85 4.44,5.09 5.5,5.09 C6.73,5.09 7.28,5.84 7.45,6.52 L8.75,6.11 C8.47,4.96 7.46,3.76 5.5,3.76 C3.6,3.76 1.89,5.2 1.89,7.46 C1.89,9.72 3.54,11.15 5.52,11.15 Z M13.09,11.15 C15.08,11.15 16.1,9.83 16.37,8.74 L15.08,8.35 C14.89,9.01 14.3,9.8 13.09,9.8 C11.95,9.8 10.89,8.97 10.89,7.46 C10.89,5.85 12.01,5.09 13.07,5.09 C14.3,5.09 14.85,5.84 15.02,6.52 L16.32,6.11 C16.04,4.96 15.03,3.76 13.07,3.76 C11.17,3.76 9.46,5.2 9.46,7.46 C9.46,9.72 11.11,11.15 13.09,11.15 Z"></path>
                        </g>
                     </svg>
                  </button>
                  <button className="lvp__fullscreen" type="button" data-state="go-fullscreen">
                     <svg
                        fill="white"
                        width="18px"
                        height="18px"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <polygon points="10 3 13.6 3 9.6 7 11 8.4 15 4.4 15 8 17 8 17 1 10 1"></polygon>
                        <polygon points="7 9.6 3 13.6 3 10 1 10 1 17 8 17 8 15 4.4 15 8.4 11"></polygon>
                     </svg>
                  </button>
                  <button data-skip="-5" className="lvp__forward">
                     <svg
                        fill="white"
                        width="18px"
                        height="18px"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <polygon points="10.125 1 0 9 10.125 17 10.125 10.8285714 18 17 18 1 10.125 7.17142857"></polygon>
                     </svg>
                  </button>
                  <button data-skip="5" class="lvp__rewind">
                     <svg
                        fill="white"
                        width="18px"
                        height="18px"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <polygon points="7.875 7.17142857 0 1 0 17 7.875 10.8285714 7.875 17 18 9 7.875 1"></polygon>
                     </svg>
                  </button>
               </div>
            </div>
         </div>

         <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Exercise Completed"
            style={modalStyles}
         >
            <div>
               <h3>Completed the exercise?</h3>
               <button onClick={handleExerciseComplete}>Complete exercise</button>
            </div>
         </Modal>
      </div>
   );
}

export default Content;
