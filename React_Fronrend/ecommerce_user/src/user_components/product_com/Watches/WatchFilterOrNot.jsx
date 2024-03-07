import React from 'react';
import AllBrandWatchesList from './AllBrandWatchesList';
import FilteredWatches from './FilteredWatches';


function WatchFilterOrNot(props) {
    if(props.filterTags.length<=0 && props.Prodprice<=0 && props.prodname==''){
        return ( 
            <>
            <AllBrandWatchesList watches={props.watches}/>
            </>
         );
    }
    else{
        return(
            <>
                <FilteredWatches watches={props.watches} filteredDATA={props.filteredDATA}  />
            </>
        )
    }
}

export default WatchFilterOrNot;