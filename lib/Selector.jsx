import * as Filters from './Filters';
import { createSelector } from 'reselect';

export default function createFilter(collection,filters) {
    const filterCollection = (collection, filters) => {

        // If there's no filters return the events
        if (filters == null || filters.length == 0)
            return collection;

        // Start with all the events
        var filteredCollection = collection;

        // Run over all of the filters
        for (let filter of filters) {
            filteredCollection = Filters[filter.type](
                filteredCollection,
                filter.column,
                filter.args
            );
        }

        return filteredCollection;
    };

    return createSelector(
        collection,
        filters,
        filterCollection
    );
}