import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

/* Example for using css modules
// 1. import dependencies
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import cx from 'classnames';

  <div className={s.root}>css module<div>
  <div className={cx(s.root,s.highlight)}>css module<div>

// wrap with higher order component when export
export default withStyles(s)(Home);
*/

/* Exmaple for using inline styling
  <div style={{textAlign:'center'}}>
    css module
  <div>

  <div style={Object.assign({
    styles.common,
    {textAlign:'center'}
  })}>
    inline styling
  <div>
*/

class Home extends React.Component {
  render() {
    return (
      <Grid style={{ paddingTop: 150, paddingBottom: 150 }}>
        <h2>Welcome to GEHMI</h2>
        {/* ======= your code below ======= */}
      </Grid>
    );
  }
}

export default Home;
