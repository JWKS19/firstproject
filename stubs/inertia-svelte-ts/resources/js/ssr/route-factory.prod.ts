// resources/js/route.js
import {route as r, type RouteParams} from 'ziggy-js';
// noinspection JSFileReferences
import {Ziggy} from './ziggy.js';

export const route = (name: any, params: RouteParams<any> | undefined, absolute: boolean | undefined) => {
    if (typeof window !== 'undefined') {
        // noinspection JSCheckFunctionSignatures
        return window.route(name, params, absolute);
    } else {
        /**
         * In a production environment (import.meta.env.PROD), this file
         * should be generated by running the command `php artisan ziggy:generate`.
         *
         * The Ziggy command will generate a `ziggy.js` file that contains
         * all of your application's route definitions, which can be imported
         * into your front-end JavaScript files.
         */
        // For SSR context, you can directly use the imported route function from ziggy-js
        // noinspection JSCheckFunctionSignatures
        // @ts-ignore
        return r(name, params, absolute, Ziggy);
    }
};