import React from 'react';
import { shallow } from 'enzyme';
import { Product } from '../../components';


describe('Test product', () => {
    const mockedProduct = {
        compare: false,
        condition: "Fresh",
        description: "Two Cherries",
        id: 1,
        image: "images/Cherry.png",
        name: "Cherry",
        price: "$1.99"
    }

    const mockedNextProps = {
        ...mockedProduct,
        compare: true
    }

    const product = shallow(<Product key={mockedProduct.id} product={mockedProduct} />)
    const productCompare = shallow(<Product key={mockedNextProps.id} product={mockedNextProps} />)

    it('default mode', () => {
        expect(product.find('.view_details').text()).toEqual('Compare');
    })

    it('compare mode', () => {
        expect(productCompare.find('.view_details').text()).toEqual('Remove');
    })
})

