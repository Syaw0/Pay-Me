import React from 'react';
import { render, screen , waitFor , fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import App from '../App';
test('renders learn react link',async () => {
  await waitFor(()=>render(<App/>)!) 
  expect(screen.getByTestId("app")).toBeInTheDocument()

});