import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Arrow(props) {
    return (
        <button
            className="Arrow"
            onClick={props.onClick}
        >
            &lt;
        </button>
    );
}

class Slider extends React.Component {
    constructor(props) {
        super(props);
        const images = Array(5);
        for (let i = 0; i < 5; i++) {
            images[i] = './img/test_image_' + (i + 1) + '.jpg';
        }
        this.state = {
            images: images,
            position: 0,
        }
    }

    handleClick(i) {

        let animation;
        let position = this.state.position;

        if (i === 0) {
            position--;
            animation = ' Slide-In-Right';
            if (position < 0) {
                position = this.state.images.length - 1;
            }
        } else {
            position++;
            animation = ' Slide-In-Left';
            if (position > this.state.images.length - 1) {
                position = 0;
            }
        }

        const images = document.querySelectorAll(".Image");

        images.forEach((value) => {
            value.className += animation;
        });

        setTimeout(() => {
            this.setState({
                position: position,
            });
            images.forEach((value) => {
                value.className = "Image";
            });
        }, 700);

    }

    renderArrow(i) {
        return (
            <Arrow
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        let prevPosition, nextPosition;
        switch (this.state.position) {
            case 0:
                prevPosition = this.state.images.length - 1;
                nextPosition = 1;
                break;
            case this.state.images.length - 1:
                prevPosition = this.state.position - 1;
                nextPosition = 0;
                break;
            default:
                prevPosition = this.state.position - 1;
                nextPosition = this.state.position + 1;
        }

        return (
            <figure className="Slider">
                <img className="Image" src={this.state.images[prevPosition]} alt=""/>
                <img className="Image" src={this.state.images[this.state.position]} alt=""/>
                <img className="Image" src={this.state.images[nextPosition]} alt=""/>
                <div className="Arrows">
                    {this.renderArrow(0)}
                    {this.renderArrow(1)}
                </div>
            </figure>
        );
    }
}


ReactDOM.render(
    <Slider />,
    document.getElementById('root')
);