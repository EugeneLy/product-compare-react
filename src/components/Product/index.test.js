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

    const mockCompare = jest.fn();

    const buttonSelector = component => component.find('.view_details');

    const product = shallow(<Product key={mockedProduct.id} product={mockedProduct} compare={mockCompare} />)
    const productCompare = shallow(<Product key={mockedNextProps.id} product={mockedNextProps} />)

    beforeEach(() => {
        mockCompare.mockClear();
    })

    it('click on button', () => {
        buttonSelector(product).simulate('click', mockedProduct);
        expect(mockCompare).toHaveBeenCalledTimes(1);
    })

    it('renders properly compare', () => {
        expect(productCompare).toMatchSnapshot();
    })

    it('renders properly', () => {
        expect(product).toMatchSnapshot();
    })
})

