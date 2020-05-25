import React from 'react'
import Header from './Header'
import { 
    Container, Row, Col, Card, 
    CardImg, CardBody, CardTitle,
    CardText
} from 'reactstrap'
import config from '../utils/config'

export default function Layout({ children }) {
    const profileSrc = config["images"]["author_profile"]
    const linkedinSrc = config["images"]["linkedin_logo"]
    const githubSrc = config["images"]["github_logo"]

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
                    <CardImg className="profile-leftnav" top width="100%" src={`/images/${profileSrc}`} alt="Profile Picture"/>
                    <CardBody>
                    <CardTitle>About Me</CardTitle>
                    <CardText>
                        <p>{config.author}</p>
                        <p>
                            <a target="_blank" href={config.linkedin}>
                            <img src={`/images/${linkedinSrc}`} alt="LinkedIn" className="social-icon" />
                            </a>
                            <a target="_blank" href={config.github}>
                            <img src={`/images/${githubSrc}`} alt="Github" className="social-icon" />
                            </a>
                        </p>
                    </CardText>
                    </CardBody>
                    </Card>
                </Col>
                <Col sm="8" className="layout">
                    {children}
                </Col>
            </Row>
        </Container>
        </div>
    )
}