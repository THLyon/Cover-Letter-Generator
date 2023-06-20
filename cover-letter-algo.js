const coverLetter = (position, company, article, connection) => {
    if(!position || !company ) return `Check Yo Shit!`; 

    let result = `

Hi Team,

I'm so excited to apply for the ${position} role at ${company}.

My most recent role as a software engineer featured a tech stack that focused on React, Redux, NodeJS and postgreSQL. And my platform, Gimme, utilized React Hooks, NodeJS, Typescript, TDD, and MongoDB, in an application/chrome extension that executed extensive API calls via parsing through very large datasets.

From reading the ${company} Engineering Blog (particularly, '${article}'), it's extremely clear that ${company}'s technical foundation is rooted in not only engineering best practices, but in true engineering excellence and innovation (${connection}!) - and this is the core reason why I'd be so excited to bring my own abilities to the team there. 

I hope we have a chance to connect. If there's a time and day that works well for you, I'll absolutely make it work on my end.

All the best, 

Tanner Lyon 
Software Engineer
`; 
return result; 
}

const company = 'Omni.ai'; 
const article = `Treat the AI Like a User`; 
const position = 'Senior/Mid-Level Software Engineer'; 
const connection = ''
console.log(coverLetter(position, company, article))


/*
* ============= BLOG // NO NEWS/PRESS // NEW COMPANY =============
*/

// const coverLetterNoBlog = (position, company) => {
//     if(!position || !company ) return `Y'all, Check Yo Shit!`; 


//     let result = `

// Hi Team,

// I'm so excited to apply for the ${position} Software Engineer role at ${company}.

// My most recent role as a software engineer featured a tech stack that focused on React, Redux, NodeJS and postgreSQL. And our platform, Gimme, utilized React Hooks, NodeJS, Typescript, TDD, and MongoDB, in an application/chrome extension that executed extensive API calls via parsing through very large datasets.

// From reading the ${company} Engineering Blog (particularly, '${article}'), it's extremely clear that ${company}'s technical foundation is rooted in not only engineering best practices, but in true engineering excellence and innovation - and this is the core reason why I'd be so excited to bring my own abilities to the team there. 
 
// I hope we have a chance to connect. If there's a time and day that works well for you, I'll absolutely make it work on my end.

// All the best, 

// Tanner Lyon 
// Software Engineer
// `; 
// return result; 
// }

// const company = 'Patterned Learning AI'; 
// const position = 'Junior Node.js Full Stack';
// const article = `Treat the AI Like a User`; 
// console.log(coverLetterNoBlog(position, company))

/*
* ============= NO WEBSITE BLOG // NEW COMPANY =============
*/

// const coverLetterNoBlog = (position, company) => {
//     if(!position || !company ) return `Y'all, Check Yo Shit!`; 


//     let result = `

// Hi Team,

// I'm so excited to apply for the ${position} Software Engineer role at ${company}.

// My most recent role as a software engineer featured a tech stack that focused on React, Redux, NodeJS and postgreSQL. And our platform, Gimme, utilized React Hooks, NodeJS, Typescript, TDD, and MongoDB, in an application/chrome extension that executed extensive API calls via parsing through very large datasets.

// From reading the ${company} website and mission, it's extremely clear that ${company}'s technical foundation is rooted in not only engineering best practices, but in true engineering excellence and innovation - and this is the core reason why I'd be so excited to bring my own abilities to the team there. 
 
// I hope we have a chance to connect. If there's a time and day that works well for you, I'll absolutely make it work on my end.

// All the best, 

// Tanner Lyon 
// Software Engineer
// `; 
// return result; 
// }

// const company = 'Patterned Learning AI'; 
// const position = 'Junior Node.js Full Stack'
// console.log(coverLetterNoBlog(position, company))

