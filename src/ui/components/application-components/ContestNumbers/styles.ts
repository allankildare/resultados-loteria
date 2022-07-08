import styled from 'styled-components'

export const ContestBox = styled.main`
    background-color: var(--light-gray);
    width: 100%;
    height: 93vh;
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

export const Disclaimer = styled.div`
    padding: calc((7vh - 21px) / 2) 0;
    text-align: center;
    background-color: var(--light-gray);
`
