import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./style.css";

function Kart() {
  return (
    <>
    <div className='container-fluid py-5'>
      <div className='container'>
        <div className='row'>
          <img src="https://lintasdinamika.com/wp-content/uploads/2019/01/Bupati-dan-Wakil-Bupati-Tulang-Bawang.jpg"/>
        </div>
        <div className='row'>
        <div className='mt-5'>Info Terbaru</div>
        <Col sm={7}><Card>
        <Card.Img variant="top" src="https://i0.wp.com/rimbakita.com/wp-content/uploads/2020/07/baju-tulang-bawang.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Img variant="top" src="https://i0.wp.com/rimbakita.com/wp-content/uploads/2020/07/baju-tulang-bawang.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      
      <Col>
      <div>
        Berita
      </div>
      <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
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
        <Col className='mt-4'>
        <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
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
        </div>
        <br></br>
        <div className='row'>
        <Col>
        <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
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
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
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
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Form Pertanyaan</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button variant="kirim">Kirim</Button>
    </Col>
        </div>
      </div>
       
        </div>
        
    </>
  );
};

export default Kart;