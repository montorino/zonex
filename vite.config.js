import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials/'),
      reloadOnPartialChange: true,
      reload: true
    }),
  ],
  server: {
    watch:{
      usePolling: true
    }
  }
};