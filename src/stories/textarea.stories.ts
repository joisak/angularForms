import {storiesOf} from '@storybook/angular';
import {TextareaComponent} from '../../projects/textarea/src/lib/textarea.component';

storiesOf('Components/Textarea', module)
    .add('Text Input with label', () => ({
        component: TextareaComponent,
        props: {
            label: 'I am a LABEL'
        }
    })).add('With placeholder', () => ({
        component: TextareaComponent,
        props: {
            label: 'This textarea got a placeholder',
            placeholder: 'Yes, im a placeholder'
        }
    })).add('Disabled textarea', () => ({
        component: TextareaComponent,
        props: {
            label: 'I am disabled',
            placeholder: 'DISABLED',
            disabled: true
        }
    })).add('Row control', () => ({
        component: TextareaComponent,
        props: {
            label: 'I got 4 rows',
            rows: 4
        }
    }));    
