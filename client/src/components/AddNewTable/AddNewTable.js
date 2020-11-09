import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "./AddNewTable.css";


function AddNewTableComp() {

    return (


        <>
            <Container className="vertical-center">

                <br />
                <br />
                <br />


                <Jumbotron className="jumbotronAddTable">
                    <h2 className="text-center responsiveH2Font">Add Table</h2>
                    <hr style={{ height: '4px' }} />
                    {/* <h4 className="text-center">Plaeholder Description</h4> */}
                    {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}

                    <Form>

                        <Form.Group className="formControl">

                            <h6 className="centerText">Define your table + Number of Seats</h6>

                            <Form.Control className="formControl" placeholder="# What table number is this?" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control className="formControl" placeholder="# How many available seats?" />
                        </Form.Group>

                        <Button className="my-2 my-lg-0 formControl add" block>+</Button>

                    </Form>

                </Jumbotron>

            </Container>

            <br />
            <br />
            <br />


        </>


    );

};

export default AddNewTableComp;