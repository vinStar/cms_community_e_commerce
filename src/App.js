import React from 'react';
import classNames from 'classnames';

class App extends React.Component {
  static defaultProps = {
    prefix: 'yu'
  }

  render() {
    const {
      prefix
    } = this.props

    const classes = classNames(
      `${prefix}-app`
    )

    return (
      <div className={classes}>
        nihao
      </div>
    );
  }
}

export default App;

