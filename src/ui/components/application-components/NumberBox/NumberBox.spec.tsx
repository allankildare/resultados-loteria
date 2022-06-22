import { render, screen } from '@testing-library/react'
import React from 'react'
import { NumberBox } from './NumberBox'

describe('<NumberBox /> component', () => {
    it('should render numbers less than 10 and greater than -1 with the leading digit zero', () => {
        render(<NumberBox number={4} />)
        expect(screen.getByTestId('numberBox')).toHaveTextContent('04')
    })
})