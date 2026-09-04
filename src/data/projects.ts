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
    role: "개발 리드 · BE — 구매 로드맵 · AI 코디 코칭",
    summary: "옷장 데이터·퍼스널컬러·체형을 기반으로 예산 안에서 살 옷 우선순위를 제시하고, 지금 옷장만으로 만들 수 있는 코디를 점수와 함께 평가·추천하는 AI 스타일링 서비스.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Prisma"],
    href: "https://claude.ai/code/artifact/0f262271-c775-49c2-b935-bce35930a997",
    accent: "#33456b",
  },
  {
    id: "pizzly",
    title: "피즐리",
    subtitle: "Pizzly",
    context: "중앙해커톤",
    period: "2026.07.23 - 2026.08.25",
    role: "개발 리드 · BE - 추천 엔진 · 성장 로직 · PWA 베포",
    summary: "틈새시간을 웰니스 시간으로 바꿔주는 성장형 캐릭터 웰니스 서비스. 규칙 기반 퀘스트 추천 엔진과 성장 로직을 설계하고, 팀 통합·배포까지 리드했습니다.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL", "Prisma", "PWA", "Vercel"],
    href: "https://claude.ai/code/artifact/a5929355-6235-41be-bab9-e04a42da67aa",
  },
];



// {
//   id: "animal-league-project",          // URL에는 안 쓰이지만 고유값이어야 함
//   title: "프로젝트 이름",
//   subtitle: "영문/짧은 이름",             // 없으면 이 줄 생략 가능
//   context: "동아리",                     // "중앙해커톤", "기업연계해커톤" 등
//   period: "2026.09",                     // 또는 "2026.09.01 - 2026.09.15"
//   role: "맡은 역할",
//   summary: "한두 문장 요약.",
//   stack: ["사용 기술", "태그"],
//   href: "https://claude.ai/code/artifact/딥다이브-문서-id",
//   // accent: "#4ade80",                  // 선택: 이 카드만 다른 포인트 컬러 쓰고 싶을 때
//   // status: "수상",                     // 선택: 뱃지 텍스트
// },