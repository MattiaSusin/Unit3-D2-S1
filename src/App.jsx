import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
import { Card,Col,CardImg,CardText,CardBody,CardTitle,Container, Row } from "react-bootstrap";
import fantasy from './assets/fantasy.json'
/* import AllTheBooks from "./components/AllTheBooks"; */


function App() {
  return (
    <div className="App">
      <TopBar/>
      <MyAlert/>
      <Container>
        <Row xs={4}>
          {fantasy.map((fantasy)=>{
            return(
              <Col>
                                <Card className="bg-body-tertiary border-0">
                                    <CardImg src={fantasy.img}></CardImg>
                                    <CardBody>
                                        <CardTitle>{fantasy.title}</CardTitle>
                                        <CardText>{fantasy.category}</CardText>
                                        <CardText className="col-3 d-flex justify-content-start border border-black bg-dark text-light rounded-pill ps-1 " >{fantasy.price}€</CardText>
                                        <CardText></CardText>
                                    </CardBody>
                                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
      <MyFooter/>
      
    </div>
  );
}

export default App;
