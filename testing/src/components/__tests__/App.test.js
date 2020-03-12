import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Root from "Root";

it('Shows comment box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Root><App /></Root>, div);


    expect(div.innerHTML).toContain("<div><form><h4> Add a Comment </h4><textarea></textarea><div><button>Submit Comment</button></div></form><div><ul></ul></div></div>");

    ReactDOM.unmountComponentAtNode(div);

});
