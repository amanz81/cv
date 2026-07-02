export const profile = {
  name: 'Assaf Manzur',
  title: 'Platform Architect · DevOps & Reliability Leader',
  email: 'assaf.manzur@gmail.com',
  location: 'Israel',
  linkedin: 'https://linkedin.com/in/assaf-manzur',
};

export const summary = [
  'Platform architect and DevOps leader with 14+ years designing the systems and paved paths that large engineering organizations run on.',
  'I turn ambiguous, multi-team infrastructure problems into standardized, reliable platforms — most recently architecting a large-scale, zero-downtime Kubernetes migration (service mesh, active-active cutover, workload identity, automated validation) that became the standard pattern adopted across 50+ services and 8+ teams.',
  'Increasingly I build AI- and agent-assisted automation that multiplies what an entire organization can ship. I think at system and organization scale, and I make complex platforms simple enough for many teams to adopt.',
];

export const approach = [
  {
    title: 'Systems thinking',
    body: 'I design the pattern, not the patch — mapping the solution space and driving the trade-off so many services inherit one coherent approach instead of dozens of one-offs.',
  },
  {
    title: 'Simplifying complexity',
    body: 'I turn deep, multi-domain platform problems — mesh, identity, CI/CD, multi-cluster — into a paved path simple enough for other teams to adopt without me in the loop.',
  },
  {
    title: 'Cross-team influence',
    body: "I'm the escalation point teams route to when they're stuck, and I've driven architecture decisions across platform teams — including winning buy-in for a lower-risk design over a platform team's own default.",
  },
  {
    title: 'Judgment & risk',
    body: "I build feasibility gates before scaling, surface the next blocker before it lands, and plan one platform ahead so today's work isn't throwaway.",
  },
  {
    title: 'Communication',
    body: 'I make large programs legible — leadership-facing status with blockers, owners, and ETAs; runbooks; cross-team workshops; and presenting strategy to senior leadership.',
  },
  {
    title: 'Force-multiplier',
    body: 'I lift the teams around me — turning hard-won approaches into tooling and standards others build on, and mentoring engineers toward the bar.',
  },
];

export const experiences = [
  {
    title: 'DevOps Tech Lead',
    company: 'Salesforce',
    period: 'August 2024 - Present',
    description:
      'Architecting and leading a large-scale, multi-team platform migration — and the standards, tooling, and reliability practices the wider organization runs on.',
    highlights: [
      'Architected the standard pattern for a large-scale platform migration — a reusable, flag-gated deployment model that lets one service run on two Kubernetes platforms at once; adopted org-wide as the standard for 50+ production services.',
      'Designed a zero-downtime active-active cutover (dual platforms sharing the same stateful backends) enabling gradual traffic shift and instant rollback with no infrastructure duplication.',
      'Replaced a legacy API gateway with a mesh-native ingress layer (HTTP/gRPC/mTLS) that became the standard ingress across the platform.',
      "Shipped fixes into partner teams' platforms across 5+ repositories and multiple languages (Go, Helm, Terraform), released to production — unblocking every dependent service and retiring a legacy dependency.",
      'Built AI/LLM-assisted DevOps tooling ahead of any org-standard mechanism, collapsing a multi-hour deploy-and-validate cycle into a ~10-minute automated run adopted by 8+ teams; now driving it toward agent-driven, self-debugging runs.',
      'Serve as the cross-team escalation point for the migration, turning one-off incidents into permanent, framework-level fixes that every current and future service inherits.',
    ],
    technologies: ['Kubernetes', 'Istio / Service Mesh', 'Argo Rollouts', 'Workload Identity', 'AI-Assisted Automation', 'Platform Engineering'],
  },
  {
    title: 'Senior DevOps Engineer',
    company: 'Salesforce',
    period: 'November 2021 - August 2024',
    description:
      'Owned infrastructure automation, observability, and CI/CD improvements supporting production systems at scale.',
    highlights: [
      'Implemented infrastructure automation with Terraform and Ansible to improve repeatability, provisioning, and change control.',
      'Improved monitoring and alerting with Prometheus and Grafana, giving engineering teams better visibility into production health.',
      'Built and evolved CI/CD pipelines that supported safer and faster delivery for application teams.',
      'Worked closely with application and operations teams to translate infrastructure requirements into production-ready implementation.',
    ],
    technologies: ['Terraform', 'Ansible', 'Prometheus', 'Grafana', 'Jenkins', 'AWS'],
  },
  {
    title: 'Senior System Engineer',
    company: 'Gigya',
    period: 'January 2016 - May 2019',
    description:
      'Managed large-scale infrastructure environments and supported modernization efforts through automation, operations, and platform improvement.',
    highlights: [
      'Operated and maintained large-scale virtualized environments supporting enterprise workloads.',
      'Automated recurring operational work with scripting to reduce manual effort and improve consistency in day-to-day operations.',
      'Supported migration and modernization initiatives that moved legacy environments toward more scalable infrastructure patterns.',
      'Provided technical guidance and support for junior engineers working on operational and infrastructure tasks.',
    ],
    technologies: ['Linux', 'Virtualization', 'Automation', 'Operations', 'Infrastructure'],
  },
];

export const skills = [
  'Kubernetes',
  'Istio / Service Mesh',
  'Argo Rollouts',
  'AWS',
  'Terraform',
  'Ansible',
  'Docker',
  'GitOps',
  'CI/CD',
  'Jenkins',
  'Prometheus',
  'Grafana',
  'Infrastructure as Code',
  'Observability',
  'Workload Identity',
  'AI-Assisted Automation',
  'Platform Engineering',
  'Linux',
];
