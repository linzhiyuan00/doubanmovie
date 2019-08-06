import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 图片加载失败就显示默认图片
 */
class Img extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageUrl: this.props.imageUrl
        };
    }
 
    handleImageLoaded() {
     
    }
 
    handleImageErrored() {
        this.setState({ 
            imageUrl: this.props.defaultImg
        });
    }
 
    render() {
        return (
            <img 
                src={this.state.imageUrl}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
                width="64px" height="90px"
            />
        );
    }
}
export default Img;