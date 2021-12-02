import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { useDataContext } from "../../pages/Jobs";
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const PaginationComponent = () => {

    const { 
        jobsData,
        range,
        setRange,
     } = useDataContext();

    const [ pageCount, setPageCount ] = useState();

    const calcPageCount = () => { //calculate page count based on array length. each page shows 10
        let itemCount = jobsData.filtered.length / 10
        let count =  Math.floor( itemCount ) + ( Number.isInteger(itemCount) ? 0 : 1 )
        return setPageCount(count)
    }

    const updateRange = (value) => { //sets range(from...to) of data of the jobsData.filtered, see SearchResults.js
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;// For Chrome, Firefox, IE and Opera
        switch (value.type) {
            case "previous":
                setRange({ 
                    start: range.start - 10,
                    end: range.end - 10,
                });
                break;
            case "next":
                setRange({ 
                    start: range.start + 10,
                    end: range.end + 10,
                });
                break;
            default:
                setRange({ 
                    start: (value.page * 10) - 10,
                    end: (value.page * 10) - 1,
                });
        }
        
    }

    // eslint-disable-next-line
    useEffect( () => calcPageCount(), [jobsData])
    

    return (
        <Stack spacing={2}>
            <PaginationContainer
                count={pageCount}
                shape="rounded"
                renderItem={ item => {
                    // console.log(item)
                    return (
                        <PaginationItem
                            components={{
                                previous: ArrowLeft,
                                next: ArrowRight,
                            }}
                            {...item}
                            onClick={()=>{
                                item.onClick();
                                updateRange(item)
                            }}
                        />
                    )
                }}
            />
        </Stack>
    );
};

export default PaginationComponent;

const PaginationContainer = styled(Pagination)`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`