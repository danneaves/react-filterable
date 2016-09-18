import _ from 'lodash';

export function includes(items,column,arg) {
    return _.filter(
        items,
        item => {
            console.log("checking",item,"for",arg);
            let includes = _.includes(item[column],arg);
            console.log("got",includes);
            return includes;
        }
    );
}

// Thin wrapper around lodash func
export function filter(items,column,arg) {
    return _.filter(
        items,
        [ column, arg ]
    );
}

