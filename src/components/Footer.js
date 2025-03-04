import { Container, Row ,Col} from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon2.svg';
import navicon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navicon1} alt="icon 1"/></a>
                            <a href="#"><img src={navicon2} alt="icon 1"/></a>
                            <a href="#"><img src={navicon3} alt="icon 1"/></a>
                        </div>
                        <p>CopyRight 2025.  All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
    
}