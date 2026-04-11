export const BASE_URL = import.meta.env.BASE_URL;

const baseWithoutTrailingSlash = BASE_URL.endsWith('/')
  ? BASE_URL.slice(0, -1)
  : BASE_URL;

export const withBase = (...segments: string[]) => {
  const normalizedPath = segments.filter(Boolean).join('/').replace(/^\/+/, '');
  return `${baseWithoutTrailingSlash}/${normalizedPath}`;
};

const mediaPath = (...segments: string[]) => withBase('media', ...segments);
const journeyPath = (...segments: string[]) => mediaPath('data', 'journey', ...segments);

export const PATHS = {
  base: BASE_URL,
  media: mediaPath,
  hero: (...segments: string[]) => mediaPath('hero', ...segments),
  introduction: (...segments: string[]) => mediaPath('introduction', ...segments),
  navbar: (...segments: string[]) => mediaPath('nav-bar', ...segments),
  projects: (...segments: string[]) => mediaPath('projects', ...segments),
  journey: {
    root: (...segments: string[]) => journeyPath(...segments),
    education: (...segments: string[]) => journeyPath('education', ...segments),
    experience: (...segments: string[]) => journeyPath('experience', ...segments),
  },
  testimonials: (...segments: string[]) => mediaPath('data', 'testimonials', ...segments),
  shared: {
    resume: mediaPath('ahmed-belaaj-cv.pdf'),
  },
};