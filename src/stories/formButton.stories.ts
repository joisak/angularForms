import {storiesOf} from '@storybook/angular';
import {ButtonComponent} from '../../projects/button/src/lib/button.component';

storiesOf('Components/Form Button', module)
    .add('basic', () => ({
        component: ButtonComponent,
        props: {
            text: 'Press this'
        }
    }))
    .add('disabled', () => ({
        component: ButtonComponent,
        props: {
            text: 'This button is disabled...',
            disabled: true
        }
    }))