import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    heading: "Introduction",
    items: [
      {
        title: "Introduction",
        href: "/",
      },
      {
        title: "Architecture",
        href: "/architecture",
      },
      {
        title: "Quick Start",
        href: "/quick-start",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Core Protocol",
    href: "/core",
    heading: "Platform",
    items: [
      {
        title: "Overview",
        href: "/overview",
      },
      {
        title: "POD Architecture",
        href: "/pod-architecture",
      },
    ],
  },
  {
    title: "Modules",
    href: "/modules",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
      },
      {
        title: "Chat",
        href: "/chat",
      },
      {
        title: "Forum",
        href: "/forum",
      },
      {
        title: "Explorer",
        href: "/explorer",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Developers",
    href: "/developers",
    heading: "Build",
    items: [
      {
        title: "Agent SDK",
        href: "/agent-sdk",
      },
      {
        title: "API Reference",
        href: "/api-reference",
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    heading: "Resources",
    items: [
      {
        title: "Contributing",
        href: "/contributing",
      },
      {
        title: "Roadmap",
        href: "/roadmap",
      },
    ],
  },
]
