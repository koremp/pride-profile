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
    const { getByText } = renderIndexPage();

    expect(getByText('Sign In')).not.toBeNull();
  });

  it('renders "Create Profile" button', () => {
    const { getByText } = renderIndexPage();

    expect(getByText('Sign In')).not.toBeNull();
  });
});
