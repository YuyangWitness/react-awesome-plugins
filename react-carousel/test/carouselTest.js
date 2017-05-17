/**
 * Created by xingxiao05 on 17/5/17.
 */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Carousel from '../src/index';
import mockery from 'mockery'
mockery.enable();
mockery.registerMock(['./../test/img/pic1.jpg'],0)


describe('<MyComponent />', () => {
    it('renders three components', () => {
        expect(shallow(<Carousel srcs={['./../test/img/pic1.jpg']} />).find('img')).to.have.length(1);
    });
});