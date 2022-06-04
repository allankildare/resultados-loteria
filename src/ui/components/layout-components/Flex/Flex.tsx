import { StyledFlex } from './styles'

export function Flex(props: any) {
    const { as, justifyContent, alignItems, flexDirection, children } = props

    return (
        <StyledFlex as={as} justifyContent={justifyContent} alignItems={alignItems} flexDirection={flexDirection} style={{...props}}>
            {children}
        </StyledFlex>
    )
}
