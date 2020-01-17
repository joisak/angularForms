import { storiesOf } from '@storybook/angular';
import { RadioButtonComponent } from './../../projects/radio-button/src/lib/radio-button.component';

storiesOf('Components/Radio Button', module)
    .add('Basic Radio Buttons', () => ({
        component: RadioButtonComponent,
        props: {
            items: radioButtons,
            label: 'Are you happy?'
        }
    }))
    .add('Disabled Radio Buttons', () => ({
        component: RadioButtonComponent,
        props: {
            items: radioButtons,
            disabled: true,
            label: 'You cant answer that dont you?'
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