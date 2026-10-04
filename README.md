# Portfolio Hub

프로젝트별 개발 저널(딥다이브 문서)을 한곳에 모아 보여주는 포트폴리오 허브입니다.
자기소개와 프로젝트 카드 목록으로 구성되며, 카드를 클릭하면 해당 프로젝트의 저널 페이지(Notion)로 이동합니다.

- 배포 주소: https://portfolio-hub-eta-self.vercel.app/

## 기술 스택

Next.js (App Router) · TypeScript · Tailwind CSS · Vercel

## 구조

| 경로 | 역할 |
| --- | --- |
| `src/data/profile.ts` | 이름, 역할, 소개 문구, 연락 링크 |
| `src/data/projects.ts` | 프로젝트 카드 목록 (카드 추가·수정은 이 파일만) |
| `src/components/ProjectCard.tsx` | 프로젝트 카드 컴포넌트 |
| `src/app/page.tsx` | Hero + 프로젝트 그리드 + 푸터 |
| `src/app/globals.css` | 색상 토큰 (다크 테마, 포인트 컬러) |

## 프로젝트 추가하는 법

1. 새 프로젝트의 저널을 Notion에 작성하고 **웹에 게시**한 뒤 공개 링크를 복사합니다.
   기존 저널 페이지를 복제해서 채우면 형식이 통일됩니다.
2. `src/data/projects.ts`의 `projects` 배열에 객체를 추가합니다.

   ```ts
   {
     id: "project-id",              // 고유값
     title: "프로젝트 이름",
     subtitle: "English Name",      // 선택
     context: "동아리",              // 교내 해커톤, 중앙해커톤, 텀 프로젝트 등
     period: "2026.09.01 - 2026.09.15",
     role: "맡은 역할",
     summary: "한두 문장 요약.",
     stack: ["사용 기술", "태그"],
     href: "https://...notion.site/...",   // 저널 페이지 링크
     accent: "#4ade80",             // 선택: 카드 포인트 컬러
     status: "수상",                 // 선택: 뱃지 텍스트
   },
   ```

3. 커밋 후 push 하면 Vercel이 자동으로 재배포합니다.

카드는 배열 순서대로 표시됩니다. `accent`를 어두운 색으로 지정해도 카드에서는 다크 배경에 맞게 자동으로 밝게 보정됩니다.

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 배포

GitHub 저장소를 Vercel에 연결해 두었으며, 기본 브랜치에 push 하면 자동 배포됩니다.
