/**
 * Created by xingxiao05 on 17/5/17.
 */
import React from 'react'
import './index.css'


class Carousel extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        let swiper = this.refs.swiper;
        let Imgs = swiper.querySelectorAll('img');
        let count = 1;

        if(Imgs.length > 1){
            setInterval( () => {

                Imgs.forEach( img => {
                    if(count > Imgs.length - 1){
                        img.style.transform = `translateY(${0}px)`;

                    }else{
                        let valForTransformY = this.getTransformY(img);
                        img.style.transform = `translateY(${valForTransformY - 100}px)`;
                    }

                });
                if(count > Imgs.length - 1){
                    count = 0;
                }
                count++;
            },3000);
        }



    }

    getTransformY(element) {

        let imgStyleSplit = window.getComputedStyle(element).transform.split(',');

        let imgStyleTransformY = imgStyleSplit[imgStyleSplit.length - 1];

        let realTransformY = imgStyleTransformY.trim();

        let realValForTransformY = realTransformY.substring(0,realTransformY.length - 1)

        return realValForTransformY;
    }

    render() {
        return (
            <div id="div1" ref={'swiper'} style={this.props.setStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Carousel;