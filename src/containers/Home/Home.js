import React, { Component, propTypes } from 'react';
import {Container} from '../../theme/grid';
import { 
    Image,
    HeroImage,
    RevealP

} from './Home.style';

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
                <HeroImage>
                    <h1>Cris Hanks</h1>
                    <h2>Full Stack Developer</h2>
                </HeroImage>
                {/* <Image src={require('../assets/headshot-cris.jpg')} alt="headshot image"/> */}
                <RevealP hide={false}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </RevealP>
            </Container>
        );
    }
}