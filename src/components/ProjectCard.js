import { Col } from "react-bootstrap";

import { Button} from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl  }) => {
  
  const externalLinks = {
    "Food-Alix": {
      firstLink: "https://github.com/Hazikkk/alix-food",
      secondLink: "",
    },
    "Recipe-App": {
      firstLink: "https://github.com/Hazikkk/Recipe-app",
      secondLink: "https://recipe-app-phi-rosy.vercel.app/",
    },
    "Travel-App": {
      firstLink: "https://github.com/Hazikkk/Travel-Website",
      secondLink: "https://travel-website-ruby-theta.vercel.app/",
    },
  };

  const getExternalLink = (title, linkType) => externalLinks[title]?.[linkType] || "#"

  
 
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          
          <span>{description}</span>
          <div className="button-container">
            <a href={getExternalLink(title, "firstLink")} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Code</Button>
            </a>
            <a href={getExternalLink(title, "secondLink")} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                {title === "Food-Alix" ? "In Progress" : "Demo"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}