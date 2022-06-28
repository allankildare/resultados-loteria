import { render, screen } from '@testing-library/react'
import React from 'react'
import { ContestLogo } from './ContestLogo'

describe('<ContestLogo /> component', () => {
    it('should render quina logo', () => {
        render(<ContestLogo contest={'quina'} />)

        expect(screen.getByText(/quina/i)).toBeInTheDocument()
        expect(screen.getByTestId('contestLogo')).toHaveStyle({ textTransform: 'uppercase' })
    })
    it('should render lotofácil logo', () => {
        render(<ContestLogo contest={'lotofácil'} />)

        expect(screen.getByText(/lotofácil/i)).toBeInTheDocument()
        expect(screen.getByTestId('contestLogo')).toHaveStyle({ textTransform: 'uppercase' })
    })
    it('should render lotomania logo', () => {
        render(<ContestLogo contest={'lotomania'} />)

        expect(screen.getByText(/lotomania/i)).toBeInTheDocument()
        expect(screen.getByTestId('contestLogo')).toHaveStyle({ textTransform: 'uppercase' })
    })
    it('should render mega-sena logo', () => {
        render(<ContestLogo contest={'mega-sena'} />)

        expect(screen.getByText(/mega-sena/i)).toBeInTheDocument()
        expect(screen.getByTestId('contestLogo')).toHaveStyle({ textTransform: 'uppercase' })
    })
    it('should render timemania logo', () => {
        render(<ContestLogo contest={'timemania'} />)

        expect(screen.getByText(/timemania/i)).toBeInTheDocument()
        expect(screen.getByTestId('contestLogo')).toHaveStyle({ textTransform: 'uppercase' })
    })
    it('should render dia de sorte logo', () => {
        render(<ContestLogo contest={'dia de sorte'} />)

        expect(screen.getByText(/dia de sorte/i)).toBeInTheDocument()
        expect(screen.getByTestId('contestLogo')).toHaveStyle({ textTransform: 'uppercase' })
    })
})
