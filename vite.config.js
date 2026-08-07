import { defineConfig } from 'vite'

export default defineConfig({

    server:{

        host:true,

        open:true,

        port:5173

    },

    build:{

        outDir:'dist',

        sourcemap:false

    }

})