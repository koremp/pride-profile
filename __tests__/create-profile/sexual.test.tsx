import { render } from '@testing-library/react';

import Sexual from 'pages/create-profile/sexual';

describe('Sexual', () => {
  it('renders title', () => {
    const { getByText } = render(<Sexual />);

    expect(getByText('Create Sexual Profile')).not.toBeNull();
  });
});
