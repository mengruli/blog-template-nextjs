import React from 'react'
import Header from './Header'
import { 
    Container, Row, Col, Card, 
    CardImg, CardBody, CardTitle,
    CardText
} from 'reactstrap'

export default function Layout({ children }) {
    return(
        <div>
            <div className="head layout" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <div className="layout" style={{width:"80%"}}>
            <Header />
            </div>
                
            </div>
            <Container>
            <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
            <Row>
                <Col sm="3" className="layout">
                    <Card>
                    <CardImg top width="100%" src="/images/profile.png" alt="Profile Picture"/>
                    <CardBody>
                    <CardTitle>About Me</CardTitle>
                    <CardText>
                        <p>Mengru Li.</p>
                        <p>
                            <a target="_blank" href="https://www.linkedin.com/in/mengruli/">
                            <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon" />
                            </a>
                            <a target="_blank" href="https://github.com/mengruli">
                            <img src="/images/github-icon.png" alt="Github" className="social-icon" />
                            </a>
                        </p>
                    </CardText>
                    </CardBody>
                    </Card>
                </Col>
                {/* <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="mengruli"><a class="LI-simple-link" href='https://www.linkedin.com/in/mengruli?trk=profile-badge'>Mengru Li</a></div> */}
                <Col sm="8" className="layout">
                    {children}
                </Col>
            </Row>
        </Container>
        </div>
    )
}