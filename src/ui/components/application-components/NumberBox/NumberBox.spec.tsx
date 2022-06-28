import { render, screen } from '@testing-library/react'
import React from 'react'
import { NumberBox } from './NumberBox'

describe('<NumberBox /> component', () => {
  describe('rendering numbers less than 10 and greater than -1 with the leading digit zero', () => {
    it('should render "01" as text content', () => {
      render(<NumberBox number={1} />)
      expect(screen.getByTestId('numberBox')).toHaveTextContent('01')
    })

    it('should render "04" as text content', () => {
      render(<NumberBox number={4} />)
      expect(screen.getByTestId('numberBox')).toHaveTextContent('04')
    })

    it('should render "07" as text content', () => {
      render(<NumberBox number={7} />)
      expect(screen.getByTestId('numberBox')).toHaveTextContent('07')
    })

    it('should render "09" as text content', () => {
      render(<NumberBox number={9} />)
      expect(screen.getByTestId('numberBox')).toHaveTextContent('09')
    })
  })
})
