import gdctImg from '../assets/gdct.jpg'
import ielts from '../assets/ielts.jpg'

export const projects = [
  {
    title: 'Generic Data Collection Tools',
    description: 'A web application that extracts and stores data from uploaded Excel files into SQL Server and SharePoint, with built-in support for template customization, secure authentication, and automated approval workflows.',
    tasks: [
      'Deployed with C# .NET and Blazor Web Server following an n-tier architecture for modularity and maintainability',
      'Utilized Entity Framework Core and LINQ to efficiently manage and query SQL Server Express databases', 
      'Built and refined an Excel data extraction and merge tool using Open XML SDK, improving processing speed by 90%', 
      'Integrated with SharePoint APIs to manage, upload, and retrieve Excel documents programmatically', 
      'Developed RESTful APIs to facilitate communication between the front-end and back-end layers', 
      'Implemented secure authentication and authorization using OpenID Connect (OIDC) and Azure Active Directory (AAD)',
      'Enabled template designers to modify Excel templates, triggering Power Automate workflows for approval notifications',
      'Admin and user interfaces for managing uploaded data, templates, and approval statuses',
      'Hosted and deployed on Microsoft Azure, leveraging cloud scalability and security'
    ],
    tech: [
      'C# .NET',
      'Blazor Server',
      'Entity Framework Core (EF Core)',
      'Microsoft SQL Server',
      'RESTful APIs',
      'Azure Active Directory (AAD)',
      'Microsoft Power Automate',
    ],
    img: gdctImg
  },
  {
    title: 'Data Tranfer Tools',
    description: 'A server-side integration tool that facilitates real-time data exchange between business systems with a focus on scalability, security, and automation.',
    tasks: [
      'Built with Node.js to handle API communication and business logic for B2B data transfers.',
      'Used Amazon DynamoDB for fast, scalable, and schema-less data storage.',
      'Secured endpoints and data flow with OAuth 2.0, ensuring authentication and access control.',
      'Handled and transformed complex JSON structures for seamless downstream integration.',
      'Validated system reliability through Postman for API testing and Jest for unit testing.',
      'Automated repetitive tasks and deployments with custom Bash scripts, reducing manual workload.',
    ],
    tech: [
      'Node.js',
      'Amazon DynamoDB',
      'OAuth 2.0',
      'Postman',
      'Jest',
      'Bash',
      'Axios',
      'JSON'
    ],
    code: {
      projectName: 'dataTransfer',
      filenames: ['snippet1.txt', 'snippet2.txt']
    }
  },
  {
    title: 'Proprietary Software Integration Tool',
    description: 'A backend integration module designed to enable seamless communication and data exchange between a proprietary system, Strapi CMS, and Jira using TypeScript and Axios.',
    tasks: [
      'Developed backend integrations with Strapi CMS and Jira APIs to streamline content and issue tracking workflows.',
      'Used TypeScript to enforce strong typing and maintain scalable code architecture.',
      'Handled HTTP requests and responses efficiently with Axios for reliable API communication.',
      'Ensured seamless data flow and synchronization between internal systems and third-party platforms.',
      'Troubleshot and resolved API-related issues to maintain data integrity and system reliability.',
    ],
    tech: [
      'TypeScript',
      'Axios',
      'Strapi CMS',
      'Jira API',
      'REST APIs',
      'Node.js',
      'JSON'
    ]
  },
  {
    title: 'Data Scraping and Analyzing Application',
    description: 'An RPA-based automation tool designed to scrape, process, and analyze large datasets using UiPath Studio and JavaScript to support data-driven business decisions.',
    tasks: [
      'Automated data scraping processes using UiPath Studio integrated with JavaScript.',
      'Managed the full RPA development lifecycle, from requirements gathering to deployment.',
      'Processed and analyzed over 4,000 data entries to identify patterns and insights.',
      'Generated structured analysis reports to support strategic marketing decisions.',
      'Collaborated with stakeholders to ensure data relevance and accuracy.',
    ],
    tech: [
      'UiPath Studio',
      'JavaScript',
      'Robotic Process Automation (RPA)',
    ],
    img: ielts
  },
  {
    title: 'Urban Planning Web Application',
    description: 'A full-stack web application built for urban planners to organize, manage, and analyze over 22,000 records, focusing on responsiveness and performance.',
    tasks: [
      'Developed the backend using Django to handle large-scale data processing and application logic.',
      'Optimized MySQL database queries to improve performance and ensure efficient data retrieval.',
      'Built a responsive and user-friendly interface using HTML, CSS, jQuery, and Bootstrap.',
      'Implemented data models and admin interfaces to support easy content management.',
      'Collaborated with stakeholders to deliver a tailored solution that meets real-world urban planning needs.',
    ],
    tech: [
      'Django',
      'MySQL',
      'HTML',
      'CSS',
      'jQuery',
      'Bootstrap',
      'Python',
      'SQL'
    ],
    github: 'https://github.com/derrickyct/django_project_outdoorthermalcomfort'
  }
]