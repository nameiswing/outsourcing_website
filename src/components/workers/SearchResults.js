import {
    Box,
    Divider,
    FormControl,
    FormControlLabel,
    Paper,
    Radio,
    RadioGroup,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton
} from "@mui/material";
import { Sort, ArrowCircleDown } from "@mui/icons-material";
import { theme } from "../../mui-theme";
// import { useState } from "react";
import SearchItem from "./SearchItem";
import { useDataContext } from "../../pages/Workers";
import styled from '@emotion/styled';
import PaginationComponent from "./Pagination";


const SearchResults = () => {

    const { 
        searchInput, 
        workersData, 
        setWorkersData, 
        isReversed, 
        setIsReversed,
        filterParam, 
        setFilterParam,
        range,
      } = useDataContext();

    
    const muiTheme = useTheme();
    const breakPoint = useMediaQuery(muiTheme.breakpoints.down('sm'));

    const getParamAndSort = (param) => {
        let str = param.toLocaleLowerCase()
        if( filterParam === str ) return;
        setFilterParam(str);
        sortViaParam(str);
        setIsReversed(false);
    };

    const reverseOrder = () => {
        setIsReversed(!isReversed);
        setWorkersData({
            ...workersData,
            filtered: workersData.filtered.reverse()
        })
    };

    // const toggleSortHeight = () => {
    //     if(!breakPoint) return;
    //     let radioButtons = document.getElementById('radio-group');
    //     radioButtons.style.height = '0';
    // }

    const sortViaParam = param => {  //used at getParamAndSort()
        
        switch ( param ) {
            case 'experience':
                return setWorkersData({
                    ...workersData,
                    filtered: workersData.filtered.sort( (a,b) => b.experience - a.experience ),
                });
            case 'rate':
                return setWorkersData({
                    ...workersData,
                    filtered: workersData.filtered.sort( (a,b) => a.rate - b.rate ) 
                });
            default:
                return workersData
        }
    }

    // useEffect( () => console.log(jobsData), [jobsData] )
    
    return (
        <Box 
            sx={{
                ...mainBox, 
                mx: !breakPoint ? 2.5 : 1,
                flexDirection: breakPoint ? 'column' : 'row',
            }} component={Paper}>
            <FormControl sx={{ ...formStyle }}>
                <Typography sx={labeledIcon}>
                    <Sort
                        fontSize="small"
                        htmlColor={theme.palette.primary.main}
                        sx={{ mr: 1 }}
                    />
                    Sort:
                </Typography>
                <RadioGroup 
                    sx={{ ...radioGroup, height: breakPoint ? '2rem' : 'max-content' }} 
                    aria-label="options" 
                    name="options"
                    id="radio-group"
                >
                    {["Experience", "Rate"].map(
                        (item) => (
                            <FormControlLabel
                                key={item}
                                size="small"
                                value={item.toLocaleLowerCase()}
                                control={<Radio size="small" sx={radioStyle}/>}
                                label={item}
                                checked={ item.toLocaleLowerCase() === filterParam.toLowerCase() && true }
                                onClick={ () => getParamAndSort(item) }
                            />
                        )
                    )}
                </RadioGroup>
            </FormControl>
            <Box sx={resultBox}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Typography variant="h2" sx={{fontSize: '1.125rem', fontWeight: 500, mb: 1.5}}>
                        Results:&nbsp;
                        <IconButton 
                            sx={{transform:(isReversed ? 'rotate(180deg)': 'rotate(0deg)'), transition: '.2s'}}
                            onClick={ () => {
                                reverseOrder();
                            }}
                        >
                            <ArrowCircleDown />
                        </IconButton>
                    </Typography>
                    <Typography variant="subtitle" sx={{fontSize: '.75rem', fontWeight: 500, mb: 1.5}}>
                        {
                            workersData.filtered.length !== 0 ? 
                                workersData.filtered.length + ` Match${workersData.filtered.length > 1 ? 'es' : ''}` : 
                                ( searchInput.category !== 'Any' ? '0 Match, Showing All Results' : '')
                        }
                    </Typography>
                </Box>
                <Divider />
                <ResultsContainer>
                    { 
                        workersData.filtered
                            .filter( item => workersData.filtered.indexOf(item) >= range.start && workersData.filtered.indexOf(item) <= range.end)
                            .map( item => (
                                <SearchItem
                                    key={item.id}
                                    header={item.fullName}
                                    body={item.introduction}
                                    tags={item.progLang}
                                    rate={item.rate}
                                    experience={item.experience}
                                    allData={item}
                                />
                            )
                        )
                    }
                    <PaginationComponent />
                </ResultsContainer>
            </Box>
        </Box>
    );
};

export default SearchResults;

//MUI SX
const mainBox = {
    display: "flex",
    // padding: ".5rem 1rem",
    boxShadow: 3,
    mt: 5,
    borderRadius: '.25rem',
    backgroundColor: theme.palette.grey[1],
    overflow: 'hidden',
    maxHeight: 'max-content',
    minHeight: '36rem',
};
const formStyle = {
    padding: '1rem',
    width: 'clamp(12rem, 20vw, 14rem)',
    flexShrink: 0,
    flexGrow: 0,
}
const resultBox = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white', 
    width: '100%',
    padding: '1rem 1.25rem 3rem 1.25rem',
    color: theme.palette.grey[700],
}
const labeledIcon = {
    display: "flex",
    alignItems:'center',
    fontSize: ".875rem",
    fontWeight: 600,
    color: theme.palette.grey[700],
    height: '2.5rem',
    // alignItems: 'center'
};
const radioGroup = {
    mt: 1,
    ml: 'clamp(1rem, 2vw, 3rem)',
};
const radioStyle ={
    color: theme.palette.grey[300],
    fontSize: '.75rem',
    fontWeight: '600 !important',
    letterSpacing: '-1px',
}

const ResultsContainer = styled.div`
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
`