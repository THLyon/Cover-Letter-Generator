const coverLetter = (position, company, article) => {
    if(!position || !company || !article) return `Y'all, Check Yo Shit!`; 

    let result = `

Hi Team,

I'm so excited to apply for the ${position} Software Engineer role at ${company}.

My most recent role as a software engineer featured a tech stack that focused on React, Redux, NodeJS and postgreSQL. And our platform, Gimme, utilized React Hooks, NodeJS, Typescript, TDD, and MongoDB, in an application/chrome extension that executed extensive API calls via parsing through very large datasets.

From reading the ${company} Engineering Blog (particularly, '${article}'), it's extremely clear that ${company}'s technical foundation is rooted in not only engineering best practices, but in true engineering excellence and innovation (Congratulations on your recent integration with Amazon’s Buy With Prime!) - and this is the core reason why I'd be so excited to bring my own abilities to the team there. 

I hope we have a chance to connect. If there's a time and day that works well for you, I'll absolutely make it work on my end.

All the best, 

Tanner Lyon 
Software Engineer
`; 
return result; 
}

const company = 'Ensomata'; 
const article = `Solution Recipe 5: Using Klaviyo's APIs to Automate Daily Emails`; 
const position = 'Senior Backend Engineer'
console.log(coverLetter(position, company, article))