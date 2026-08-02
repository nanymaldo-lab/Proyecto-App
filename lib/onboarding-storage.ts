export type OnboardingAnswers = {
  foco: string;
  momento: string;
  diasSemana: number;
};

const KEY = "aps_onboarding";

export function saveOnboardingAnswers(answers: OnboardingAnswers) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(answers));
}

export function loadOnboardingAnswers(): OnboardingAnswers | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as OnboardingAnswers;
  } catch {
    return null;
  }
}
