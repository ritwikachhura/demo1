import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App'
//storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Welcome', module).add('to MKBS', () => <App />);

/*storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
*/
  storiesOf('Input', module).add('Password', () => <form>
  <label><b>
    Password:
</b>    <input type="text" name="text1" />
  </label><br/><br/>
  <label><b>
    Key: <t/><t/><t/></b>
  <input type="text" name="text2" />
  </label><br/>
   <Button onClick={() => alert("clicked")} name="b1">Encrypt</Button>
   <Button onClick={() => alert("clicked")} name="b2">Decrypt</Button>
</form>);
