import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from './App';

const app = () => render(<App />)

it('Should show Root 1 node byu default"', () => {
  expect(app().getByText("Root 1")).toBeInTheDocument();
});

it('should not show Sub 1.1 node (first child of collapsed Root 1 node)', function () {
  expect(app().queryByText("Sub 1.1")).toBeNull();
});


it('when clicking on a triangle for a Root 1 node its children should be visible', function () {
  const { queryByText, getByTestId } = app();
  fireEvent.click(getByTestId('triangle-1'))
  expect(queryByText("Sub 1.1")).toBeInTheDocument();
});
