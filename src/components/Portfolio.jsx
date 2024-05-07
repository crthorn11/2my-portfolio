import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/src/images/image2.png" />
        <Card.Body>
          <Card.Title>Horiseon challenge</Card.Title>
          <Card.Text>
            In this project I took existing code and updated its formatted for better readability and usage for the client. Previously the page was left awkward and now it is no longer cut off or choppy
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 8 hours ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="src/images/Book.jpg" />
        <Card.Body>
          <Card.Title>Book Search API</Card.Title>
          <Card.Text>
           Here is the wonderful Book Search API where I take more outdated backend thats using RESTful API and update it to using GraphQL for testing its endpoints and MongoDB database{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 7 hours ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/src/images/image3.png" />
        <Card.Body>
          <Card.Title>A peak look into the PillzHere application!</Card.Title>
          <Card.Text>
           This is a peak look into the project 3 PillzHere application that has recently been finished and deployed! This application reminds its clients when its time to take their medication and the dosage because we all need a little reminder here and there
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 7 hours ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;