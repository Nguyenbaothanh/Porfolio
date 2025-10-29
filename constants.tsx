import type { PortfolioContent } from './types';

export const INITIAL_CONTENT: PortfolioContent = {
  header: {
    name: "Portfolio",
  },
  hero: {
    line1: "Hello, I'm Nguyen Bao Thanh.",
    line2: "A ",
    line3: "Business Intelligence",
    description: "I specialize in data analysis, building ETL pipelines, and visualizing information to support data-driven business decisions.",
  },
  about: {
    image: "https://i.postimg.cc/wTDF0Qg7/z4907022561425-52e4b5ddf0de3f23d348bab9a84ebe83.jpg",
    p1: "Hello! I'm Thanh, a passionate Business Intelligence specialist aiming to build a strong foundation by continuously improving my skills and overcoming challenges.",
    p2: "In the coming years, I plan to specialize in my field, take on more responsible roles, and contribute to impactful projects.",
    p3: "I am committed to lifelong learning, always seeking opportunities to grow and make meaningful contributions to the data technology industry.",
  },
  skills: [
    {
      title: 'Programming & Database',
      skills: [
        { name: 'Python' },
        { name: 'SQL' },
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'SQL Server' },
      ],
    },
    {
      title: 'Data Visualization',
      skills: [
          { name: 'Power BI' },
          { name: 'Superset' },
          { name: 'Pivot Excel' },
          { name: 'Dashboard Design' },
      ]
    },
    {
      title: 'ETL & Data Tools',
      skills: [
        { name: 'N8n' },
        { name: 'Airbyte' },
        { name: 'Kafka' },
        { name: 'Scrapy' },
        { name: 'RSS' },
      ],
    },
    {
      title: 'DevOps & Monitoring',
      skills: [
        { name: 'Jenkins' },
        { name: 'CI/CD' },
        { name: 'Kubernetes' },
        { name: 'Docker' },
        { name: 'Prometheus' },
        { name: 'Grafana' },
      ],
    },
     {
      title: 'Cloud & Platforms',
      skills: [
        { name: 'AWS (Basic)' },
        { name: 'Google Cloud (Basic)' },
        { name: 'On-premise' },
        { name: 'WordPress' },
        { name: 'Linux Ubuntu' },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
          { name: 'Presentation' },
          { name: 'Communication' },
          { name: 'Teamwork' },
          { name: 'Jira' },
          { name: 'IELTS 6.0' },
      ]
    }
  ],
  experience: [
    {
      role: 'Operation & DevOps',
      company: 'OwlSpire',
      companyDescription: 'Team Project',
      period: 'Jan 2025 - Present',
      description: [
        'Monitor website performance using Grafana and Prometheus',
        'Administer company websites on Linux servers (Ubuntu)',
        'Set up CI/CD pipelines with GitHub Actions and Jenkins',
        'Develop automation workflows using LLMs',
        'Manage WordPress websites and scraping tools'
      ],
      tags: ['Grafana', 'Prometheus', 'Jenkins', 'GitHub Actions', 'Linux', 'WordPress']
    },
    {
      role: 'Database & System Management',
      company: 'Cas Technology Service Solutions',
      companyDescription: 'Full-time',
      period: 'July 2024 - Dec 2024',
      description: [
        'Performed ETL processes using Superset and Airbyte',
        'Designed and visualized dashboards with Superset',
        'Optimized database performance and monitored systems',
        'Transformed data from Excel to PostgreSQL Data Warehouse',
        'Streamlined data management processes'
      ],
      tags: ['Superset', 'Airbyte', 'PostgreSQL', 'Prometheus', 'Grafana', 'Excel']
    },
    {
      role: 'Data Analyst',
      company: 'Hahalolo',
      companyDescription: 'Global Travel Social Network',
      period: 'Feb 2022 - Mar 2023',
      description: [
        'Developed dashboards using Power BI',
        'Built ETL pipelines with Kafka',
        'Provided actionable insights for business decisions',
        'Maintained efficient data processing systems',
        'Collaborated with cross-functional teams'
      ],
      tags: ['Power BI', 'Kafka', 'ETL', 'Data Visualization']
    }
  ],
  projects: [
    {
      title: 'Visualize Dashboard',
      description: 'Developed a data visualization dashboard using Power BI, facilitating efficient data analysis and presentation.',
      image: 'https://assets.justinmind.com/wp-content/uploads/2018/12/6-best-practices-for-Dashboard-Design-Justinmind-header-768x492.png',
      tags: ['Power BI', 'Data Visualization', 'Data Analysis'],
      repoUrl: 'https://github.com/Nguyenbaothanh/Dashboard',
    },
    {
      title: 'Automation Workflow',
      description: 'Utilized n8n to automate tasks (ETL, AI, Read Insight Data), optimizing workflows and enhancing data processing efficiency.',
      image: 'https://cdn.prod.website-files.com/64be86eaa29fa71f24b00685/6566021e312a8bb43bae53a5_How%20Workflow%20Automation%20Transforms%20Modern%20Business_%20(1).jpg',
      tags: ['N8N', 'ETL', 'Automation', 'AI'],
      repoUrl: 'https://github.com/Nguyenbaothanh/Automation-Workflow',
    },
    {
      title: 'CI/CD Pipeline',
      description: 'CI/CD pipeline using GitHub for code management, Docker for containerization, Jenkins for CI/CD, and Netlify for fast web deployment.',
      image: 'https://static.tildacdn.com/tild3034-3239-4861-b436-643837646234/Standard-DevOps-CICD.png',
      tags: ['CI/CD', 'Jenkins', 'Docker', 'GitHub', 'Netlify'],
      repoUrl: 'https://github.com/Nguyenbaothanh/learn-jenkins-app',
    },
    {
      title: 'AI Knowledge Base Preparation',
      description: 'Engineered a system to construct a knowledge base for AI applications by generating embeddings for both images and text, enabling advanced semantic search and retrieval.',
      image: 'https://cdn.vectorstock.com/i/500p/67/72/knowledge-base-icon-set-education-vector-55136772.jpg',
      tags: ['AI', 'Data Engineering', 'Embeddings', 'Knowledge Base', 'Python'],
      repoUrl: 'https://github.com/Nguyenbaothanh/embedding-images.git',
    },
  ],
  contact: {
    email: "thanh2952002@gmail.com",
    github: "https://github.com/Nguyenbaothanh",
    linkedin: "https://www.linkedin.com/in/thanh-nguyen-166223266/",
  },
  footer: {
    name: "Portfolio"
  }
};