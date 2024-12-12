import { useState, useEffect } from "react"; 
import { Container, Row, Col } from "react-bootstrap"; 
import headerImg from "../assets/img/header-img.svg"; 
import { ArrowRightCircle } from 'react-bootstrap-icons'; 
import 'animate.css'; 
import TrackVisibility from 'react-on-screen'; 
 
export const Banner = () => { 
  const [loopNum, setLoopNum] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [text, setText] = useState(''); 
  const [delta, setDelta] = useState(300 - Math.random() * 100); 
  const [index, setIndex] = useState(1); 
  const toRotate = [ "مطورة ويب", "مصممة ويب", "مطورة تطبيقات" ]; 
  const period = 2000; 
 
  useEffect(() => { 
    let ticker = setInterval(() => { 
      tick(); 
    }, delta); 
 
    return () => { clearInterval(ticker) }; 
  }, [text]) 
 
  const tick = () => { 
    let i = loopNum % toRotate.length; 
    let fullText = toRotate[i]; 
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); 
 
    setText(updatedText); 
 
    if (isDeleting) { 
      setDelta(prevDelta => prevDelta / 2); 
    } 
 
    if (!isDeleting && updatedText === fullText) { 
      setIsDeleting(true); 
      setIndex(prevIndex => prevIndex - 1); 
      setDelta(period); 
    } else if (isDeleting && updatedText === '') { 
      setIsDeleting(false); 
      setLoopNum(loopNum + 1); 
      setIndex(1); 
      setDelta(500); 
    } else { 
      setIndex(prevIndex => prevIndex + 1); 
    } 
  } 
 
  return ( 
    <section className="banner" id="home"> 
      <Container> 
        <Row className="aligh-items-center"> 
          <Col xs={12} md={6} xl={7}> 
            <TrackVisibility> 
              {({ isVisible }) => 
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> 
                <span className="tagline">مرحباً بكم في ملفي الشخصي</span> 
                <h1>{`مرحباً! أنا عائشة الشيخ`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "مطور ويب", "مصمم ويب", "مصمم واجهات وتجربة المستخدم" ]'><span className="wrap">{text}</span></span></h1> 
                  <p>خريجة هندسة برمجيات ، متحمسة للغاية مع شغف قوي بتطوير التطبيقات وتصميم المواقع الإلكترونية و واجهة المستخدم. أهدف إلى تحويل الأفكار إلى تجارب رقمية مبتكرة وسهلة الاستخدام، وأتطلع باستمرار إلى تحسين نفسي وتعزيز مهاراتي لتحقيق أفضل النتائج في مشاريع التنمية. حريصة على مواجهة التحديات التكنولوجية والابتكار في صياغة حلول برمجية فعالة تلبي احتياجات المستخدم.</p> 
              </div>} 
            </TrackVisibility> 
          </Col> 
          <Col xs={12} md={6} xl={5}> 
            <TrackVisibility> 
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> 
                  <img src={headerImg} alt="صورة العنوان"/> 
                </div>} 
            </TrackVisibility> 
          </Col> 
        </Row> 
      </Container> 
    </section> 
  ) 
}