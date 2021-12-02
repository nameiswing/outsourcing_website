import styled from "@emotion/styled";
import { ResponsiveBox, StyledRouterLink } from "./utils";
import Logo from "./Logo";

const Footer = () => {
    return (
        <FooterBox>
            <FooterContent>
                <FlexContainer>
                    <StyledRouterLink to="/">
                        <Logo
                            textColor="#fff"
                            logoColor="var(--color3)"
                            circleFill="var(--gray5)"
                            xPos="-4.375rem"
                            />
                    </StyledRouterLink>
                </FlexContainer>
                <FlexContainer>
                    <FooterText>Copyright &copy;, 2021</FooterText>
                </FlexContainer>
            </FooterContent>
        </FooterBox>
    )
}

export default Footer

const FooterBox = styled.footer`
    width: 100%;
    padding: 2rem 0 0 0;
    background-color: var(--gray5);
`
const FooterContent = styled(ResponsiveBox)`
`
const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`
const FooterText = styled.div`
    margin-top: 2rem;
    display: inline-block;
    padding: 1rem;
    font-size: .875rem;
    color: var(--gray1);
    font-family: var(--font2)
`