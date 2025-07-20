const ICONSPATH = "/icons/";
const PROJECTSPATH = "/projects/";
const HEADER = {
  profile: {
    name: "Eddy Rodriguez",
    about: `I love crafting clean, user-friendly interfaces and scalable backend systems. I strive for detail, clarity, and functionality in everything I build. When I'm not coding, you’ll probably find me enjoying a good cup of coffee or playing chess.`,
    img: "profile-picture.jpeg",
  },
};

const PROJECTS = [
  {
    name: "Calculator",
    description: "A calculator for the four main arithmetyc operations ",
    url: "https://just-404.github.io/calculator/",
    githubUrl: "https://github.com/Just-404/calculator",
    img: PROJECTSPATH + "calculator.png",
  },
  {
    name: "Rock Paper Scissors game",
    description: "A player vs computer rock paper scissors classic game",
    url: "https://just-404.github.io/rock-paper-scissors/",
    githubUrl: "https://github.com/Just-404/rock-paper-scissors",
    img: PROJECTSPATH + "rock-paper-scissors.png",
  },
  {
    name: "Sign Up template",
    description:
      "A sign up component made to showcase design skills from a template",
    url: "https://just-404.github.io/sign-up-template/",
    githubUrl: "https://github.com/Just-404/sign-up-template",
    img: PROJECTSPATH + "sign-up.png",
  },
  {
    name: "Admin dashboard template",
    description:
      "An admin dashboard component made to showcase design skills from a template",
    url: "https://just-404.github.io/admin-dashboard/",
    githubUrl: "https://github.com/Just-404/admin-dashboard",
    img: PROJECTSPATH + "admin-dashboard.png",
  },
  {
    name: "Tic tac toe game",
    description: "A two players tic tac toe game",
    url: "https://just-404.github.io/tic-tac-toe-game/",
    githubUrl: "https://github.com/Just-404/tic-tac-toe-game",
    img: PROJECTSPATH + "tic-tac-toe.png",
  },
  {
    name: "Weather app",
    description:
      "Application for forecasting the weather in an specified region",
    url: "https://just-404.github.io/weather-app/",
    githubUrl: "https://github.com/Just-404/weather-app",
    img: PROJECTSPATH + "weather-app.png",
  },
  {
    name: "Battleship game",
    description: "A player vs computer classic battleship game",
    url: "https://just-404.github.io/Battleship/",
    githubUrl: "https://github.com/Just-404/Battleship",
    img: PROJECTSPATH + "battleship.png",
  },
];

const SKILLS = [
  { name: "Git", svgPath: ICONSPATH + "git.svg" },
  { name: "Github", svgPath: ICONSPATH + "github.svg" },
  { name: "HTML5", svgPath: ICONSPATH + "html5.svg" },
  { name: "CSS3", svgPath: ICONSPATH + "css3.svg" },
  { name: "Javascript", svgPath: ICONSPATH + "javascript.svg" },
  { name: "React", svgPath: ICONSPATH + "react.svg" },
  { name: "PostgreSQL", svgPath: ICONSPATH + "postgresql.svg" },
  { name: "NodeJS", svgPath: ICONSPATH + "nodejs.svg" },
];
export { HEADER, PROJECTS, SKILLS };
