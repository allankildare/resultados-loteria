import React from 'react'
import { render, screen } from '@testing-library/react'
import { AlertText } from './AlertText'

describe('<AlertText /> component', () => {
  it('should render default <AlertText /> component', () => {
    render(<AlertText />)

    const defaultAlert = screen.getByTestId(/alertText/i)
    expect(defaultAlert).toBeInTheDocument()
    expect(defaultAlert.tagName).toEqual('P')
    expect(defaultAlert).toHaveTextContent(
      'Infelizmente ocorreu um erro durante a busca, pesquise outro concurso ou tente novamente mais tarde.'
    )
  })

  it('should render <AlertText /> component as span element', () => {
    render(<AlertText as="span" />)

    const spanAlert = screen.getByTestId(/alertText/i)
    expect(spanAlert).toBeInTheDocument()
    expect(spanAlert.tagName).toEqual('SPAN')
    expect(spanAlert).toHaveTextContent(
      'Infelizmente ocorreu um erro durante a busca, pesquise outro concurso ou tente novamente mais tarde.'
    )
  })

  it('should render <AlertText /> component as span element and having a modified message', () => {
    const customMessage =
      'Não sabemos o que aconteceu, por favor volte mais tarde'

    render(<AlertText as="span" message={customMessage} />)

    const spanAndModifiedMessageAlert = screen.getByTestId(/alertText/i)
    expect(spanAndModifiedMessageAlert).toBeInTheDocument()
    expect(spanAndModifiedMessageAlert.tagName).toEqual('SPAN')
    expect(spanAndModifiedMessageAlert).toHaveTextContent(customMessage)
  })

  it('should render <AlertText /> component as span element and having a modified message', () => {
    const customHexColor = '#357cf0'
    const customMessage =
      'Não sabemos o que aconteceu, por favor volte mais tarde'

    render(
      <AlertText as="span" message={customMessage} color={customHexColor} />
    )

    const allModifiedPropsAlert = screen.getByTestId(/alertText/i)
    expect(allModifiedPropsAlert).toBeInTheDocument()
    expect(allModifiedPropsAlert).toHaveTextContent(customMessage)
    expect(allModifiedPropsAlert.tagName).toEqual('SPAN')
    expect(allModifiedPropsAlert).toHaveStyle({ color: customHexColor })
  })
})
