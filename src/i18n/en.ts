import type { SiteContent } from './types';

export const en: SiteContent = {
  ui: {
    skipToContent: 'Skip to content',
    download: 'Download',
    downloadWindows: 'Download for Windows',
    starOnGithub: 'Star on GitHub',
    viewOnGithub: 'View on GitHub',
    menu: 'Menu',
    close: 'Close',
    backHome: 'Back to home',
    free: 'Free',
    openSource: 'Open source',
    updatedOn: 'Updated',
    readGuide: 'Read the guide',
  },
  nav: [
    { key: 'features', label: 'Features' },
    { key: 'howItWorks', label: 'How it works' },
    { key: 'guideSsl', label: 'SSL guide' },
    { key: 'guideDomains', label: 'Local domains' },
    { key: 'about', label: 'About' },
  ],
  footer: {
    tagline: 'Trusted local HTTPS for WampServer, in one click.',
    builtBy: 'Built and maintained by',
    contactHeading: 'Contact',
    productHeading: 'Product',
    learnHeading: 'Guides',
    rights: 'Released under the MIT licence. Free, forever.',
    licenseNote: 'No accounts. No telemetry. Everything stays on your machine.',
    palestineLine: 'We stand with the people of Palestine — hoping for peace and justice.',
  },

  home: {
    meta: {
      title: 'WAMP SSL Automator — Trusted Local HTTPS for WampServer',
      description:
        'Turn http://myapp.test into trusted https:// in one click. Local CA, Apache vhosts, hosts file, restart and verify — with automatic rollback. Free and open source.',
    },
    hero: {
      badge: 'Free · Open source · MIT',
      h1: 'Trusted local HTTPS for WampServer. One click. No more certificate warnings.',
      sub: 'WAMP SSL Automator turns your http://myapp.test development sites into fully trusted https:// sites in seconds — a real local Certificate Authority your browser believes, Apache vhosts wired up for you, your hosts file updated, Apache restarted, and every domain verified end to end. If anything goes wrong, it rolls itself back.',
      note: 'Built for developers tired of clicking “Proceed anyway (unsafe)” twenty times a day.',
      screenshotAlt:
        'The WAMP SSL Automator desktop app: WAMP path, detected Apache version, a domains table, and the Generate SSL Configuration button',
    },
    problem: {
      eyebrow: 'The problem',
      h2: 'You already know this dance.',
      intro:
        'Modern web apps assume HTTPS. OAuth callbacks, secure cookies, service workers, SameSite=None, the Payment Request API, geolocation, camera access, HTTP/2 — half of them quietly refuse to work over plain http://. So you try to run your local sites over HTTPS, and you hit a wall:',
      bullets: [
        'You generate a self-signed certificate, and the browser slaps a giant red “Your connection is not private” warning on it.',
        'You hand-edit httpd-vhosts.conf, fat-finger a directive, and Apache won’t start — now your whole stack is down.',
        'You forget to add the domain to your Windows hosts file, so it doesn’t resolve at all.',
        'You wrestle with OpenSSL incantations, Subject Alternative Names, Extended Key Usage flags, and the cryptic reasons Chrome rejects certificates that “look fine”.',
        'You finally get one site working, then have to do the whole thing again for the next project.',
      ],
      close:
        'It is tedious, error-prone, and one wrong move takes your local environment offline. Most developers give up and click through the warnings forever. There is a better way.',
    },
    solution: {
      eyebrow: 'The solution',
      h2: 'The whole job, done correctly, in one click.',
      intro:
        'Point it at your WampServer install, type in the domains you care about, and press Generate SSL Configuration. In a few seconds you get:',
      gains: [
        'A local Root Certificate Authority installed into the Windows trust store — so the certificates it issues are genuinely trusted, not self-signed warnings.',
        'Per-domain certificates with the exact modern profile browsers demand: SHA-256, RSA, Subject Alternative Name, serverAuth Extended Key Usage, 825-day validity.',
        'Your Apache vhosts merged — not overwritten — with clean :443 SSL blocks and :80 → :443 redirects.',
        'Your Windows hosts file updated so the domains resolve to localhost.',
        'Apache restarted automatically, after the config is validated.',
        'Every domain fetched over HTTPS to prove the chain is trusted and the server is answering.',
      ],
      safety: [
        'It validates before it commits. The tool runs httpd -t first; if your config would not start, it never touches the running server.',
        'It backs everything up. Your vhosts and hosts files are backed up, timestamped, every run.',
        'It rolls back on failure. If Apache won’t restart, it restores the old files, restarts on the known-good config, and tells you exactly what happened — including the tail of the Apache error log.',
      ],
      close:
        'You go from “no SSL” to “green padlock, verified” without opening a terminal, a config file, or OpenSSL once.',
    },
    trust: {
      eyebrow: 'Why “trusted” is the whole point',
      h2: 'Anyone can self-sign. Nobody trusts it — least of all your browser.',
      paras: [
        'That red warning screen isn’t a formality. It is the browser correctly telling you the certificate has no chain of trust.',
        'WAMP SSL Automator solves this the way professionals do. It creates one local Root CA on your machine and installs it into the Windows certificate store, exactly once. Every per-domain certificate it issues afterwards is signed by that CA. Because Windows — and therefore Edge and Chrome — trust the CA, they trust every certificate beneath it. No warnings. A real padlock. Green across the board.',
        'The CA lives only on your machine. It never leaves, it is never uploaded anywhere, and it only signs the development domains you explicitly ask for. The same model the professionals use, applied to your WAMP stack with zero ceremony.',
      ],
    },
    features: {
      eyebrow: 'Features at a glance',
      h2: 'Built like a tool you can trust with your config.',
      sub: 'Every detail is here because doing it by hand is where things break.',
      items: [
        { icon: 'shield-check', title: 'Genuinely trusted certificates', body: 'A local Root CA in the Windows trust store. Browsers accept the certificates with no warning — not a yellow padlock, not an exception you click, an actual trusted connection.' },
        { icon: 'file-code', title: 'Modern certificate profile', body: 'SHA-256 signatures, RSA-2048 domain keys, an RSA-4096 CA, SAN and EKU extensions, 825-day validity. Built to the spec Chrome and Edge enforce today, not the loose rules of a decade ago.' },
        { icon: 'refresh-cw', title: 'Idempotent — run it as often as you like', body: 'Re-running with the same domains is completely safe. The CA is reused, still-valid certificates are reused, and the managed blocks in your hosts and vhosts files are cleanly replaced. No duplication, no drift.' },
        { icon: 'layers', title: 'Merge, never clobber', body: 'Your existing httpd-vhosts.conf is preserved verbatim — your localhost block, your comments, your other projects. Only the domains you manage with this tool are touched, inside clearly marked sections.' },
        { icon: 'rotate-ccw', title: 'Backups and automatic rollback', body: 'Every run timestamps a backup of both your vhosts and hosts files. If anything fails, the tool restores them and restarts Apache on the old config. Your environment is never left broken.' },
        { icon: 'check-check', title: 'End-to-end verification', body: 'After restarting Apache, the tool fetches each domain over HTTPS using the same trust chain your browser uses. You don’t have to wonder if it worked — it tells you N/N OK.' },
        { icon: 'search', title: 'Auto-detection', body: 'Finds your WAMP install (C:\\wamp64 or C:\\wamp) and reads your exact Apache version straight from httpd -v on startup. Almost nothing to configure.' },
        { icon: 'terminal', title: 'One window, real-time log', body: 'A single desktop window. Add your domains, press the button, and watch the entire pipeline stream by line by line, so you see precisely what changed.' },
      ],
    },
    pipeline: {
      eyebrow: 'How it works',
      h2: 'One click runs a careful nine-step pipeline.',
      sub: 'Against your live WAMP install, in order — streamed to the on-screen log.',
      steps: [
        { name: 'Backup', text: 'Timestamped copies of httpd-vhosts.conf and your Windows hosts file.' },
        { name: 'Root CA', text: 'Generated once (RSA-4096, SHA-256, 10-year validity) and reused forever after.' },
        { name: 'Trust', text: 'The CA is installed into LocalMachine\\Root, skipped automatically if it is already there.' },
        { name: 'Certificates', text: 'One per domain, signed by your CA, with SAN + EKU and 825-day validity. Still-valid certs are reused.' },
        { name: 'Vhosts merge', text: 'Fresh :80 redirect and :443 SSL blocks appended inside a marked section; everything else untouched.' },
        { name: 'Hosts file', text: '127.0.0.1 entries written atomically inside BEGIN/END WampSSL markers.' },
        { name: 'Validate', text: 'httpd -t checks the config. If it fails, the tool rolls back and stops before touching the server.' },
        { name: 'Restart', text: 'The wampapache service is restarted with status polling. If it won’t come back, the tool rolls back.' },
        { name: 'Verify', text: 'Each domain is fetched over HTTPS to confirm the chain is trusted and Apache is serving.' },
      ],
      cta: 'See the full pipeline',
    },
    quickstart: {
      eyebrow: 'Quick start',
      h2: 'Green padlock in five steps.',
      sub: 'No terminal, no OpenSSL, no config files.',
      steps: [
        'Download the latest release, or build from source with dotnet build -c Release.',
        'Run as Administrator — the app self-elevates; click Yes at the UAC prompt.',
        'Confirm your WAMP path — C:\\wamp64 is filled in for you if it exists.',
        'Add your domains — hostname plus document root, e.g. myapp.test → C:\\wamp64\\www\\myapp\\public.',
        'Click Generate SSL Configuration and watch the log until you see Verification: N/N OK.',
      ],
      outro:
        'Open https://myapp.test. Green padlock. Done. To remove a domain later, take it out of the list and re-run — its managed vhost block and hosts entry are cleanly removed.',
    },
    builder: {
      eyebrow: 'Where it comes from',
      h2: 'Built by someone who sweats the details.',
      paras: [
        'WAMP SSL Automator is built and maintained by Peter Bamuhigire — a developer who got tired of clicking through certificate warnings and decided to fix it once, properly, for everyone.',
        'It is the kind of tool that comes out of a workshop where cloud systems, mobile apps, ERP platforms and custom software get built — and where the boring parts, the safety nets and the rollback paths, are treated as the interesting parts.',
      ],
      link: 'More about the project and the maker',
      photoAlt: 'Peter Bamuhigire, the developer behind WAMP SSL Automator',
    },
    palestine: {
      eyebrow: 'A note that matters to us',
      h2: 'Standing with Palestine.',
      body: 'Beyond the code, we hold one wish close: that peace and justice will one day prevail for the people of Palestine. It costs nothing to say so, and it would be wrong to stay silent.',
      link: 'Read our message',
    },
    finalCta: {
      h2: 'Stop fighting certificate warnings.',
      sub: 'Get trusted local HTTPS on your WAMP sites in one click — and get back to building.',
    },
  },

  features: {
    meta: {
      title: 'Features — WAMP SSL Automator',
      description:
        'Genuinely-trusted certificates, a local Root CA, idempotent runs, merge-never-clobber vhosts, backups, automatic rollback and end-to-end HTTPS verification.',
    },
    h1: 'Every feature exists because doing it by hand is where things break.',
    lead: 'WAMP SSL Automator is small on the surface — one window, one button — and careful underneath. Here is what each part does and why it matters.',
    items: [
      { icon: 'shield-check', title: 'Genuinely trusted certificates', body: 'A local Root CA installed into the Windows trust store.', detail: 'The certificates are signed by a CA your operating system trusts, so Edge and Chrome accept them with no warning at all. Not a yellow padlock, not a one-time exception — a real, trusted connection, exactly like a public site.' },
      { icon: 'file-code', title: 'A modern certificate profile', body: 'SHA-256, RSA, SAN, EKU and 825-day validity.', detail: 'Browsers in 2026 are strict: a certificate needs a Subject Alternative Name (the old Common Name is ignored), a serverAuth Extended Key Usage, and a validity period of 825 days or less. The tool issues exactly that profile — RSA-2048 domain keys under an RSA-4096 CA — so nothing is rejected for being out of spec.' },
      { icon: 'refresh-cw', title: 'Idempotent by design', body: 'Run it as many times as you like; the result is always clean.', detail: 'Re-running with the same domains reuses the CA and any still-valid certificates, and cleanly replaces the managed blocks in your hosts and vhosts files. Add one domain to a list of ten and only the new work happens. No duplicates, no drift, no mess to clean up.' },
      { icon: 'layers', title: 'Merge, never clobber', body: 'Your existing Apache config is preserved verbatim.', detail: 'Your localhost block, your comments, your other projects — all untouched. The tool only writes inside clearly marked sections for the domains you manage with it, so it lives alongside whatever you already have instead of replacing it.' },
      { icon: 'rotate-ccw', title: 'Backups and automatic rollback', body: 'Timestamped backups every run; restore on any failure.', detail: 'Before it changes anything, it backs up both your vhosts file and your hosts file with a timestamp. If Apache fails to restart, it restores those files, brings Apache back on the known-good config, and shows you the tail of the error log so you know exactly what happened.' },
      { icon: 'check-check', title: 'End-to-end verification', body: 'It proves the result instead of assuming it.', detail: 'After the restart, the tool fetches every domain over HTTPS using the same trust chain your browser uses. The final line of the log is a plain verdict — N/N OK — so you never have to open a browser to check whether it worked.' },
      { icon: 'search', title: 'Auto-detection', body: 'Finds WAMP and reads your Apache version for you.', detail: 'On startup it locates your install at C:\\wamp64 or C:\\wamp and reads your exact Apache version from httpd -v, so the generated config matches your stack. There is almost nothing to set up.' },
      { icon: 'terminal', title: 'One window, a real-time log', body: 'See precisely what changed, as it changes.', detail: 'Everything happens in a single desktop window with a live log. The pipeline runs on a background thread and streams each step as it executes, so the tool is never a black box operating on your system behind your back.' },
    ],
    cta: { h2: 'Ready for a green padlock?', sub: 'Download it, add your domains, and watch the log say N/N OK.' },
  },

  howItWorks: {
    meta: {
      title: 'How It Works — The One-Click SSL Pipeline',
      description:
        'Backup, Root CA, trust, per-domain certificates, vhost merge, hosts file, validate, restart and verify — validated before commit and rolled back on failure.',
    },
    h1: 'What happens when you press the button.',
    lead: 'Clicking Generate SSL Configuration runs this pipeline against your live WAMP install, in order, on a background thread — with every line streamed to the on-screen log. It validates before it commits and rolls back if anything fails.',
    steps: [
      { name: 'Backup', text: 'Timestamped copies of httpd-vhosts.conf and your Windows hosts file are written first, so there is always a clean restore point.', log: '[1/9] Backup    vhosts + hosts backed up (.bak-20260530-1142)' },
      { name: 'Root CA', text: 'A local Certificate Authority is generated once — RSA-4096, SHA-256, 10-year validity — and reused on every future run.', log: '[2/9] Root CA    RSA-4096 CA ready (reused)' },
      { name: 'Trust', text: 'The CA is installed into the Windows machine trust store (LocalMachine\\Root). If it is already trusted, this step is skipped.', log: '[3/9] Trust      CA present in LocalMachine\\Root' },
      { name: 'Certificates', text: 'One certificate per domain is issued, signed by your CA, with a Subject Alternative Name, serverAuth EKU and 825-day validity. Still-valid certificates are reused.', log: '[4/9] Certs      myapp.test  issued (SAN, EKU, 825d)' },
      { name: 'Vhosts merge', text: 'Clean :80 → :443 redirect blocks and :443 SSL blocks are appended inside a marked section of httpd-vhosts.conf. Everything else is left exactly as it was.', log: '[5/9] Vhosts     merged inside # WampSSL section' },
      { name: 'Hosts file', text: 'The domains are written to your Windows hosts file as 127.0.0.1 entries, atomically, inside BEGIN/END WampSSL markers.', log: '[6/9] Hosts      127.0.0.1 myapp.test' },
      { name: 'Validate', text: 'httpd -t checks the new configuration. If it would not start, the tool rolls back the backups and stops — without ever touching the running server.', log: '[7/9] Validate   httpd -t: Syntax OK' },
      { name: 'Restart', text: 'The wampapache Windows service is restarted with status polling. If it does not come back, the tool restores the backups and restarts on the known-good config.', log: '[8/9] Restart    wampapache running' },
      { name: 'Verify', text: 'Each domain is fetched over HTTPS using the same trust chain your browser uses, to confirm the certificate is trusted and Apache is serving.', log: '[9/9] Verify     Verification: 3/3 OK' },
    ],
    safety: {
      h2: 'The safety net you would build yourself, if you had a spare afternoon.',
      paras: [
        'The order is deliberate. Backups happen before any change. Validation happens before any restart. Verification happens after, so success is proven rather than assumed.',
        'If a step fails, the tool does not leave you halfway. It restores the timestamped backups, restarts Apache on the configuration that was working a moment ago, and reports what went wrong — including the tail of the Apache error log — so you can fix the real cause.',
        'Because the whole thing is idempotent, the fix is usually just to correct the input and press the button again.',
      ],
    },
    cta: { h2: 'See it run on your machine.', sub: 'Download, add a domain, and watch the nine steps go by.' },
  },

  about: {
    meta: {
      title: 'About — WAMP SSL Automator',
      description:
        'Why this tool exists, how it is built, and who maintains it. Open source under the MIT licence, built in the open by Tech Guy Peter.',
    },
    h1: 'A small tool with a stubborn standard.',
    lead: 'WAMP SSL Automator exists for one reason: trusted local HTTPS should take a click, not an afternoon. Everything about it follows from that.',
    project: {
      h2: 'Why it exists',
      paras: [
        'Every developer on WampServer hits the same wall. Modern web features assume HTTPS, self-signed certificates trigger a red warning screen, and the manual fix — a local CA, the right certificate profile, an Apache vhost, the hosts file, a careful restart — is fiddly enough that most people give up and click through the warnings forever.',
        'This tool does that whole job correctly, in one click, with backups and an automatic rollback so a wrong move can’t take your environment offline. It is the tool its author wanted to exist, built once, properly, for everyone who has the same problem.',
      ],
    },
    builder: {
      h2: 'About the maker',
      paras: [
        'WAMP SSL Automator is built and maintained by Peter Bamuhigire — known online as Tech Guy Peter. He is a software and web developer whose day-to-day work spans cloud systems, mobile apps, ERP platforms and custom software, alongside consulting for teams who need something built properly.',
        'This tool is a good window into how he works: take a genuinely annoying problem, understand it down to the certificate extensions, and ship something that is careful where it counts — validate before you commit, back up before you change, prove the result instead of assuming it. The boring parts are treated as the important parts, because they are.',
      ],
      skillsLabel: 'Works across',
      skills: ['Cloud systems', 'Mobile apps', 'ERP platforms', 'Custom software', 'Consulting'],
      photoAlt: 'Peter Bamuhigire — Tech Guy Peter',
      linkText: 'techguypeter.com',
    },
    open: {
      h2: 'Open source, and free, forever',
      paras: [
        'WAMP SSL Automator is released under the MIT licence. You can use it at work or at home, read every line of what it does, fork it, improve it, and send those improvements back. There is no paid tier, no “pro” version, and nothing to unlock.',
        'It is built and maintained in the open precisely because it touches sensitive parts of your system — your certificate store and your server config. You shouldn’t have to trust a black box for that. You can read exactly what it does, and contributions, bug reports and feature ideas are all welcome.',
      ],
    },
  },

  palestine: {
    meta: {
      title: 'Standing With Palestine',
      description:
        'A message of hope: that peace and justice will one day prevail for the people of Palestine.',
    },
    h1: 'Standing with Palestine.',
    paras: [
      'This is a small software project. But the people who make software are people first, and there are some things worth saying plainly, even here.',
      'We stand with the people of Palestine. We hope — sincerely, and without qualification — that peace and justice will one day prevail, that families will be safe, that children will grow up free, and that dignity will be restored where it has been taken.',
      'Peace is not a slogan and justice is not a favour. They are what every people is owed. Until that day comes, we hold this hope, and we say it out loud.',
    ],
    photoAlt: 'People holding the Palestinian flag, hoping for an end to war',
    flagAlt: 'The flag of Palestine flying over a city at dusk',
    childrenAlt: 'Two young boys standing amid the rubble of a destroyed building',
    childrenCaption: 'May every child grow up in safety — and free.',
    closing: 'May peace and justice prevail.',
  },

  faq: {
    meta: {
      title: 'FAQ — WAMP SSL Automator',
      description:
        'Answers on browser trust, configuration safety, rollback, OpenSSL, licensing, and whether the tool is safe for local development.',
    },
    h1: 'Frequently asked questions',
    lead: 'Short, honest answers. If your question isn’t here, the GitHub issue tracker is the fastest way to reach us.',
    groups: [
      {
        heading: 'Trust and browsers',
        items: [
          { q: 'Will my browser still show a warning?', a: 'No. The certificates are signed by a Root CA installed in the Windows trust store, so Edge and Chrome trust them. Firefox keeps its own store — set security.enterprise_roots.enabled to true in about:config once and it will trust them too.' },
          { q: 'Why is a self-signed certificate not enough?', a: 'A self-signed certificate has no chain of trust, so the browser correctly refuses to trust it and shows the red “Your connection is not private” warning. WAMP SSL Automator instead creates a local Root CA, trusts it once in Windows, and signs each domain certificate with it — which is why there is no warning.' },
          { q: 'Does the CA leave my machine?', a: 'Never. The Root CA and its private key are generated locally and stored on your machine. Nothing is uploaded anywhere, and the CA only ever signs the development domains you explicitly add.' },
        ],
      },
      {
        heading: 'Safety and your config',
        items: [
          { q: 'Does it overwrite my existing Apache config?', a: 'No. It merges. Only the domains you manage with the tool are added or replaced, inside clearly marked sections of httpd-vhosts.conf. Everything else is preserved, and every run is backed up first.' },
          { q: 'What if Apache won’t restart?', a: 'The tool validates the config with httpd -t before restarting, and rolls back automatically if the restart fails — restoring your old files and the working config, with the Apache error log included in the message.' },
          { q: 'Can I run it more than once?', a: 'Yes — it is idempotent. Re-running reuses the CA and still-valid certificates, and cleanly replaces the managed blocks. Adding or removing a domain and re-running is the intended workflow.' },
          { q: 'How do I remove a domain?', a: 'Take it out of the list and re-run. Its managed vhost block and hosts-file entry are cleanly removed; nothing else is affected.' },
        ],
      },
      {
        heading: 'Requirements and licensing',
        items: [
          { q: 'Do I need to know OpenSSL?', a: 'Not at all — that is the entire point. You add domains and click a button. The tool uses the openssl.exe that ships with WampServer’s Apache under the hood.' },
          { q: 'What do I need to run it?', a: 'Windows 10 or 11, a working WampServer install, and Administrator rights (it self-elevates via UAC to write to the certificate store, hosts file and Apache config). You also need the .NET 8 runtime, unless you use the self-contained build that needs nothing pre-installed.' },
          { q: 'Is it really free?', a: 'Yes — free and open source under the MIT licence. No paid tier, no “pro” version, no catch.' },
          { q: 'Can I use it for production servers?', a: 'No. It is designed for local development. Production sites should use a public CA such as Let’s Encrypt.' },
          { q: 'Does it phone home or track me?', a: 'No. There are no servers, no accounts and no telemetry. The only network call it makes is the HTTPS check against your own localhost to verify the result.' },
        ],
      },
    ],
  },

  guideSsl: {
    meta: {
      title: 'WampServer HTTPS/SSL Setup: Trusted Localhost and .test Domains',
      description:
        'Enable trusted HTTPS mode for WampServer localhost and local .test domains with a local CA, Apache SSL vhosts, the hosts file, browser-safe certificates and one-click automation.',
      keywords: [
        'enable HTTPS mode for localhost WampServer',
        'WampServer SSL setup',
        'WAMP HTTPS localhost',
        'WampServer certificate warning',
        'Apache SSL virtual host Windows',
        'trusted local HTTPS',
        'WAMP SSL Automator',
      ],
    },
    h1: 'How to set up trusted HTTPS (SSL) on WampServer for Windows',
    lead: 'This guide shows you how to enable trusted HTTPS for WampServer localhost and local project domains such as myapp.test — first by understanding what the browser actually requires, then doing it by hand, and finally the one-click way. By the end you will know why localhost HTTPS is fiddly, why WAMP SSL certificates can still trigger warnings, and exactly how to make them trusted.',
    published: '2026-05-30',
    updated: '2026-05-30',
    tocLabel: 'On this page',
    sections: [
      {
        id: 'why-https-localhost',
        h2: 'Why run HTTPS on localhost at all?',
        html: `<p>Plenty of developers run their local sites over plain <code>http://</code> for years. So why bother with HTTPS on <code>localhost</code>?</p>
<p>Because modern browser features increasingly assume a secure context. These behave differently — or simply refuse to run — over plain HTTP:</p>
<ul>
<li>Service workers and the Cache API</li>
<li>Secure cookies and <code>SameSite=None</code> (needed for many OAuth and SSO flows)</li>
<li>OAuth/OpenID redirect URIs that require <code>https://</code></li>
<li>The Payment Request API, geolocation, camera and microphone access</li>
<li>HTTP/2, which browsers only negotiate over TLS</li>
</ul>
<p>If your production app uses any of these, testing over HTTP means testing a different code path than the one your users get. Running trusted HTTPS locally removes that gap.</p>`,
      },
      {
        id: 'why-self-signed-warning',
        h2: 'Why does a self-signed certificate show “Your connection is not private”?',
        html: `<p>The quick answer: <strong>trust is a chain, and a self-signed certificate has no chain.</strong></p>
<p>Your browser trusts a website when its certificate is signed by a Certificate Authority (CA) that your operating system already trusts. A self-signed certificate signs <em>itself</em> — there is no trusted authority vouching for it — so the browser does the correct thing and warns you. Clicking “Proceed anyway (unsafe)” works, but you are training yourself to ignore the exact warning that protects you elsewhere.</p>
<p>The professional fix is not to make a “better” self-signed certificate. It is to create your own small Certificate Authority, tell your computer to trust that authority once, and then sign each site’s certificate with it. That is precisely what the manual steps below do — and what WAMP SSL Automator does for you.</p>`,
      },
      {
        id: 'what-you-need',
        h2: 'What you need',
        html: `<ul>
<li><strong>WampServer</strong> installed and running on Windows 10 or 11. Its bundled Apache ships the <code>openssl.exe</code> used below.</li>
<li><strong>Administrator rights</strong>, because you will write to the Windows certificate store, the hosts file and the Apache config.</li>
<li>A project served by Apache, for example <code>C:\\wamp64\\www\\myapp\\public</code>.</li>
</ul>
<p>Throughout this guide the example domain is <code>myapp.test</code>. The <code>.test</code> suffix is reserved for testing and will never resolve on the public internet, which makes it ideal for local development.</p>`,
      },
      {
        id: 'wampserver-https-mode',
        h2: 'What about WampServer HTTPS mode for localhost?',
        html: `<p>If your search started with <strong>“Enable HTTPS mode for localhost”</strong>, you are in the right place. Recent WampServer versions include an HTTPS mode for <code>localhost</code>, which helps the WampServer dashboard itself answer on <code>https://localhost</code>.</p>
<p>Most project work needs more than that. Laravel, WordPress, Symfony, API backends and OAuth callbacks usually run on named virtual hosts such as <code>myapp.test</code>, <code>shop.test</code> or <code>api.test</code>. Those names still need the same hard parts: a trusted local Certificate Authority, per-domain certificates with Subject Alternative Names, Apache <code>:443</code> vhosts, Windows hosts-file entries, a clean restart and a real HTTPS verification step.</p>
<p>That is the gap WAMP SSL Automator targets. It does not replace WampServer; it automates the certificate and virtual-host work around WampServer so every local project can use trusted HTTPS without browser warnings.</p>`,
      },
      {
        id: 'manual-way',
        h2: 'Option A — the manual way (and where it bites)',
        html: `<p>Here is the honest version of the by-hand process, so you can see every moving part.</p>
<h3>1. Create a local Root CA</h3>
<p>Open a terminal where OpenSSL is available (WampServer ships it under <code>C:\\wamp64\\bin\\apache\\apache&lt;version&gt;\\bin</code>). Generate a CA key and a self-signed CA certificate:</p>
<pre><code>openssl genrsa -out myCA.key 4096
openssl req -x509 -new -nodes -key myCA.key -sha256 -days 3650 -out myCA.crt -subj "/CN=My Local Dev CA"</code></pre>
<h3>2. Trust the CA in Windows</h3>
<p>Import <code>myCA.crt</code> into the machine’s Trusted Root store. In an elevated PowerShell:</p>
<pre><code>Import-Certificate -FilePath myCA.crt -CertStoreLocation Cert:\\LocalMachine\\Root</code></pre>
<p><strong>Pitfall:</strong> importing into the current-user store instead of <code>LocalMachine\\Root</code>, or forgetting to run elevated, leaves the CA untrusted and the warning stays.</p>
<h3>3. Issue a certificate for your domain — with a SAN</h3>
<p>Modern browsers ignore the old Common Name field and require a <strong>Subject Alternative Name</strong> plus a <strong>serverAuth</strong> Extended Key Usage. Create an extensions file <code>myapp.ext</code>:</p>
<pre><code>subjectAltName = DNS:myapp.test
extendedKeyUsage = serverAuth</code></pre>
<p>Then generate a key, a CSR, and sign it with your CA for no more than 825 days:</p>
<pre><code>openssl genrsa -out myapp.key 2048
openssl req -new -key myapp.key -out myapp.csr -subj "/CN=myapp.test"
openssl x509 -req -in myapp.csr -CA myCA.crt -CAkey myCA.key -CAcreateserial -out myapp.crt -days 825 -sha256 -extfile myapp.ext</code></pre>
<p><strong>Pitfall:</strong> a missing SAN, a missing <code>serverAuth</code> EKU, or a validity over 825 days will all make Chrome and Edge reject a certificate that otherwise “looks fine”.</p>
<h3>4. Configure an Apache SSL vhost</h3>
<p>Make sure <code>mod_ssl</code> is enabled, then add a <code>:443</code> vhost to <code>httpd-vhosts.conf</code> and a <code>:80</code> redirect:</p>
<pre><code>&lt;VirtualHost *:80&gt;
  ServerName myapp.test
  Redirect permanent / https://myapp.test/
&lt;/VirtualHost&gt;

&lt;VirtualHost *:443&gt;
  ServerName myapp.test
  DocumentRoot "C:/wamp64/www/myapp/public"
  SSLEngine on
  SSLCertificateFile "C:/wamp64/certs/myapp.crt"
  SSLCertificateKeyFile "C:/wamp64/certs/myapp.key"
  &lt;Directory "C:/wamp64/www/myapp/public"&gt;
    Require local
  &lt;/Directory&gt;
&lt;/VirtualHost&gt;</code></pre>
<p><strong>Pitfall:</strong> one mistyped directive and Apache will not start — taking every site on your stack down until you find it.</p>
<h3>5. Map the domain in the hosts file</h3>
<p>Edit <code>C:\\Windows\\System32\\drivers\\etc\\hosts</code> (as Administrator) and add:</p>
<pre><code>127.0.0.1 myapp.test</code></pre>
<h3>6. Restart Apache and hope</h3>
<p>Restart the <code>wampapache</code> service. If you missed anything in steps 1–5, you find out now — usually with a stack that is offline rather than a helpful message.</p>
<p>It works, but it is a lot of exact, order-sensitive steps, repeated for every new project. That is the gap the tool closes.</p>`,
      },
      {
        id: 'one-click-way',
        h2: 'Option B — the one-click way',
        html: `<p>WAMP SSL Automator performs every step above for you, in the correct order, with a safety net:</p>
<ul>
<li>It generates and trusts the local Root CA once, then reuses it.</li>
<li>It issues each domain certificate with the exact SAN + EKU + 825-day profile browsers require.</li>
<li>It <strong>merges</strong> the vhost blocks into your existing config instead of overwriting it, and updates the hosts file inside marked sections.</li>
<li>It runs <code>httpd -t</code> before restarting, and <strong>rolls back automatically</strong> if anything fails — restoring timestamped backups of both files.</li>
<li>It fetches each domain over HTTPS afterwards and reports <code>N/N OK</code>.</li>
</ul>
<p>You add your domains, click <em>Generate SSL Configuration</em>, and watch the log. See the <a href="/en/how-it-works/">full nine-step pipeline</a> for exactly what runs.</p>`,
      },
      {
        id: 'verify',
        h2: 'How do I verify HTTPS is working?',
        html: `<p>Open <code>https://myapp.test</code> in Edge or Chrome. You should see a normal padlock and no warning. To check from the command line:</p>
<pre><code>curl -I https://myapp.test</code></pre>
<p>A trusted response with no certificate error means the chain is good. If you use Firefox, enable <code>security.enterprise_roots.enabled</code> in <code>about:config</code> once so it reads the Windows trust store too.</p>`,
      },
    ],
    faqs: [
      { q: 'Is WampServer localhost HTTPS free to set up?', a: 'Yes. Both the manual method and WAMP SSL Automator are free; the tool is open source under the MIT licence and uses the OpenSSL that already ships with WampServer.' },
      { q: 'Does WampServer already have an HTTPS mode for localhost?', a: 'Recent WampServer versions include HTTPS support for localhost, but project domains such as myapp.test still need trusted certificates, Apache SSL vhosts and hosts-file entries. WAMP SSL Automator focuses on automating that repeatable project-domain setup.' },
      { q: 'Why does Chrome still warn after I added an SSL certificate to WAMP?', a: 'Almost always because the certificate is self-signed (no trusted CA), is missing a Subject Alternative Name, lacks a serverAuth Extended Key Usage, or is valid for more than 825 days. Signing it with a trusted local CA and using the modern profile fixes the warning.' },
      { q: 'Can WAMP SSL Automator fix “Your connection is not private” on WampServer?', a: 'Yes, when the warning is caused by an untrusted local certificate. The tool creates a local Root CA, installs it into the Windows trust store, issues browser-compliant per-domain certificates and verifies each HTTPS domain after Apache restarts.' },
      { q: 'Where does WampServer keep the Apache SSL config?', a: 'In httpd-vhosts.conf (under the Apache conf/extra folder of your WAMP install). mod_ssl must be enabled, and SSL vhosts listen on port 443.' },
      { q: 'Do I have to repeat this for every project?', a: 'By hand, yes — each domain needs its own certificate, vhost and hosts entry. WAMP SSL Automator lets you manage a list of domains and regenerate everything at once, reusing the CA.' },
    ],
  },

  guideDomains: {
    meta: {
      title: 'How to Set Up Local .test Domains on Windows (WAMP)',
      description:
        'Set up local domains on Windows with the hosts file and Apache vhosts in WampServer — the manual way and the one-click way, with fixes for common problems.',
    },
    h1: 'How to set up local domains on Windows with WampServer',
    lead: 'Instead of working at http://localhost/myapp, you can give every project its own clean address like http://myapp.test. This guide explains the Windows hosts file and Apache virtual hosts, shows you how to wire them up, and how to add trusted HTTPS once they resolve.',
    published: '2026-05-30',
    updated: '2026-05-30',
    tocLabel: 'On this page',
    sections: [
      {
        id: 'what-is-local-domain',
        h2: 'What is a local domain, and why use one?',
        html: `<p>A local domain is a hostname that resolves only on your own machine, such as <code>myapp.test</code>. Nothing about it is published to the internet; your computer simply agrees to treat that name as an address for itself.</p>
<p>Local domains are worth the small setup because they let you:</p>
<ul>
<li>Run each project at its own root (<code>myapp.test</code>) instead of a sub-folder of <code>localhost</code>, so paths and cookies behave like production.</li>
<li>Run several projects side by side without path clashes.</li>
<li>Match the domain your framework expects (Laravel, Symfony, WordPress multisite, and others care about the host).</li>
<li>Add trusted HTTPS per domain, which a bare <code>localhost</code> makes awkward.</li>
</ul>`,
      },
      {
        id: 'hosts-file',
        h2: 'The Windows hosts file, explained',
        html: `<p>Before your computer asks a DNS server where a domain lives, it checks a local text file first. On Windows that file is:</p>
<pre><code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></pre>
<p>Any name you map there wins over the public internet. That is exactly what we want for local development: we point our chosen domain at <code>127.0.0.1</code>, the address that always means “this machine”.</p>`,
      },
      {
        id: 'map-domain',
        h2: 'Step 1 — map the domain in the hosts file',
        html: `<p>Open Notepad <strong>as Administrator</strong> (the file is protected), open the hosts file above, and add a line:</p>
<pre><code>127.0.0.1 myapp.test</code></pre>
<p>Save it. To confirm the name now resolves to your machine, open a terminal and run:</p>
<pre><code>ping myapp.test</code></pre>
<p>You should see replies from <code>127.0.0.1</code>. At this point the name resolves, but Apache does not yet know what to serve for it — that is the next step.</p>`,
      },
      {
        id: 'apache-vhost',
        h2: 'Step 2 — point Apache at it with a virtual host',
        html: `<p>A virtual host tells Apache which folder to serve for a given hostname. Open <code>httpd-vhosts.conf</code> in your WAMP install and add:</p>
<pre><code>&lt;VirtualHost *:80&gt;
  ServerName myapp.test
  DocumentRoot "C:/wamp64/www/myapp/public"
  &lt;Directory "C:/wamp64/www/myapp/public"&gt;
    Options Indexes FollowSymLinks
    AllowOverride All
    Require local
  &lt;/Directory&gt;
&lt;/VirtualHost&gt;</code></pre>
<p>Restart the Apache (<code>wampapache</code>) service from the WampServer tray icon, then open <code>http://myapp.test</code>. Your project should load at its own clean address.</p>
<p><strong>Tip:</strong> keep <code>Require local</code> so the vhost is only reachable from your own machine.</p>`,
      },
      {
        id: 'why-test-tld',
        h2: 'Why use .test, not .dev or .local?',
        html: `<p>Choose your suffix carefully:</p>
<ul>
<li><strong>.test</strong> — reserved by the IETF for testing. It will never be a real public domain, so it is the safest choice.</li>
<li><strong>.dev</strong> — a real public top-level domain owned by Google, preloaded for HTTPS-only (HSTS). Using it locally causes confusing redirects. Avoid it.</li>
<li><strong>.local</strong> — reserved for multicast DNS (mDNS/Bonjour) and can clash with network discovery. Avoid it.</li>
</ul>
<p>Stick with <code>.test</code> for predictable local development.</p>`,
      },
      {
        id: 'add-https',
        h2: 'Step 3 — add trusted HTTPS',
        html: `<p>Once your domain resolves and Apache serves it, the last step is a trusted certificate so the browser shows a green padlock instead of a warning. That needs a local Certificate Authority and a correctly-profiled certificate — covered in detail in our <a href="/en/guide/wampserver-ssl-https/">guide to trusted HTTPS on WampServer</a>.</p>
<p>You can do it by hand with OpenSSL, or let <a href="/en/">WAMP SSL Automator</a> create the CA, issue the certificate, add the <code>:443</code> vhost and hosts entry, restart Apache and verify the result — for every domain in your list, in one click.</p>`,
      },
      {
        id: 'common-problems',
        h2: 'Common problems and fixes',
        html: `<ul>
<li><strong>The domain does not resolve.</strong> The hosts file was not saved as Administrator, or an antivirus locked it. Re-open Notepad elevated and save again; flush DNS with <code>ipconfig /flushdns</code>.</li>
<li><strong>You see the default WAMP page, not your project.</strong> The <code>DocumentRoot</code> path is wrong, or Apache was not restarted after editing the vhost.</li>
<li><strong>Apache will not start after editing vhosts.</strong> A syntax error in <code>httpd-vhosts.conf</code>. Run <code>httpd -t</code> to see the offending line, fix it, and restart.</li>
<li><strong>403 Forbidden.</strong> The <code>&lt;Directory&gt;</code> block is missing or its path does not match the <code>DocumentRoot</code>.</li>
</ul>`,
      },
    ],
    faqs: [
      { q: 'Where is the hosts file on Windows?', a: 'At C:\\Windows\\System32\\drivers\\etc\\hosts. You must open your editor as Administrator to save changes, because the file is protected.' },
      { q: 'Do I need to edit the hosts file and an Apache vhost?', a: 'Yes — they do different jobs. The hosts file makes the domain resolve to your machine (127.0.0.1); the Apache virtual host tells the server which folder to serve for that domain.' },
      { q: 'Why should I use .test instead of .dev for local domains?', a: 'The .test suffix is reserved for testing and will never be a public domain. The .dev TLD is real and HTTPS-only (HSTS-preloaded), which causes confusing redirects when used locally.' },
      { q: 'How do I add HTTPS to a local domain?', a: 'Create a trusted local Certificate Authority, issue a certificate for the domain with a Subject Alternative Name, and add an Apache :443 vhost — or use WAMP SSL Automator to do all of it in one click.' },
    ],
  },
};
