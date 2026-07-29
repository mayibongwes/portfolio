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
    title: 'Bitsync',
    description:
      'A personal finance and health dashboard I built for my own daily use. Budgets with categories and projected vs actual spend, plus steps, sleep, water, and workouts all in one place. I made it because I wanted it to exist, and now I use it every day. The beta is live and mobile companion apps are next.',
    status: 'building',
    context: 'Side project · Live beta · bitsync.co.za',
    tags: ['Product', 'Finance', 'Health tracking', 'Dashboard'],
    link: 'https://www.bitsync.co.za',
  },
  // Hidden gems — uncomment when ready to show publicly (discuss with collaborator first)
  // {
  //   title: 'Hidden gems, a foodie discovery app',
  //   description:
  //     'An app for people who actually care about food. Not another restaurant aggregator, but a way to surface the places worth knowing: the unassuming spots, the local legends, the finds that never make the algorithm.',
  //   status: 'building',
  //   context: 'Side project · Building with friends',
  //   tags: ['Product', 'Community', 'Food & culture'],
  // },
  {
    title: 'Community platform',
    description:
      'A tool for gated communities and neighbourhoods to organise, talk to each other, and actually get things done together. Built with friends, and shaped around how communities really work rather than how an app thinks they should.',
    status: 'building',
    context: 'Side project · Building with friends',
    tags: ['Product', 'Community', 'Local networks'],
  },
  // DIY electronics — uncomment when you've made enough progress to show it honestly
  // {
  //   title: 'DIY electronics and security projects',
  //   description:
  //     'Learning the basics of electronics so I can build and tinker with physical security gadgets. Starting with the fundamentals and working toward something I can actually hold in my hands.',
  //   status: 'learning',
  //   context: 'Personal exploration · Electronics fundamentals',
  //   tags: ['Hardware', 'Security', 'Tinkering'],
  // },
  {
    title: 'Engineering as a creative outlet',
    description:
      'A running experiment in what code looks like when it exists for the joy of making rather than pure utility. Playing around with where code, visuals, and a bit of play meet, usually alongside friends.',
    status: 'exploring',
    context: 'Personal direction · With friends',
    tags: ['Creative engineering', 'Art', 'Craft'],
  },
  {
    title: 'The day job',
    description:
      'Software engineer on healthcare administration systems. Steady work on systems people rely on, where reliability and clear communication matter.',
    status: 'professional',
    context: 'Day job · Healthcare · Johannesburg',
    tags: ['Progress 4GL', 'Healthcare systems'],
  },
];
