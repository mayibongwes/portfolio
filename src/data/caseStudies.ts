export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  constraints: string;
  role: string;
  approach: string;
  outcome: string;
  stack: string[];
  learnings: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-delivery-lead',
    title: 'Leading delivery in healthcare administration',
    tagline: 'Clarity, ownership, and sustainable pace for a small team in a regulated environment.',
    summary:
      'How I help a compact engineering team turn vague priorities into shipped medical administration software — without sacrificing quality or trust in a healthcare context where reliability directly impacts patient-facing workflows.',
    problem:
      'Work arrived through multiple channels with implicit scope and success criteria. The team needed a predictable rhythm and shared standards so we could commit with confidence in a domain where mistakes carry real consequences.',
    constraints:
      'Healthcare regulatory sensitivity: changes must be traceable, safe to roll back, and aligned with clinical and administrative stakeholder expectations — without over-process that slows critical fixes.',
    role:
      'Software Engineering Lead: prioritisation with stakeholders, technical direction, unblocking developers, and participating in design and implementation where it matters most.',
    approach:
      'Made expectations explicit in writing before build; broke work into vertical slices; introduced lightweight review and release habits; paired on the riskiest integrations first.',
    outcome:
      'Fewer mid-sprint surprises, clearer ownership, and a steadier release cadence. (Replace with anonymised metrics you can share — e.g. incident frequency, cycle time, stakeholder satisfaction.)',
    stack: ['Team leadership', 'TypeScript', 'API integration', 'Healthcare systems'],
    learnings:
      'Leadership is mostly clarity: the team moves faster when the problem, constraints, and definition of done are legible to everyone involved.',
  },
  {
    slug: 'client-products-foundation',
    title: 'Client products that funded the craft',
    tagline: 'Early career: selling, scoping, and shipping small web products for real businesses.',
    summary:
      'Years of building WordPress themes, PHP backends, and responsive marketing sites for real clients — where deadlines and communication mattered as much as code.',
    problem:
      'Small businesses needed credible web presence and light tooling on tight budgets.',
    constraints:
      'Solo or tiny-team delivery, variable client technical literacy, and hosting realities of the time.',
    role:
      'End-to-end: discovery, quote, implementation, deployment, and handover.',
    approach:
      'Reused sensible templates where appropriate; scoped features ruthlessly; optimised for maintainability the client could live with after handover.',
    outcome:
      'A portfolio of live sites and repeat referrals that later made the transition into formal engineering roles credible.',
    stack: ['WordPress', 'PHP', 'MySQL', 'HTML/CSS', 'jQuery'],
    learnings:
      'Shipping for paying clients teaches product thinking: scope, expectation management, and "good enough" that still looks professional.',
  },
  {
    slug: 'side-project-collaboration',
    title: 'Passion project with long-time collaborators',
    tagline: 'Disciplined side work: friends, constraints, and a shipped artifact.',
    summary:
      'A current collaboration with people I have built with for years — structured like a real product, not an endless hobby repo.',
    problem:
      'We wanted to explore an idea that does not fit the day job, without burning weekends on endless refactor loops.',
    constraints:
      'Part-time attention, async communication, and no dedicated ops — so the architecture had to stay boring and deployable.',
    role:
      'Technical co-owner: architecture decisions, core implementation, and keeping the scope honest.',
    approach:
      'Time-boxed milestones; thin vertical slice first; shared backlog in the open; automate only what hurts.',
    outcome:
      'Ongoing — replace this sentence with a concrete artifact (demo URL, GitHub, or "private beta") when you are ready to link it publicly.',
    stack: ['To confirm', 'e.g. React or Astro', 'API of choice'],
    learnings:
      'Side projects that respect real life look like small products: one clear user, one clear milestone, then the next.',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
