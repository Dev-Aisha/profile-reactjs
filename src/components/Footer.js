import { Container, Row, Col } from "react-bootstrap"; 
import { MailchimpForm } from "./MailchimpForm"; 
import logo from "../assets/img/logoAisha.png"; 
import navIcon1 from "../assets/img/nav-icon1.svg"; 
import navIcon2 from "../assets/img/nav-icon2.svg"; 
import navIcon3 from "../assets/img/nav-icon3.svg"; 
 
export const Footer = () => { 
  return ( 
    <footer className="footer"> 
      <Container> 
        <Row className="align-items-center"> 
          <MailchimpForm /> 
          <Col size={12} sm={6}> 
            <img src={logo} alt="الشعار" /> 
          </Col> 
          <Col size={12} sm={6} className="text-center text-sm-end"> 
            <div className="social-icon"> 
              <a href="https://www.linkedin.com/in/aeshah-ibrahim-09970b30b/"><img src={navIcon1} alt="أيقونة" /></a> 
            </div> 
            <p>حقوق الطبع والنشر © 2024. جميع الحقوق محفوظة.</p> 
          </Col> 
        </Row> 
      </Container> 
    </footer> 
  ) 
}