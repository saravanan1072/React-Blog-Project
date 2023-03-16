import { useParams, useLocation } from "react-router-dom";
import face from "../images/download.png";
const ArticleContent = () => {
  const param = useParams();
  const location = useLocation();
  console.log(param);
  console.log(location);
  return (
    <>
      <div className="article">
        <span id="logo-article">
          <p className="the"> The</p> <h1 className="Siren">Siren</h1>
        </span>
        <span className="getstart">Get Started</span>
      </div>
      <hr />
      <div className="body">
        <h2 className="title">{location.state.title}</h2>
        <div id="profile">
          <span>
            <img className="imgs-body" src={face} alt="images" />
            <span id="author-name">
              <h4>{location.state.author}</h4>{" "}
              <p id="time"> jan-28,2023 10mins read</p>
            </span>
          </span>
          <span className="logo-media">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </span>
        </div>
        <div>
          <img id="urlimage" src={location.state.urlToImage} alt="images" />
        </div>
        <p className="content">
          {location.state.content}
        </p>
        <br />
        <h4>
          FOR MORE INFO CLICK ON BELOW Link:
          <a href={location.state.url}>click me</a>
          <br /><br />
        </h4>
        <hr />
      </div>
      
      <div id="footer">
        <div classname="footer">
          <img className="imgs-footer" src={face} alt="images" />
          <span id="author-footer">
            Written by 
            <h4>{location.state.author}</h4>
            <p id="time"> jan-28,2023 10mins read</p>
          </span>
          <hr />
        </div>
      </div>
      
    </>
  );
};
export default ArticleContent;
