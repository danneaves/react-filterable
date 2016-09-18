import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

export default React.createClass({
    displayName: 'ToggleButton',

    propTypes: {
        name: PropTypes.string.isRequired,
        column: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        args: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
        isolate: PropTypes.bool,

        active: PropTypes.bool,
        block: PropTypes.bool,
        color: PropTypes.string, // default: 'secondary'
        disabled: PropTypes.bool,
        outline: PropTypes.bool,

        // Pass in a Component to override default button element
        // example: react-router Link
        // default: 'button'
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        size: PropTypes.string
    },

    contextTypes: {
        filters_enabled: PropTypes.arrayOf( PropTypes.string ).isRequired,
        filters_available: PropTypes.object.isRequired,
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
        this.context.register(
            this.props.name,
            {
                column: this.props.column,
                type:   this.props.type,
                args:   this.props.args
            }
        );

        if ( this.props.active ) {
            this.context.enable( this.props.name );
        }
    },

    componentWillReceiveProps (nextProps) {
        this.setState({
            active: this.context.isActive(nextProps.name)
        });
    },

    componentWillUnmount() {
        this.context.disable( this.props.name );
        this.context.unregister(
            this.props.name
        );
    },

    getDefaultProps() {
        return {
            isolate:     false,
            active:      false,
            color:       'primary',
            tag:         'button',
            outline:     true
        }
    },

    getInitialState() {
        return {
            active: this.props.active
        };
    },

    onClick() {
        if ( this.props.isolate ) {
            this.context.clear();
        }
        this.context.toggle( this.props.name );
    },

    render() {
        return (
            <Button
                active={ this.state.active }
                block={ this.props.block }
                color={ this.props.color }
                disabled={ this.props.disabled }
                outline={ this.props.outline }
                tag={ this.props.tag }
                size={ this.props.size }
                onClick={ this.onClick }
                >
                {this.props.children}
            </Button>
        );
    }
});