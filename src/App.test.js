import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


//counter function to test 

describe(" counter testing", () => {
  test('render title of render', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText("This is counter app");
    expect(linkElement).toBeInTheDocument();
  });
  

})


