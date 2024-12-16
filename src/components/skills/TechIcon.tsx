import { SVGProps } from 'react';
import * as SimpleIcons from 'simple-icons';

interface TechIconProps {
  name: string;
  className?: string;
}

// Map skill names to simple-icons keys
const iconKeyMap: Record<string, string> = {
  python: 'siPython',
  pytorch: 'siPytorch',
  react: 'siReact',
  javascript: 'siJavascript',
  typescript: 'siTypescript',
  docker: 'siDocker',
  tensorflow: 'siTensorflow',
};

export default function TechIcon({ name, className = "" }: TechIconProps) {
  // Get the correct icon key
  const iconKey = iconKeyMap[name.toLowerCase()] as keyof typeof SimpleIcons;
  const IconData = SimpleIcons[iconKey];

  if (!IconData) {
    console.warn(`Icon not found for ${name}`);
    return null;
  }

  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      dangerouslySetInnerHTML={{ __html: IconData.path }}
    />
  );
}
