import React from 'react'
import { render, screen } from '@testing-library/react'
import { ContestText } from './ContestText'

describe('<ContestText /> component', () => {
    it('should render component with static text', () => {
        render(<ContestText contestId="2200" contestDate="2002-01-27T06:10:00.000Z" />)
        
        expect(screen.getByTestId('contestText')).toBeInTheDocument()
        expect(screen.getByText(/2200/i)).toBeInTheDocument()
        expect(screen.getByText('2200 - 27/01/2002')).toBeInTheDocument()
    })
})