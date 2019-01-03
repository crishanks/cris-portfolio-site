import React, { Component } from "react";
import Zoomy from 'react-zoomy'; 
import {
    ImageButton
} from './projects.style';
import { Container } from '../../theme/grid';

class Projects extends Component {
    render() {
        return (
            <Container>
                <Zoomy
                    imageUrl={require('../../../src/assets/coffee-hand.jpg')}
                    renderThumbnail={({ showImage }) => 
                        <ImageButton onClick={showImage}>
                            <img src={require('../../assets/coffee-hand-thumbnail.jpg')} 
                            alt="coffe hand thumbnail"/>
                        </ImageButton>
                    }
                        scale={[1.1, 1.1]}
                        imageProps={{
                            style: {
                            width: '100vw',
                            height: 'auto'
                            }
                        }}
                    />
            </Container>
        );
    }
}

export default Projects;