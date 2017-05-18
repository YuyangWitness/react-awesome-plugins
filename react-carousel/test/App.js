/**
 * Created by xingxiao05 on 17/5/18.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Swiper from './../src/index'

console.log(Swiper);
ReactDOM.render(
    <Swiper setStyle={{width:'550px',height:'100px'}}>
        <img src={require('./img/pic1.jpg')} alt=""/>
        <img src={require('./img/pic2.jpg')} alt=""/>
    </Swiper>,
    document.getElementById('root')
)