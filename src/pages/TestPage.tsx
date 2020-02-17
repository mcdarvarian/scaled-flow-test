import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../components/Header/Header";
interface Props {}

const TestPage: React.FC<Props> = () => {
   return (
      <>
         <Header title="Test Page" />
         <Container>
            <Row>
               <Col>
                  <p>Test Page</p>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default TestPage;
