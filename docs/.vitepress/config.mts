import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ms-copilot Discovery',
  description: 'Lightweight Product Discovery knowledge portal',
  srcDir: '.',
  themeConfig: {
    nav: [
      { text: 'Overview', link: '/index' },
      { text: 'Current Focus', link: '/current-focus' },
      { text: 'Workflow', link: '/workflow' },
      { text: 'Research', link: '/research/index' },
      { text: 'Experiments', link: '/experiments/index' },
      { text: 'Decisions', link: '/decisions/index' },
      { text: 'Strategy', link: '/strategy/index' },
      { text: 'Architecture', link: '/architecture/ai-agent' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Overview', link: '/index' },
          { text: 'Current Focus', link: '/current-focus' },
          { text: 'Workflow', link: '/workflow' },
          { text: 'GitHub Project Setup', link: '/github-project-setup' }
        ]
      },
      {
        text: 'Knowledge',
        items: [
          { text: 'Research', link: '/research/index' },
          { text: 'Experiments', link: '/experiments/index' },
          { text: 'Decisions', link: '/decisions/index' },
          { text: 'Strategy', link: '/strategy/index' },
          { text: 'Architecture', link: '/architecture/ai-agent' }
        ]
      }
    ]
  }
})
