import "./Project.css";
const Project = (props ) => {
    const myimg = document.getElementsByClassName("portfolio__project__img");
    console.log("hello  -> ",myimg);
    return (
        <div className="portfolio__project">
            <div className={props.project.animation ? `portfolio__project__img animation`: "portfolio__project__img " }>
                <img src={props.project.img} alt="1" border="0" />
            </div>
            <div className="portfolio__project__info">
                <div className="portfolio__project__info__text">
                    <h1>{props.project.title}</h1>
                    <p>{props.project.description}</p>
                </div>
                <div className="portfolio__project__info__links">
                    {
                        props.project.links.map((link) => (
                            <span key={0}><a target="_blank" rel="noreferrer"  href={link.url} > {link.name}</a></span>
                            ))
                        }
                </div>
            </div>
        </div>
    );
}
 
export default Project;