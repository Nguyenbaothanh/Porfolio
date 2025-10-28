import type { PortfolioContent } from './types';

export const INITIAL_CONTENT: PortfolioContent = {
  header: {
    name: "NGUYEN BAO THANH",
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
      title: 'Languages & Databases',
      skills: [
        { name: 'Python', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Python</title><path d="M11.964 16.336c-3.21.024-5.23-1.64-5.23-3.72h2.448c0 .94.624 1.452 1.452 1.452.804 0 1.356-.384 1.356-1.056 0-.672-.552-1.008-1.356-1.38-1.032-.48-2.232-.936-2.232-2.688 0-1.56.984-2.616 2.688-2.616 1.476 0 2.448.804 2.448 1.824h-2.352c0-.408-.312-.624-.72-.624-.456 0-.744.264-.744.624 0 .408.288.648.96.96.936.432 2.4.96 2.4 2.832 0 1.776-1.152 2.976-3.144 2.976zm-.024-12.736c-3.21 0-5.23 1.64-5.23 3.72h2.448c0-.94.624-1.452 1.452-1.452.804 0 1.356.384 1.356 1.056 0 .672-.552-1.008-1.356 1.38-1.032.48-2.232.936-2.232 2.688 0 1.56.984 2.616 2.688 2.616 1.476 0 2.448.804 2.448 1.824h-2.352c0-.408-.312-.624-.72-.624-.456 0-.744.264-.744.624 0 .408.288.648.96.96.936.432 2.4.96 2.4 2.832 0 1.776-1.152 2.976-3.144 2.976v.024H12c6.627 0 12-5.373 12-12S18.627 0 12 0H0v12h11.94v-8.4z"/></svg>' },
        { name: 'SQL', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>SQL</title><path d="M4.68 15.544h2.952v-2.88H4.68v2.88zm3.936 0h2.952v-2.88H8.616v2.88zm3.936 0h2.952v-2.88h-2.952v2.88zM4.68 19.344h2.952v-2.88H4.68v2.88zm3.936 0h2.952v-2.88H8.616v2.88zm3.936 0h2.952v-2.88h-2.952v2.88zM24 12v1.92h-4.08V12H24zm-5.064 0v1.92h-4.08V12h4.08zM12 4.656h-2.904a2.92 2.92 0 00-2.904 2.904v9.888a.913.913 0 00.912.912H12a2.89 2.89 0 002.88-2.88V7.56A2.92 2.92 0 0012 4.656zm-1.008 1.896a.9.9 0 110 1.8.9.9 0 010-1.8zM12 0h-2.88a2.89 2.89 0 00-2.88 2.88v.864h2.88a2.89 2.89 0 012.88 2.88v10.368a.913.913 0 00.912.912H12a2.89 2.89 0 002.88-2.88V2.88A2.89 2.89 0 0012 0zm-1.008 2.88a.9.9 0 110 1.8.9.9 0 010-1.8zM4.08 12v1.92H0V12h4.08z"/></svg>' },
        { name: 'PostgreSQL', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#4169E1"><title>PostgreSQL</title><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 15.6H8.4V8.4h2.48c2.6 0 4.2 1.28 4.2 3.6 0 1.44-.8 2.56-2.04 3.12 1.44.52 2.44 1.72 2.44 3.48 0 2.68-1.8 4-4.56 4zm0-6.2c1.4 0 2.2-.76 2.2-2s-.8-2-2.2-2H9.6v4h1.28zm.08 4.8c1.64 0 2.6-.84 2.6-2.24s-.96-2.24-2.6-2.24H9.6v4.48h1.6z"/></svg>' },
        { name: 'MySQL', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#4479A1"><title>MySQL</title><path d="M12.001 2.213C6.586 2.213 2.214 6.586 2.214 12c0 5.414 4.372 9.787 9.787 9.787 5.414 0 9.787-4.373 9.787-9.787C21.787 6.585 17.414 2.213 12.001 2.213zm4.502 14.076c-.198.663-1.229.838-1.57.886l-2.06-2.583v2.333c0 .247-.197.444-.444.444h-1.06c-.247 0-.444-.197-.444-.444v-2.33l-2.085 2.58c-.34.05-.1.888-1.57.888s-1.374-.225-1.57-.888l3.14-3.816-3.14-3.816c.198-.663 1.229-.838 1.57-.886l2.086 2.58V5.008c0-.247.197-.444.444-.444h1.06c.247 0 .444.197.444.444v5.333l2.06-2.58c.34-.05 1.374-.225 1.57-.886l-3.14 3.816 3.14 3.815z"/></svg>' },
        { name: 'SQL Server', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#CC2927"><title>Microsoft SQL Server</title><path d="M4 4h12v2H4zm0 4h12v2H4zm0 4h12v2H4zm13 2l4 4-4 4v-3H9v-2h8z"/></svg>' },
      ],
    },
    {
      title: 'Data & Visualization',
      skills: [
          { name: 'Power BI', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F2C811"><title>Microsoft Power BI</title><path d="M12.57.48H3.43A1.43,1.43,0,0,0,2,1.92V22.08A1.43,1.43,0,0,0,3.43,23.52h9.14a1.44,1.44,0,0,0,1.44-1.44V1.92A1.44,1.44,0,0,0,12.57.48ZM7.14,19.2H4.29V8.64H7.14Zm4.29,0H8.57V12H11.43Zm4.28,0H12.86V15.12h2.85Z"/></svg>' },
          { name: 'Superset', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00AAB2"><title>Apache Superset</title><path d="M14.656 12.384c.096.384.096.864.096 1.44a5.57 5.57 0 0 1-.384 2.016l5.088 3.456A11.954 11.954 0 0 0 24 12c0-2.976-1.056-5.76-2.976-7.824L15.936 8.4a5.61 5.61 0 0 1-1.28 3.984zM12 17.616c-.96 0-1.824-.192-2.688-.48l-3.36 5.184A11.96 11.96 0 0 0 12 24a11.95 11.95 0 0 0 9.12-4.512l-5.184-3.552a5.524 5.524 0 0 1-3.936 1.68zM4.272 17.328l5.184-3.36A5.556 5.556 0 0 1 8.304 12c0-.576.096-1.152.288-1.68L2.976 5.616A11.954 11.954 0 0 0 0 12c0 2.976 1.056 5.76 2.976 7.824a12.032 12.032 0 0 0 1.296-2.5zM12 6.384c1.056 0 2.016.192 2.88.576l3.552-5.088A11.96 11.96 0 0 0 12 0 11.95 11.95 0 0 0 4.272 3.312l5.088 5.184A5.524 5.524 0 0 1 12 6.384z"/></svg>' },
          { name: 'N8n', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1A82E2"><title>n8n</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.18 5.76h4.36v1.45h-2.91v4.36h2.91v1.45h-2.91v4.36h2.91v1.46h-4.36v-1.46h2.91v-4.36h-2.91v-1.45h2.91V7.21h-2.91V5.76z"/></svg>' },
          { name: 'Airbyte', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#7D82FF"><title>Airbyte</title><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 4.41c.2-.24.5-.39.82-.41h.6c.32.02.62.17.82.41l4.47 5.23c.27.31.27.78 0 1.09l-4.47 5.23c-.2.24-.5.39-.82.41h-.6c-.32-.02-.62-.17-.82-.41L6.41 13.3c-.27-.31-.27-.78 0-1.09l4.47-5.23zm-.48 5.77-2.91 3.4h5.82l-2.91-3.4zm0-1.18 2.91-3.41 2.91 3.41h-5.82z"/></svg>' },
      ]
    },
    {
      title: 'DevOps, Cloud & Monitoring',
      skills: [
        { name: 'Jenkins', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Jenkins</title><path d="M12.013 0C11.127 0 9.51.154 8.78.36c-3.15.89-5.59 3.28-6.41 6.37C1.48 9.94.8 14.1.8 15.3c0 .12 0 .23.01.34.02.29.06.57.1.85 1.1 6.2 6.84 10.49 13.91 8.2a10.22 10.22 0 007.82-7.83c2.28-7.07-1.99-13.81-8.2-14.9a10.2 10.2 0 00-2.43-.22zm-.11 3.49c.6 0 1.09.49 1.09 1.09s-.49 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"/></svg>' },
        { name: 'CI/CD', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F05032"><title>Git</title><path d="M22.523 9.856L14.143.914a2.95 2.95 0 0 0-4.228 0L1.477 9.856a2.95 2.95 0 0 0 0 4.228l4.228 4.542a.57.57 0 0 0 .818 0l2.062-2.126v3.297a.57.57 0 0 0 .57.57h2.95a.57.57 0 0 0 .57-.57v-3.297l2.062 2.126a.57.57 0 0 0 .818 0l4.228-4.542a2.95 2.95 0 0 0 0-4.228zM12.28 15.22a3.15 3.15 0 1 1 0-6.29 3.15 3.15 0 0 1 0 6.29zm-5.698-5.364h3.297a.57.57 0 0 0 0-1.14H6.582a.57.57 0 0 0 0 1.14z"/></svg>' },
        { name: 'Docker', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2496ED"><title>Docker</title><path d="M23.15 10.395c-.24-.03-.45-.09-.69-.12-1.2-.15-1.95-.6-2.34-1.5-.15-.39-.24-.78-.24-1.2 0-.27.03-.54.06-.81.06-.48.15-.96.27-1.41.33-1.23.9-2.34 1.74-3.21C20.25.405 18.06 0 16.05 0c-2.4 0-4.5.6-5.94 1.77-.3.24-.78.69-.96 1.14-.15.39-.24.78-.24 1.2 0 .42.09.84.24 1.23.39.9 1.14 1.35 2.34 1.5.24.03.45.09.69.12.15.03.3.03.45.03h3.03c.15 0 .3-.015.45-.03zm-1.89 1.14H2.43c-.3 0-.57.03-.84.06-.78.12-1.35.33-1.59.63s-.24.78-.24 1.23c0 .66.21 1.26.63 1.77.42.51.99.81 1.68.93H21c.69-.12 1.26-.42 1.68-.93.42-.51.63-1.11.63-1.77 0-.45-.06-.93-.24-1.23s-.81-.51-1.59-.63c-.27-.03-.54-.06-.84-.06zM8.88 7.335H6.15v2.25H8.88v-2.25zm0 3.15H6.15v2.25H8.88v-2.25zm0 3.15H6.15v2.25H8.88v-2.25zm3.75-6.3H9.9v2.25h2.73v-2.25zm0 3.15H9.9v2.25h2.73v-2.25zm0 3.15H9.9v2.25h2.73v-2.25zm3.75-3.15h-2.73v-2.25h2.73v2.25zm0-3.15h-2.73v-2.25h2.73v2.25z"/></svg>' },
        { name: 'Kubernetes', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#326CE5"><title>Kubernetes</title><path d="M2.36 7.225l7.336-4.322a1.45 1.45 0 0 1 1.45 0l7.336 4.322a1.45 1.45 0 0 1 .726 1.25v8.65a1.45 1.45 0 0 1-.726 1.25l-7.336 4.322a1.45 1.45 0 0 1-1.45 0l-7.336-4.322a1.45 1.45 0 0 1-.726-1.25v-8.65a1.45 1.45 0 0 1 .726-1.25zM12 12.755l-5.46-3.216v-2.1L12 10.65l5.46-3.214v2.1zm0 1.543l5.46-3.216L12 7.868l-5.46 3.214zM8 14.73l-1.46.86v-3.43l1.46-.86zm8 0l1.46.86v-3.43l-1.46-.86z"/></svg>' },
        { name: 'Prometheus', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#E6522C"><title>Prometheus</title><path d="M12.03 24A12 12 0 0 1 0 12v-.22c.2-.28.4-.56.62-.82.1-.12.22-.24.33-.35L3.48 8.1c.07-.07.13-.15.2-.22a12.01 12.01 0 0 1 18.23-2.22c.16.14.3.28.45.43l2.5 2.5c.08.08.15.16.22.25A12.01 12.01 0 0 1 12.03 24zM8.34 9.17H12v2.75H8.34V9.17zm0 4.12H12v2.75H8.34v-2.75zm8.9-1.37a2.7 2.7 0 0 0-3.3-2.58l-1.07-1.07a4.13 4.13 0 1 1 5.44 5.44l-1.07-1.07a2.7 2.7 0 0 0 0-2.19v.27z"/></svg>' },
        { name: 'Grafana', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F46800"><title>Grafana</title><path d="M13.43 2.126l-1.09-1.091L2.127 11.25v1.545l10.212-6.545v15.364l-4.91-4.91-1.09 1.09 6.545 6.546 6.545-6.546-1.09-1.09-4.91 4.91V4.253l10.212 6.545V9.252L13.43 2.126z"/></svg>' },
        { name: 'AWS (Basic)', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FF9900"><title>Amazon AWS</title><path d="M12.235 15.362c-2.023 0-3.812-.587-5.232-1.745-.39-.307-.487-.893-.18-1.283.307-.39.893-.487 1.284-.18 1.14.862 2.508 1.34 4.128 1.34 1.62 0 2.988-.478 4.128-1.34.39-.307 1.002-.185 1.284.18.307.39.185 1.002-.18 1.284-1.42 1.157-3.21 1.744-5.232 1.744zM21.7 10.358c-.13-.508-.63-.805-1.113-.702-.508.13-.805.63-.702 1.114.307 1.492.487 3.033.308 4.549-.18 1.822-.915 3.51-2.22 4.904-1.306 1.393-2.988 2.3-4.954 2.513-2.023.23-4.046-.282-5.753-1.234-1.782-1.002-3.193-2.513-4.02-4.344-.852-1.848-1.002-3.915-.487-5.908.513-1.95 1.62-3.708 3.217-4.98.025-.025.025-.05 0-.075l-.025.025c1.62-1.306 3.62-1.976 5.753-1.976 2.072 0 4.1.612 5.803 1.797.385.282.945.18 1.258-.205.313-.385.205-.945-.205-1.258-2.023-1.492-4.524-2.274-7.062-2.274-2.513 0-4.878.78-6.907 2.3-2.023 1.517-3.435 3.633-4.07 5.983-.636 2.35.488 4.853.386 7.087.915 2.248 2.513 4.175 4.653 5.428 2.14.13 4.628 1.797 7.062 1.517 2.513-.282 4.828-1.393 6.51-3.033 1.708-1.646 2.693-3.734 2.962-5.958.282-2.248.075-4.524-.308-6.667z"/></svg>' },
        { name: 'Google Cloud (Basic)', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Google Cloud</title><path fill="#4285F4" d="M18.5,13.5c0-3.3-2.7-6-6-6s-6,2.7-6,6h12z"/><path fill="#34A853" d="M12.5,19.5c3.3,0,6-2.7,6-6h-12C6.5,16.8,9.2,19.5,12.5,19.5z"/><path fill="#FBBC05" d="M6.5,7.5c0,3.3,2.7,6,6,6V1.5C9.2,1.5,6.5,4.2,6.5,7.5z"/><path fill="#EA4335" d="M18.5,7.5c0-3.3-2.7-6-6-6v12C15.8,13.5,18.5,10.8,18.5,7.5z"/></svg>' },
      ],
    },
    {
      title: 'Task Management',
      skills: [
          { name: 'Jira', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0052CC"><title>Jira</title><path d="M12.001.21a11.79 11.79 0 1011.79 11.79A11.79 11.79 0 0012.001.21zm4.908 16.711l-4.81-4.811-4.887 4.886a1.042 1.042 0 01-1.474 0L4.26 15.53a1.043 1.043 0 010-1.474l4.886-4.886-4.81-4.81a1.042 1.042 0 010-1.475l1.475-1.475a1.043 1.043 0 011.474 0l4.81 4.81L17.02 4.26a1.042 1.042 0 011.474 0l1.475 1.475a1.043 1.043 0 010 1.474l-4.81 4.81 4.886 4.886a1.042 1.042 0 010 1.474l-1.475 1.475a1.042 1.042 0 01-1.473 0z"/></svg>' },
          { name: 'Notion', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Notion</title><path d="M20.25 3H3.75A.75.75 0 0 0 3 3.75v16.5A.75.75 0 0 0 3.75 21h16.5A.75.75 0 0 0 21 20.25V3.75A.75.75 0 0 0 20.25 3zM8.06 18H5.5V6h3.44l2.12 4.122L13.19 6h3.44v12h-2.56V9.878l-2 4.244L10.62 18H8.06z"/></svg>' },
      ]
    }
  ],
  projects: [
    {
      title: 'Visualize Dashboard',
      description: 'Developed a data visualization dashboard using Power BI, facilitating efficient data analysis and presentation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop',
      tags: ['Power BI', 'Data Visualization', 'Data Analysis'],
      repoUrl: 'https://github.com/Nguyenbaothanh/Dashboard',
    },
    {
      title: 'Automation Workflow',
      description: 'Utilized n8n to automate tasks (ETL, AI, Read Insight Data), optimizing workflows and enhancing data processing efficiency.',
      image: 'https://images.unsplash.com/photo-1504639725590-7ea024b3b198?q=80&w=600&h=400&fit=crop',
      tags: ['N8N', 'ETL', 'Automation', 'AI'],
      repoUrl: 'https://github.com/Nguyenbaothanh/Automation-Workflow',
    },
    {
      title: 'CI/CD Pipeline',
      description: 'CI/CD pipeline using GitHub for code management, Docker for containerization, Jenkins for CI/CD, and Netlify for fast web deployment.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=600&h=400&fit=crop',
      tags: ['CI/CD', 'Jenkins', 'Docker', 'GitHub', 'Netlify'],
      repoUrl: 'https://github.com/Nguyenbaothanh/learn-jenkins-app',
    },
    {
      title: 'AI Knowledge Base Preparation',
      description: 'Engineered a system to construct a knowledge base for AI applications by generating embeddings for both images and text, enabling advanced semantic search and retrieval.',
      image: 'https://images.unsplash.com/photo-1620712943543-263632591656?q=80&w=600&h=400&fit=crop',
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
    name: "Nguyen Bao Thanh"
  }
};