import { storiesOf } from '@storybook/angular';
import { DatepickerComponent } from '../../../projects/datepicker/src/lib/datepicker.component';

storiesOf('Datepicker', module)
    .add('Basic Datepicker', () => ({
        component: DatepickerComponent,
        props: {

        }
    }))
    .add('Disabled Datepicker', () => ({
        component: DatepickerComponent,
        props: {
            disabled: true
        }
    }))
    .add('Placeholder Datepicker', () => ({
        component: DatepickerComponent,
        props: {
            placeholder: 'Choose your birthday'
        }
    }))