import { render } from '@testing-library/react';

import CreateProfile from 'pages/create-profile';

describe('CreateProfile', () => {
  function renderCreateProfile() {
    return render(<CreateProfile />)
  }

  it('renders Header', () => {
    const { getByText } = renderCreateProfile();

    expect(getByText('Create Profile')).not.toBeNull();
    expect(getByText('Select Profile to Create')).not.toBeNull();
  });

  it('renders Links of Create-Profile-Pages', () => {
    const { getByText } = renderCreateProfile();

    expect(getByText('Pride Profile')).not.toBeNull();
    expect(getByText('Sexual Profile')).not.toBeNull();
  })
});
