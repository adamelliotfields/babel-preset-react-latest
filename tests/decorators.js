@Radium
class Button extends Component {
  render () {
    return (
      <button
        style={[
          styles.base
        ]}>
        {this.props.children}
      </button>
    );
  }
}
