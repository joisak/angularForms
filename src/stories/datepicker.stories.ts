import { storiesOf } from '@storybook/angular';
import { DatepickerComponent } from '../../projects/datepicker/src/lib/datepicker.component';

storiesOf('Components/Datepicker', module)
    .add('Basic Datepicker', () => ({
        component: DatepickerComponent,
        props: {
            label: 'Pick a date'
        }
    }))
    .add('Disabled Datepicker', () => ({
        component: DatepickerComponent,
        props: {
            disabled: true,
            label: 'Pick your birthday'
        }
    }))
