import wasimAvatar from '../assests/images/wasim.jpg';

export const portfolioData = {
  personal: {
    name: "Wasim Reza",
    role: "Senior Software Engineer",
    specialization: "Full Stack Developer · Node.js · NestJS · React Native",
    experienceYears: "5+",
    location: "Purnia, Bihar / Pune, Maharashtra (Open to Remote / Relocation)",
    email: "rezawasim9x@gmail.com",
    phone: "+91 8210380847",
    github: "https://github.com/wasimrz",
    linkedin: "https://www.linkedin.com/in/wasim-reza-1a4191203",
    blog: "https://digital-techie.blogspot.com/",
    avatar: wasimAvatar,
    availability: "Available for Senior Fullstack & Mobile Engineering Roles",
    summary:
      "Software Engineer with 5+ years of experience building and deploying scalable web and mobile applications using JavaScript, TypeScript, Node.js, NestJS, Express.js, React Native, MongoDB, and REST APIs. Experienced in designing real-time applications, WebSocket systems, live streaming platforms (Agora RTC, LiveKit), microservices, caching with Redis, and cloud infrastructure on AWS.",
  },

  metrics: [
    { label: "Production Experience", value: "5+ Yrs", detail: "Real-time web, mobile & cloud systems" },
    { label: "Real-Time Streaming", value: "Agora & LiveKit", detail: "Low-latency multi-user co-hosting" },
    { label: "UI Thread Fluidity", value: "60/120 FPS", detail: "Zustand selectors & FlatList optimization" },
    { label: "Backend Throughput", value: "Sub-50ms", detail: "NestJS, Redis Pub/Sub & Prisma" },
    { label: "Mobile Cross-Platform", value: "iOS & Android", detail: "React Native with native surfaces" },
  ],

  skillsCategories: [
    {
      id: "streaming",
      title: "Real-Time & Streaming Architecture",
      badge: "Core Specialization",
      description: "Low-latency bidirectional live video streaming, multi-user co-hosting, and VOD transcoding",
      skills: [
        { name: "Agora RTC & LiveKit", level: "Expert", tags: ["Bidirectional Video", "Co-host Sync", "Native Surfaces"] },
        { name: "WebSockets & Socket.IO", level: "Expert", tags: ["NestJS Gateways", "WsException", "Event Separation"] },
        { name: "FFmpeg & HLS Pipeline", level: "Advanced", tags: ["Adaptive Bitrate", "VOD Transcoding", "HLS Playlists"] },
        { name: "WebRTC Protocols", level: "Advanced", tags: ["Signaling Channels", "Low Latency", "Media Transport"] },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Engineering (React Native)",
      badge: "Production Apps",
      description: "Production iOS & Android apps with 60/120fps gesture fluidity and interactive bottom sheets",
      skills: [
        { name: "React Native", level: "Expert", tags: ["iOS & Android", "Native Video Surfaces", "React.memo"] },
        { name: "Zustand & Redux", level: "Expert", tags: ["Granular Selectors", "Zero Frame Drops", "State Hydration"] },
        { name: "Bottom Sheet Workflows", level: "Expert", tags: ["@gorhom/bottom-sheet", "Backstage Setup", "Dynamic Queue"] },
        { name: "FlatList Optimization", level: "Expert", tags: ["Virtualization", "Memoization", "List Lifecycle"] },
        { name: "Offline Sync & Local DB", level: "Advanced", tags: ["WatermelonDB", "MMKV", "SQLite"] },
      ],
    },
    {
      id: "backend",
      title: "Backend & Microservices",
      badge: "Distributed Systems",
      description: "Scalable microservices, REST APIs, and structured services with enterprise validation",
      skills: [
        { name: "Node.js & Express.js", level: "Expert", tags: ["Microservices", "REST APIs", "Async Architecture"] },
        { name: "NestJS Framework", level: "Expert", tags: ["Pipes", "DTO Validation", "WebSocket Gateways", "Guards"] },
        { name: "Prisma ORM & Mongoose", level: "Expert", tags: ["Schema Design", "Stateful Queues", "Relational Models"] },
        { name: "Authentication & Security", level: "Expert", tags: ["JWT", "RBAC", "WebSocket Auth", "Input Validation"] },
        { name: "Payment Gateways", level: "Advanced", tags: ["Stripe", "PhonePe", "Webhooks", "Server-side Verification"] },
      ],
    },
    {
      id: "cloud",
      title: "Cloud, DevOps & Databases",
      badge: "Infrastructure",
      description: "High-availability cloud deployments, automated CI/CD, reverse proxies, and caching",
      skills: [
        { name: "AWS Cloud Infrastructure", level: "Advanced", tags: ["EC2", "S3", "SES", "SNS", "CloudFront CDN"] },
        { name: "Redis & Redis Pub/Sub", level: "Expert", tags: ["Distributed Caching", "Event Pub/Sub", "Session Store"] },
        { name: "MongoDB", level: "Expert", tags: ["Query Indexing", "Aggregation", "Data Modeling"] },
        { name: "Docker & Containerization", level: "Advanced", tags: ["Docker Compose", "Multi-stage Builds", "CI/CD"] },
        { name: "Nginx & Caddy", level: "Advanced", tags: ["Reverse Proxy", "HTTPS Automation", "WebSocket Proxying"] },
      ],
    },
  ],

  interactiveMobileApps: [
    {
      id: "reelty",
      name: "REELTY™ Real Estate Live",
      tagline: "Live-Streaming Property Tours & Co-Hosting",
      badge: "Current Flagship (AppSimity)",
      accentColor: "#ef4444",
      os: "iOS / Android",
      description:
        "Real-time bidirectional live-streaming mobile platform for real estate agents and homebuyers. Built with React Native, Agora RTC, NestJS WebSocket Gateways, and Prisma ORM for low-latency multi-user co-hosting, interactive bottom sheets, and live chat with tipping.",
      techStack: ["React Native", "Agora RTC", "NestJS", "WebSockets", "Prisma ORM", "Redis", "@gorhom/bottom-sheet", "Zustand"],
      architecturePoints: [
        "Architected bidirectional low-latency video co-hosting using Agora RTC and native video surfaces",
        "Engineered stateful co-host queue management with NestJS services and Prisma ORM to prevent inconsistent participant states",
        "Optimized mobile render performance using React.memo, granular Zustand selectors, and memoized video feeds (60fps)",
        "Separated heavy host WebSocket events from lightweight audience events, cutting client processing and network overhead",
        "Designed backstage stream workflow with multi-step setup and interactive @gorhom/bottom-sheet drawer",
      ],
      screens: {
        headerTitle: "REELTY™",
        agentName: "Martin Luthor",
        propertyAddress: "123 Renner Avenue, Newark, NJ 07112",
        propertySpecs: "1 Fam | 4 Bed | 3 Bath | 3,500 sq.ft. | $500,000",
        viewers: "1,420",
        coHost: {
          name: "Mark & Sarah",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
          powerChat: "$10 Power Chat",
          message: "Show me the pool again...",
        },
        chatMessages: [
          { user: "christ", country: "🇺🇸", text: "Hey, amazing property view!", color: "#38bdf8" },
          { user: "oprah", country: "🇮🇳", text: "Wow, this property looks fantastic", color: "#f59e0b" },
          { user: "traveler", country: "🇺🇸", text: "Is the backyard fenced?", color: "#10b981" },
          { user: "happy", country: "🇮🇳", text: "Does it have a swimming pool?", color: "#ec4899" },
        ],
      },
    },
    {
      id: "dailydoc",
      name: "DailyDoc Healthcare",
      tagline: "Clinical Operations & Doctor Roster",
      badge: "Production App",
      accentColor: "#0284c7",
      os: "iOS / Android",
      description:
        "Full-fledged hospital management and clinical workflow app enabling hospital staff, doctors, and nurses to coordinate rounds, manage emergency on-call shifts, and access protected patient records in real time.",
      techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Zustand"],
      architecturePoints: [
        "Offline-first synchronization using MMKV + SQLite with background conflict resolution",
        "Sub-100ms real-time shift swaps and consultation alerts via WebSockets",
        "Zero-jank 120Hz schedule timeline using FlatList virtualization and memoized cards",
      ],
      screens: {
        headerTitle: "DailyDoc Care",
        subtitle: "Dr. Wasim Reza · Cardiology",
        stat1: { label: "Patients", value: "28 active" },
        stat2: { label: "On-Call Shift", value: "08:00 - 18:00" },
        cards: [
          {
            title: "Emergency Consultation",
            badge: "Priority High",
            time: "10:15 AM · Room 402",
            subtitle: "Post-op cardiac telemetry review",
            actionText: "Accept Consult",
          },
          {
            title: "Ward Rounds Schedule",
            badge: "Routine",
            time: "11:30 AM · Wing B (6 Patients)",
            subtitle: "Check vitals, medication charts & discharge notes",
            actionText: "Open Checklist",
          },
        ],
      },
    },
    {
      id: "vodservice",
      name: "VOD Transcoding Service",
      tagline: "Adaptive Bitrate Video Processing",
      badge: "Media Architecture",
      accentColor: "#8b5cf6",
      os: "Cloud / Backend",
      description:
        "Automated video-on-demand processing pipeline built with Node.js, FFmpeg, HLS packaging, and AWS S3/CloudFront CDN delivery.",
      techStack: ["Node.js", "FFmpeg", "HLS", "AWS S3", "AWS CloudFront", "Docker"],
      architecturePoints: [
        "Multi-bitrate rendition generation (1080p, 720p, 480p, 360p) for dynamic bandwidth adaptation",
        "Asynchronous video processing queues preventing CPU-intensive transcoding from blocking API servers",
        "HLS playlist generation and CDN edge caching for global low-latency playback",
      ],
      screens: {
        headerTitle: "VOD Pipeline",
        subtitle: "FFmpeg Transcoder · Active",
        stat1: { label: "Active Jobs", value: "4 Transcoding" },
        stat2: { label: "CDN Hit Rate", value: "98.4%" },
        cards: [
          {
            title: "1080p 60fps Rendition",
            badge: "HLS Packaged",
            time: "Bitrate: 4500 kbps · Segment: 4s",
            subtitle: "Adaptive HLS manifest generated & uploaded to S3",
            actionText: "Inspect Stream",
          },
          {
            title: "Asynchronous Queue",
            badge: "Redis Worker",
            time: "Average processing time: 1.2x video length",
            subtitle: "Zero API thread starvation via background workers",
            actionText: "View Telemetry",
          },
        ],
      },
    },
  ],

  workExperience: [
    {
      role: "Senior Software Engineer",
      company: "AppSimity Solutions LLP",
      companyUrl: "#",
      logo: "/assets/unnamed.png",
      period: "Dec 2025 – Present",
      location: "India (Remote / Hybrid)",
      type: "Full-Time",
      summary:
        "Architecting and developing REELTY™ — a real-time bidirectional live-streaming mobile platform for real estate, engineering both the React Native mobile app and the NestJS backend infrastructure.",
      highlights: [
        "Architected real-time bidirectional live-streaming features using React Native, Agora RTC, NestJS, and WebSocket Gateways, supporting low-latency multi-user co-hosting.",
        "Designed and implemented stream lifecycle management: participant joining, leaving, disconnect handling, co-host state synchronization, and automated cleanup.",
        "Developed stateful queue management using NestJS services and Prisma ORM to synchronize co-host states and prevent inconsistent participant states.",
        "Optimized React Native live-stream performance using React.memo, optimized FlatList configurations, memoized native video surfaces, and granular Zustand selectors to eliminate frame drops.",
        "Optimized real-time event distribution by separating detailed host-specific WebSocket events from lightweight audience events, significantly reducing network traffic.",
        "Built the Backstage stream configuration workflow with multi-step stream setup, dynamic queue management, and interactive bottom-sheet components using @gorhom/bottom-sheet.",
        "Implemented custom validation and exception handling with NestJS Pipes, DTO validation, and WsException to reliably handle edge cases like duplicate co-host invitations.",
      ],
      technologies: ["React Native", "Agora RTC", "NestJS", "TypeScript", "WebSocket Gateways", "Prisma ORM", "Redis", "@gorhom/bottom-sheet", "Zustand", "Docker"],
    },
    {
      role: "Full Stack Developer",
      company: "Portamed Private Limited",
      companyUrl: "#",
      logo: "/assets/TCS-logo.png",
      period: "Sep 2021 – Sep 2025",
      location: "Pune, Maharashtra",
      type: "Full-Time",
      summary:
        "Engineered scalable backend microservices, real-time video communication, VOD pipelines, and secure cloud infrastructure for health-tech and enterprise platforms.",
      highlights: [
        "Developed scalable backend services using Node.js, Express.js, MongoDB, and microservices architecture.",
        "Designed RESTful APIs with JWT authentication, authorization, input validation, and structured service architecture.",
        "Implemented Redis caching to reduce repeated database operations and boost backend API response times.",
        "Integrated AWS cloud services: EC2 (compute), S3 (media storage), SES (transactional email), and SNS (notifications).",
        "Configured Nginx and Caddy as reverse proxies for HTTPS termination, automatic SSL, WebSocket proxying, and application traffic routing.",
        "Built real-time communication solutions using LiveKit, WebSockets, and Socket.IO.",
        "Architected video-on-demand (VOD) processing workflows with FFmpeg, HLS packaging, and adaptive bitrate streaming.",
        "Integrated Stripe and PhonePe payment systems with server-side payment verification, webhooks, and duplicate transaction prevention.",
        "Optimized MongoDB performance through compound query indexing, aggregation pipelines, and schema tuning.",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "LiveKit", "FFmpeg", "HLS", "AWS (EC2, S3, SES, SNS)", "Redis", "Docker", "Nginx", "Caddy", "Stripe", "PhonePe"],
    },
  ],

  education: [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Madhya Pradesh",
      logo: "/assets/MCA.png",
      period: "2021 – 2023",
      score: "8.0 CGPA",
      description:
        "Specialized in distributed software systems, advanced algorithms, database architecture, and real-time network protocols.",
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "BN Mandal University",
      logo: "/assets/bn.png",
      period: "2017 – 2020",
      score: "76%",
      description:
        "Core foundational computer science: Data Structures & Algorithms, Java, Object-Oriented Design, Operating Systems, Computer Networks, and DBMS.",
    },
  ],

  certifications: [
    {
      title: "NodeJS - The Complete Guide",
      subtitle: "incl. MVC, REST APIs, GraphQL",
      issuer: "Udemy",
      certificateUrl: "https://ude.my/UC-204f8302-fb0a-4cf4-9e89-9aab46831652",
      logo: "/assets/udemy-logo.png",
      validity: "Does not expire",
      badge: "Verified Certificate",
      description:
        "Comprehensive mastery of Node.js internals, Express.js RESTful APIs, GraphQL schema design, authentication, and high-performance server architectures.",
    },
    {
      title: "React Native - The Practical Guide",
      subtitle: "Cross-Platform iOS & Android Mobile Apps",
      issuer: "Udemy",
      certificateUrl: "https://ude.my/UC-f4e77585-9545-4e63-a052-d1f8fb712d04",
      logo: "/assets/udemy-logo.png",
      validity: "Does not expire",
      badge: "Verified Certificate",
      description:
        "Production cross-platform mobile development with React Native, navigation architectures, device hardware features, performance optimization, and animations.",
    },
    {
      title: "Microservices with Node JS and React",
      subtitle: "Distributed Systems & Event-Driven Architecture",
      issuer: "Udemy",
      certificateUrl: "https://ude.my/UC-67f9f93c-49ea-49d6-a89c-7846d95f51f4",
      logo: "/assets/udemy-logo.png",
      validity: "Does not expire",
      badge: "Verified Certificate",
      description:
        "Architecting resilient event-driven microservices with Node.js, Docker containerization, Kubernetes, asynchronous messaging, and distributed transaction state.",
    },
  ],

  featuredProjects: [
    {
      title: "REELTY™ Real Estate Live Streaming Platform",
      category: "React Native · Agora RTC · NestJS",
      description:
        "Live-streaming property tours with bidirectional multi-user co-hosting, stateful backstage queue (@gorhom/bottom-sheet), real-time live chat with Power Chat payments, and Agora RTC native video surfaces.",
      tags: ["React Native", "Agora RTC", "NestJS", "Prisma ORM", "Redis", "WebSockets", "@gorhom/bottom-sheet"],
      featured: true,
      impact: "Low-latency bidirectional video + stateful co-host queue synchronization",
    },
    {
      title: "Adaptive VOD Transcoding Pipeline",
      category: "Cloud Media Architecture",
      description:
        "High-performance video-on-demand processing workflow using FFmpeg, generating multi-bitrate HLS playlists (1080p, 720p, 480p) stored on AWS S3 with CloudFront edge caching.",
      tags: ["Node.js", "FFmpeg", "HLS", "AWS S3", "CloudFront", "Docker"],
      featured: true,
      impact: "Asynchronous background workers preventing API thread blocking",
    },
    {
      title: "DailyDoc Healthcare Clinical Platform",
      category: "Healthcare Operations",
      description:
        "Hospital management system for patient health records, on-call doctor scheduling, and consultation workflows with JWT role-based access control.",
      github: "https://github.com/wasimrz",
      tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      featured: true,
      impact: "Zero-downtime staff scheduling with indexed MongoDB queries",
    },
    {
      title: "Conference Store Payment & Event Platform",
      category: "Fullstack E-Commerce & Ticketing",
      description:
        "Event registration and ticketing backend with secure payment flows using Stripe and PhonePe, server-side transaction verification, and duplicate payment prevention.",
      tags: ["Node.js", "Express.js", "MongoDB", "Stripe", "PhonePe", "Redis"],
      featured: true,
      impact: "Idempotent payment flows preventing duplicate transactions",
    },
  ],
};
