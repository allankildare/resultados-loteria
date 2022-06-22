import React from 'react'
import { render, screen } from '@testing-library/react'
import { ContestText } from './ContestText'

describe('<ContestText /> component', () => {
    it('should render component with text props', () => {
        render(<ContestText contestId="2200" contestDate="2002-01-27T06:10:00.000Z" />)
        
        expect(screen.getByTestId('contestText')).toBeInTheDocument()
        expect(screen.getByText(/2200/i)).toBeInTheDocument()
        expect(screen.getByText('2200 - 27/01/2002')).toBeInTheDocument()
        expect(screen.getByText('2200 - 27/01/2002')).toHaveStyle({ fontWeight: '700' })
        expect(screen.getByText(/Concurso/i)).toBeInTheDocument()
        expect(screen.getByText(/Concurso/i)).toHaveStyle({ fontWeight: '500' })
    })
})