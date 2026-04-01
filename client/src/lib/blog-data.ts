export type BlogCategoryKey = "schools-attendance";

export type BlogCategory = {
  key: BlogCategoryKey;
  label: string;
  slug: string;
  description: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategoryKey;
  tags: string[];
  publishedAt: string;
  disableAttendanceSoftCta?: boolean;
  disableFabricationSoftCta?: boolean;
};

export const blogCategories: BlogCategory[] = [
  {
    key: "schools-attendance",
    label: "Schools & Attendance",
    slug: "schools-attendance-sms",
    description: "Guides and practical advice for school attendance workflows and parent communication.",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "why-schools-still-struggle-with-manual-attendance-tracking",
    title: "Why schools still struggle with manual attendance tracking",
    excerpt:
      "Manual attendance methods often create delays, missing records, and stressful follow-ups. Here is where friction usually appears and what to improve first.",
    category: "schools-attendance",
    tags: ["School Admin", "Attendance Tracking", "Teacher"],
    publishedAt: "2026-02-10",
  },
  {
    slug: "how-sms-notifications-improve-parent-communication",
    title: "How SMS notifications improve parent communication",
    excerpt:
      "Fast and clear parent notifications reduce uncertainty and improve trust. Learn practical message timing and communication workflows for schools.",
    category: "schools-attendance",
    tags: ["Parent Notifications", "SMS Alerts", "School Admin"],
    publishedAt: "2026-02-17",
  },
  {
    slug: "common-attendance-monitoring-issues-in-schools",
    title: "Common attendance monitoring issues in schools",
    excerpt:
      "From gate congestion to inconsistent logs, schools face recurring attendance problems. This checklist helps teams spot and fix the biggest gaps.",
    category: "schools-attendance",
    tags: ["Attendance Tracking", "Teacher", "School Admin"],
    publishedAt: "2026-02-24",
  },
];

export function getCategoryByKey(key: BlogCategoryKey): BlogCategory {
  return blogCategories.find((category) => category.key === key) as BlogCategory;
}

const attendanceTagKeywords = new Set([
  "schools & attendance",
  "attendance monitoring",
  "sms alerts",
  "parent communication",
  "school admin",
]);

export function isAttendanceRelatedArticle(article: BlogArticle): boolean {
  if (article.category === "schools-attendance") {
    return true;
  }

  return article.tags.some((tag) => attendanceTagKeywords.has(tag.toLowerCase()));
}
