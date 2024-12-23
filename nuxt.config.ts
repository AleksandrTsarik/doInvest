// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";


export default defineNuxtConfig({
    modules: ['vue3-perfect-scrollbar/nuxt'],
    devtools: {enabled: false},
    css: [
        '~/assets/style/main.scss',
    ],
    plugins: ['~/plugins/clickOutside.client.js'],
    resolve: {
        alias: {
            "@": resolve(".")
        }
    }
})