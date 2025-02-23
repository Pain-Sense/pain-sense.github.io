// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pain Sense",
  tagline: "Captures and analyzes pain thresholds accurately.",

  // Set the production url of your site here
  url: "https://pain-sense.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Pain-Sense", // Usually your GitHub org/user name.
  projectName: "Pain-Sense", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Pain Sense",
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'Project Info',
          },
          {
            href: "https://github.com/Pain-Sense",
            label: "GitHub",
            position: "left",
          },
          {
            href: "https://github.com/orgs/Pain-Sense/projects/1",
            label: "Github Project",
            position: "right",
          },
          {
            href: "https://drive.google.com/drive/folders/1H8A9KRLhp3jph71WYbBD-H9QZ7mYi9tl?usp=drive_link",
            label: "Google Drive",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Project Advisors",
            items: [
              {
                label: "José Maria Fernandes",
                href: "https://www.ua.pt/pt/p/10319434",
              },
            ],
          },
          {
            title: "Team Members",
            items: [
              {
                label: "João Diogo - 95316",
                href: "mailto:jd.ferreira@ua.pt@ua.pt",
              },
              {
                label: "José Rubem - 101092",
                href: "mailto:joserubem@ua.pt",
              },
              {
                label: "Gonçalo Abrantes - 104152",
                href: "mailto:goncaloabrantes@ua.pt",
              },
              {
                label: "Christian Fernandes - 113717",
                href: "mailto:christian.fernandes@ua.pt",
              },
              {
                label: "Diogo Guedes - 114256",
                href: "mailto:diogo.m.guedes@ua.pt",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Pain-Sense",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pain Sense - Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
