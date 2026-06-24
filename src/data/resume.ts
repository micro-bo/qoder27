export const resume = {
  basics: {
    name: "文波",
    role: "Java 后端工程师 / Agent 应用开发者",
    location: "中国",
    summary:
      "专注 Java 后端、Spring Boot、RAG 和 Agent 应用开发，关注系统设计、工程化实践和可维护交付。",
    links: [
      { label: "邮箱", href: "mailto:wenbo@example.com" },
      { label: "GitHub", href: "https://github.com/your-name" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/your-name" }
    ]
  },
  techStack: [
    {
      category: "后端",
      items: ["Java", "Spring Boot", "Spring Cloud", "MyBatis", "REST API"]
    },
    {
      category: "数据与基础设施",
      items: ["MySQL", "PostgreSQL", "Redis", "Kafka", "Docker"]
    },
    {
      category: "AI 应用",
      items: ["RAG", "Agent", "Embedding", "pgvector", "Prompt Engineering"]
    },
    {
      category: "工程实践",
      items: ["Git", "CI/CD", "Testing", "Observability", "Documentation"]
    }
  ],
  education: [
    {
      school: "某某大学",
      degree: "软件工程本科",
      period: "2019 - 2023"
    }
  ],
  experience: [
    {
      company: "某某公司",
      role: "Java 后端工程师",
      period: "2023 - 至今",
      highlights: [
        "负责后端业务接口设计与实现，维护 Spring Boot 服务的稳定性和可扩展性。",
        "参与数据库表结构设计、缓存策略优化和接口性能分析。",
        "沉淀项目文档、接口规范和排障记录，提升团队协作效率。"
      ]
    },
    {
      company: "开源与个人项目",
      role: "Agent 应用学习者",
      period: "2024 - 至今",
      highlights: [
        "持续构建 RAG 与 Agent 原型，验证检索、上下文压缩和工具调用流程。",
        "关注 AI 应用中的评估、日志、权限边界和工程落地问题。"
      ]
    }
  ],
  projects: [
    {
      name: "BriefLink",
      description: "高并发短链系统，覆盖短码生成、缓存加速、跳转统计和异步日志。",
      highlights: [
        "设计短链核心链路和异常处理策略。",
        "使用 Redis 与消息队列降低同步请求压力。"
      ]
    },
    {
      name: "RAG Agent Demo",
      description: "基于 Spring Boot + pgvector 的 RAG 应用原型。",
      highlights: [
        "实现文档导入、向量检索和回答生成的基础流程。",
        "为参数调优和结果评估保留清晰日志。"
      ]
    }
  ]
};
