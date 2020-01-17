import {storiesOf} from '@storybook/angular';
import {TextInputComponent} from '../../projects/text-input/src/lib/text-input.component';

storiesOf('Components/Input', module)
    .add('Input with label', () => ({
        component: TextInputComponent,
        props: {
            label: 'I am a LABEL'
        }
    })).add('With placeholder', () => ({
        component: TextInputComponent,
        props: {
            label: 'This input got a placeholder',
            placeholder: 'Yes, im a placeholder'
        }
    })).add('Disabled text field', () => ({
        component: TextInputComponent,
        props: {
            label: 'I am disabled',
            placeholder: 'DISABLED',
            disabled: true
        }
    })).add('Only numbers for me', () => ({
        component: TextInputComponent,
        props: {
            label: 'I am a field for numbers',
            type: 'number'
        }
    }));    
