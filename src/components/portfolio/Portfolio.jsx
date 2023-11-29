import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/login1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio-springbootapi.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TogetherWeGrow - a parent child activity app',
    github: 'https://github.com/alexisname/CapstoneProject_Junlong',
    demo: 'https://youtu.be/mVw5FK11lAM'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tank Game - using Unity Engine and C# for a 2D platformer game',
    github: 'https://github.com/alexisname/TankGame',
    demo: 'https://alexchen123.itch.io/tankwebv1'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Real-time Blog API - using Spring Boot to create a Blog API',
    github: 'https://github.com/alexisname/real-time-blog-api',
    demo: 'http://springboot-blog-api.ca-central-1.elasticbeanstalk.com/swagger-ui/index.html#/'
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Maintaining tasks and tracking progress',
  //   github: 'https://github.com',
  //   demo: 'https:dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https:dribbble.com/shots/16541289-Orion-UI-kit-Chars-templates-infographics-in-Figma'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https:dribbble.com/shots/15887665-Orion-UI-kit-Chars-templates-infographics-in-Figma'
  // },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div> 
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  < a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>    
                </div>                 
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio