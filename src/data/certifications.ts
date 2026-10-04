export type Certification = {
  /** Certificate name */
  name: string;
  /** Issuing organization */
  issuer: string;
  /** Date acquired, e.g. "2026.06.19" */
  date: string;
};

/** Shown newest first, in array order. */
export const certifications: Certification[] = [
  { name: "SQLD", issuer: "한국데이터산업진흥원", date: "2026.06.19" },
  { name: "리눅스마스터 2급", issuer: "한국정보통신진흥협회", date: "2025.03.28" },
  { name: "네트워크관리사 2급", issuer: "한국정보통신자격협회", date: "2023.01.23" },
  { name: "컴퓨터활용능력 2급", issuer: "대한상공회의소", date: "2022.06.17" },
  { name: "프로그래밍기능사 (구 정보처리기능사)", issuer: "한국산업인력공단", date: "2021.12.31" },
];
