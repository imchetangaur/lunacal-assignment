import React from 'react'

export const Description = ( {activeTab} ) => {
    const discriptions = [
        "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a..." , 
        "Work experience is when you gain practical wisdom with an employer by learning about a particular role, organisation or career path. Most employers also consider volunteering work, work shadowing or internships as work experience.",
        "Web Developers are required to be proficient at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java, Ruby, and PHP for back-end programming."
    ]
  return (
    <>
    
        <p className="mt-5 text-sm lg:text-lg">
            {discriptions[activeTab]}
        </p>
    </>
  )
}
