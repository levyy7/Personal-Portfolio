import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle, PersonVideo } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import vid1 from "../assets/vids/background-OW.mp4"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Computer Scientist", "Web Designer"];
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
      setDelta(prevDelta => prevDelta/2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
/*
  As a passionate Informatics Engineer studying at the Universitat Politécnica de Catalunya,
  I specialize at solving complex problems and developing high-end innovative technologies. 
  With a strong foundation in theoretical and practical Computer Science, I excel in designing and 
  implementing software solutions. Eager to learn and grow, with a goal to contribute to society by 
  participating in groundbreaking research and meaningful projects. 
*/
  return (
    <section className="banner" id="home"> 
    <video src={vid1} autoPlay loop muted />
      <Container>
        
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Eneko `}<span className="wrap">{text}</span></h1>
            <p>As a passionate Informatics Engineer studying at the Universitat Politécnica de Catalunya, I specialize at solving complex problems and developing high-end innovative technologies. With a strong foundation in theoretical and practical Computer Science, I excel in designing and implementing software solutions. Eager to learn and grow, with a goal to contribute to society by participating in groundbreaking research and meaningful projects. </p>
            <button onClick={() => console.log('connect')}>Contact Me <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}