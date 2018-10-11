import React from 'react';
import { shallow } from 'enzyme';
import { ProductList } from '../../components';


describe('Test productList', () => {
    const props = []

    const productList = shallow(<ProductList products={props} />)

    it('not render products', () => {
        expect(productList.find('Product')).toHaveLength(0);
    })

    it('renders properly', () => {
        expect(productList).toMatchSnapshot();
    })
})

