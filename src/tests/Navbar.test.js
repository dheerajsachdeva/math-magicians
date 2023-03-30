import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('test Header rendering', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  const headerElement = screen.getByText(/Math Magicians/i);
  expect(headerElement.textContent).toBe('Math Magicians');
});

it('test navbar render', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  const navbars = screen.getAllByRole('link');
  expect(navbars).toHaveLength(3);
  expect(tree).toMatchSnapshot();
});
