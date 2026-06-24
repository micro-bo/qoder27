export interface Project {
  name: string;
  slug: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: "BriefLink",
    slug: "brieflink",
    description:
      "一个面向高并发访问场景的短链系统，覆盖短码生成、跳转链路、访问统计和基础风控能力。",
    techStack: ["Java", "Spring Boot", "Redis", "MySQL", "Kafka"],
    highlights: [
      "使用 Redis 缓存热点短链，降低数据库读压力。",
      "设计短码生成与冲突处理流程，保证写入链路可观测。",
      "通过异步事件记录访问日志，避免统计逻辑阻塞跳转请求。"
    ],
    githubUrl: "https://github.com/your-name/brieflink"
  },
  {
    name: "RAG Agent Demo",
    slug: "rag-agent-demo",
    description:
      "基于 Spring Boot 与 pgvector 的 RAG 应用原型，支持文档切分、向量检索、上下文组装和 Agent 调用。",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "pgvector", "LLM"],
    highlights: [
      "将文档导入、向量化、检索和回答流程拆成清晰的服务边界。",
      "用 pgvector 保存 embedding，便于本地开发和小规模部署。",
      "保留 prompt、检索参数和响应日志，方便后续评估与调优。"
    ],
    githubUrl: "https://github.com/your-name/rag-agent-demo"
  },
  {
    name: "Mini Blog Website",
    slug: "mini-blog-website",
    description:
      "当前个人网站项目，使用 Astro 与 Markdown 管理博客内容，偏静态、极简、易维护。",
    techStack: ["Astro", "TypeScript", "Markdown", "CSS"],
    highlights: [
      "使用 Astro 内容集合管理博客元数据和正文。",
      "用原生 CSS 控制全站排版，不依赖复杂 UI 框架。",
      "静态构建输出，适合部署到 Vercel、Netlify 或 GitHub Pages。"
    ],
    githubUrl: "https://github.com/your-name/mini-blog-website"
  }
];
