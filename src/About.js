import "./About.css";

function button()
{
    
    const paragraph = document.querySelector(".about__text p");
    const text =`As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, SCSS,  C,and C++ . I excel in designing and maintaining responsive websites that offer a smooth user experience.
    My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
    I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.`;
    paragraph.textContent = text;
    const button = document.querySelector(".readMore");
    button.style.display = "none";
    button.style.transition = "all 0.5s ease-in-out";
}

const About = () => {
    return (
        <div id='About' className="about">
            <div className="about__img">
                <img  src="https://avatars.githubusercontent.com/u/91007693?v=4" alt="about" />
            </div>
            <div className="about__text">
                <h1>About me</h1>
                <h2>A dedicated Front-end Developer <br/> 
                    From Morocco📍</h2>
                <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, SCSS,  C,and C++ ...</p>
                <button onClick={button} className="readMore">read more ...</button>
            </div>
        </div>
        
    )
}
 
export default About;