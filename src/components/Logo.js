import styled from "@emotion/styled";

const Logo = ({textColor, logoColor, circleFill, xPos}) => {
    return (
        <MainContainer xPos={xPos}>
            <LogoContainer title="codesourcing" textColor={textColor}>
                <AbsoluteContainer rotate={30}>
                    <FlexContainer>
                        <Circle logoColor={logoColor} circleFill={circleFill} />
                        <Line logoColor={logoColor}/>
                        <Circle logoColor={logoColor} circleFill={circleFill} />
                    </FlexContainer>
                </AbsoluteContainer>
                <AbsoluteContainer rotate={90}>
                    <FlexContainer>
                        <Circle logoColor={logoColor} circleFill={circleFill} />
                        <Line logoColor={logoColor}/>
                        <Circle logoColor={logoColor} circleFill={circleFill} />
                    </FlexContainer>
                </AbsoluteContainer>
                <AbsoluteContainer rotate={150}>
                    <FlexContainer>
                        <Circle logoColor={logoColor} circleFill={circleFill} />
                        <Line logoColor={logoColor}/>
                        <Circle logoColor={logoColor} circleFill={circleFill} />
                    </FlexContainer>
                </AbsoluteContainer>
                <AbsoluteContainer rotate={30}>
                    <Circle logoColor={logoColor} circleFill={circleFill} />
                </AbsoluteContainer>
                <AbsoluteContainer rotate={120}>
                    <FlexContainer2>
                        <ShortLine logoColor={logoColor}/>
                        <ShortLine logoColor={logoColor}/>
                    </FlexContainer2>
                </AbsoluteContainer>
                <AbsoluteContainer rotate={180}>
                    <FlexContainer2>
                        <ShortLine logoColor={logoColor}/>
                        <ShortLine logoColor={logoColor}/>
                    </FlexContainer2>
                </AbsoluteContainer>
                <AbsoluteContainer rotate={240}>
                    <FlexContainer2>
                        <ShortLine logoColor={logoColor}/>
                        <ShortLine logoColor={logoColor}/>
                    </FlexContainer2>
                </AbsoluteContainer>
            </LogoContainer>
        </MainContainer>
    )
}

export default Logo

const MainContainer = styled.div`
    display: grid;
    place-items: center;
    height: 2.5rem;
    width: 2.5rem;
    transform: translateY(-.625rem) translateX(${ props => props.xPos ?? 0 });
`
const LogoContainer = styled.div`
    position: relative;
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 50%;

    &::after {
        content: attr(title);
        display: inline-block;
        position: absolute;
        left: 3.5rem;
        top: 1.25rem;
        color: ${ props => props.textColor ?? 'var(--gray5)'};
        font-weight: 700;
    }
`
const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`
const AbsoluteContainer = styled.div`
    width: max-content;
    height: max-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotate(${props => props.rotate}deg);
`
const Circle = styled.div`
    height: .5rem;
    width: .5rem;
    background-color: ${ props => props.circleFill ?? '#fff'};
    border: .125rem solid ${ props => props.logoColor ?? 'var(--color1)'};
    border-radius: 50%;
    z-index: 99;
`
const Line = styled.div`
    height: .125rem;
    width: 2rem;
    background-color: ${ props => props.logoColor ?? 'var(--color1)'};
`
const FlexContainer2 = styled.div`
    display: flex;
    align-items: center;
    width: 3.125rem;
    justify-content: space-between;
`
const ShortLine = styled.div`
    height: .125rem;
    width: .875rem;
    background-color: ${ props => props.logoColor ?? 'var(--color1)'};
    transform: rotate(90deg);
`