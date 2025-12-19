import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button";
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';



export const primeVueConfig = (app) => {
    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
    });
    app.component('Button', Button);
    app.component('Card', Card);
    app.component('InputText', InputText);

}