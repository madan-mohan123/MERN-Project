import React from 'react';
import Searchnav from '../Searchnav'
import Homesearch from '../../components/HomeSearch'
import  SearchExplore  from "../../components/SearchExplore";
import searchcss from '../css/search.css';
import { Route,NavLink } from 'react-router-dom';
const Search=()=>{
return(
    <>
    <div className="search m-0 p-0" style={{'backgroundColor': 'whitesmoke',}}>
   < Searchnav />
   <div className="serch-content-body">

    <Route exact path="/Search/" component={Homesearch} />
    <Route exact path="/Search/explore" component={SearchExplore} />

   </div>
   

    </div>
    </>
)
}

export default Search;