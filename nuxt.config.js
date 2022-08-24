import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    ssr:true,
    buildModules: ['@nuxtjs/tailwindcss', 'vue-plausible'],

    plausible: {
        domain:'kakka.dev',
        apiHost:'https://plausible.kakka.dev'
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'kakka.dev',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
})
