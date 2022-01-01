import Vue from 'vue';

const nsSubmenu     =   Vue.component( 'ns-submenu', {
    data: () => {
        return {
        }
    },
    props: [ 'href', 'label', 'active' ],
    mounted() {},
    template: `
    <div>
        <li>
            <a :class="active ? 'font-bold text-white' : 'text-gray-100'" :href="href" class="py-2 border-l-8 border-white px-3 block bg-blue-700 hover:bg-blue-600">
                <slot></slot>
            </a>
        </li>
    </div>
    `,
});

export { nsSubmenu };