'use strict';

export let jobs = [];

const job1 = {
  employmentPeriods: 'Jan 2023 - Present',
  jobRole: 'CyberDefense Specialist',
  company: 'Jumia Group',
  jDs: [
    '&#9672; Identify opportunities to improve security and implement the tools necessary to execute improvements considering full automation',
    '&#9672; Proactively identify and remediate security risks introduced by the cloud platforms, or as flagged by vulnerability scanning software',
    '&#9672; Implement solutions necessary to address security audits and compliance efforts on our cloud platform',
    '&#9672; Drive continuous improvement to reduce threat dwell time in our environment through automation, and process simplification, among others',
    '&#9672; Work closely with development teams to ensure we are considering security when architecting and building new features/applications',
    '&#9672; Ensure that solutions are engineered with operational efficiency and security by design',
    '&#9672; Build automation frameworks and systems to improve security by design mentality on current CI/CD system',
    '&#9672; Configure and fine-tune security tools for optimal threat detection and prevention',
    '&#9672; Participate in on-call for security incident response',
    '&#9672; Provide Executive level non-technical analysis to effectively illustrate the potential impact of weaknesses identified to various audiences',
  ],
};

const job2 = {
  employmentPeriods: 'Apr 2020 - Dec 2022',
  jobRole: 'Cloud Security Consultant',
  company: 'Nobus Cloud',
  jDs: [
    '&#9672; Conduct thorough security assessments of cloud infrastructure, services, and configurations',
    '&#9672; Identify vulnerabilities, weaknesses, and potential threats within the cloud environment',
    '&#9672; Design and configure security controls, such as firewalls, access controls, encryption, and identity and access management (IAM) policies',
    `&#9672; Ensure cloud services comply with industry-specific regulatory requirements and standards (e.g., PCI DSS)`,
    '&#9672; Set up security monitoring, alerting, and incident response mechanisms for cloud environments',
    '&#9672; Ensure that vendor solutions meet security requirements and standards',
    '&#9672; Collaborate with DevOps teams to integrate security into the CI/CD pipeline (DevSecOps)',
    '&#9672; Maintain comprehensive documentation of cloud security configurations and policies',
    '&#9672; Implement security automation for continuous security monitoring and compliance checking',
  ],
};

const job3 = {
  employmentPeriods: 'Apr 2015 - Feb 2020',
  jobRole: 'Security Operations Support Lead',
  company: 'TruGoG',
  jDs: [
    '&#9672; Investigate and analyze security incidents, identifying the scope, impact, and root causes',
    '&#9672; Use threat intelligence and analysis tools to identify new and emerging cyber threats',
    '&#9672; Prioritize and categorize security alerts based on their severity and potential impact',
    `&#9672; Participate in incident response activities, including containment, eradication, and recovery efforts`,
    '&#9672; Maintain documentation of security incidents, response procedures, and security configurations',
    `&#9672; Assist in the management and tuning of security tools, such as firewalls, IDS/IPS systems, antivirus solutions, and endpoint detection and response (EDR) systems`,
    '&#9672; Collaborate with DevOps teams to integrate security into the CI/CD pipeline (DevSecOps)',
    `&#9672; Continuous fine-tuning of security solutions to reduce the occurrence of false positive and false negative alerts`,
    `&#9672; Continuously monitor security alerts and events generated by various security tools, including SIEM and EDR systems`,
    `&#9672; Threat hunting, monitoring and managing different severity incidents from various attack surfaces`,
  ],
};

const job4 = {
  employmentPeriods: 'Jun 2011 - Apr 2015',
  jobRole: 'Security Analyst',
  company: 'ActivEdge Technologies',
  jDs: [
    '&#9672; Assist in identifying and investigating security incidents',
    '&#9672; Support in implementing intrusion detection and prevention systems',
    '&#9672; Analyze security data to detect and investigate security breaches or anomalies',
    `&#9672; Assist in creating and refining security detection rules and use cases`,
    '&#9672; Keep track of vulnerabilities and assist in remediation efforts',
    `&#9672; Monitor security alerts, logs, and events from various sources to identify potential security incidents`,
    '&#9672; Document incident details, actions taken, and lessons learned for future reference',
    `&#9672; Provide direct integration of threat intelligence with existing monitoring tools`,
    `&#9672; Stay updated on the latest cybersecurity threats and trends`,
    `&#9672; Research and advise on appropriate security products to defend against different threat and attack
    vectors`,
  ],
};

const job5 = {
  employmentPeriods: 'Aug 2009 - May 2011',
  jobRole: 'Junior Database Administrator',
  company: 'Guinee Current Large Marine Ecosystem (GCLME)',
  jDs: [
    `&#9672; Assist in routine database maintenance tasks, including backups, restores, and database optimization`,
    `&#9672; Implement and maintain database security measures, including user access controls, encryption, and data masking`,
    `&#9672; Monitor database performance and assist in identifying and resolving performance bottlenecks and issues`,
    `&#9672; Ensure data integrity and consistency within the database by performing regular data validation and integrity checks`,
    '&#9672; Help optimize SQL queries for improved database performance',
    `&#9672; Assist in planning and executing database software upgrades and applying patches as necessary`,
    `&#9672; Assist in diagnosing and resolving database-related problems, including performance issues, errors, and outages`,
    `&#9672; Continuously learn and stay updated on emerging database technologies and best practices in database administration`,
  ],
};

jobs.push(job1, job2, job3, job4, job5);
