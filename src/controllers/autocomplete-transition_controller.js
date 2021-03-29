import { Controller } from 'stimulus';
import { useTransition } from 'stimulus-use';

export default class extends Controller {
    static get targets() {
        return ['results'];
    };

    connect() {
        useTransition(this, {
            element: this.resultsTarget,
            enterActive: 'fade-enter-active',
            enterFrom: 'fade-enter-from',
            enterTo: 'fade-enter-to',
            leaveActive: 'fade-leave-active',
            leaveFrom: 'fade-leave-from',
            leaveTo: 'fade-leave-to',
            hiddenClass: 'd-none',
        });
    }

    toggle(event) {
        console.log('Toggle Event!', event);

        if (event.detail.action === 'open') {
            this.enter();
        } else {
            this.leave();
        }
    }
}
