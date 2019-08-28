import React from 'react';

class PictureForGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSpans);
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSpans);
    this.imageRef.current.removeEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={this.props.source}
          alt={this.props.description}
        />
      </div>
    );
  }
}

export default PictureForGrid;
