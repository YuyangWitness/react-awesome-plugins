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
        let valForTransformY = this.getTransformY(Imgs[0]);

        setInterval( () => {

            Imgs.forEach( img => {
                if(count > 3){
                    img.style.transform = `translateY(${0}px)`;

                }else{
                    let valForTransformY = this.getTransformY(img);
                    img.style.transform = `translateY(${valForTransformY - 100}px)`;
                }

            });
            if(count > 3){
                count = 0;
            }
            count++;
        },3000);


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
            <div className={['swiperImg']} ref={'swiper'}>

            {
                this.props.srcs.map( (src, index) => {
                if(index === 0){
                    return <img className={['firstImg']} src={require(`${src}`)} key={index} alt={index}/>
                }
                return <img src={require(`${src}`)} key={index} alt={index}/>
            } )
        }
          </div>
        )
    }
}

export default Carousel;