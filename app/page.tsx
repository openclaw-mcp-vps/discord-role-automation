export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord + GitHub
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-assign Discord roles<br />
          <span className="text-[#58a6ff]">based on GitHub activity</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect GitHub and Discord, configure role mappings, and let the system automatically sync roles based on repo access and contribution metrics — no manual work needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant setup.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          ["🔗", "OAuth Connect", "Link GitHub & Discord accounts securely in seconds."],
          ["⚙️", "Role Mappings", "Map repos, stars, or PR counts to specific Discord roles."],
          ["🔄", "Auto Sync", "Periodic checks keep roles up-to-date automatically."]
        ].map(([icon, title, desc]) => (
          <div key={title as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{icon}</div>
            <div className="font-semibold text-white mb-1">{title}</div>
            <div className="text-sm text-[#8b949e]">{desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-extrabold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included, no tiers</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Discord servers",
              "Unlimited role mappings",
              "GitHub OAuth integration",
              "Contribution-based rules",
              "Automatic periodic sync",
              "Email support"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Start for $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does GitHub authentication work?",
              "You authorize the app via GitHub OAuth. We only request read access to your public profile, repos, and contribution data — we never write to your GitHub account."
            ],
            [
              "Can I set multiple role rules per server?",
              "Yes. You can create as many mappings as you need — e.g., assign a 'Contributor' role for 5+ merged PRs and a 'Maintainer' role for repo write access."
            ],
            [
              "How often are roles synced?",
              "Roles are checked and updated automatically every hour. You can also trigger a manual sync at any time from your dashboard."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Discord Role Automation. All rights reserved.
      </footer>
    </main>
  );
}
