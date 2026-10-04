import Image from 'next/image';
import buyMeACoffee from './rsc/buymeacoffee.png';
import linkedinLogo from './rsc/linkedin-logo.png';
import githubLogo from './rsc/github-logo.png';
import mailLogo from './rsc/mail.png';

const links = [
  {
    label: 'EverSama Labs GitHub',
    href: 'https://github.com/eversama-labs',
    kind: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/eversama-labs/',
    kind: 'linkedin',
  },
  {
    label: 'Zayaan`s Linkedin',
    href: 'https://www.linkedin.com/in/zayaankkhan',
    kind: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:eversamalabs@gmail.com',
    kind: 'email',
  },
  {
    label: 'Buy the org a coffee',
    href: 'https://buymeacoffee.com/eversamalabs',
    kind: 'coffee',
  },
];

function HomeLinkIcon({ kind }: { kind: string }) {
  if (kind === 'github') {
    return (
      <Image
        src={githubLogo}
        alt="GitHub logo"
        width={24}
        height={24}
        className="homeLinkIcon"
      />
    );
  }

  if (kind === 'linkedin') {
    return (
      <Image
        src={linkedinLogo}
        alt="LinkedIn logo"
        width={24}
        height={24}
        className="homeLinkIcon"
      />
    );
  }

  if (kind === 'email') {
    return (
      <Image
        src={mailLogo}
        alt="Email logo"
        width={24}
        height={24}
        className="homeLinkIcon"
      />
    );
  }

  if (kind === 'coffee') {
    return (
      <Image
        src={buyMeACoffee}
        alt="Buy Me a Coffee logo"
        width={24}
        height={24}
        className="homeLinkIcon"
      />
    );
  }

  return null;
}

export default function Home() {
  return (
    <main className="container">
      <div className="homePage">
        <header className="homeIntro">
          <p className="eyebrow">EverSama Labs</p>
          <h1 className="heroTitle">
            <span className="heroLine heroLinePrimary">Building AI</span>
            <span className="heroLine heroLineAccent">for meaningful impact.</span>
          </h1>
          <p className="homeSummary">
            We explore research, design, and product ideas at the edge of AI,
            with a focus on human-centered tools that help people move faster,
            understand more, and build better systems.
          </p>
        </header>

        <div className="homeLinks">
          {links.map((link) => {
            const isExternal = link.href.startsWith('http');

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="homeLink"
              >
                <HomeLinkIcon kind={link.kind} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
