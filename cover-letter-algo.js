// const coverLetter = (position, company, article, connection) => {
//     if(!position || !company ) return `Check Yo Shit!`; 
//     let  plural = company[company.length-1] === 's' ? `'` : `'s`
//     let result = `

// Hi Team,

// I'm so excited to apply for the ${position} role at ${company}.

// My most recent role as a software engineer featured a tech stack that focused on React, Redux, NodeJS and postgreSQL. And my current platform, Gimme, utilized React Hooks, NodeJS, Typescript, and MongoDB, in an application/chrome extension that executed extensive API calls via parsing through very large datasets.

// From reading the ${company} Engineering Blog (particularly, '${article}'), it's extremely clear that ${company}${plural} technical foundation is rooted in not only engineering best practices, but in true engineering excellence and innovation (${connection}!) - and this is the core reason why I'd be so excited to bring my own abilities to the team there. 

// I hope we have a chance to connect. If there's a time and day that works well for you, I'll absolutely make it work on my end.

// All the best, 

// Tanner Lyon 
// Software Engineer
// `; 
// return result; 
// }

// const company = 'Voxel'; 
// const position = 'Senior Software Engineer - Full Stack' 
// const article = `Rolling Out AI in the Workplace`;  
// const connection = `Congratulations on your recent Introduction "Near Miss" Detection: Stop Collisions Before They Happen`;

// console.log(coverLetter(position, company, article, connection))


/*
* ============= BLOG // NO NEWS/PRESS // NEW COMPANY =============
*/

// const coverLetterNoBlog = (position, company, article) => {
//     if(!position || !company ) return `Y'all, Check Yo Shit!`; 

//     let  plural = company[company.length-1] === 's' ? `'` : `'s`
//     let result = `

// Hi Team,

// I'm so excited to apply for the ${position} role at ${company}.

// My most recent role as a software engineer featured a tech stack that focused on React, Redux, NodeJS and postgreSQL. And our platform, Gimme, utilized React Hooks, NodeJS, Typescript, TDD, and MongoDB, in an application/chrome extension that executed extensive API calls via parsing through very large datasets.

// From reading the ${company} Engineering Blog (particularly, '${article}'), it's extremely clear that ${company}${plural} technical foundation is rooted in not only engineering best practices, but in true engineering excellence and innovation - and this is the core reason why I'd be so excited to bring my own abilities to the team there. 
 
// I hope we have a chance to connect. If there's a time and day that works well for you, I'll absolutely make it work on my end.

// All the best, 

// Tanner Lyon 
// Software Engineer
// `; 
// return result; 
// }

// const company = 'Tesla'; 
// const article = `Tesla says it will build new "1st of its kind" data centers`; 
// const position = 'Software Engineer';
// console.log(coverLetterNoBlog(position, company))

/*
* ============= NO WEBSITE BLOG // NEW COMPANY =============
*/

const coverLetterNoBlog = (position, company) => {
    if(!position || !company ) return `Y'all, Check Yo Shit!`; 

    let  plural = company[company.length-1] === 's' ? `'` : `'s`

    let result = `

Hi Team,

I'm so excited to apply for the ${position} role at ${company}.

My most recent role as a software engineer featured a tech stack that focused on React, Redux, NodeJS and postgreSQL. And our platform, Gimme, utilized React Hooks, NodeJS, Typescript, TDD, and MongoDB, in an application/chrome extension that executed extensive API calls via parsing through very large datasets.

From reading the ${company} website and mission, it's extremely clear that ${company}${plural} technical foundation is rooted in not only engineering best practices, but in true engineering excellence and innovation - and this is the core reason why I'd be so excited to bring my own abilities to the team there. 
 
I hope we have a chance to connect. If there's a time and day that works well for you, I'll absolutely make it work on my end.

All the best, 

Tanner Lyon 
Software Engineer
`; 
return result; 
}

const company = 'Smashing'; 
const position = 'Frontend Software Engineer' 
console.log(coverLetterNoBlog(position, company))

