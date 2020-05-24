import { withLayout } from '../../utils/hoc';
import {
    Col,
    Row,
    ListGroup,
    ListGroupItem
  } from 'reactstrap'
import fetch from 'node-fetch';

function PostsIndexPage({ category, posts }) {
    return <Row>
            <Col>
            <h3>{category}</h3>
            <ListGroup>
            {
                posts.map(p => {
                    return <ListGroupItem>
                        <a href={"posts/" + p.id}>{p.title}</a>
                    </ListGroupItem>
                })
            }
            </ListGroup>
            </Col>
        </Row>
}

export async function getServerSideProps(ctx) {
    const { category } = ctx.query

    if (!category) {
        return window.location.assign("/");
    }

    const res = await fetch(`${process.env.API_BASE || 'http://localhost:3000/api'}/posts?category=${category}`);
    const json = await res.json();
    
    return {
        props: {
            category: category,
            posts: json
        }
    }
}

export default withLayout(PostsIndexPage);