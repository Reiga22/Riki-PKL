import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const Profil = () => {
    return (
        <>
        <Header/>
        <br></br>
        <div className="row">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://www.seekpng.com/png/detail/202-2024994_profile-icon-profile-logo-no-background.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.seekpng.com/png/detail/202-2024994_profile-icon-profile-logo-no-background.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant="top" src="https://www.seekpng.com/png/detail/202-2024994_profile-icon-profile-logo-no-background.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.seekpng.com/png/detail/202-2024994_profile-icon-profile-logo-no-background.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src="https://www.seekpng.com/png/detail/202-2024994_profile-icon-profile-logo-no-background.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.seekpng.com/png/detail/202-2024994_profile-icon-profile-logo-no-background.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card></Col>
        </div>
        <br></br>
        <Footer/>
        </>
    );
};

export default Profil;