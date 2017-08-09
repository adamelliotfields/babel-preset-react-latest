class Parent extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState(({active}) => ({
      active: !active
    }));
  };

  render () {
    return (
      <Child onClick={this.handleClick} />
    );
  }
}
