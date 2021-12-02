import styled from '@emotion/styled';
import { Box } from "@mui/system";
import { Link } from "react-router-dom"

const ResponsiveBox = styled(Box)`
    width: calc(100%);
    /* overflow: hidden; */
    @media (min-width: 75rem) {
        width: 75rem;
        margin: 0 auto;
    }
`
const FlexBox = styled.div`
    display: flex;
`
const InputText = styled.input`
    background-color: var(--gray1);
    padding: .25rem .5rem;
    border: 0;
    outline: 0;
    font-size: 1rem;
    color: var(--gray5);
    font-family: var(--font1);
`
const InputLabel = styled.label`
    font-size: .875rem;
`
const StyledRouterLink = styled(Link)`
    text-decoration: none;
`
const StyledButton = styled.button`
    outline: 0;
    border: 0;
    padding: .75rem 1rem;
    border-radius: 0.25rem;
    background-color: var(--warning);
    color: var(--color5);
    cursor: pointer;
    transition: .2s;
    font-weight: 600;

    &:hover {
    background-color: var(--warning1);
    }
    &:active {
        transform: scale(.96);
        background-color: var(--warning);
    }
`

export { 
    ResponsiveBox, 
    FlexBox, 
    InputText,
    InputLabel,
    StyledRouterLink,
    StyledButton
}
