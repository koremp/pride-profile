import { render } from '@testing-library/react';

import PridePage from 'pages/create-profile/pride';

describe('PridePage', () => {
  it('renders title', () => {
    const { getByText } = render(<PridePage />);

    expect(getByText('Create Pride Profile')).not.toBeNull();
  });
});
