/**
 * @jsx React.DOM
 */

var MenuItem = React.createClass({displayName: 'MenuItem',
  render: function() {
    switch(this.props.className) {
      case 'divider':
      case 'dropdown-header':
        return (
          React.DOM.li( {role:"presentation", className:this.props.className}, this.props.children)
        );
      default:
        return (
          React.DOM.li( {role:"presentation", className:this.props.className}, React.DOM.a( {role:"menuitem", tabindex:this.props.index, href:this.props.url}, this.props.children))
        );
    };
    
  }
});

var Dropdown = React.createClass({displayName: 'Dropdown',
  render: function() {
    if(typeof this.props.label != 'string')
      this.props.label = '';
    return (
      React.DOM.div( {className:"dropdown"}, 
        Button( {className:'dropdown-toggle ' + this.props.className, id:this.props.label.replace(/\s+/g, ''), 'data-toggle':"dropdown"}, 
          this.props.label,
          React.DOM.span( {className:"caret"})
        ),
        React.DOM.ul( {className:"dropdown-menu", role:"menu", 'aria-labelledby':this.props.label.replace(/\s+/g, '')}, 
          this.props.children
        )
      )
    );
  }
});