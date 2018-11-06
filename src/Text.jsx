// You can also name it Text.js; .jsx extension signals that what lies within is a react component with JSX syntax; some text editors will provide better syntax highlighting with the .jsx extension.

// import/export is new feature in js (new and importevd), not just react; part of regular js syntax dont see often because browsers dont support syntax much yet; create-react-app will convert points from import statements so this code can run in the broswer
import React, { Component } from 'react';

class Text extends Component {
    // // dont really need this here b/c not doing anything different than what deaulf is doing, which looks exactyly like this; if doing more than this, have this and w/e else
    // constructor(props) {
    //     // super calls constructor of parent/component class; in prototype, would component.callthis(); in class, do super and dont need call and this and parent; the options are called props here 
    //     super(props);
    // }
    // instruction set of how to look when renders
    // lifecycle method (declarative; react controls lifecycle and we write instructions on how behaves)
    // section that text component creates; could be used in any other component like it's own html tag; create 1 comp to uuse in another by composing 
    render() {
        return (
            // need js obj w/ scc rulse ; innerset is for js obj,. and second set is for where put js code; when inside jsx delinate wher put js like ${ inside `; js is inside the curlies }
            // this is from the paticular instance of text comp and is used in the other file; once constructor runs, it makes new obj that is comp instance and react handles that object but htis is how it sould look; react makes instance
            <span style={{ color: this.props.color, border: this.props.border }}>{this.props.value}!</span>
                // span keeps it on the same line when it's inside another part of code, but anything else puts it on another 
        )
    }
}

export default Text; // --> to help import