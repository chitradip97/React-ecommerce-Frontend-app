import React from 'react';
import AllBrandPhoneList from './AllBrandPhoneList';
import FilteredPhone from './FilteredPhone';

function PhoneFilterOrNot(props) {
    console.log(props.filterTags.length)
    if(props.filterTags.length<=0){
        return ( 
            <>
            <AllBrandPhoneList mobile={props.mobile}/>
            </>
         );
    }
    else{
        return(
            <>
                <FilteredPhone mobile={props.mobile} filteredDATA={props.filteredDATA}/>
            </>
        )
    }
    
}

export default PhoneFilterOrNot;