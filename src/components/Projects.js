import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; 
import { ProjectCard } from "./ProjectCard"; 
import projImg1 from "../assets/img/weatherReact.png"; 
import projImg2 from "../assets/img/BMIApp.png"; 
import projImg6 from "../assets/img/saudi.jpg";
import projImg3 from "../assets/img/Littel_Lemon_UI.png";
import projImg4 from "../assets/img/goLang.png";
import projImg5 from "../assets/img/comp.png";
import colorSharp2 from "../assets/img/color-sharp2.png"; 
import 'animate.css'; 
import TrackVisibility from 'react-on-screen'; 
 
export const Projects = () => { 

  const projects = [ 
    { 
      title: "BMI App", 
      description: "تطبيق اندرويد", 
      imgUrl: projImg2,
      link:"https://github.com/Dev-Aisha/BMI_Calculator_App"
    }, 
    { 
      title: "GO Lang", 
      description: "تصميم محتوى نادي قوقل", 
      imgUrl: projImg4,
      link:"https://www.canva.com/design/DAFOYsi6cVw/fiB4jF1UC0xoxheo9l0cxQ/edit"
    }, 
    { 
      title: " مشروع كورس ميتا", 
      description: "تطبيق اندرويد", 
      imgUrl: projImg3, 
      link:"https://github.com/Dev-Aisha/Little_Lemon_App"
    }, 
    { 
      title: "مشروع معسكر طويق", 
      description: "موقع ويب", 
      imgUrl: projImg1,
      link:"https://elaborate-brigadeiros-7e91b6.netlify.app"
    }, 
    { 
      title: "هاكثون تحدي التطبيقات القرانية", 
      description: "تنفيذ وتصميم", 
      imgUrl: projImg5, 
      link: "https://www.canva.com/design/DAF7CaRXs8U/xX8SjVoxTuA9uruGpPIA-g/edit?utm_content=DAF7CaRXs8U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    }, 
    { 
      title: " تحدي اليوم الوطني", 
      description: "تنفيذ و تصميم", 
      imgUrl: projImg6,
      link:"https://www.figma.com/design/mNIGxazam66F7liB4P4DJd/National-Saudi--Day-App?fuid=1164145838511160027"
    }, 
  ]; 

 
  return ( 
    <section className="project" id="projects"> 
      <Container> 
        <Row> 
          <Col size={12}> 
            <TrackVisibility> 
              {({ isVisible }) => 
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}> 
                <h2>مشاريعي</h2> 
                <p>هذه بعض المشاريعي التي عملت عليها، سواء كانت مشاريع شخصية أو من معسكرات تدريبية أو دورات تعليمية. يمكنك النقر على أي مشروع للاطلاع على تفاصيله.</p>                <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> 
                    <Tab.Pane eventKey="first"> 
                      <Row> 
                        { 
                          projects.map((project, index) => { 
                            return ( 
                              <ProjectCard 
                                key={index} 
                                {...project} 
                                /> 
                            ) 
                          }) 
                        } 
                      </Row> 
                    </Tab.Pane> 
                    <Tab.Pane eventKey="section"> 
                    <p>هذه بعض المشاريعي التي عملت عليها، سواء كانت مشاريع شخصية أو من معسكرات تدريبية أو دورات تعليمية. يمكنك النقر على أي مشروع للاطلاع على تفاصيله.</p>
                    </Tab.Pane> 
                  </Tab.Content> 
                </Tab.Container> 
              </div>} 
            </TrackVisibility> 
          </Col> 
        </Row> 
      </Container> 
      <img className="background-image-right" src={colorSharp2}></img> 
    </section> 
  ) 
}