// Simple translation dictionary for ICS landing page

const TRANSLATIONS = {
  en: {
    langLabel: "Language:",
    btnTopContact: "Contact",
    heroTitle: "ICS – Inventory Control System",
    heroSubtitle:
      "A modern, robust and scalable WMS designed for real warehouse operations.",
    heroPrimaryCta: "Request a live demo",
    heroSecondaryCta: "Explore modules",
    heroNote:
      "Reduce errors, control your inventory and gain full traceability over every movement.",
    heroCardTitle: "Real-time warehouse visibility",
    heroCardItem1: "Receiving with PO validation",
    heroCardItem2: "Advanced picking & replenishment",
    heroCardItem3: "History, web reports and dashboards",

    summaryTitle: "Executive Summary",
    summaryIntro:
      "ICS is a Warehouse Management System designed for real operations, with intelligent flows, strict validations and complete traceability.",
    summaryCard1Title: "Optimized warehouse operations",
    summaryCard1Body:
      "From receiving to storage, internal transfers, consumption and picking, ICS guides the operator step by step to reduce errors and increase productivity.",
    summaryCard2Title: "Reliable and auditable",
    summaryCard2Body:
      "Every movement is recorded with user, date, time, quantities and operation type, providing full traceability for audits and customer requirements.",
    summaryCard3Title: "Modern UX",
    summaryCard3Body:
      "Tables that feel like Excel, draggable modals and clear error messages make training faster and adoption easier.",

    modulesTitle: "Main Modules",
    modulesIntro:
      "ICS covers the complete warehouse lifecycle, from receiving POs to consumption and history analysis.",
    moduleReceivingTitle: "Receiving (PO Controlled)",
    moduleReceivingItem1: "Open PO validation",
    moduleReceivingItem2: "Over-receiving prevention",
    moduleReceivingItem3: "Partial receipts management",
    moduleReceivingItem4: "Smart auto-fill and full history",
    modulePickingTitle: "Replenishment & Advanced Picking",
    modulePickingItem1: "Inventory reservation by user",
    modulePickingItem2: "Automatic assignment of oldest order",
    modulePickingItem3: "Work-in-progress persistence",
    modulePickingItem4: "Automatic adjustments and full traceability",
    moduleIssueTitle: "Issue / Material Consumption",
    moduleIssueItem1: "Strict validation of part, location and quantity",
    moduleIssueItem2: "Location FIFO logic",
    moduleIssueItem3: "Negative inventory prevention",
    moduleIssueItem4: "Detailed movement log",
    moduleSubTransferTitle: "Sub-Transfer (Internal Moves)",
    moduleSubTransferItem1: "Up to 10 moves in a single operation",
    moduleSubTransferItem2: "Quantity validation",
    moduleSubTransferItem3: "Double adjustment (source/destination)",
    moduleSubTransferItem4: "Auditable history with labels",
    moduleInventoryTitle: "Inventory & Web Reports",
    moduleInventoryItem1: "On-Hand and Inventory by Location",
    moduleInventoryItem2: "History and Orders Web Reports",
    moduleInventoryItem3: "Initial KPIs and dashboards",
    moduleInventoryItem4: "Export to Excel / PDF",
    modulePermissionsTitle: "User Permissions (RBAC)",
    modulePermissionsItem1: "Button-level access control",
    modulePermissionsItem2: "Dynamic show/hide per user",
    modulePermissionsItem3: "Bulk upload via Excel",
    modulePermissionsItem4: "Table editing and advanced filters",

    benefitsTitle: "Business Benefits",
    benefitsIntro:
      "ICS is not just software; it is a way to operate your warehouse with discipline and clarity.",
    benefit1Title: "Fewer operational errors",
    benefit1Body:
      "Validations at each step prevent over-receiving, wrong locations and incorrect quantities.",
    benefit2Title: "Complete inventory control",
    benefit2Body:
      "Each movement updates on-hand and history in a consistent, auditable way.",
    benefit3Title: "Faster workflows",
    benefit3Body:
      "Smart auto-fill, guided flows and Excel-like tables speed up daily operations.",
    benefit4Title: "Easier training",
    benefit4Body:
      "Clear screens and messages reduce the learning curve for new operators.",

    pricingTitle: "Licensing & Pricing",
    pricingIntro:
      "Flexible monthly licensing that adapts to the size and needs of your operation.",
    pricingPlanTitle: "ICS – Standard Package",
    pricingRange: "10 user licenses: $1,500 – $3,500 USD / month",
    pricingItem1: "System access",
    pricingItem2: "Updates and improvements",
    pricingItem3: "Bug fixes",
    pricingItem4: "Technical support",
    pricingItem5: "Initial training",
    pricingCta: "Talk about your operation",

    screensTitle: "Screens & Workflow Examples",
    screensIntro:
      "ICS includes professional tables, draggable modals and web reports ready for real operations.",
    screensPlaceholder1: "Receiving & Orders module",
    screensPlaceholder2: "Inventory by Location report",
    screensPlaceholder3: "History & web reports",

    contactTitle: "Contact & Next Steps",
    contactIntro:
      "Share a bit about your operation and we will explore how ICS can help you.",
    contactCompanyTitle: "Sanchez Web Apps LLC",
    contactCompanyBody:
      "We design inventory and warehouse solutions with real-world logic and a modern user experience.",
    contactEmailLabel: "Email:",
    contactLocationLabel: "Location:",
    contactFormNameLabel: "Name",
    contactFormEmailLabel: "Email",
    contactFormMessageLabel: "Message",
    contactFormCta: "Send message",

    footerRights: "All rights reserved."
  },

  es: {
    langLabel: "Idioma:",
    btnTopContact: "Contacto",
    heroTitle: "ICS – Inventory Control System",
    heroSubtitle:
      "Un WMS moderno, robusto y escalable diseñado para operaciones reales de almacén.",
    heroPrimaryCta: "Solicitar demo en vivo",
    heroSecondaryCta: "Ver módulos",
    heroNote:
      "Reduce errores, controla tu inventario y obtén trazabilidad completa de cada movimiento.",
    heroCardTitle: "Visibilidad en tiempo real del almacén",
    heroCardItem1: "Recepción con validación de PO",
    heroCardItem2: "Picking y reposición avanzada",
    heroCardItem3: "Historial, reportes web y dashboards",

    summaryTitle: "Resumen ejecutivo",
    summaryIntro:
      "ICS es un Warehouse Management System diseñado para operaciones reales, con flujos inteligentes, validaciones estrictas y trazabilidad completa.",
    summaryCard1Title: "Operaciones de almacén optimizadas",
    summaryCard1Body:
      "Desde la recepción hasta el almacenamiento, transferencias internas, consumo y picking, ICS guía al operador paso a paso para reducir errores y aumentar la productividad.",
    summaryCard2Title: "Confiable y auditable",
    summaryCard2Body:
      "Cada movimiento se registra con usuario, fecha, hora, cantidades y tipo de operación, ofreciendo trazabilidad total para auditorías y requerimientos de clientes.",
    summaryCard3Title: "UX moderna",
    summaryCard3Body:
      "Tablas estilo Excel, modales arrastrables y mensajes claros hacen que la capacitación sea más rápida y la adopción más sencilla.",

    modulesTitle: "Módulos principales",
    modulesIntro:
      "ICS cubre todo el ciclo del almacén, desde la recepción de POs hasta el consumo y el análisis de historial.",
    moduleReceivingTitle: "Receiving (PO controlado)",
    moduleReceivingItem1: "Validación de POs abiertos",
    moduleReceivingItem2: "Prevención de sobre‑receiving",
    moduleReceivingItem3: "Manejo de recibos parciales",
    moduleReceivingItem4: "Auto‑llenado inteligente y registro histórico",
    modulePickingTitle: "Replenishment & Picking avanzado",
    modulePickingItem1: "Reserva de inventario por usuario",
    modulePickingItem2: "Asignación automática de la orden más antigua",
    modulePickingItem3: "Persistencia del trabajo en progreso",
    modulePickingItem4: "Ajustes automáticos y trazabilidad total",
    moduleIssueTitle: "Issue / Consumo de material",
    moduleIssueItem1: "Validación estricta de parte, ubicación y cantidades",
    moduleIssueItem2: "Lógica FIFO de locations",
    moduleIssueItem3: "Prevención de inventario negativo",
    moduleIssueItem4: "Registro detallado de movimientos",
    moduleSubTransferTitle: "Sub‑Transfer (movimientos internos)",
    moduleSubTransferItem1: "Hasta 10 movimientos en una sola operación",
    moduleSubTransferItem2: "Validación de cantidades",
    moduleSubTransferItem3: "Ajuste doble (origen/destino)",
    moduleSubTransferItem4: "Historial etiquetado para auditoría",
    moduleInventoryTitle: "Inventario y reportes web",
    moduleInventoryItem1: "On‑Hand e Inventory by Location",
    moduleInventoryItem2: "History y Orders Web Reports",
    moduleInventoryItem3: "KPIs y dashboard inicial",
    moduleInventoryItem4: "Exportación a Excel / PDF",
    modulePermissionsTitle: "Permisos por usuario (RBAC)",
    modulePermissionsItem1: "Control de acceso por botón",
    modulePermissionsItem2: "Mostrar/ocultar dinámico por usuario",
    modulePermissionsItem3: "Carga masiva vía Excel",
    modulePermissionsItem4: "Edición en tabla y filtros avanzados",

    benefitsTitle: "Beneficios para su empresa",
    benefitsIntro:
      "ICS no es solo software; es una forma de operar su almacén con disciplina y claridad.",
    benefit1Title: "Menos errores operativos",
    benefit1Body:
      "Las validaciones en cada paso evitan sobre‑receiving, ubicaciones incorrectas y cantidades mal capturadas.",
    benefit2Title: "Mayor control del inventario",
    benefit2Body:
      "Cada movimiento actualiza el on‑hand y el historial de forma consistente y auditable.",
    benefit3Title: "Flujos de trabajo más rápidos",
    benefit3Body:
      "Auto‑llenado inteligente, flujos guiados y tablas tipo Excel aceleran la operación diaria.",
    benefit4Title: "Capacitación más sencilla",
    benefit4Body:
      "Pantallas claras y mensajes entendibles reducen la curva de aprendizaje para nuevos operadores.",

    pricingTitle: "Licenciamiento y precio",
    pricingIntro:
      "Licenciamiento mensual flexible que se adapta al tamaño y necesidades de su operación.",
    pricingPlanTitle: "ICS – Paquete estándar",
    pricingRange: "10 licencias de usuario: $1,500 – $3,500 USD / mes",
    pricingItem1: "Acceso al sistema",
    pricingItem2: "Actualizaciones y mejoras",
    pricingItem3: "Corrección de errores",
    pricingItem4: "Soporte técnico",
    pricingItem5: "Capacitación inicial",
    pricingCta: "Hablemos de su operación",

    screensTitle: "Pantallas y ejemplos de flujo",
    screensIntro:
      "ICS incluye tablas profesionales, modales arrastrables y reportes web listos para operar.",
    screensPlaceholder1: "Módulo de Receiving & Orders",
    screensPlaceholder2: "Reporte Inventory by Location",
    screensPlaceholder3: "History y reportes web",

    contactTitle: "Contacto y siguientes pasos",
    contactIntro:
      "Cuéntenos un poco sobre su operación y veremos cómo ICS puede ayudarle.",
    contactCompanyTitle: "Sanchez Web Apps LLC",
    contactCompanyBody:
      "Diseñamos soluciones de inventario y almacén con lógica de piso real y una experiencia de usuario moderna.",
    contactEmailLabel: "Correo:",
    contactLocationLabel: "Ubicación:",
    contactFormNameLabel: "Nombre",
    contactFormEmailLabel: "Correo electrónico",
    contactFormMessageLabel: "Mensaje",
    contactFormCta: "Enviar mensaje",

    footerRights: "Todos los derechos reservados."
  },

  zh: {
    langLabel: "语言：",
    btnTopContact: "联系",
    heroTitle: "ICS – 库存控制系统",
    heroSubtitle: "为真实仓储运营设计的现代化、可靠且可扩展的WMS。",
    heroPrimaryCta: "申请现场演示",
    heroSecondaryCta: "查看模块",
    heroNote: "减少错误，精确控制库存，并实现每一笔移动的完整追溯。",
    heroCardTitle: "仓库实时可视化",
    heroCardItem1: "带PO验证的收货流程",
    heroCardItem2: "高级拣选与补货",
    heroCardItem3: "历史记录、Web报表与仪表板",

    summaryTitle: "执行摘要",
    summaryIntro:
      "ICS 是一套为真实仓储环境设计的仓库管理系统，具有智能流程、严格校验和完整追溯能力。",
    summaryCard1Title: "优化的仓库作业",
    summaryCard1Body:
      "从收货、上架、内部转移到领料和拣货，ICS 通过分步引导来减少错误并提升效率。",
    summaryCard2Title: "可靠且可审计",
    summaryCard2Body:
      "每一笔操作都记录用户、时间、数量和类型，为审计和客户需求提供完整追溯。",
    summaryCard3Title: "现代用户体验",
    summaryCard3Body:
      "类Excel表格、可拖动弹窗以及清晰的错误消息，让培训和上手更轻松。",

    modulesTitle: "核心模块",
    modulesIntro:
      "ICS 覆盖仓库全生命周期，从PO收货到领料消耗及历史分析。",
    moduleReceivingTitle: "收货（PO控制）",
    moduleReceivingItem1: "开放PO校验",
    moduleReceivingItem2: "防止超收",
    moduleReceivingItem3: "部分收货处理",
    moduleReceivingItem4: "智能自动填写与完整历史记录",
    modulePickingTitle: "补货与高级拣选",
    modulePickingItem1: "按用户锁定库存",
    modulePickingItem2: "自动分配最早订单",
    modulePickingItem3: "拣货中任务持久化",
    modulePickingItem4: "自动调整与全程追溯",
    moduleIssueTitle: "领料 / 物料消耗",
    moduleIssueItem1: "严格校验物料、库位和数量",
    moduleIssueItem2: "库位FIFO逻辑",
    moduleIssueItem3: "防止负库存",
    moduleIssueItem4: "详细的移动记录",
    moduleSubTransferTitle: "内部转移（Sub-Transfer）",
    moduleSubTransferItem1: "单次操作最多10条转移",
    moduleSubTransferItem2: "数量校验",
    moduleSubTransferItem3: "源/目的双重调整",
    moduleSubTransferItem4: "带标签的审计历史",
    moduleInventoryTitle: "库存与Web报表",
    moduleInventoryItem1: "现有库存与按库位库存报表",
    moduleInventoryItem2: "历史与订单Web报表",
    moduleInventoryItem3: "基础KPI与仪表盘",
    moduleInventoryItem4: "导出至Excel / PDF",
    modulePermissionsTitle: "用户权限（RBAC）",
    modulePermissionsItem1: "按按钮级别控制访问权限",
    modulePermissionsItem2: "基于用户的动态显示/隐藏",
    modulePermissionsItem3: "通过Excel批量导入权限",
    modulePermissionsItem4: "表格编辑与高级筛选",

    benefitsTitle: "业务价值",
    benefitsIntro:
      "ICS 不仅是一套系统，更是一种规范、清晰地运行仓库的方式。",
    benefit1Title: "降低操作错误",
    benefit1Body:
      "各环节的校验可避免超收、错误库位和数量录入问题。",
    benefit2Title: "全面库存掌控",
    benefit2Body:
      "每次移动都会一致地更新现有库存和历史记录，且便于审计。",
    benefit3Title: "更高的作业效率",
    benefit3Body:
      "智能自动填写、引导流程和类Excel表格，加速日常操作。",
    benefit4Title: "培训更轻松",
    benefit4Body:
      "界面清晰、提示明确，新员工的上手更快。",

    pricingTitle: "授权与费用",
    pricingIntro: "按月授权，可根据仓库规模与需求灵活调整。",
    pricingPlanTitle: "ICS – 标准方案",
    pricingRange: "10个用户授权：每月 1,500 – 3,500 美元",
    pricingItem1: "系统访问权限",
    pricingItem2: "功能更新与改进",
    pricingItem3: "错误修复",
    pricingItem4: "技术支持",
    pricingItem5: "初始培训",
    pricingCta: "讨论您的仓库需求",

    screensTitle: "界面与流程示例",
    screensIntro:
      "ICS 提供专业表格、可拖动弹窗和适用于实务操作的Web报表。",
    screensPlaceholder1: "收货与订单模块",
    screensPlaceholder2: "按库位库存报表",
    screensPlaceholder3: "历史与Web报表",

    contactTitle: "联系与下一步",
    contactIntro: "简单介绍一下您的仓储业务，我们一起看ICS如何帮到您。",
    contactCompanyTitle: "Sanchez Web Apps LLC",
    contactCompanyBody:
      "我们基于真实现场逻辑，打造现代化的库存与仓库管理解决方案。",
    contactEmailLabel: "邮箱：",
    contactLocationLabel: "地区：",
    contactFormNameLabel: "姓名",
    contactFormEmailLabel: "邮箱",
    contactFormMessageLabel: "留言",
    contactFormCta: "发送信息",

    footerRights: "保留所有权利。"
  }
};