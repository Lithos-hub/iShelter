import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
	it('renders correctly', () => {
		const { getByTestId } = render(<Input />);
		expect(getByTestId('input')).toBeTruthy();
	});
});
