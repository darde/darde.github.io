export const mediumUrls = [
  {
    title: "Entendendo o princípio Open Closed atráves do design pattern Strategy (Portuguese)",
    url: "https://medium.com/@pablodarde/entendendo-o-princ%C3%ADpio-open-closed-atr%C3%A1ves-do-design-pattern-strategy-b0583f0ff7bd",
  },
  {
    title: "Implementing Internationalization in a front end application",
    url: "https://medium.com/rd-shipit/internationalizing-a-front-end-application-88f1baae3d82",
  },
  {
    title: "Testing asynchronous code with Jest and Testing Library React",
    url: "https://medium.com/rd-shipit/testing-asynchronous-code-with-jest-and-testing-library-react-cfc185d7bd78",
  },
  {
    title: "Test Doubles (Mocks, Stubs, Fakes, Spies e Dummies)",
    url: "https://medium.com/rd-shipit/test-doubles-mocks-stubs-fakes-spies-e-dummies-a5cdafcd0daf",
  },
  {
    title: "O Padrão Triple A (Arrange, Act, Assert) (Portuguese)",
    url: "https://medium.com/@pablodarde/o-padr%C3%A3o-triple-a-arrange-act-assert-741e2a94cf88",
  },
  {
    title: "Testes Unitários com TDD (Test Driven Development) (Portuguese)",
    url: "https://medium.com/@pablodarde/testes-unit%C3%A1rios-com-tdd-test-driven-development-657f3dadad06",
  },
]

import dynamicFormThumb from "../assets/portfolio/thumbs/dynamic-form-thumb.png"
import itchioGameThumb from "../assets/portfolio/thumbs/itchio-game-thumb.png"
import nauticaAmstelThumb from "../assets/portfolio/thumbs/nautica-amstel-thumb.png"
import nauticaThumb from "../assets/portfolio/thumbs/nautica-thumb.png"
import nestleThumb from "../assets/portfolio/thumbs/nestle-thumb.png"
import ospaThumb from "../assets/portfolio/thumbs/ospa-thumb.png"
import sideMenuThumb from "../assets/portfolio/thumbs/react-side-menu-thumb.png"
import solarSystemThumb from "../assets/portfolio/thumbs/solar-system-thumb.png"
import svelteflixThumb from "../assets/portfolio/thumbs/svelteflix-thumb.png"
import eclipseThumb from "../assets/portfolio/thumbs/threejs-eclipse-thumb.png"

export const portfolioUrls = [
  {
    id: 1,
    title: "Svelteflix",
    imageSource: svelteflixThumb,
    stack: "Sveltekit",
    description:
      "This is a movies application made with Sveltekit. Sveltekit is a Server Side Rendering framework, similar to NextJS. This application consumes a public restful API to retrieve movies data.",
    videoUrl: "https://www.youtube.com/embed/6tF43mWQwlE?si=ySrN0zzXBHrjeaAg",
    liveAt: "https://svelteflix.vercel.app/",
  },
  {
    id: 2,
    title: "Dynamic Forms",
    imageSource: dynamicFormThumb,
    stack: "React, Tailwindcss",
    description: "Creating dynamic form fields with React",
    videoUrl: "https://www.youtube.com/embed/FGhXs1LRuyE?si=DH8fj3O4j7mx5BUO",
  },
  {
    id: 3,
    title: "Unity 2D Platform Game",
    imageSource: itchioGameThumb,
    stack: "Unity, C#",
    description: "Unity 2D platform game",
    videoUrl: "https://www.youtube.com/embed/XRZaZ88wLvE?si=_be-0B5qEwjWiX6s",
    credits: [
      {
        author: "Pedro Cabral",
        contact: "petergun@gmail.com",
        work: "Design, sound engineering, and screenplay",
      },
      {
        author: "Pablo Darde",
        contact: "https://www.linkedin.com/in/pablodarde/",
        work: "Unity development, screenplay, and iOS/Android build",
      },
    ],
    liveAt: "https://voduweb.itch.io/pegalulu",
  },
  {
    id: 4,
    title: "AR Náutica/Amstel",
    imageSource: nauticaAmstelThumb,
    stack: "Unity, AR, Vuforia",
    description: "Augmented Reality app using Unity and Vuforia. São Paulo, Nautica Summit.",
    credits: [
      {
        author: "Cláudio Ramirez",
        contact: "https://www.instagram.com/claudioramires/",
        work: "Interface design, and art direction",
      },
      {
        author: "Henrique Barbosa",
        contact: "https://www.instagram.com/riquebarbo/",
        work: "3D modeling and design",
      },
      {
        author: "Pablo Darde",
        contact: "https://www.linkedin.com/in/pablodarde/",
        work: "Augmented realitiy programming, iOS and Android build.",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/Vz6H70VNwO4?si=VasdG98BOe5W8rBU",
  },
  {
    id: 5,
    title: "AR Náutica Summit",
    imageSource: nauticaThumb,
    stack: "Unity, AR, Vuforia",
    description: "Augmented Reality app using Unity and Vuforia. São Paulo, Nautica Summit.",
    credits: [
      {
        author: "Cláudio Ramirez",
        contact: "https://www.instagram.com/claudioramires/",
        work: "Interface design, and art direction",
      },
      {
        author: "Henrique Barbosa",
        contact: "https://www.instagram.com/riquebarbo/",
        work: "3D modeling and design",
      },
      {
        author: "Pablo Darde",
        contact: "https://www.linkedin.com/in/pablodarde/",
        work: "Augmented realitiy programming, iOS and Android build.",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/22VUp_iIWiU?si=4V7j5AqUdNpLQXw3",
  },
  {
    id: 6,
    title: "AR Nestlé Experiment",
    imageSource: nestleThumb,
    stack: "Unity, AR, Vuforia",
    description: "Augmented Reality app using Unity and Vuforia. Nestlé chocolate box experiment.",
    videoUrl: "https://www.youtube.com/embed/ZGAzvxZ7duk?si=I7AkstMZQr8JPMZT",
  },
  {
    id: 7,
    title: "AR OSPA",
    imageSource: ospaThumb,
    stack: "Unity, AR, Vuforia",
    description: "Augmented Reality app using Unity and Vuforia. Ospa Symphonic Orchestra experiment.",
    credits: [
      {
        author: "Cláudio Ramirez",
        contact: "https://www.instagram.com/claudioramires/",
        work: "Paint, digital art, and art direction",
      },
      {
        author: "Henrique Barbosa",
        contact: "https://www.instagram.com/riquebarbo/",
        work: "3D modeling and animation",
      },
      {
        author: "Pablo Darde",
        contact: "https://www.linkedin.com/in/pablodarde/",
        work: "Augmented realitiy programming, iOS and Android build.",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/Y3CD8iCU4yE?si=rBZEv4JzB0qWbfzt",
  },
  {
    id: 8,
    title: "AR Android Side menu",
    imageSource: sideMenuThumb,
    stack: "React Native",
    description: "Android Side menu template",
    videoUrl: "https://www.youtube.com/embed/-XISYdmb1Fg?si=r0Y-UK2C6kA30THm",
  },
  {
    id: 9,
    title: "AR Solar System Simulation",
    imageSource: solarSystemThumb,
    stack: "Unity, AR, Vuforia",
    description: "Augmented Reality app using Unity and Vuforia. Solar System simulation.",
    videoUrl: "https://www.youtube.com/embed/6TqJ7TQXMuo?si=OuhEEqrnihmurxoJ",
  },
  {
    id: 10,
    title: "ThreeJS Eclipse Simulator",
    imageSource: eclipseThumb,
    stack: "ThreeJS",
    description: "Eclipse simulator",
    videoUrl: "https://www.youtube.com/embed/KlAXaxYxyj8?si=3BMR7sKI30ueqkbW",
  },
]

export const yearsOfExperience = [
  {
    label: "JavaScript",
    years: 15,
    color: "green",
  },
  {
    label: "TypeScript",
    years: 5,
    color: "darkblue",
  },
  {
    label: "React/Redux",
    years: 7,
    color: "#169ECA",
  },
  {
    label: "React Native/Expo",
    years: 3,
    color: "#5DD4F4",
  },
  {
    label: "Unit Testing (Jasmine/Moca/@testing-library)",
    years: 5,
    color: "#FD4444",
  },
  {
    label: "NodeJS",
    years: 6,
    color: "#056D00",
  },
  {
    label: "Clean Architecture/SOLID Principles",
    years: 6,
    color: "#fff",
  },
  {
    label: "Ruby on Rails/Java/Svelte",
    years: 1,
    color: "#D30002",
  },
  {
    label: "NextJS",
    years: 4,
    color: "black",
  },
  {
    label: "Unity/C#",
    years: 3,
    color: "#7C7C7C",
  },
  {
    label: "AR Foundation (AR Core/AR Kit)",
    years: 2,
    color: "#222222",
  },
  {
    label: "ThreeJS",
    years: 1,
    color: "#049EF4",
  },
]
