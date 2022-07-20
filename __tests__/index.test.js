import { render } from '@testing-library/react';

import IndexPage from '@/pages/index';

describe('IndexPage', () => {
  function renderIndexPage() {
    return render(<IndexPage />);
  }

  it('renders title and text', () => {
    const { getByText } = renderIndexPage();

    expect(getByText('Pride Profile')).not.toBeNull();
    expect(getByText('Create Your Own Pride Profile')).not.toBeNull();
  });

  it('renders "Sign in" button', () => {
    const { getByRole } = renderIndexPage();

    expect(getByRole('button').innerHTML).toContain('Sign In');
  });

  it('renders "Create Profile" button', () => {
    const { getByRole } = renderIndexPage();

    expect(getByRole('button').innerHTML).toContain('Create Profile');
  });
});
