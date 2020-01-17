import {storiesOf} from '@storybook/angular';
import {SelectComponent} from '../../projects/select/src/lib/select.component';

storiesOf('Components/Select', module)
    .add('Basic Select', () => ({
        component: SelectComponent,
        props: {
            items: niceGuys
        }
    }))
    .add('Disabled Select', () => ({
        component: SelectComponent,
        props: {
            items: niceGuys,
            disabled: true 
        }
    }))
    .add('Select With Placeholder', () => ({
        component: SelectComponent,
        props: {
            items: niceGuys,
            disabled: false,
            placeholder: 'Select one of these nice guys :)' 
        }
    }))


let niceGuys = ['Paul', 'Roger', 'Johan', 'Bengt'];