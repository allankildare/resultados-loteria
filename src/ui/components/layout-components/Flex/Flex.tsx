import { StyledFlex } from './styles'
import type * as CSS from 'csstype'
import { ComponentType } from 'react'

interface FlexProps extends CSS.Properties {
    as?: string | ComponentType<any>
    children: JSX.Element
}

export function Flex(props: FlexProps) {
    const { as, justifyContent, alignItems, flexDirection, children } = props

    return (
        <StyledFlex as={as} justifyContent={justifyContent} alignItems={alignItems} flexDirection={flexDirection} style={{...props}}>
            {children}
        </StyledFlex>
    )
}
