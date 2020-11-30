import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('returns somethig', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
