import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Electric() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>VIN REFERENCE</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>County</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>

                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Postal Zip Code</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Make</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Model</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Electric Vehicle Type</Form.Label>
                    <Form.Control />
                   

                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Clean alternative Fuel Vehicle</Form.Label>
                    <Form.Control />

                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Electric Range</Form.Label>
                    <Form.Control />

                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Base MSRP</Form.Label>
                    <Form.Control />

                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Legistlative District</Form.Label>
                    <Form.Control />

                </Form.Group>
               
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>DOL Vehicle ID</Form.Label>
                    <Form.Control />

                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Vehicle Loation</Form.Label>
                    <Form.Control />

                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Electric Utility</Form.Label>
                    <Form.Control />

                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>2020 Census Tract</Form.Label>
                    <Form.Control />

                </Form.Group>
             
            </Row>

           

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Electric;