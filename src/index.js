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

class Figure extends React.Component {
    renderArrow(i) {
        return (
            <Arrow
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <figure className="Slider">
                <img id="image" src={this.props.image} alt=""/>
                <div className="Arrows">
                    {this.renderArrow(0)}
                    {this.renderArrow(1)}
                </div>
            </figure>
        );
    }
}


class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
        }
    }

    handleClick(i) {

        let position = this.state.position;
        if (i === 0) {
            position--;
            if (position < 1) {
                position = 5;
            }
        } else {
            position++;
            if (position > 5) {
                position = 1;
            }
        }
        this.setState({
            position: position,
        });

    }

    render(){
        const image = './img/test_image_' + this.state.position + '.jpg';

        return (
            <Figure
                image={image}
                onClick={(i) => this.handleClick(i)}
            />
        );
    }
}

ReactDOM.render(
    <Slider />,
    document.getElementById('root')
);