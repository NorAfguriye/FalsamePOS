import Vue from 'vue';
import { nsEvent } from './../bootstrap';

const nsMenu    =   Vue.component( 'ns-menu', {
    data: () => {
        return {
            defaultToggledState : false,
            _save: 0
        }
    },
    props: [ 'href', 'label', 'icon', 'notification', 'toggled', 'identifier' ],
    template: `
    <div>
        <a @click="toggleEmit()" :href="href || 'javascript:void(0)'" :class="defaultToggledState ? 'border-white bg-blue-700' : 'border-transparent bg-blue-800'" class="flex justify-between py-2 border-l-8 text-gray-200 px-3 font-bold  hover:bg-blue-600">
            <span class="flex items-center">
            <i class="las text-lg mr-2" :class="icon?.length > 0 ? icon : 'la-star'"></i>
            {{ label }}
            </span>
            <span v-if="notification > 0" class="rounded-full bg-red-600 text-white font-bold w-6 h-6 text-xs justify-center items-center flex">{{ notification }}</span>
        </a>
        <ul :class="defaultToggledState ? '' : 'hidden'" class="submenu-wrapper">
            <slot></slot>                  
        </ul>
    </div>
    `,
    mounted() {
        this.defaultToggledState   =   this.toggled !== undefined ? this.toggled : this.defaultToggledState;
        /**
         * subscribe to menu click
         * and check if the event is not emitted from
         * the current component. If yes, then skip
         */
        nsEvent.subject().subscribe( event => {
            if ( event.value !== this.identifier ) {
                this.defaultToggledState    =   false;
            }
        });
    },
    methods: {
        toggleEmit() {
            this.toggle().then( toggled => {
                if ( toggled ) {
                    nsEvent.emit({ 
                        identifier: 'side-menu.open',
                        value: this.identifier
                    });
                }
            })
        },
        toggle() {                                                                                                                                                                                                                                                                                                                                                                                                  
            return new Promise( ( resolve, reject ) => {
                if ( this.href.length === 0 ) {
                    this.defaultToggledState    =   !this.defaultToggledState;
                    resolve( this.defaultToggledState );
                }
            })
        }
    }
});

export { nsMenu }