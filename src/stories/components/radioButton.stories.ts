import { storiesOf } from '@storybook/angular';
import { RadioButtonComponent } from '../../../projects/radio-button/src/lib/radio-button.component';

storiesOf('Radio Button', module)
    .add('Basic Radio Buttons', () => ({
        component: RadioButtonComponent,
        props: {
            items: radioButtons
        }
    }))
    .add('Disabled Radio Buttons', () => ({
        component: RadioButtonComponent,
        props: {
            items: radioButtons,
            disabled: true
        }
    }))


    const radioButtons = [
        {
            label: 'Yes',
            value: 'yes',
            name: 'yes_or_no',
            id: 1
        },
        {
            label: 'No',
            value: 'no',
            name: 'yes_or_no',
            id: 2
        }
    ]