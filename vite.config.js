// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/shoppingreact",
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // if you're using React

export default defineConfig({
  plugins: [ react() ],
  base: '/e-plantShopping/',  // <-- your repo name, exactly
})
