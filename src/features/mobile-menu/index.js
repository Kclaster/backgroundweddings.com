import React from 'react';


class mobileMenu extends React.Component {
    render() {
        console.log(this.props.height);
        return (
            <div>
                k
            </div>
        )
    }
};

const mapStateToProp = () => {
    height: this.state.setHeight.height
}

export default connect(mapStateToProp)(mobileMenu);