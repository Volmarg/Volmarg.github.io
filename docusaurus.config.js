module.exports = {
  title: 'Personal Management System',
  url: 'https://volmarg.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.svg',
  organizationName: 'Volmarg',
  projectName: 'Personal Management System',
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: 'Personal Management System',
      logo: {
        alt: 'Personal Management System',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/general/requirements/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'http://personal-management-system.pl/',
          label: 'Demo',
          position: 'left',
        },
        {
          to: 'workflow.pdf', // must stay like this, on dev it's `/build/workflow.pdf` but on prod `workflow.pdf`
          label: 'Workflow',
          position: 'left',
        },
        {
          href: 'https://github.com/Volmarg/personal-management-system/',
          label: 'Source code',
          position: 'left',
        },
        {
          href: 'https://github.com/Volmarg/personal-management-system/releases/latest',
          label: 'Download',
          position: 'left',
        },
        {
          href: 'mailto:personal.management.system.pms@gmail.com',
          label: 'Mail',
          position: 'right',
        },
        {
          href: 'https://github.com/Volmarg',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/volmarg/',
          label: 'Linkedin',
          position: 'right',
        },
        {
          href: 'https://www.xing.com/profile/Dariusz_Wlodarczyk2',
          label: 'Xing',
          position: 'right',
        },
        {
          href: 'https://profile.codersrank.io/user/volmarg/',
          label: 'CodersRank',
          position: 'right',
        },
        {
          href: 'http://voltigo.pl/',
          label: 'Voltigo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()}. Built by <a href="https://github.com/Volmarg" target="_blank">Volmarg Reiso</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
