import { render } from '@testing-library/react';
import Textarea from './Textarea';

describe('Textarea', () => {
	it('renders correctly', () => {
		const { getByTestId } = render(<Textarea />);
		expect(getByTestId('textarea')).toBeTruthy();
	});
});
