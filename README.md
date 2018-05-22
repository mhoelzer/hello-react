# Assessment: Hello React

For this assessment, we'd like you to extend the basic scaffold generated by
`create-react-app` with a few trivial features. In doing so, you'll be
demonstrating a basic understanding of the following:

- kick-starting a React app using `create-react-app`
- [props](https://reactjs.org/docs/components-and-props.html)
- combining components together to make more complex components

## Getting Started
To get started, _fork_ this repository into your own GitHub account then clone
this repository to your local machine:

```console
foo@bar:~ $ git clone git@github.com:github-username/hello-react
foo@bar:~ $ cd hello-react
foo@bar:~/hello-react $
```

Note `github-username` above. In other words, __don't__ simply copy-paste the
code above blindly into a terminal. 

You'll undoubtedly notice that the only thing in this repository is this
`README.md` file and a `screenshots` directory: that's intentional. In addition
to getting you some extra practice `forking` from existing code rather than
initializing new git repositories, we wanted to get you comfortable with
relying on gathering necessary information from project `README.md` files, as
it's common practice in the development world, especially as far as [open
source](https://opensource.com/resources/what-open-source) projects are
concerned.

## Acceptance Criteria
_Note: Please see the rubric on Canvas for detailed breeak down on how this
assessment is being graded. The information below is provided for your
convenience._

### Step 1: Basic React Scaffold (4 points)

Assuming you've properly installed `yarn`, all that is required to get these
points is to initialize a react application in your new repository. The tricky
part is that we want the root of the new React project to be the root of _this_
repository. That is, the resulting directory structure should __not__ look like this:

![incorrect project structure](https://raw.githubusercontent.com/KenzieAcademy/hello-react/master/screenshots/incorrect_layout.png)

And instead, should look like this:

![correct project structure](https://raw.githubusercontent.com/KenzieAcademy/hello-react/master/screenshots/correct_layout.png)

Note the flatter structure of the expected result. You can accomplish that by
invoking `create-react-app` as follows:

```console
foo@bar:~/hello-react $ create-react-app .
```

Note that this `README.md` file will be renamed `README.old.md`, as
`create-react-app` generates its own `README.md` file, which is a
`create-react-app` user guide. We encourage you to take a look at it in your
free time, as it's jam-packed with all kinds of useful information

If your submission does not follow the above structure, but nevertheless
functions, you'll receive partial credit. Not paying attention to detail will
cost you ;-)!

### Step 2: Create a `Text` Component (4 points)

For this step, you will be defining a `Text` component just above the
`App` component in  `App.js`. We typically like to define components in separate
files and
[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
them for use in more complex components. However, doing so would require an
understanding of [ES6
modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), which is out
of scope for this particular assessment.


This component will have the following props:

- `color`: A string representing the color of text that appears in the
    component. Any valid [css color](https://www.w3schools.com/cssref/css_colors.asp)
    should be accepted as a valid string
- `value`: This is the actual text to display. We'll learn later how to
    use the
    [children](https://reactjs.org/docs/composition-vs-inheritance.html)
    prop to make this component more pleasant to use, but this will do
    for now.

Using the component should look something like this:
```jsx
    <h1>Hello, <Text color="green" value="Kenzie" /></h1>
```

And produce a result that looks something like this:

![result of using component](https://raw.githubusercontent.com/KenzieAcademy/hello-react/master/screenshots/result.png)

Keep in mind that the crucial bit is the `<Text ... />` part. The use of an
`<h1>` tag is _not_ relevant to this assessment.

### Step 3: Use your `Text` Component in the `App` Component (2 points)

All that remains after having defined your new component is to _use_ it.
`App.js` should end up looking something like this:

```jsx
import React, { Component } from 'react';

// ... more imports here

class Text extends Component {

    // ... component implementation here
}

class App extends Component {
    render() {
        return (
            // ... add at least one instance of `<Text ... />` here
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

Feel free to take liberties with whatever else appears in your application, but
you must use the new `Text` component once and:
    - change the color to something _other_ than green
    - replace the value with _your_ name

Other than that, go wild!

## Bonus (0 points)

If you find yourself with extra time (e.g., don't have other assessments to
catch up on), you may consider improving the quality in a number of ways:

- Using classes here is redundant, since these components are stateless. 
  Try to implement both `Text` and `App` as
  [functional components](https://reactjs.org/docs/components-and-props.html)
- We hinted at the fact that using `value` for the `<Text>` component was
  unidiomatic. See if you can understand the `children` prop enough to make
  usage of the `Text` component look like this instead: 
    `<Text color="green">Kenzie</Text>`
- We also hinted at it being more common to separate components into
  different files. See if you can work out how to create a separate
  `Text.jsx`[1] file and use import it for use inside of `App.js`.

## Submission
`create-react-app` includes instructions for publishing a React application on
GitHub Pages. However, for _this_ assessment, it's sufficient to submit the
`git` URL for your repository. Again, we do __not__ expect to see a GitHub Pages
link for _this_ assessment. In the future, we'll demonstrate how to do so and
update expecations accordingly, in _future_ projets.

#### Footnotes
[1] You could have just as well named it `Text.js`. The benefit of giving
components a `.jsx` extension is that it not only signals to other developers
that what lies within is funky syntax, but also gives your text editor hints,
thus improving syntax highlighting.
