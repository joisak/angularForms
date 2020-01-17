import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TextInputModule } from 'projects/text-input/src/public-api';
import { TextareaModule } from 'projects/textarea/src/public-api';
import { DatepickerModule } from 'projects/datepicker/src/public-api';
import { CheckboxModule, Choices } from 'projects/checkbox/src/public-api';
import { RadioButtonModule } from 'projects/radio-button/src/public-api';
import { SelectModule } from 'projects/select/src/public-api';
import { ButtonModule } from 'projects/button/src/public-api';




 const items:Choices[] = [{
    name: '1',
    value: 'Yes',
    id: '1',
    label: 'Ja'
}, {
    name: '1',
    value: 'No',
    id: '2',
    label: 'Nej'
}]

const items2:Choices[] = [{
    name: '1',
    value: '1',
    id: '3',
    label: 'Yeah, right now please'
}, {
    name: '1',
    value: '2',
    id: '4',
    label: 'No, I want to work at least 13 hours and then go home and cry'
}]

const bands = ['Bowling With Friends', 'Kinky CoCoons', 'Kulturtanterna', 'RAZZIA EL ORDINADOR'];


storiesOf('Layout', module)
    .addDecorator(
        moduleMetadata({
            imports: [TextInputModule, TextareaModule, DatepickerModule, CheckboxModule, RadioButtonModule, SelectModule, ButtonModule ],
            providers: [],
            declarations: [],
        })
    )
    .add('default', () => {
        return {
            template: `
            <form #signupForm="ngForm" (ngSubmit)="registerUser(signupForm)">
                <ui-text-input label="Write something great please"></ui-text-input>
                <ui-text-input label="Only numbers" type="number"></ui-text-input>
                <ui-text-input label="Your email please!" type="email"></ui-text-input>
                <ui-textarea label="Please, tell us about yourself"></ui-textarea>
                <ui-datepicker label="Pick any date"></ui-datepicker>
                <ui-radio-button label="Yes or No?" [items]="items"></ui-radio-button>
                <ui-checkbox label="Want to go home and cry?" [items]="['Ja', 'nej']"></ui-checkbox>
                <ui-select [items]="bands" for="bands" label="Choose your favorite band"></ui-select>
                <ui-button text="Confirm here"></ui-button>
            </form>
            `,
            props : {
                items: items,
                items2: items2,
                bands: bands,
                registerUser: (e) => (console.log(e))
            }
        }
    })


