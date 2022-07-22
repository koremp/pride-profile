import { render } from '@testing-library/react';

import IndexPage from '@/pages/index';

describe('IndexPage', () => {
  function renderIndexPage() {
    return render(<IndexPage />);
  }

  it('renders title and text', () => {
    const { getByText } = renderIndexPage();

    expect(getByText('Pride Profile')).not.toBeNull();

    expect(getByText('create-profile')).not.toBeNull();
    expect(getByText('login')).not.toBeNull();
  });
});
