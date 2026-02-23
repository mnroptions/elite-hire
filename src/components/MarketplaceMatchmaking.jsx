import { useMemo, useState } from 'react';

const talentPool = [
  {
    id: 1,
    name: 'Ariya Chen',
    role: 'Senior React Engineer',
    domain: 'Fintech',
    timezone: 'UTC+1',
    rate: 95,
    availability: 'Immediate',
    score: 98,
  },
  {
    id: 2,
    name: 'Mateo Silva',
    role: 'Product Designer',
    domain: 'HealthTech',
    timezone: 'UTC-3',
    rate: 85,
    availability: '1 week',
    score: 96,
  },
  {
    id: 3,
    name: 'Nora Haddad',
    role: 'Growth Marketer',
    domain: 'SaaS',
    timezone: 'UTC+2',
    rate: 78,
    availability: 'Immediate',
    score: 94,
  },
  {
    id: 4,
    name: 'Ethan Brooks',
    role: 'Interim CFO',
    domain: 'E-commerce',
    timezone: 'UTC-5',
    rate: 120,
    availability: '2 weeks',
    score: 97,
  },
];

const categories = ['All', 'Engineering', 'Design', 'Marketing', 'Finance'];

const mapRoleToCategory = (role) => {
  if (role.includes('Engineer')) return 'Engineering';
  if (role.includes('Designer')) return 'Design';
  if (role.includes('Marketer')) return 'Marketing';
  return 'Finance';
};

export default function MarketplaceMatchmaking() {
  const [activePanel, setActivePanel] = useState('clients');
  const [category, setCategory] = useState('All');
  const [domain, setDomain] = useState('All');
  const [brief, setBrief] = useState({
    projectType: 'Product Build',
    duration: '1-3 months',
    timezone: 'Any',
  });

  const domains = useMemo(
    () => ['All', ...new Set(talentPool.map((person) => person.domain))],
    []
  );

  const filteredTalent = useMemo(
    () =>
      talentPool.filter((person) => {
        const categoryMatch =
          category === 'All' || mapRoleToCategory(person.role) === category;
        const domainMatch = domain === 'All' || person.domain === domain;
        return categoryMatch && domainMatch;
      }),
    [category, domain]
  );

  return (
    <section className='mx-auto max-w-6xl px-[5%] py-16'>
      <div className='rounded-3xl border border-brand-100 bg-white/95 p-8 shadow-xl shadow-brand-200/40'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-brand-500'>
          Talent + Client Network
        </p>
        <h2 className='mt-2 text-3xl font-semibold text-brand-900 md:text-4xl'>
          Match clients with vetted experts in under 48 hours
        </h2>
        <p className='mt-4 max-w-3xl text-slate-600'>
          This clone implements the core marketplace flow: clients create a brief,
          talent stays discoverable, and both sides are matched by skill, domain,
          and timezone compatibility.
        </p>

        <div className='mt-8 inline-flex rounded-full bg-brand-50 p-1'>
          {['clients', 'talent'].map((panel) => (
            <button
              key={panel}
              onClick={() => setActivePanel(panel)}
              className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition ${
                activePanel === panel
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-brand-700'
              }`}>
              {panel}
            </button>
          ))}
        </div>

        {activePanel === 'clients' ? (
          <div className='mt-6 grid gap-6 lg:grid-cols-2'>
            <div className='rounded-2xl border border-slate-200 p-5'>
              <h3 className='text-lg font-semibold text-slate-900'>Create a client brief</h3>
              <div className='mt-4 grid gap-4'>
                <label className='grid gap-2 text-sm'>
                  Project type
                  <select
                    className='rounded-lg border border-slate-200 p-2'
                    value={brief.projectType}
                    onChange={(e) =>
                      setBrief((prev) => ({ ...prev, projectType: e.target.value }))
                    }>
                    <option>Product Build</option>
                    <option>Team Augmentation</option>
                    <option>Fractional Leadership</option>
                  </select>
                </label>
                <label className='grid gap-2 text-sm'>
                  Duration
                  <select
                    className='rounded-lg border border-slate-200 p-2'
                    value={brief.duration}
                    onChange={(e) => setBrief((prev) => ({ ...prev, duration: e.target.value }))}>
                    <option>Less than 1 month</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6+ months</option>
                  </select>
                </label>
                <label className='grid gap-2 text-sm'>
                  Preferred timezone
                  <select
                    className='rounded-lg border border-slate-200 p-2'
                    value={brief.timezone}
                    onChange={(e) => setBrief((prev) => ({ ...prev, timezone: e.target.value }))}>
                    <option>Any</option>
                    <option>UTC-5 to UTC+1</option>
                    <option>UTC+1 to UTC+8</option>
                  </select>
                </label>
              </div>
              <button className='mt-5 w-full rounded-lg bg-accent-500 px-4 py-2 font-semibold text-white hover:bg-accent-400'>
                Submit brief
              </button>
            </div>
            <div className='rounded-2xl bg-brand-900 p-6 text-white'>
              <h3 className='text-lg font-semibold'>How matching works</h3>
              <ol className='mt-4 list-inside list-decimal space-y-2 text-sm text-brand-100'>
                <li>AI + recruiter triage scores your brief for role fit.</li>
                <li>Shortlist of top profiles delivered in 24–48 hours.</li>
                <li>Interview, kickoff, and weekly performance checkpoints.</li>
                <li>Risk-free replacement guarantee if fit changes.</li>
              </ol>
              <div className='mt-6 rounded-xl bg-white/10 p-4'>
                <p className='text-xs uppercase tracking-wide text-brand-100'>Brief Preview</p>
                <p className='mt-2 text-sm'>
                  {brief.projectType} • {brief.duration} • {brief.timezone}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='mt-6'>
            <div className='flex flex-wrap gap-3'>
              <select
                className='rounded-lg border border-slate-200 p-2 text-sm'
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <select
                className='rounded-lg border border-slate-200 p-2 text-sm'
                value={domain}
                onChange={(e) => setDomain(e.target.value)}>
                {domains.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className='mt-5 grid gap-4 md:grid-cols-2'>
              {filteredTalent.map((person) => (
                <article key={person.id} className='rounded-xl border border-slate-200 p-4'>
                  <p className='text-sm text-slate-500'>{person.domain}</p>
                  <h3 className='text-xl font-semibold text-slate-900'>{person.name}</h3>
                  <p className='mt-1 text-sm text-slate-700'>{person.role}</p>
                  <div className='mt-4 flex items-center justify-between text-sm'>
                    <span>{person.timezone}</span>
                    <span>${person.rate}/hr</span>
                    <span>Score {person.score}%</span>
                  </div>
                  <button className='mt-4 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600'>
                    Invite to interview
                  </button>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
