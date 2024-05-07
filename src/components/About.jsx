import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>My work experience</Card.Title>
                <Card.Text>
                    About Cody,
                    where I have done many projects and listed a few for example! In the portfolio you can see the minimum viable product ready for potential employers. I have come a long way since the beginning just 6 months ago now, where I first dove into html and now have done a full circle into being a full stack javascript developer!
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default About;