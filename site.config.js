const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Chi-Kang Pai (Brandon)",
    image: "/my_photo_2.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "currently PhD @ Harvard Chemical Physics",
    bio: "Made in Taiwan, now in Cambridge, MA. PhD student in Harvard Chemical Physics.",
    email: "jack.c.pai@gmail.com",
    linkedin: "chi-kang-pai-5231151a3",
    github: "chikangpai",
    instagram: "brandonpiii",
    medium: "brandonpiii",
    twitter: "bRandom_1105",
  },
  projects: [
    {
      name: `check out my academic website`,
      href: "https://chikangpai.github.io/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "brandon pai's blog",
    description: "welcome to brandon pai's blog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
