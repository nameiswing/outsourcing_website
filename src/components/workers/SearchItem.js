import styled from '@emotion/styled';
import { theme } from '../../mui-theme';
import { useGlobalDataContext } from '../../App';

const SearchItem = ({ header, body, tags, rate, experience, allData }) => {

    const { setItemDetail, setSearchModal } = useGlobalDataContext();

    const getAllData = () => {
        setSearchModal(true)
        setItemDetail({
            fullName: allData.fullName,
            category: allData.category,
            title: allData.jobDescription,
            description: allData.introduction,
            rate: allData.rate,
            experience: allData.experience,
            jobId: allData.id,
            lang: allData.progLang
        })
    }

    return (
        <ItemContainer onClick={getAllData}>
            <ItemHeader>{ header.join(' ') }</ItemHeader>
            <ItemBody>{ body }</ItemBody>
            <ItemTag>
                { tags.sort().map( tag => <TagContent key={tag}>{ tag }</TagContent> ) }
            </ItemTag>
            <ItemInfo>
                <ItemInfoContent>Rate: <span>${ rate }/hour</span></ItemInfoContent>
                <ItemInfoContent>
                    Experience:&nbsp;<span>{experience}&nbsp;years</span>
                </ItemInfoContent>
            </ItemInfo>
        </ItemContainer>
    )
}

export default SearchItem

const ItemContainer = styled.div`
    width: 100%;
    padding: .5rem 1rem;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: .15s;
    border-radius: .5rem;

    &:hover {
        background-color: var(--gray);
    }
`
const ItemHeader = styled.h3`
    color: ${theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -8%;
`
const ItemBody = styled.p`
    margin-left: .125rem;
    font-size: 1rem;
    color: ${theme.palette.grey[800]};
    font-family: var(--font3);
    font-weight: 300;
    line-height: 140%;
    letter-spacing: -.25px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
const ItemTag = styled.div`
    font-size: .875rem;
    font-weight: 500;
    color: ${theme.palette.grey[700]};
`
const TagContent = styled.span`
    display: inline-block;
    padding: .125rem .5rem;
    border-radius: 1rem;
    background-color: ${theme.palette.grey[50]};
    margin-right: .5rem;
    margin-top: .5rem;
`
const ItemInfo = styled.div`
    color: ${theme.palette.grey[700]};
    font-size: .75rem;
    margin-top: .5rem;
`
const ItemInfoContent = styled.span`
    display: inline-block;
    margin-right: 1rem;
    font-weight: 500;
    margin-top: .5rem;

    span {
        color: ${theme.palette.secondary.main};
        font-weight: 600;
    }
`