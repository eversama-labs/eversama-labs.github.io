'use client'

import Image from 'next/image';
import logo from '../rsc/logo.png';
import zayaan from '../rsc/zayaan.png';

const members = [
    {
        name: 'Zayaan Khan',
        photo: zayaan,
        role: 'Founder & Lead',
        bio: 'Leads the lab’s vision, research direction, and product strategy for all projects.',
    },
    {
        name: 'Collaborators',
        role: 'Product & Engineering',
        bio: 'Bringing people together for design, engineering, and experimentation across various projects. Our collaborators contribute fresh ideas, build and test prototypes, and help turn early research into polished, human-centered tools. Together we share feedback openly and keep learning from every experiment.',
    },
];

const principles = [
    'Curiosity',
    'Collaboration',
    'Human-centered impact',
];

export default function About() {
    return (
        <div className="container">
            <div className="aboutText">
                <header className="aboutHeader">
                    <p className="eyebrow">About the lab</p>
                    <h1 className="aboutHeadline">
                        <span>Welcome to EverSama Labs!</span>
                        <Image
                            src={logo}
                            alt="EverSama Labs logo"
                            width={70}
                            height={70}
                            className="aboutLogo"
                        />
                    </h1>
                </header>

                <section className="aboutSection">
                    <p>
                        EverSama Labs is an AI research and development lab founded
                        by Zayaan Khan, built around a simple idea: always reach for
                        the skies in whatever we do.
                    </p>
                </section>

                <div className="aboutGrid">
                    <section className="aboutPanel">
                        <h2>The mission</h2>
                        <p>
                            The name Sama (سماء) means “skies” in Arabic, while Ever
                            represents our commitment to continually reach beyond what
                            is possible. Together, EverSama embodies a pursuit of
                            progress to build people-centered solutions without a fixed ceiling.
                        </p>
                    </section>

                    <section className="aboutPanel">
                        <h2>Core values</h2>
                        <ul>
                            {principles.map((principle) => (
                                <li key={principle}>{principle}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <section className="membersSection">
                    <h2>Organization Structure</h2>
                    <div className="membersContainer">
                        <div className="memberGrid">
                            {members.map((member) => (
                                <article key={member.name} className="memberCard">
                                    {member.photo && (
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            width={96}
                                            height={96}
                                            className="memberPhoto"
                                        />
                                    )}
                                    <h3>{member.name}</h3>
                                    <span>{member.role}</span>
                                    <p>{member.bio}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}