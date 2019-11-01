import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  render(<App />)
});

test('Baseball: Web Application Testing text displays', () => {
  const container = render(<App />);
  // assert that h1 is on the DOM
  container.getByText('Baseball: Web Application Testing')
})












// ​
// /**** This is how you will actually write tests ****/
// ​
// ​
// test('it returns the sum of the passed in numbers', () => {
//   result = sum(5, 3);
//   expected = 8;
// ​
//   expect(result).toBe(expected);
// })
