import "./Portfolio.css";
import Project from "./Project";
import myImg from "./img/ft_transcendence1.png";
import webserv from "./img/webserv.png";
import inception from "./img/inception.jpg";

const Portfolio = () => {
    const projects = [
        {
            title: "Ft_Transcendence",
            img: myImg,
            animation: true,
            description: "Project description, loram ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl. loram ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl.",
            links: [
                {
                    name: "Code",
                    url: "git"
                },
                {
                    name: "Demo",
                    url: "git"
                }
            ]
        },
        {
            title: "Web Serv",
            img: webserv,
            animation: false,
            description: "Project description, loram ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl. loram ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl.",
            links: [
                {
                    name: "Code",
                    url: "https://github.com/a-sabbar/Webserv"
                }
            ]
        },
        {
            title: "Inception",
            img: inception,
            animation: false,
            description: "Project description, loram ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl. loram ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl. Donec auctor, nisl eget ultricies ultricies, nisl nunc aliquet nisl, nec luctus nunc nisl vel nisl.",
            links: [
                {
                    name: "Code",
                    url: "git"
                },
                {
                    name: "Code",
                    url: "git"
                }
            ]
        }
    ]

    return (
        <div  id='Projects' className="portfolio">
            <div className="container">
                <div className="portfolio__header">
                    <h1>PORTFOLIO</h1>
                    <p>Each project is a unique piece of development 🧩</p>
                </div>
                <div className="portfolio__projects">
                {
                    projects.map((project) => (
                        <Project key={1} project={project}/>
                    ))
                }
                </div>
            </div>
        </div>
    );
}
 
export default Portfolio;