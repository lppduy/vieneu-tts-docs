import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/system-requirements',
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      items: [
        'sdk/overview',
        'sdk/standard-mode',
        'sdk/fast-mode',
        'sdk/remote-mode',
        'sdk/streaming',
        'sdk/voice-cloning',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/factory',
        'api/infer',
        'api/voice-management',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/docker',
        'deployment/remote-server',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/custom-models',
        'advanced/fine-tuning',
        'advanced/model-overview',
      ],
    },
  ],
};

export default sidebars;
