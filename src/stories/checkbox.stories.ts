import {storiesOf} from '@storybook/angular';
import { CheckboxComponent } from '../../projects/checkbox/src/lib/checkbox.component';

storiesOf('Components/Checkbox', module)
    .add('Basic Checkbox', () => ({
        component: CheckboxComponent,
        props: {
            items: checkboxitems,
            label: 'Are you cool?'
        }
    }))
    .add('Disabled Checkbox', () => ({
        component: CheckboxComponent,
        props: {
            items: checkboxitems,
            disabled: true,
            label: 'Are you a fascist?'
        }
    }))




    let checkboxitems = [{
        name: 'Ja',
        value: 'Yes',
        id: '1',
        label: 'Ja'
    }, {
        name: 'Nej',
        value: 'No',
        id: '2',
        label: 'Nej'
    }]