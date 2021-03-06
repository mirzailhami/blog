import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import '@notiz/scully-plugin-lazy-images';
import '@notiz/scully-plugin-copy-static-content';
import '@notiz/scully-plugin-fouc';
import '@notiz/scully-plugin-rss';
import '@notiz/scully-plugin-medium-zoom';
import './projects/banner-generator/src';
import './projects/amp/src';
import {
  getSitemapPlugin,
  SitemapConfig,
} from '@gammastream/scully-plugin-sitemap';

const defaultPostRenderers = [
  'fouc',
  'seoHrefOptimise',
  'lazyImages',
  'mediumZoom',
  'copyStaticContent',
];

const SitemapPlugin = getSitemapPlugin();
const sitemapConfig: SitemapConfig = {
  urlPrefix: 'https://mirzailhami.com',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'weekly',
  priority: [
    '1.0',
    '0.9',
    '0.8',
    '0.7',
    '0.6',
    '0.5',
    '0.4',
    '0.3',
    '0.2',
    '0.1',
    '0.0',
  ],
  ignoredRoutes: ['/404', '/confirm-subscription', '/unsubscribe'],
  routes: {
    '/tutorial/:slug': {
      changeFreq: 'daily',
      priority: '0.9',
      sitemapFilename: 'sitemap-tutorial.xml',
    },
    // '/links/:slug': {
    //   changeFreq: 'daily',
    //   priority: '0.9',
    //   sitemapFilename: 'sitemap-links.xml',
    // },
    '/tags/:slug': {
      changeFreq: 'daily',
      priority: '0.9',
      sitemapFilename: 'sitemap-tags.xml',
    },
  },
};
setPluginConfig(SitemapPlugin, sitemapConfig);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'mirzailhami',
  defaultPostRenderers,
  outDir: './dist/static',
  routes: {
    '/tutorial/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/tutorial',
      },
      postRenderers: [...defaultPostRenderers, 'amp', 'bannerGenerator'],
    },
    // '/links/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './content/links',
    //   },
    //   postRenderers: [...defaultPostRenderers, 'bannerGenerator'],
    // },
    '/authors/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/authors',
      },
    },
    '/tags/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/tags',
      },
    },
    '/legal/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/legal',
      },
    },
  },
};
