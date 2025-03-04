const publicationsData = [
    {
        title: "Desarrollador Frontend / Lima / 40 horas semanales",
        subtitle: "Startup Tecnológica",
        description: "Buscamos un Desarrollador Frontend con experiencia en React, JavaScript y HTML/CSS. Únete a nuestro equipo de desarrollo para crear interfaces innovadoras.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 4.500,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Marketing Digital / Remoto / 20 horas semanales",
        subtitle: "Agencia de Marketing",
        description: "Buscamos un experto en Marketing Digital con habilidades en SEO, SEM, Google Analytics y manejo de redes sociales para unirse a nuestro equipo de forma remota.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 2.000,00' },
            { icon: 'bx bx-briefcase', label: 'Medio Tiempo' },
            { icon: 'bx bx-time-five', label: 'Remoto' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Temporal' }
        ]
    },
    {
        title: "Desarrollador Backend / Arequipa / 40 horas semanales",
        subtitle: "Empresa de Software",
        description: "Buscamos un Desarrollador Backend con experiencia en Node.js, Express, MongoDB y APIs REST para formar parte de nuestro equipo de desarrollo.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 3.800,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Diseñador Gráfico / Lima / 30 horas semanales",
        subtitle: "Agencia Creativa",
        description: "Se requiere diseñador gráfico con experiencia en Adobe Illustrator, Photoshop y diseño de identidad visual. Trabaja de forma flexible con clientes diversos.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 3.000,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Híbrido' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato por Proyecto' }
        ]
    },
    {
        title: "Community Manager / Lima / 25 horas semanales",
        subtitle: "Compañía de Retail",
        description: "Buscamos un Community Manager con experiencia en la gestión de redes sociales para una marca líder en retail. Debe ser creativo y tener habilidades de comunicación.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 2.500,00' },
            { icon: 'bx bx-briefcase', label: 'Medio Tiempo' },
            { icon: 'bx bx-time-five', label: 'Remoto' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Temporal' }
        ]
    },
    {
        title: "Consultor SEO / Lima / 40 horas semanales",
        subtitle: "Consultoría en Marketing Digital",
        description: "Se busca consultor SEO con experiencia en optimización de motores de búsqueda, análisis de métricas y mejora del posicionamiento web de nuestros clientes.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 4.000,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Desarrollador Fullstack / Cusco / 40 horas semanales",
        subtitle: "Empresa de Tecnología",
        description: "Buscamos un desarrollador fullstack con conocimientos en JavaScript, React y Node.js. El puesto requiere desarrollar tanto el frontend como el backend de aplicaciones web.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 5.000,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Analista de Datos / Lima / 40 horas semanales",
        subtitle: "Consultoría en Tecnología",
        description: "Estamos en búsqueda de un analista de datos para trabajar con grandes volúmenes de información, realizando análisis y reportes con herramientas como Power BI.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 4.200,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Especialista en Ciberseguridad / Lima / 40 horas semanales",
        subtitle: "Empresa de Seguridad Informática",
        description: "Buscamos un especialista en ciberseguridad para proteger los sistemas y redes de nuestra empresa. Conocimiento de firewall, criptografía y auditorías de seguridad es esencial.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 5.500,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Ingeniero de Sistemas / Arequipa / 40 horas semanales",
        subtitle: "Consultoría en TI",
        description: "Estamos buscando un Ingeniero de Sistemas con experiencia en administración de servidores, redes y bases de datos. Será responsable del mantenimiento de infraestructuras de TI.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 3.800,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Soporte Técnico / Lima / 40 horas semanales",
        subtitle: "Empresa de Servicios Informáticos",
        description: "Se necesita soporte técnico para resolver problemas relacionados con equipos de computo, redes y sistemas operativos. Experiencia en diagnóstico y solución de problemas.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 2.500,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Asistente Administrativo / Trujillo / 40 horas semanales",
        subtitle: "Empresa de Logística",
        description: "Se requiere asistente administrativo para llevar el control de los procesos internos de la empresa, atención al cliente y gestión de documentos.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 2.200,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Temporal' }
        ]
    },
    {
        title: "Auxiliar de Contabilidad / Lima / 40 horas semanales",
        subtitle: "Firma Contable",
        description: "Buscamos un auxiliar contable con experiencia en el manejo de software contable y conocimientos básicos de impuestos y leyes fiscales.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 2.800,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Vendedor de Campo / Lima / 40 horas semanales",
        subtitle: "Compañía de Distribución",
        description: "Buscamos un vendedor de campo con experiencia en ventas directas y relaciones con clientes. El trabajo será 100% presencial, en contacto directo con nuestros clientes.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 2.500,00 + Comisiones' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Temporal' }
        ]
    },
    {
        title: "Chef / Lima / 40 horas semanales",
        subtitle: "Restaurante de Alta Cocina",
        description: "Buscamos un chef con experiencia en alta cocina y creatividad para unirse a nuestro equipo. Trabajará en un ambiente dinámico y con oportunidades de crecimiento.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 3.200,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Indefinido' }
        ]
    },
    {
        title: "Recepcionista / Cusco / 40 horas semanales",
        subtitle: "Hotel 5 Estrellas",
        description: "Buscamos un recepcionista con experiencia en atención al cliente y manejo de reservas. El trabajo es 100% presencial en un hotel de lujo en Cusco.",
        contract: [
            { icon: 'bx bx-dollar-circle', label: 'S/ 2.200,00' },
            { icon: 'bx bx-briefcase', label: 'Tiempo Completo' },
            { icon: 'bx bx-time-five', label: 'Presencial' },
            { icon: 'bx bx-bar-chart-alt-2', label: 'Contrato Temporal' }
        ]
    }
];

export {publicationsData};
