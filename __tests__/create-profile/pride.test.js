import { render } from '@testing-library/react';

import PridePage from '@/pages/create-profile/pride';

describe('PridePage', () => {
  function renderIndexPage() {
    return render(<PridePage />);
  }

  it('renders title', () => {
    const { getByText } = renderIndexPage();

    expect(getByText('Create Pride Profile')).not.toBeNull();
  });
});
