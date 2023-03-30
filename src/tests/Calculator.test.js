import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders Calculator component', () => {
    render(<Calculator />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(19);
  });

  test('snapshot Calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
