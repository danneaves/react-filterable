import React, { PropTypes } from 'react';

export default React.createClass({
    displayName: 'Collection',

    propTypes: {
        component: PropTypes.func.isRequired
    },

    contextTypes: {
        filters_enabled: PropTypes.arrayOf( PropTypes.string ).isRequired,
        filters_available: PropTypes.object.isRequired,
        collection: PropTypes.array.isRequired,
        enable: PropTypes.func.isRequired,
        disable: PropTypes.func.isRequired,
        toggle: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        unregister: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
        clear: PropTypes.func.isRequired,
        isActive: PropTypes.func.isRequired
    },

    componentWillMount() {

    },

    componentWillReceiveProps (nextProps) {

    },

    componentWillUnmount() {

    },

    getDefaultProps() {
        return {

        }
    },

    getInitialState() {
        return {

        };
    },

    render() {
        return (
            <this.props.component collection={ this.context.collection } />
        );
    }
});