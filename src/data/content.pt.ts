import type { ContentShape } from "./types";

export const pt: ContentShape = {
  htmlLang: "pt-BR",
  pageTitle: "Henrique Pappis · Desenvolvedor PHP Sênior",
  pageDescription:
    "Desenvolvedor PHP Sênior com mais de 15 anos de experiência em backend, APIs REST e sistemas escaláveis. Laravel, MySQL, Docker.",

  ui: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      education: "Formação",
      projects: "Projetos",
      stack: "Stack",
      contact: "Contato",
      toggleMenu: "Abrir menu de navegação",
    },
    sections: {
      about: { eyebrow: "01 · Perfil", title: "Sobre" },
      experience: { eyebrow: "02 · Trajetória", title: "Experiência" },
      education: { eyebrow: "03 · Formação", title: "Formação acadêmica" },
      courses: {
        eyebrow: "04 · Cursos",
        title: "Cursos complementares",
        completed: "Concluídos",
        inProgress: "Em andamento",
      },
      international: {
        eyebrow: "05 · Vivência internacional",
        title: "Intercâmbio e voluntariado",
      },
      projects: { eyebrow: "06 · Projetos", title: "Projetos pessoais" },
      stack: { eyebrow: "07 · Ferramentas", title: "Stack técnica" },
      languages: { eyebrow: "08 · Idiomas", title: "Idiomas" },
      contact: { eyebrow: "09 · Contato", title: "Vamos conversar" },
    },
    themeToggleLabel: "Alternar tema claro/escuro",
    localeToggleLabel: "Alternar idioma do site",
  },

  profile: {
    name: "Henrique Pappis",
    title: "Desenvolvedor PHP Sênior | Laravel | APIs REST | Liderança Técnica | Cloud",
    location: "Recife, Pernambuco, Brasil",
    phone: "(81) 98660-0535",
    whatsappUrl: "https://wa.me/5581986600535",
    email: "falecom@henriquepappis.com",
    linkedinLabel: "linkedin.com/in/henriquepappis",
    linkedinUrl: "https://linkedin.com/in/henriquepappis",
    pcd: "PCD",
  },

  summary: `Desenvolvedor PHP Sênior com mais de 15 anos de experiência em backend, APIs REST e modernização de sistemas críticos, com especialização em Laravel e domínio de outros frameworks do ecossistema PHP (Symfony, Laminas, Mezzio, Yii, CodeIgniter). Já liderei tecnicamente times multidisciplinares, incluindo uma passagem internacional em Portugal como Tech Lead, onde escalei uma plataforma de venda de ingressos de 5 mil para 100 mil usuários simultâneos em grandes eventos. Construí e mantive sistemas usados por dezenas de milhares de empresas, de uma plataforma fiscal SaaS a sistemas financeiros críticos para prefeituras e órgãos de controle, sempre com foco em integrações, mensageria, observabilidade e infraestrutura containerizada (Docker, Kubernetes). Atuo com autonomia entre times técnicos e de produto, unindo qualidade de código, performance e aderência a compliance (PCI, ITIL) para entregar soluções que resolvem problemas reais de negócio.`,

  experience: [
    {
      company: "Netra Tecnologia",
      role: "Analista de Sistemas Sênior",
      period: "janeiro de 2026 – atual",
      location: "Recife, PE",
      bullets: [
        "Responsável por automações de processos internos na Secretaria de Projetos Especiais da Prefeitura do Recife, com PHP, Oracle, Jenkins e GitHub.",
        "Reduzi em 60% o tempo de processamento dos eventos 2010, 4010 e 4020 do EFD-Reinf.",
        "Aprimorei o processo de conciliação bancária de despesas e do extrato da conta única da Prefeitura, reduzindo o tempo de conciliação manual de 10 dias para 1 hora e elevando a confiabilidade das informações financeiras.",
        "Criei, do zero, o sistema de controle de emendas parlamentares exigido pelo TCE/PE, garantindo conformidade regulatória.",
      ],
    },
    {
      company: "ZONE SOFT",
      role: "Technical Lead",
      period: "abril de 2024 – julho de 2025",
      duration: "1a4m",
      location: "Portugal",
      bullets: [
        "Liderei tecnicamente, com forte atuação hands-on, o backend do Zicket (zicket.pt), plataforma de venda de ingressos com transações em tempo real.",
        "Escalei código e infraestrutura de 5 mil para 100 mil usuários simultâneos, sustentando os picos de tráfego de grandes eventos como o MotoGP e a Queima das Fitas, com zero incidentes críticos nos 3 maiores eventos do ano.",
        "Reduzi o tempo de resposta das transações em tempo real da plataforma.",
        "Liderei um time de 8 profissionais organizados em equipes multidisciplinares.",
        "Defini os padrões de qualidade e as decisões de arquitetura, conduzindo a modernização do código legado.",
      ],
    },
    {
      company: "ACP Group",
      role: "Analista de Sistemas Sênior",
      period: "maio de 2023 – abril de 2024",
      duration: "1a",
      location: "Recife, PE",
      bullets: [
        "Desenvolvi o backend de sistemas governamentais críticos para a Secretaria de Finanças da Prefeitura do Recife, processando as contas de aproximadamente 15 secretarias municipais, com regras de negócio financeiras e administrativas do setor público.",
        "Integrei o sistema ao Oracle e automatizei os deploys via Jenkins.",
      ],
    },
    {
      company: "Qive (ex-Arquivei)",
      role: "Backend Engineer",
      period: "junho de 2022 – abril de 2023",
      duration: "11m",
      location: "Recife, PE",
      bullets: [
        "Atuei no desenvolvimento e manutenção de uma plataforma fiscal SaaS utilizada por mais de 130 mil empresas (CNPJs) em todo o Brasil, com ciclo completo de deploy e monitoramento em GCP e observabilidade via Prometheus, Grafana e Kibana.",
        "Mantive monolitos legados em PHP (Zend/Laravel) com PostgreSQL e BigQuery, trabalhando também com mensageria via Kafka e GCP Pub/Sub, testes unitários e de integração, em times ágeis com Scrum/Kanban.",
      ],
    },
    {
      company: "Datum TI",
      role: "Sênior Full-stack Developer",
      period: "maio de 2021 – junho de 2022",
      duration: "1a2m",
      location: "Porto Alegre, RS",
      bullets: [
        "Desenvolvi um sistema corporativo de agendamento de patches de segurança para cerca de 3 mil servidores em ambientes Linux, Windows e AIX, com aderência a compliance PCI.",
        "Trabalhei com PHP e Oracle em ambiente corporativo estruturado, seguindo processos formais de desenvolvimento e homologação.",
      ],
    },
    {
      company: "Incoders Tecnologia",
      role: "Desenvolvedor de Software PHP",
      period: "setembro de 2019 – abril de 2021",
      duration: "1a8m",
      location: "Porto Alegre, RS",
      bullets: [
        "Desenvolvi o módulo financeiro da Guarida Imóveis, processando cerca de 100 mil transações mensais com alta confiabilidade, com APIs e aplicações em Laminas, Mezzio, Symfony e Doctrine.",
        "Liderei a migração do sistema de autenticação para OAuth2.",
        "Atuei com MySQL, PostgreSQL, Docker e Kubernetes em todo o ciclo de desenvolvimento e deploy das aplicações.",
      ],
    },
    {
      company: "Simers",
      role: "Analista Desenvolvedor",
      period: "outubro de 2016 – setembro de 2019",
      duration: "3a",
      location: "Porto Alegre, RS",
      bullets: [
        "Desenvolvi, de ponta a ponta, um sistema de encargos financeiros que processava mais de 15 mil transações por dia, em PHP e Laravel, automatizando um processo antes manual entre ferramentas, com normalização, validação e auditoria completa das transações, em ambiente containerizado com Docker e Kubernetes.",
        "Construí aplicações em Yii e CodeIgniter, com integrações a sistemas de terceiros e MySQL.",
      ],
    },
    {
      company: "Sescon/RS",
      role: "Programador PHP",
      period: "julho de 2008 – julho de 2014",
      duration: "6a1m",
      bullets: [
        "Desenvolvi aplicação de indicadores contábeis de gestão utilizada por 14 mil empresas associadas ao sindicato, voltada ao PGQP/RS (Programa Gaúcho de Qualidade e Produtividade).",
        "Prestei suporte técnico e desenvolvimento em PHP, MySQL e SQL Server, seguindo processos ITIL.",
      ],
    },
    {
      company: "Federação dos Círculos Operários do RS",
      role: "Programador PHP",
      period: "setembro de 2007 – janeiro de 2008",
      duration: "5m",
      bullets: [
        "Desenvolvi o website institucional da Federação e da Escola Técnica Santo Inácio, mantida por ela, em PHP/MySQL.",
        "Criei um novo portal do aluno, desenvolvido integralmente do zero, atendendo cerca de 2 mil alunos.",
      ],
    },
  ],

  personalProjects: [
    {
      name: "Narrare",
      tagline: "Pesquisas sob medida para o seu negócio",
      description:
        "Plataforma SaaS de pesquisas de mercado, com construtor de formulários, coleta de respostas e geração de relatórios.",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      name: "Trotula",
      tagline: "Agendamento online para clínicas",
      description:
        "Sistema de agendamento e gestão para clínicas, com lembretes e confirmações automáticas de consulta.",
      stack: ["Laravel", "PHP", "MySQL"],
    },
    {
      name: "Comedere",
      tagline: "Autoatendimento por QR-code para bares e restaurantes",
      description:
        "Aplicação de cardápio digital e pedidos self-service via QR-code na mesa, com acompanhamento do pedido em tempo real.",
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    },
  ],

  internationalExperience: {
    period: "junho de 2015 – junho de 2016",
    location: "Irlanda",
    description:
      "Intercâmbio para aprimoramento do inglês e vivência internacional, atuando também em áreas não correlacionadas à tecnologia.",
    volunteer:
      "Vendedor voluntário na Gorta Shop, loja de caridade da Self Help Africa (International Development Organisation).",
  },

  education: [
    {
      degree: "Pós-graduação em Desenvolvimento Orientado a Objetos com Java",
      institution: "Estácio",
      period: "2026–2027 (em andamento)",
    },
    {
      degree: "Pós-graduação em Engenharia de Software",
      institution: "Faculdade Unyleya",
      period: "2019–2021",
    },
    {
      degree: "Sistemas de Informação",
      institution: "Faculdade Dom Bosco",
      period: "2004–2012",
    },
  ],

  courses: {
    institution: "IFRS (Instituto Federal do Rio Grande do Sul)",
    completed: [
      "Gestão de Projetos de Software com PMBOK: Guia Essencial para Iniciantes",
      "Projeto de Sistemas Web",
      "SCRUM: Gerenciando Projetos de Software com Agilidade",
    ],
    inProgress: [
      "Administração Estratégica",
      "Gestão de Pessoas: Conceitos e Processos",
      "Gestão de Tempo e Organização",
      "Liderança e Trabalho em Equipe",
      "Trilha para o Empreendedorismo: Organizando a sua Ideia para Criar um Negócio",
    ],
  },

  stack: [
    {
      category: "Backend",
      items: ["PHP", "Laravel", "Symfony", "Laminas", "Mezzio", "Yii", "CodeIgniter"],
    },
    {
      category: "Bancos de dados",
      items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server"],
    },
    {
      category: "Infra / DevOps",
      items: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "GCP"],
    },
    {
      category: "Arquitetura",
      items: [
        "APIs REST",
        "Mensageria",
        "Kafka",
        "GCP Pub/Sub",
        "Observabilidade",
        "Sistemas distribuídos",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    },
    {
      category: "Node.js",
      items: ["Node.js", "Fastify", "NestJS", "Prisma"],
    },
    {
      category: "Cloud & Serverless",
      items: [
        "Computação serverless",
        "Deploy em edge",
        "Bancos de dados serverless",
        "Hospedagem gerenciada (PaaS)",
      ],
    },
    {
      category: "Pagamentos & Integrações",
      items: [
        "Pagamentos recorrentes e assinaturas",
        "E-mail transacional",
        "Autenticação via JWT",
        "WebSockets em tempo real",
      ],
    },
  ],

  languages: [
    { name: "Português", level: "Nativo / bilíngue" },
    { name: "Inglês", level: "Fluência profissional" },
    { name: "Espanhol", level: "Básico" },
  ],
};
