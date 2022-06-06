import styled from 'styled-components'

export const ContestBox = styled.main`
    background-color: var(--light-gray);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .numbers {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .numbers div:last-child {
        margin-right: 0;
    }
`
