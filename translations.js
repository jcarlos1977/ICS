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

    /* Receiving */
    moduleReceivingTitle: "Receiving (PO Controlled)",
    moduleReceivingItem1: "Open PO validation",
    moduleReceivingItem2: "Over-receiving prevention",
    moduleReceivingItem3: "Partial receipts management",
    moduleReceivingItem4: "Smart auto-fill and full history",

    /* Replenishment & Advanced Picking */
    modulePickingTitle: "Replenishment & Advanced Picking",
    modulePickingItem1: "Inventory reservation by user",
    modulePickingItem2: "Automatic assignment of oldest order",
    modulePickingItem3: "Work-in-progress persistence",
    modulePickingItem4: "Automatic adjustments and full traceability",

    /* Issue / Consumption */
    moduleIssueTitle: "Issue / Material Consumption",
    moduleIssueItem1: "Strict validation of part, location and quantity",
    moduleIssueItem2: "Location FIFO logic",
    moduleIssueItem3: "Negative inventory prevention",
    moduleIssueItem4: "Detailed movement log",

    /* Sub‑Transfer */
    moduleSubTransferTitle: "Sub-Transfer (Internal Moves)",
    moduleSubTransferItem1: "Up to 10 moves in a single operation",
    moduleSubTransferItem2: "Quantity validation",
    moduleSubTransferItem3: "Double adjustment (source/destination)",
    moduleSubTransferItem4: "Auditable history with labels",

    /* Inventory & Reports */
    moduleInventoryTitle: "Inventory & Web Reports",
    moduleInventoryItem1: "On-Hand and Inventory by Location",
    moduleInventoryItem2: "History and Orders Web Reports",
    moduleInventoryItem3: "Initial KPIs and dashboards",
    moduleInventoryItem4: "Export to Excel / PDF",

    /* Permissions */
    modulePermissionsTitle: "User Permissions (RBAC)",
    modulePermissionsItem1: "Button-level access control",
    modulePermissionsItem2: "Dynamic show/hide per user",
    modulePermissionsItem3: "Bulk upload via Excel",
    modulePermissionsItem4: "Table editing and advanced filters",

    /* Technical Details */
    technicalDetailsTitle: "Technical Details of ICS",
    technicalDetailsDescription:
      "Explore the internal tables, validations and logic behind each module.",

    /* NEW MODULES BELOW */

    /* Incoming Load Processing */
    moduleIncomingProcessingTitle: "Dual‑Layer Incoming Load Processing",
    moduleIncomingProcessingItem1: "Staging layer for raw file intake",
    moduleIncomingProcessingItem2:
      "Strict validation of file name & column sequence",
    moduleIncomingProcessingItem3:
      "Visual error flags for mismatched Part Numbers",
    moduleIncomingProcessingItem4:
      "Shipment integrity enforcement (no duplicates)",
    moduleIncomingProcessingItem5:
      "Quality‑gate logic before LPN generation",

    /* Dashboard & KPIs */
    moduleDashboardTitle: "Dashboard & KPIs",
    moduleDashboardItem1: "Real‑time KPIs and trends",
    moduleDashboardItem2: "10 summary cards with live data",
    moduleDashboardItem3: "Interactive charts (bar, line, donut)",
    moduleDashboardItem4: "Operational insights by user and type",

    /* Inventory On‑Hand */
    moduleOnHandTitle: "Inventory On‑Hand",
    moduleOnHandItem1: "Excel‑style interaction",
    moduleOnHandItem2: "Quick & advanced filters",
    moduleOnHandItem3: "Hover, row & cell highlighting",
    moduleOnHandItem4: "Export to Excel / CSV",

    /* Inventory by Location */
    moduleInvByLocTitle: "Inventory by Location",
    moduleInvByLocItem1: "Real‑time location accuracy",
    moduleInvByLocItem2: "Integrated Ship / Receive / Sub‑Transfer",
    moduleInvByLocItem3: "Bulk import & validation",
    moduleInvByLocItem4: "Excel‑style UI with full traceability",

    /* Item & Location Master Data */
    moduleMasterDataTitle: "Item & Location Master Data",
    moduleMasterDataItem1: "Strict validation for all operations",
    moduleMasterDataItem2: "Bulk import of items & locations",
    moduleMasterDataItem3: "Active / inactive status control",
    moduleMasterDataItem4: "Excel‑style interaction & export",

    /* Purchase Orders */
    modulePOTitle: "Purchase Orders",
    modulePOItem1: "Bulk import & template generation",
    modulePOItem2: "Dynamic status (Ordered / Partial / Completed)",
    modulePOItem3: "Strict receiving validation",
    modulePOItem4: "Excel‑style UI with full history",

    /* Order Request Management */
    moduleOrderReqTitle: "Order Request Management",
    moduleOrderReqItem1: "Modal‑based order creation",
    moduleOrderReqItem2: "Dynamic status workflow",
    moduleOrderReqItem3: "Strict validation & real‑time updates",
    moduleOrderReqItem4: "Export & full audit trail",

    /* Picking Orders / Replacement */
    modulePickingOrdersTitle: "Picking Orders / Replacement",
    modulePickingOrdersItem1: "Automatic assignment of oldest order",
    modulePickingOrdersItem2: "FIFO‑based location logic",
    modulePickingOrdersItem3: "Strict picking validation",
    modulePickingOrdersItem4: "Full traceability in History",

    /* Incoming Loads Verification */
    moduleIncomingVerificationTitle: "Incoming Loads Verification",
    moduleIncomingVerificationItem1: "LPN generation & assignment",
    moduleIncomingVerificationItem2: "Multi‑size label printing",
    moduleIncomingVerificationItem3: "Discrepancy detection & color coding",
    moduleIncomingVerificationItem4:
      "Real‑time receiving & put‑away tracking",

    /* Physical Counts */
    modulePhysicalCountTitle: "Physical Counts",
    modulePhysicalCountItem1: "Modal‑based counting workflow",
    modulePhysicalCountItem2: "User‑specific tag number sequences",
    modulePhysicalCountItem3: "Discrepancy tracking & highlighting",
    modulePhysicalCountItem4: "Controlled reconciliation process",

    /* Inventory History */
    moduleHistoryTitle: "Inventory History",
    moduleHistoryItem1: "Full audit trail of all movements",
    moduleHistoryItem2: "Quick & advanced filters",
    moduleHistoryItem3: "Excel‑style interaction",
    moduleHistoryItem4: "Export for audits & investigations",

    /* Benefits */
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

    /* Pricing */
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

    /* Screens */
    screensTitle: "Screens & Workflow Examples",
    screensIntro:
      "ICS includes professional tables, draggable modals and web reports ready for real operations.",
    screensPlaceholder1: "Receiving & Orders module",
    screensPlaceholder2: "Inventory by Location report",
    screensPlaceholder3: "History & web reports",

    /* Contact */
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

    /* Receiving */
    moduleReceivingTitle: "Receiving (PO controlado)",
    moduleReceivingItem1: "Validación de POs abiertos",
    moduleReceivingItem2: "Prevención de sobre‑receiving",
    moduleReceivingItem3: "Manejo de recibos parciales",
    moduleReceivingItem4: "Auto‑llenado inteligente y registro histórico",

    /* Replenishment & Advanced Picking */
    modulePickingTitle: "Replenishment & Picking avanzado",
    modulePickingItem1: "Reserva de inventario por usuario",
    modulePickingItem2: "Asignación automática de la orden más antigua",
    modulePickingItem3: "Persistencia del trabajo en progreso",
    modulePickingItem4: "Ajustes automáticos y trazabilidad total",

    /* Issue / Consumption */
    moduleIssueTitle: "Issue / Consumo de material",
    moduleIssueItem1: "Validación estricta de parte, ubicación y cantidades",
    moduleIssueItem2: "Lógica FIFO de locations",
    moduleIssueItem3: "Prevención de inventario negativo",
    moduleIssueItem4: "Registro detallado de movimientos",

    /* Sub‑Transfer */
    moduleSubTransferTitle: "Sub‑Transfer (movimientos internos)",
    moduleSubTransferItem1: "Hasta 10 movimientos en una sola operación",
    moduleSubTransferItem2: "Validación de cantidades",
    moduleSubTransferItem3: "Ajuste doble (origen/destino)",
    moduleSubTransferItem4: "Historial etiquetado para auditoría",

    /* Inventory & Reports */
    moduleInventoryTitle: "Inventario y reportes web",
    moduleInventoryItem1: "On‑Hand e Inventory by Location",
    moduleInventoryItem2: "History y Orders Web Reports",
    moduleInventoryItem3: "KPIs y dashboard inicial",
    moduleInventoryItem4: "Exportación a Excel / PDF",

    /* Permissions */
    modulePermissionsTitle: "Permisos por usuario (RBAC)",
    modulePermissionsItem1: "Control de acceso por botón",
    modulePermissionsItem2: "Mostrar/ocultar dinámico por usuario",
    modulePermissionsItem3: "Carga masiva vía Excel",
    modulePermissionsItem4: "Edición en tabla y filtros avanzados",

    /* Technical Details */
    technicalDetailsTitle: "Detalles Técnicos de ICS",
    technicalDetailsDescription:
      "Explora las tablas internas, validaciones y lógica detrás de cada módulo.",

    /* NEW MODULES BELOW */

    /* Incoming Load Processing */
    moduleIncomingProcessingTitle: "Procesamiento de Cargas Entrantes en Dos Capas",
    moduleIncomingProcessingItem1: "Capa de staging para archivos sin procesar",
    moduleIncomingProcessingItem2:
      "Validación estricta del nombre y secuencia de columnas",
    moduleIncomingProcessingItem3:
      "Indicadores visuales para Part Numbers incorrectos",
    moduleIncomingProcessingItem4: "Integridad del embarque (sin duplicados)",
    moduleIncomingProcessingItem5:
      "Lógica de control de calidad antes de generar LPN",

    /* Dashboard & KPIs */
    moduleDashboardTitle: "Dashboard y KPIs",
    moduleDashboardItem1: "KPIs y tendencias en tiempo real",
    moduleDashboardItem2: "10 tarjetas de resumen con datos en vivo",
    moduleDashboardItem3: "Gráficas interactivas (barra, línea, dona)",
    moduleDashboardItem4: "Insights operativos por usuario y tipo",

    /* Inventory On‑Hand */
    moduleOnHandTitle: "Inventario On‑Hand",
    moduleOnHandItem1: "Interacción estilo Excel",
    moduleOnHandItem2: "Filtros rápidos y avanzados",
    moduleOnHandItem3: "Resaltado por hover, fila y celda",
    moduleOnHandItem4: "Exportación a Excel / CSV",

    /* Inventory by Location */
    moduleInvByLocTitle: "Inventario por ubicación",
    moduleInvByLocItem1: "Exactitud en tiempo real por ubicación",
    moduleInvByLocItem2: "Ship / Receive / Sub‑Transfer integrados",
    moduleInvByLocItem3: "Importación masiva y validación",
    moduleInvByLocItem4: "Interfaz estilo Excel con trazabilidad completa",

    /* Item & Location Master Data */
    moduleMasterDataTitle: "Datos maestros de Items y Ubicaciones",
    moduleMasterDataItem1: "Validación estricta para todas las operaciones",
    moduleMasterDataItem2: "Importación masiva de items y ubicaciones",
    moduleMasterDataItem3: "Control de estado activo / inactivo",
    moduleMasterDataItem4: "Interacción estilo Excel y exportación",

    /* Purchase Orders */
    modulePOTitle: "Purchase Orders",
    modulePOItem1: "Importación masiva y generación de plantilla",
    modulePOItem2: "Estado dinámico (Ordered / Partial / Completed)",
    modulePOItem3: "Validación estricta en recepción",
    modulePOItem4: "Interfaz estilo Excel con historial completo",

    /* Order Request Management */
    moduleOrderReqTitle: "Gestión de Order Requests",
    moduleOrderReqItem1: "Creación de órdenes mediante modal",
    moduleOrderReqItem2: "Flujo de estados dinámico",
    moduleOrderReqItem3: "Validación estricta y actualizaciones en tiempo real",
    moduleOrderReqItem4: "Exportación y auditoría completa",

    /* Picking Orders / Replacement */
    modulePickingOrdersTitle: "Picking Orders / Replacement",
    modulePickingOrdersItem1: "Asignación automática de la orden más antigua",
    modulePickingOrdersItem2: "Lógica FIFO basada en ubicación",
    modulePickingOrdersItem3: "Validación estricta de picking",
    modulePickingOrdersItem4: "Trazabilidad completa en History",

    /* Incoming Loads Verification */
    moduleIncomingVerificationTitle: "Verificación de Cargas Entrantes",
    moduleIncomingVerificationItem1: "Generación y asignación de LPN",
    moduleIncomingVerificationItem2: "Impresión de etiquetas en múltiples tamaños",
    moduleIncomingVerificationItem3: "Detección de discrepancias con código de color",
    moduleIncomingVerificationItem4:
      "Recepción y put‑away en tiempo real",

    /* Physical Counts */
    modulePhysicalCountTitle: "Conteos Físicos",
    modulePhysicalCountItem1: "Flujo de conteo mediante modal",
    modulePhysicalCountItem2: "Secuencias de tags por usuario",
    modulePhysicalCountItem3: "Seguimiento y resaltado de discrepancias",
    modulePhysicalCountItem4: "Proceso de conciliación controlado",

    /* Inventory History */
    moduleHistoryTitle: "Historial de Inventario",
    moduleHistoryItem1: "Auditoría completa de todos los movimientos",
    moduleHistoryItem2: "Filtros rápidos y avanzados",
    moduleHistoryItem3: "Interacción estilo Excel",
    moduleHistoryItem4: "Exportación para auditorías e investigaciones",

    /* Benefits */
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

    /* Pricing */
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

    /* Screens */
    screensTitle: "Pantallas y ejemplos de flujo",
    screensIntro:
      "ICS incluye tablas profesionales, modales arrastrables y reportes web listos para operar.",
    screensPlaceholder1: "Módulo de Receiving & Orders",
    screensPlaceholder2: "Reporte Inventory by Location",
    screensPlaceholder3: "History y reportes web",

    /* Contact */
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

    /* Receiving */
    moduleReceivingTitle: "收货（PO控制）",
    moduleReceivingItem1: "开放PO校验",
    moduleReceivingItem2: "防止超收",
    moduleReceivingItem3: "部分收货处理",
    moduleReceivingItem4: "智能自动填写与完整历史记录",

    /* Replenishment & Advanced Picking */
    modulePickingTitle: "补货与高级拣选",
    modulePickingItem1: "按用户锁定库存",
    modulePickingItem2: "自动分配最早订单",
    modulePickingItem3: "拣货中任务持久化",
    modulePickingItem4: "自动调整与全程追溯",

    /* Issue / Consumption */
    moduleIssueTitle: "领料 / 物料消耗",
    moduleIssueItem1: "严格校验物料、库位和数量",
    moduleIssueItem2: "库位FIFO逻辑",
    moduleIssueItem3: "防止负库存",
    moduleIssueItem4: "详细的移动记录",

    /* Sub‑Transfer */
    moduleSubTransferTitle: "内部转移（Sub‑Transfer）",
    moduleSubTransferItem1: "单次操作最多10条转移",
    moduleSubTransferItem2: "数量校验",
    moduleSubTransferItem3: "源/目的双重调整",
    moduleSubTransferItem4: "带标签的审计历史",

    /* Inventory & Reports */
    moduleInventoryTitle: "库存与Web报表",
    moduleInventoryItem1: "现有库存与按库位库存报表",
    moduleInventoryItem2: "历史与订单Web报表",
    moduleInventoryItem3: "基础KPI与仪表盘",
    moduleInventoryItem4: "导出至Excel / PDF",

    /* Permissions */
    modulePermissionsTitle: "用户权限（RBAC）",
    modulePermissionsItem1: "按按钮级别控制访问权限",
    modulePermissionsItem2: "基于用户的动态显示/隐藏",
    modulePermissionsItem3: "通过Excel批量导入权限",
    modulePermissionsItem4: "表格编辑与高级筛选",

    /* Technical Details */
    technicalDetailsTitle: "ICS 技术细节",
    technicalDetailsDescription: "查看每个模块的内部表格、验证逻辑和系统结构。",

    /* NEW MODULES BELOW */

    /* Incoming Load Processing */
    moduleIncomingProcessingTitle: "双层入库处理流程",
    moduleIncomingProcessingItem1: "原始文件接收的预处理层",
    moduleIncomingProcessingItem2: "严格校验文件名与列顺序",
    moduleIncomingProcessingItem3: "物料编号不匹配的可视化错误提示",
    moduleIncomingProcessingItem4: "装运完整性校验（禁止重复）",
    moduleIncomingProcessingItem5: "生成 LPN 前的质量控制逻辑",

    /* Dashboard & KPIs */
    moduleDashboardTitle: "Dashboard 与关键指标",
    moduleDashboardItem1: "实时关键指标与趋势",
    moduleDashboardItem2: "10 个实时数据摘要卡片",
    moduleDashboardItem3: "交互式图表（柱状、折线、甜甜圈）",
    moduleDashboardItem4: "按用户与类型的运营洞察",

    /* Inventory On‑Hand */
    moduleOnHandTitle: "现有库存（On‑Hand）",
    moduleOnHandItem1: "类Excel交互方式",
    moduleOnHandItem2: "快速与高级筛选",
    moduleOnHandItem3: "悬停、行与单元格高亮",
    moduleOnHandItem4: "导出至 Excel / CSV",

    /* Inventory by Location */
    moduleInvByLocTitle: "按库位库存",
    moduleInvByLocItem1: "库位级实时准确性",
    moduleInvByLocItem2: "集成 Ship / Receive / Sub‑Transfer",
    moduleInvByLocItem3: "批量导入与校验",
    moduleInvByLocItem4: "类Excel界面并具备完整追溯",

    /* Item & Location Master Data */
    moduleMasterDataTitle: "物料与库位主数据",
    moduleMasterDataItem1: "所有操作的严格校验",
    moduleMasterDataItem2: "批量导入物料与库位",
    moduleMasterDataItem3: "启用 / 停用状态控制",
    moduleMasterDataItem4: "类Excel交互与导出",

    /* Purchase Orders */
    modulePOTitle: "采购订单（PO）",
    modulePOItem1: "批量导入与模板生成",
    modulePOItem2: "动态状态（Ordered / Partial / Completed）",
    modulePOItem3: "严格的收货校验",
    modulePOItem4: "类Excel界面与完整历史记录",

    /* Order Request Management */
    moduleOrderReqTitle: "订单请求管理",
    moduleOrderReqItem1: "通过弹窗创建订单请求",
    moduleOrderReqItem2: "动态状态流程",
    moduleOrderReqItem3: "严格校验与实时更新",
    moduleOrderReqItem4: "导出与完整审计记录",

    /* Picking Orders / Replacement */
    modulePickingOrdersTitle: "拣选订单 / 替换流程",
    modulePickingOrdersItem1: "自动分配最早订单",
    modulePickingOrdersItem2: "基于库位的FIFO逻辑",
    modulePickingOrdersItem3: "严格的拣选校验",
    modulePickingOrdersItem4: "在历史记录中完整追溯",

    /* Incoming Loads Verification */
    moduleIncomingVerificationTitle: "入库验证（LPN 分配）",
    moduleIncomingVerificationItem1: "LPN 生成与分配",
    moduleIncomingVerificationItem2: "多尺寸标签打印",
    moduleIncomingVerificationItem3: "差异检测与颜色标记",
    moduleIncomingVerificationItem4: "实时收货与上架跟踪",

    /* Physical Counts */
    modulePhysicalCountTitle: "盘点（Physical Counts）",
    modulePhysicalCountItem1: "基于弹窗的盘点流程",
    modulePhysicalCountItem2: "按用户分配的标签序列",
    modulePhysicalCountItem3: "差异跟踪与高亮显示",
    modulePhysicalCountItem4: "受控的差异调节流程",

    /* Inventory History */
    moduleHistoryTitle: "库存历史记录",
    moduleHistoryItem1: "所有移动的完整审计记录",
    moduleHistoryItem2: "快速与高级筛选",
    moduleHistoryItem3: "类Excel交互方式",
    moduleHistoryItem4: "用于审计与调查的导出功能",

    /* Benefits */
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

    /* Pricing */
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

    /* Screens */
    screensTitle: "界面与流程示例",
    screensIntro:
      "ICS 提供专业表格、可拖动弹窗和适用于实务操作的Web报表。",
    screensPlaceholder1: "收货与订单模块",
    screensPlaceholder2: "按库位库存报表",
    screensPlaceholder3: "历史与Web报表",

    /* Contact */
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






