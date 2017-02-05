# GEHMI Engineering
##### Frontend Dev Interview Test:
 - Use React with ES6 to implement the given design 
 - Following [React Bootstrap](https://react-bootstrap.github.io/components.html) components can be used for responsiveness
 -- Grid
 -- Row
 -- Col
 - Work under src/routes/home directory, don't need to worry about the project structure 

##### Goal
Please implement the following design and then submit your repo link when finished 
 ![Design Doc](http://www.purelybranded.com/wp-content/uploads/2012/09/responsive-web-design-a-working-example.gif)

##### Notes

```javascript
// Example for using css modules
// 1. import dependencies
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import cx from 'classnames';
    ...
  <div className={s.root}>css modules</div>
  <div className={cx(s.root,s.highlight)}>css modules</div>
    ....
// wrap with higher order component when export
export default withStyles(s)(Home);


// Exmaple for using inline styling
    ...
  <div style={{textAlign:'center'}}>
    css module
  </div>
  
  <div style={Object.assign({
    styles.common,
    {textAlign:'center'}
  })}>
    inline styling
  </div>
    ...
```