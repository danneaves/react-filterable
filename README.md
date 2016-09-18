# react-filterable
Easy filtering component for React (ES6)

##Usage

Import the following nodes:

```jsx
import Filter { Collection, ToggleButton } from 'react-filterable';
```

Add in the ```Filter```, ```Collection``` and other controls into your component's ```render()``` function:

```jsx
render() {
  <Filter collection={this.props.myCollectionArray}>
    <ToggleButton
      active
      isolate
      name="includesABC"
      column="name"
      args="ABC">
        Includes 'ABC'
      </ToggleButton>
    <ToggleButton
      active
      isolate
      name="includesDEF"
      column="name"
      args="DEF">
        Includes 'DEF'
      </ToggleButton>
    <Collection component={MyComponent}/>
  </Filter>
}
```

The ```MyComponent``` component will receive a prop named ```collection``` that contains the filtered items. Iterate over the items as usual to render them:

###MyComponent

```jsx
render() {

  var collectionNodes = [];
  this.props.collection.forEach((item, idx)  => {
    collectionNodes.push(
      <Item key={idx} index={idx} item={item} />
    );
  });

  return (
    <div>
      {collectionNodes}
    </div>
  );
}
```

