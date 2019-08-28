import React from 'react'
import './style.css'


class SelectBox extends React.Component {
    state = {
        ...this.props,
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0],
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }

    selectItem = (item) => this.setState({
        selectedItem: item,
        showItems: false,
    })

    handleMouseLeave = () => this.state.showItems === true ? this.setState({showItems: false}) : null;
    

    render() {
        return (
            <div>
                <div className="select-box--box" style={{width: this.state.width || 180}}>
                <div
                    className="select-box--container"
                >
                    <div
                        className="select-box--selected-item"
                        onClick={this.dropDown}>
                        {this.state.selectedItem.value}
                        </div>
                        <div 
                            className="select-box--arrow"
                            onClick={this.dropDown}
                        
                        >
                            <span
                                className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}` }/> 
                        </div>
                        <div className="items-container">
                            <div className="select-box--items" 
                                style={{display: this.state.showItems ? 'block' : 'none'}}
                                onMouseLeave={this.handleMouseLeave}>

                                {
                                    this.state.items.map(item => <div key={ item.id }
                                        onClick={() => this.selectItem(item)}
                                        className={this.state.selectItem === item ? 'selected' : ''}
                                    >
                                        { item.value }
                                    </div>)

                                }
                            </div>
                        </div>

                </div>
            </div>
            <input 
                type='hidden' 
                value={this.state.selectedItem.id} name={this.state.name}
            ></input>
        </div>
        )
    }
}

export default SelectBox;