const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'TS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tariq Siddiqui',
  role: 'Software Engineer',
  description:
    'I am a full stack software engineer using JavaScript, React, Node.Js, Express, and PostgreSQL. I am always learning more and enjoy the process as much as the accomplishments! I am deeply interested in environmental initiatives, climate crisis solutions, community empowerment, music, and education.',
  resume: 'https://docs.google.com/document/d/1ccktdqsDdNEFGPQq7ButZcyWQ9ZGX10wsEaybFKXPAI/edit',
  social: {
    linkedin: 'https://www.linkedin.com/in/tariq-siddiqui-codes/',
    github: 'https://github.com/CrunchyTariqCodes',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Restaurant Reservation System App',
    description:
      'Fullstack application allowing employees to book reservations, manage restaurant tables, and search archived reservation information',
    stack: ['Javascript', 'React', 'Node', 'Express', 'Knex', 'PostgreSQL'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Food Delivery App - Backend',
    description:
      'Backend API for ordering food deliveries using a corresponding routing system with complex validation middleware following RESTful API design principles',
    stack: ['Node', 'Express'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Flash Card Study App',
    description:
      'Front end application allowing both students and teachers to create, manage, and study flashcards and entire decks of flashcards as an educational tool',
    stack: ['React', 'Javascript', 'React Hooks'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'TypeScript',
  'React',
  'React Hooks',
  'Node.js',
  'Express',
  'Knex.js',
  'PostgreSQL',
  'Git',
  'NPM',
  'Mocha',
  'Chai',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tariqsidd93@gmail.com',
}

export { header, about, projects, skills, contact }
