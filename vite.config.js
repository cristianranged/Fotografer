import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const instagramApiPlugin = () => ({
  name: 'instagram-api',
  configureServer(server) {
    server.middlewares.use('/api/instagram', async (req, res) => {
      if (req.method !== 'GET') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Method not allowed' }));
        return;
      }

      const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
      const accountId = process.env.INSTAGRAM_USER_ID || process.env.INSTAGRAM_ACCOUNT_ID;
      const fallbackPosts = [
        {
          id: 'fallback-1',
          media_type: 'IMAGE',
          media_url: '/images/pareja/03.JPG',
          permalink: 'https://www.instagram.com/',
          caption: 'Publicación reciente de respaldo',
        },
        {
          id: 'fallback-2',
          media_type: 'IMAGE',
          media_url: '/images/bodas/1.JPG',
          permalink: 'https://www.instagram.com/',
          caption: 'Vista previa del feed si no hay token configurado',
        },
      ];

      if (!accessToken || !accountId) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ posts: fallbackPosts }));
        return;
      }

      try {
        const url = `https://graph.instagram.com/v22.0/${accountId}/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url,timestamp&access_token=${encodeURIComponent(accessToken)}`;
        const response = await fetch(url);
        const data = await response.json();
        const posts = Array.isArray(data.data) ? data.data.slice(0, 6) : [];

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ posts }));
      } catch (error) {
        console.error('Instagram fetch failed', error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ posts: fallbackPosts, error: 'No se pudo cargar el feed' }));
      }
    });
  },
});

export default defineConfig({
  plugins: [react(), instagramApiPlugin()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => (id.includes('node_modules') ? 'vendor' : undefined),
      },
    },
  },
});
