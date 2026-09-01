export type Project = {
  /** URL-safe unique key */
  id: string;
  /** Project name */
  title: string;
  /** English/short name shown as a subtitle, if different from title */
  subtitle?: string;
  /** Where this project happened: 해커톤, 동아리, 기업연계해커톤 등 */
  context: string;
  /** e.g. "2026.03" or "2026.03 - 2026.04" */
  period: string;
  /** Your role on the project */
  role: string;
  /** One or two sentence summary shown on the card */
  summary: string;
  /** Tech stack / topic tags */
  stack: string[];
  /** Link to the deep-dive document (Claude Artifact, blog post, etc.) */
  href: string;
  /** Optional per-project accent color (hex). Falls back to the site accent. */
  accent?: string;
  /** Optional status badge, e.g. "수상", "진행중" */
  status?: string;
};

export const projects: Project[] = [
  {
    id: "codyup",
    title: "코디업",
    subtitle: "CodyUp",
    context: "교내 해커톤",
    period: "2026.07.01 - 2026.07.21",
    role: "개발 리드 · 백엔드 (BE2 — 구매 로드맵 · AI 코디 코칭)",
    summary:
      "AI가 옷장을 분석해 다음에 살 옷을 추천하고, 코디 피드백을 코칭해주는 AI 스타일링 매니지먼트 서비스.",
    stack: ["Spring Boot", "AI/LLM", "REST API"],
    href: "https://claude.ai/code/artifact/0f262271-c775-49c2-b935-bce35930a997",
  },
];
