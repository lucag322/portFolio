import "./App.css";
import FirstPart from "./components/firstPart/firstPart";
import SecondPart from "./components/secondPart/secondPart";
import ThirdPart from "./components/thirdPart/thirdPart";
import FourthPart from "./components/fourthPart/fourthPart";
import FifthPart from "./components/fifthPart/fifthPart";
import Hours from "./components/firstPart/Hours";
import Test from "./components/test/test";
import "./css/firstPart.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const panels: any = useRef([]);
  const panelsContainer: any = useRef([]);

  const createPanelsRefs = (panel: HTMLDivElement | null, index: number) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -250 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        markers: false,
        pin: true,
        scrub: 1,

        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="App">
      <Hours />
      <FirstPart/>
      <SecondPart />
      <div ref={panelsContainer}>
        <div className="panel" ref={(e) => createPanelsRefs(e, 1)}>
          <ThirdPart />
        </div>
      </div>
      <FourthPart />
      <FifthPart />
      <div>
        <Row className="footer">
          <Col lg={6} sm={6} xs={6} className="footerLeft text-left">
            <span className="px-5">2023</span>
          </Col>
          <Col lg={6} sm={6} xs={6} className="fotterRight text-end">
            <span className="px-5">Grousset Luca</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
