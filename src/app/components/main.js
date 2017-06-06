import React, {Component, PropTypes} from 'react';
import {Header} from './layout/header';
import {Footer} from './layout/footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
