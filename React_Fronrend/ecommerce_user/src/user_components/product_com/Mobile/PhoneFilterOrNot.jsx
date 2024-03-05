import React from 'react';
import AllBrandPhoneList from './AllBrandPhoneList';
import FilteredPhone from './FilteredPhone';

function PhoneFilterOrNot(props) {
    // console.log(props.filterTags.length)
    if(props.filterTags.length<=0 && props.Prodprice<=0 && props.prodname==''){
        return ( 
            <>
            <AllBrandPhoneList mobile={props.mobile}/>
            </>
         );
    }
    else{
        return(
            <>
                <FilteredPhone mobile={props.mobile} filteredDATA={props.filteredDATA}  nameHandler={props.nameHandler}/>
            </>
        )
    }
    
}

export default PhoneFilterOrNot;