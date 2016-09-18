import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import without from 'lodash.without';
import assign from 'lodash.assign';
import createFilter from './Selector';

const noop = () => undefined;

var Filter = React.createClass({
    displayName: 'Filter',

    propTypes: {
        children: PropTypes.node,
        collection: PropTypes.array.isRequired,
        filters: PropTypes.array,
        filters_enabled: PropTypes.arrayOf( PropTypes.string ),
        filters_available: PropTypes.object,
        enable: PropTypes.func,
        disable: PropTypes.func,
        toggle: PropTypes.func,
        register: PropTypes.func,
        unregister: PropTypes.func,
        reset: PropTypes.func,
        clear: PropTypes.func
    },

    childContextTypes: {
        filters_enabled: PropTypes.arrayOf( PropTypes.string ),
        filters_available: PropTypes.object,
        collection: PropTypes.array,
        enable: PropTypes.func,
        disable: PropTypes.func,
        toggle: PropTypes.func,
        register: PropTypes.func,
        unregister: PropTypes.func,
        reset: PropTypes.func,
        clear: PropTypes.func,
        isActive: PropTypes.func
    },

    getDefaultProps() {
        return {
            filters: []
        };
    },

    componentWillMount() {

    },

    componentWillReceiveProps(nextProps) {
        // this.setState({
        //     filters: this.activeFilters()
        // });
        // console.log('state:',this.state);
    },

    componentWillUnmount() {

    },

    isActive(name) {
        return this.props.filters_enabled.includes(name);
    },

    getChildContext() {
        return {
            filters_enabled: this.props.filters_enabled,
            filters_available: this.props.filters_available,
            collection: this.props.collection,
            enable: this.props.enable,
            disable: this.props.disable,
            toggle: this.props.toggle ,
            register: this.props.register ,
            unregister: this.props.unregister ,
            reset: this.props.reset,
            clear: this.props.clear,
            isActive: this.isActive
        };
    },

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

var mapStateToProps = (state) => {
    return {
        filters_enabled:state.filters_enabled,
        filters:state.filters,
        collection: createFilter(
            state => state.collection,
            state => state.filters
        )(state)
    };
};

module.exports = connect(mapStateToProps)(Filter);
