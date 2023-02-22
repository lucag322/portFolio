import { useEffect, useRef, useState } from "react";
import "../../../css/firstPart.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrowserView, MobileView } from "react-device-detect";
import gsap from "gsap";
import axios from "axios";
//const axios = require('axios'); // legacy way

function FirstPart() {
  const [isLoading, setIsLoading] = useState(true);
  const [homes, setHomes] = useState<any>([null]);
  var config = {
    headers: {
      Accept: "application/json",
    },
  };

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://back.lucagrousset.eu/api/tests", config)
      .then((res) => {
        setHomes(Object.values(res.data.data));
        setIsLoading(false);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    gsap.to(".title", {
      x: 300,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".title2", {
      x: 600,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".title3", {
      x: -300,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(".title4", {
      x: -600,

      scrollTrigger: {
        trigger: ".start",
        start: "top 90%",
        end: "top",
        scrub: true,
        markers: false,
      },
    });
  }, [isLoading]);

  const rowVariants: Variants = {
    offscreen1: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 2,
      },
    },
  };



  return (
    <section className="firstPart">
      <BrowserView>
        <motion.div className="container" initial="offscreen1" whileInView="onscreen" viewport={{ once: true, amount: 1 }}>
          <Row className="firstRow d-flex align-items-center">
            <Col className="name--col">
              <motion.div variants={rowVariants} className="namePart tryguy noSelect">
                {isLoading
                  ? "loading"
                  : homes.map((item: any) => (
                      <h2 className="title" key={item.attributes.title}>
                        {item.attributes.title}
                      </h2>
                    ))}
              </motion.div>
              <motion.div  variants={rowVariants} className="favorite tryguy noSelect">
                <h2 className="title3 m-0 fw-light fst-italic">
                  Your Favorite
                </h2>
              </motion.div>
              <motion.div variants={rowVariants} className="frontend noSelect">
                <h2 className="title2 m-0 fw-light">FrontEnd</h2>
              </motion.div>
              <motion.div variants={rowVariants} className="favorite noSelect">
                <h2 className="title4 m-0 fw-light fst-italic ">Developer</h2>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="arrow bounce noSelect start"></div>
            </Col>
          </Row>
        </motion.div>
      </BrowserView>
      <MobileView>
        <Container>
          <Row className="firstRow d-flex align-items-center">
            <Col className="name--col">
              <div className="namePart tryguy noSelect">
                {isLoading
                  ? "loading"
                  : homes.map((item: any) => (
                      <h2 className="" key={item.attributes.title}>
                        {item.attributes.title}
                      </h2>
                    ))}
              </div>
              <div className="favorite tryguy noSelect">
                <h2 className=" m-0 fw-light fst-italic">Your Favorite</h2>
              </div>
              <div className="frontend noSelect">
                <h2 className=" m-0 fw-light">FrontEnd</h2>
              </div>
              <div className="favorite noSelect">
                <h2 className=" m-0 fw-light fst-italic ">Developer</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="arrow bounce noSelect start"></div>
            </Col>
          </Row>
        </Container>
      </MobileView>
    </section>
  );
}

export default FirstPart;
