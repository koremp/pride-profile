import { render } from '@testing-library/react';

import Index from 'pages/index';

describe('Index', () => {
  function renderIndex() {
    return render(<Index />);
  }

  it('renders title', () => {
    const { getByText } = renderIndex();

    expect(getByText('Pride Profile')).not.toBeNull();
  });

  it('render links', () => {
    const { getByText } = renderIndex();

    expect(getByText('create-profile')).not.toBeNull();
    expect(getByText('login')).not.toBeNull();
  })
});
