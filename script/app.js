// gsap.to('#Robot', { duration: 1, x: 50 });
// gsap.from('#Robot', { duration: 1, x: 50 });
// gsap.set('#Robot', { duration: 1, x: 50 });
// gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 })

//easing
// gsap.to('#Robot', {
// 	duration: 2,
// 	ease: 'elastic.out(2.5,0.1)',
// 	x: 50,
//   })
//pause function
const pause = function () {
  var svgPlay = document.querySelector(".c-play-icon--play");
  var svgPause = document.querySelector(".c-play-icon--pause");
  tl.paused(!tl.paused());
  if (tl.paused()) {
    svgPlay.style.display = "block";
    svgPause.style.display = "none";
  } else {
    svgPause.style.display = "block";
    svgPlay.style.display = "none";
  }
};

let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power1.inOut",
  },
  repeat: -1,
  yoyo: true,
});
tl.set("#Shadow", {
  transformOrigin: "50% 100%",
})
  .fromTo(
    "#Robot",
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    "#Shadow",
    {
      scale: 0.75,
    },
    "-=.75"
  );

pauseButton = document.querySelector(".js-pause");
btnFast = document.querySelector(".js-fast");
btnNormal = document.querySelector(".js-normal");
btnSlow = document.querySelector(".js-slow");

btnFast.onclick = () => tl.timeScale(2);
btnNormal.onclick = () => tl.timeScale(1);
btnSlow.onclick = () => tl.timeScale(0.5);
pauseButton.onclick = () => pause();
