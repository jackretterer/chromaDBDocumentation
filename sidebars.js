/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But we want to manually specify the sidebar for more control
  docs: [
    'intro',
    'getting-started',
    'examples/index',
    'concepts/index',
    'guides/index',
    'integrations/index',
    'production/index',
    // {
    //   type: 'link',
    //   href: '/examples',
    //   label: '🧬 Examples',
    //   className: 'category-link',
    // },
    // {
    //   type: 'link',
    //   href: '/concepts',
    //   label: '💡 Concepts',
    //   className: 'category-link',
    // },
    // {
    //   type: 'link',
    //   href: '/guides',
    //   label: '🗺️ Guides',
    //   className: 'category-link',
    // },
    // {
    //   type: 'link',
    //   href: '/integrations',
    //   label: '🔗 Integrations',
    //   className: 'category-link',
    // },
    // {
    //   type: 'link',
    //   href: '/production',
    //   label: '🌐 Production',
    //   className: 'category-link',
    // },
    'telemetry',
    'roadmap',
    'contributing',
    'troubleshooting',
    'about',
    'reference/index',
    // {
    //   type: 'link',
    //   href: '/about',
    //   label: '🤝 About',
    //   className: 'category-link',
    // },
    // {
    //   type: 'link',
    //   href: '/reference',
    //   label: '🔧 Reference',
    //   className: 'category-link',
    // },
  ],
  integrations: [
    {
      type: 'link',
      label: '← Home',
      href: '/'  
    },
    'integrations/index',
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      className: 'category-header',
      items: [
        'integrations/langchain',
        'integrations/llama-index',
        'integrations/braintrust',
        'integrations/openllmetry',
        'integrations/streamlit',
        'integrations/haystack',
      ],
    },
  ],
  examples: [
    {
      type: 'link',
      label: '← Home',
      href: '/'  
    },
    'examples/index',
    {
      type: 'category',
      label: 'Data Type Examples',
      collapsed: false,
      className: 'category-header',
      items: [
        'examples/example-text',
        'examples/example-pdfs',
        'examples/example-images',
        'examples/example-audio',
        'examples/example-video',
      ],
    },
    {
      type: 'category',
      label: 'Popular Tools Examples',
      collapsed: false,
      className: 'category-header',
      items: [
        'examples/popular-tools/langchain',
        'examples/popular-tools/llama-index',
        'examples/popular-tools/haystack',
        'examples/popular-tools/unstructured',
      ],
    },
  ],
  concepts: [
    {
      type: 'link',
      label: '← Home',
      href: '/'  
    },
    'concepts/index',
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      className: 'category-header',
      items: [
        {
          type: 'link',
          href: '/concepts/embeddings',
          label: '🧬 Embeddings',
          className: 'category-link',
        },
        'concepts/vector-search',
        'concepts/indexes',
        'concepts/metadata',
        'concepts/clients',
        'concepts/collections',
      ],
    },
  ],
  embeddings: [
    {
      type: 'link',
      label: '← Home',
      href: '/'  
    },
    'concepts/embeddings',
    {
      type: 'category',
      label: 'Embeddings',
      collapsed: false,
      className: 'category-header',
      items: [
        'concepts/embeddings/openai',
        'concepts/embeddings/google-gemini',
        'concepts/embeddings/cohere',
        'concepts/embeddings/hugging-face',
        'concepts/embeddings/google-palm',
        'concepts/embeddings/instructor',
        'concepts/embeddings/hugging-face-embedding-server',
        'concepts/embeddings/jinaai',
      ],
    },
  ],
  guides: [
    {
      type: 'link',
      label: '← Home',
      href: '/'  
    },
    'guides/index',
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      className: 'category-header',
      items: [
        'guides/Introduction',
      ],
    },
  ],
  production: [
    {
      type: 'link',
      label: '← Home',
      href: '/'  
    },
    'production/index',
    {
      type: 'category',
      label: 'Production',
      collapsed: false,
      className: 'category-header',
      items: [
        {
          type: 'link',
          href: '/production/deployment',
          label: '🚀 Deployment',
          className: 'category-link',
        },
        'production/observability',
        'production/performance',
        'production/authentication',
        'production/security',
        'production/logging',
        'production/administration',
        'production/migration',
        'production/restore',
      ],
    },
  ],
  api: [
    {
      type: 'link',
      label: '← Home',
      href: '/'  
    },
    'api/index',
    {
      type: 'category',
      label: 'Python Client',
      collapsed: false,
      className: 'category-header',
      items: [
        'reference/Client',
        'reference/Collection',
      ],
    },
    {
      type: 'category',
      label: 'JS/TS Client',
      collapsed: false,
      className: 'category-header',
      items: [
        'js_reference/Client',
        'js_reference/Collection',
      ],
    },
  ],
};

module.exports = sidebars;
