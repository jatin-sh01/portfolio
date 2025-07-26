"use client";

import {
  Code, FileCode, Braces, FileJson, Type, Coffee, Database, Terminal,
  Globe, Layout, Server, PanelLeft, Palette, Tablet,
  BadgePlus, BarChart, Brain, LineChart, Sigma,
  Coins, Boxes, Link, LockKeyhole, Wallet, FolderArchive,
  Cloud, CloudCog, Container, GitBranch, Layers, CircleDashed, UploadCloud,
  Cpu, Network, Bot, Share2, Settings, Zap, ShieldCheck,
} from "lucide-react";

type LucideIconComponent = (typeof Code); // ✅ One of the Lucide icon components

interface SkillIconProps extends React.ComponentProps<'svg'> {
  name: string;
}

const iconMap: Record<string, LucideIconComponent> = {
  // Languages
  'code': Code,
  'file-code': FileCode,
  'braces': Braces,
  'file-json': FileJson,
  'type': Type,
  'coffee': Coffee,
  'database': Database,
  'terminal': Terminal,

  // Web
  'globe': Globe,
  'layout': Layout,
  'server': Server,
  'panel-left': PanelLeft,
  'palette': Palette,
  'tablet': Tablet,

  // ML/Data
  'badge-plus': BadgePlus,
  'bar-chart': BarChart,
  'brain': Brain,
  'line-chart': LineChart,
  'sigma': Sigma,

  // Blockchain
  'coins': Coins,
  'boxes': Boxes,
  'link': Link,
  'lock-keyhole': LockKeyhole,
  'wallet': Wallet,
  'folder-archive': FolderArchive,

  // Cloud/DevOps
  'cloud': Cloud,
  'cloud-cog': CloudCog,
  'container': Container,
  'git-branch': GitBranch,
  'layers': Layers,
  'circle-dashed': CircleDashed,
  'upload-cloud': UploadCloud,

  // Concepts
  'cpu': Cpu,
  'network': Network,
  'bot': Bot,
  'share-2': Share2,
  'settings': Settings,
  'zap': Zap,
  'shield-check': ShieldCheck,
};

export function SkillIcon({ name, ...props }: SkillIconProps) {
  const IconComponent = iconMap[name] || Code;
  return <IconComponent {...props} />;
}
