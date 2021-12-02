import styled from '@emotion/styled';
import { theme } from '../../mui-theme';
import { useGlobalDataContext } from '../../App';

const SearchItem = ({ header, body, tags, compensation, duration, postDate, allData }) => {

    const { setItemDetail, setSearchModal } = useGlobalDataContext();
    
    const d = new Date(postDate)

    const getAllData = () => {
        setSearchModal(true)
        setItemDetail({
            jobName: allData.jobName,
            category: allData.category,
            description: allData.description,
            compensation: allData.compensation,
            duration: allData.duration,
            employer: allData.employer,
            date: d.toDateString(),
            jobId: allData.id,
            lang: allData.requiredLang
        })
    }

    return (
        <ItemContainer onClick={getAllData}>
            <ItemHeader>{ header }</ItemHeader>
            <ItemBody>{ body }</ItemBody>
            <ItemTag>
                { tags.sort().map( tag => <TagContent key={tag}>{ tag }</TagContent> ) }
            </ItemTag>
            <ItemInfo>
                <ItemInfoContent>Rate: <span>${ compensation }/hour</span></ItemInfoContent>
                <ItemInfoContent>
                    Duration:&nbsp;
                    <span>
                        { duration >= 1 ? duration : 4 * duration }
                        {
                            duration < 1 ?
                            ( 4 * duration === 1 ? ' week' : ' weeks' ) :
                            ( duration > 1 ? ' months' : ' month')
                        }
                    </span>
                </ItemInfoContent>
                <ItemInfoContent>Posted: <span>{ d.toDateString() }</span></ItemInfoContent>
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