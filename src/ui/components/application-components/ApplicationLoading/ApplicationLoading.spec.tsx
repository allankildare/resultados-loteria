import React from 'React'
import { render, screen } from '@testing-library/react'
import { ApplicationLoading } from './ApplicationLoading'

describe('<ApplicationLoading /> component', () => {
    it('should render loading spinner rotating', () => {
        render(<ApplicationLoading />)

        expect(screen.getByTestId('loading')).toBeInTheDocument()
        expect(screen.getByTestId('loading')).toHaveStyle({ animation: 'rotateLoading .7s infinite ease-in-out' })
    })

    it('should render loading spinner rotating and custom message', () => {
        const customMessage = 'Carregando...'
        render(<ApplicationLoading message={customMessage} />)

        expect(screen.getByTestId('loading')).toBeInTheDocument()
        expect(screen.getByTestId('loading')).toHaveStyle({ animation: 'rotateLoading .7s infinite ease-in-out' })
        expect(screen.getByText(customMessage)).toBeInTheDocument()
    })
})
