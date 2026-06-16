import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

export type SimpleIconKey = keyof typeof icons;

export function getSimpleIcon(key: SimpleIconKey): SimpleIcon | null {
  const icon = icons[key];
  if (!icon || typeof icon !== 'object' || !('path' in icon)) return null;
  return icon as SimpleIcon;
}

export const simpleIconMap = {
  html5: 'siHtml5',
  css3: 'siCss',
  javascript: 'siJavascript',
  nodejs: 'siNodedotjs',
  postgresql: 'siPostgresql',
  git: 'siGit',
  wordpress: 'siWordpress',
  metaads: 'siMeta',
  seo: 'siGooglesearchconsole',
  emailmarketing: 'siMailchimp',
  apiintegration: 'siPostman',
  automation: 'siZapier',
} as const satisfies Record<string, SimpleIconKey>;

export type BrandIconId = keyof typeof simpleIconMap;
export type CustomIconId = 'gohighlevel' | 'systemeio' | 'clickfunnels';

export type SkillIconId = BrandIconId | CustomIconId;

export const customIconColors: Record<CustomIconId, string> = {
  gohighlevel: '#00B894',
  systemeio: '#1A73E8',
  clickfunnels: '#F97316',
};