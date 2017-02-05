# GEHMI Engineering
##### Frontend Dev Interview Test:
 - Use React with ES6 to implement the given design 
 - Use [React Bootstrap](https://react-bootstrap.github.io/components.html) components for responsive implementation
 - Both inline styling and css module approch are accepted, see Notes below for reference 
 - Work under src/routes/home directory, don't need to worry about the project structure 
##### Goal
Please implement the following design and then submit your repo link when finished 
 ![Design Doc](http://www.purelybranded.com/wp-content/uploads/2012/09/responsive-web-design-a-working-example.gif)

##### Notes
###### Example for using css modules
```javascript
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import cx from 'classnames';
...
<div className={s.root}>css modules</div>
<div className={cx(s.root,s.highlight)}>css modules</div>
...
// wrap with higher order component when export
export default withStyles(s)(Home);
```

###### Exmaple for using inline styling
```javascript
...
<div style={{textAlign:'center'}}>
 inline styling
</div>
  
<div style={Object.assign({
 styles.common,
 {textAlign:'center'}
})}>
 inline styling
</div>
...
```
