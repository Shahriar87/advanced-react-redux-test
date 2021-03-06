import React from 'react';
import { mount } from 'enzyme';
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a textarea and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that user can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'New Comment' }
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('New Comment');
});
