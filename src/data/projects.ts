export type ProjectStatus = 'professional' | 'building' | 'learning' | 'exploring';

export type Project = {
  title: string;
  description: string;
  status: ProjectStatus;
  context: string;
  tags: string[];
  link?: string;
};

export const statusLabel: Record<ProjectStatus, string> = {
  professional: 'Professional',
  building: 'Building',
  learning: 'Learning',
  exploring: 'Exploring',
};

export const projects: Project[] = [
  {
    title: 'Medical administration software',
    description:
      'Leading a small team building software that supports healthcare administration workflows. The domain demands reliability, traceability, and honest communication — no glamour, just things working when people need them.',
    status: 'professional',
    context: 'Team lead · Healthcare dept · MIP, Johannesburg',
    tags: ['TypeScript', 'Team leadership', 'Healthcare systems'],
  },
  // Hidden gems — uncomment when ready to show publicly (discuss with collaborator first)
  // {
  //   title: 'Hidden gems — a foodie discovery app',
  //   description:
  //     'An app for people who care about food. Not another restaurant aggregator — a way to surface the places worth knowing: the unassuming spots, the local legends, the finds that never make the algorithm.',
  //   status: 'building',
  //   context: 'Side project · Building with friends',
  //   tags: ['Product', 'Community', 'Food & culture'],
  // },
  {
    title: 'Community collaboration platform',
    description:
      'A tool for gated communities and neighbourhoods to organise, communicate, and act together — built around the real patterns of how communities actually function rather than how platforms think they should.',
    status: 'building',
    context: 'Side project · Building with friends',
    tags: ['Product', 'Community', 'Local networks'],
  },
  // DIY electronics — uncomment when you've made enough progress to show it honestly
  // {
  //   title: 'DIY electronics and security projects',
  //   description:
  //     'Learning the basics of electronics so I can build and tinker with physical security projects — starting with fundamentals, working toward something I can hold in my hands.',
  //   status: 'learning',
  //   context: 'Personal exploration · Electronics fundamentals',
  //   tags: ['Hardware', 'Security', 'Tinkering'],
  // },
  {
    title: 'Exploring the artistic side of engineering',
    description:
      'An ongoing curiosity about what engineering looks like when it serves creative expression rather than utility — building things for the experience of making them, not just the function. Currently exploring where code, play, and visual craft intersect.',
    status: 'exploring',
    context: 'Personal direction · Collaborating with friends',
    tags: ['Creative engineering', 'Artistic expression', 'Craft'],
  },
];
