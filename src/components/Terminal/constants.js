export const FILE_SYSTEM = {
  '/about': {},
  '/about/skills': {},
  '/about/skills/tech': {
    content: `Ethereum         Foundry, Wagmi, OpenZeppelin, The Graph, Snarkjs
Back End         NodeJS, ExpressJS, Routing-controllers, Passport, Deno, Flask, Elasticsearch, IPFS
Front End        React, Redux, NextJS, Semantic-UI, Tailwindcss
Database         PostgreSQL, MongoDB, Redis, BullMQ
DevOps           Docker, Kubernetes, Github Actions, Pulumi
Version Control  Git, GitHub
OS               Linux (Debian/Ubuntu), MacOS
Data Science     Pandas, Scipy, Numpy, Scikit-learn, Jupyter, Seaborn, Bokeh, Knime
`,
  },
  '/about/skills/languages': {
    content: `Typescript, Javascript, Solidity, Python, SQL, HTML, CSS, Bash, (Rust, Golang)
French, English, German, (Spanish)

(Beginner)`,
    canModify: false,
  },
  '/about/education': {
    content: `YEAR   DEGREE                  SCHOOL
2012   Master of Engineering   Ecole Centrale de Nantes
2009   Bachelor of Science     Lycée Kerichen de Brest
`,
    canModify: false,
  },
  '/about/experiences': {
    content: `YEAR           ROLE                                     COMPANY
2022           Web3 Engineer                            Ethereum Foundation
2021           Blockchain Engineer                      Exodus
2020           Full Stack Web Developer                 Airbus
2019           Data Analyst                             Airbus
2017-2018      Project and Performance Manager          Airbus
2013-2016      Technical Data Engineer                  Airbus
2012           Intern, Standardization Office           Renault
2011           Intern, Supply & Trading dpt             Total`,
    canModify: false,
  },
  '/portfolio': {},
  '/portfolio/bitcoin-opreturn-indexer': {
    content: 'Index and store bitcoin OP_RETURN data. Serve via JSON API.',
    canModify: false,
  },
  '/portfolio/channels-raidar': {
    content: 'Monitoring of Raiden Network payment Channels.',
    canModify: false,
  },
  '/portfolio/airchain': {
    content: 'Ethereum dapp to manage an aircraft manufacturing supply chain.',
    canModify: false,
  },
  '/portfolio/ipfs-upload-dapp': {
    content:
      'Uploads file to IPFS & stores corresponding hash on Ethereum without requiring user to spend gas.',
    canModify: false,
  },
  '/portfolio/kickstartereum': {
    content: 'Ethereum dapp to manage Kickstarter campaigns.',
    canModify: false,
  },
  '/portfolio/decentralized-house-listing': {
    content:
      'Decentralized house listing service using ERC721 standard, ZKSNARK, and OpenSea.',
    canModify: false,
  },
  '/portfolio/flight-surety': {
    content: 'Ethereum dApp to manage flight insurances.',
    canModify: false,
  },
  '/contact': {
    content: `email: me@sripwoud.xyz
discord, telegram, twitter: @sripwoud`,
    canModify: false,
  },
}
