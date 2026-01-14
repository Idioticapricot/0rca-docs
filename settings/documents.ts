import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "Basic Setup",
    href: "/basic-setup",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deep",
        href: "/deep",
        items: [
          {
            title: "Deeper",
            href: "/deeper",
            items: [
              {
                title: "Even deeper",
                href: "/even-deeper",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markdown",
    href: "/markdown",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "0rca Suite",
    href: "/0rca",
    heading: "Products",
    items: [
      {
        title: "Overview",
        href: "/",
      },
      {
        title: "Chat",
        href: "/chat",
      },
      {
        title: "Core Arch",
        href: "/core",
      },
      {
        title: "Dashboard",
        href: "/dashboard",
      },
      {
        title: "Explorer",
        href: "/explorer",
      },
      {
        title: "Forum",
        href: "/forum",
      },
      {
        title: "POD v2",
        href: "/pod",
      },
      {
        title: "Agent SDK",
        href: "/sdk",
      },
    ],
  },
]
