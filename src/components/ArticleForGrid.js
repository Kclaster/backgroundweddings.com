import React from 'react';


class ArticleForGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        };

        this.imageRef = React.createRef();
    }


    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans());
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans })

    }


    render() {
        console.log(this.state);
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <p ref={this.imageRef}>{this.props.content}</p>
            </div>
        )
    }
}

export default ArticleForGrid;