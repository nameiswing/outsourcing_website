import { Box } from "@mui/system";
import SearchBar from "../components/workers/SearchBar";
import SearchResults from "../components/workers/SearchResults";
import React, { useContext, useState, /*useEffect*/ } from 'react';
import { workers } from '../data/workers';

const DataContext = React.createContext();
export const useDataContext = () => useContext(DataContext);

//COMPONENT
const Search = () => {

    const [ searchWorkerInput, setSearchWorkerInput ] = useState({ 
        text: '',
        category: 'Any',
    });
    const [ workersData, setWorkersData ] = useState({ 
        main: workers, 
        filtered: workers,
    });
    const [ isReversed, setIsReversed ] = useState(false); //for ascending descending button @ SearchResults.js 
    const [ filterParam, setFilterParam ] = useState('');
    const [ range, setRange ] = useState({start: 0, end: 9});
    // const [ sortDefault, setSortDefault] = useState('');


    const searchStates = { 
        searchWorkerInput, setSearchWorkerInput, //imported to SearchBar.js
        workersData, setWorkersData, //import to SearchBar.js & SearchResults.js
        isReversed, setIsReversed, //for ascending descending button @ SearchResults.js 
        filterParam, setFilterParam, //param for sort @ SearchResults.js 
        range, setRange,
    }

    return (
        <Box sx={ boxStyle }>
            <DataContext.Provider value={ searchStates }>
                <SearchBar/>
                <SearchResults />
            </DataContext.Provider>
        </Box>
    )
}

export default Search

const boxStyle = {
    display: 'flex',
    maxWidth: '100%',
    padding: '4rem 0',
    flexDirection: 'column',
    // boxShadow: 2,
    // borderRadius: '.125rem'
}