import { createContext } from "react";
import {IFilterState} from "../../src/components/business/Filters/Filters"

interface IFilterContext {
    filters: IFilterState;
    setFilters: (filters: IFilterState)=> void;
}

const initialState: IFilterContext =  { 
    filters: {genre:[], country:[]},
    setFilters: (filters: IFilterState)=>{},
} 

export const FilterContext = createContext(initialState);