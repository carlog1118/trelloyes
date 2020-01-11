import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe ('List Component', () => {
    const props = {
        header: 'the header',
        cards: [
          {
            id: 'id1',
            title: 'title 1',
            content: 'content 1'
          },
          {
            id: 'id2',
            title: 'title 2',
            content: 'content 2'
          }
        ]
      };
    it ('Renders without crashing', () => {
        const div= document.createElement('div');
        ReactDOM.render(<List{...props}/>,  div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it ('Renders in UI as expected', () => {
        const tree= renderer
            .create(<List{...props}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});