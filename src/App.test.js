import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
    const {getByTestId} = render(<App/>);
    const linkElement = getByTestId("foo");

    expect(linkElement).toHaveAttribute("fill", "bar")
});
