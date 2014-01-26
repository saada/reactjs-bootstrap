/**
 * @jsx React.DOM
 */

var MenuItem = React.createClass({
  render: function() {
    switch(this.props.className) {
      case 'divider':
      case 'dropdown-header':
        return (
          <li role="presentation" className={this.props.className}>{this.props.children}</li>
        );
      default:
        return (
          <li role="presentation" className={this.props.className}><a role="menuitem" tabindex={this.props.index} href={this.props.url}>{this.props.children}</a></li>
        );
    };
    
  }
});

var Dropdown = React.createClass({
  render: function() {
    return (
      <div className="dropdown">
        <Button className={'dropdown-toggle ' + this.props.className} id={this.props.label.replace(/\s+/g, '')} data-toggle="dropdown">
          {this.props.label}
          <span className="caret"></span>
        </Button>
        <ul className="dropdown-menu" role="menu" aria-labelledby={this.props.label.replace(/\s+/g, '')}>
          {this.props.children}
        </ul>
      </div>
    );
  }
});