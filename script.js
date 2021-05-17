const Container = document.querySelector('.container');
const projects = [
  {
    title: 'Quote Generator',
    icon: '<i class="fas fa-quote-left"></i>',
    link: 'https://junaidqureshi05.github.io/quote-generator/',
  },
  {
    title: 'Picture in Picture',
    icon: '<i class="far fa-images"></i>',
    link: 'https://junaidqureshi05.github.io/picture-in-picture/',
  },
  {
    title: 'Infinity Scroll',
    icon: '<i class="fas fa-infinity"></i>',
    link: 'https://junaidqureshi05.github.io/infinity-scroll/',
  },
  {
    title: 'Light/Dark Mode',
    icon: '<i class="fas fa-sun"></i><i class="fas fa-moon"></i>',
    link: 'https://junaidqureshi05.github.io/light-dark-mode/',
  },
  {
    title: 'Joke Teller',
    icon: ' <i class="fas fa-laugh-squint"></i>',
    link: 'https://junaidqureshi05.github.io/joke-teller/',
  },
  {
    title: 'Animated Template',
    icon: '<i class="fas fa-star"></i>',
    link: 'https://junaidqureshi05.github.io/animated-template/',
  },
  {
    title: 'Navigation Nation',
    icon: '<i class="fas fa-bars"></i>',
    link: 'https://junaidqureshi05.github.io/navigation-nation/',
  },
  {
    title: 'Music Player',
    icon: '<i class="fas fa-music"></i>',
    link: 'https://junaidqureshi05.github.io/song-player/',
  },
  {
    title: 'Custom Countdown',
    icon: '<i class="fas fa-hourglass-start"></i>',
    link: 'https://junaidqureshi05.github.io/custom-countdown/',
  },
  {
    title: 'Calculator',
    icon: '<i class="fas fa-calculator"></i>',
    link: 'https://junaidqureshi05.github.io/calculator/',
  },
  {
    title: 'Paint',
    icon: '<i class="fas fa-palette"></i>',
    link: 'https://junaidqureshi05.github.io/paint/',
  },
  {
    title:'Book Keeper',
    icon:' <i class="far fa-bookmark"></i>',
    link:'https://junaidqureshi05.github.io/book-keeper/'
  },{
    title:'Video Player',
    link:'https://junaidqureshi05.github.io/video-player/',
    icon:'<i class="fas fa-film"></i>'
  },{
  title:"Form Validation",
    link:'https://junaidqureshi05.github.io/form-validation/',
    icon:'<i class="fas fa-file-alt"></i>'
  }
];

function createBox(project) {
  const box = document.createElement('div');
  box.setAttribute('id', 'box');
  box.innerHTML = `
    <h1>${project.title}</h1>
   ${project.icon}<a
      href=${project.link}
      target="_blank"
      >See Project</a
    >
  
  `;
  return box;
}
projects.forEach((project) => {
  Container.appendChild(createBox(project));
});
