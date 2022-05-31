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
    }

    .numbers > div {
        margin: 0 1rem;
    }
`

export const RoundedBox = styled.div`
    background-color: var(--light-gray);
    width: 200px;
    height: 100vh;
    border-radius: 50% 0 0 50%;
    // border: 1px solid black;
`