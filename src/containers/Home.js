import React, { Component, propTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/container';

const Image = styled.img`
    width: 100%;
`

export default class Home extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            data: 0
        };
    }

    increment() {
        this.setState({
            data:this.state.data + 1
        });
    }

    render() {
        return (
            <Container>
                <h1>Hey, I'm Cris.</h1>
                <p>{this.state.data}</p>
                <button onClick={this.increment.bind(this)}>Increment</button>
                <Image src={require('../assets/headshot-cris.jpg')} alt="headshot image"/>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                    </p>
            </Container>
        );
    }
}