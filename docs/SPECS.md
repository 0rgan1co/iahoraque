# IAhora qué — Specs EARS

Especificaciones funcionales y de experiencia, escritas con el formato EARS (Easy Approach to Requirements Syntax).

**Patrones EARS utilizados:**
- **Ubiquitous**: el sistema siempre debe cumplir esto (sin trigger)
- **Event-driven**: *Cuando [trigger], el sistema debe [respuesta]*
- **State-driven**: *Mientras [estado], el sistema debe [respuesta]*
- **Optional feature**: *Donde [característica], el sistema debe [respuesta]*
- **Unwanted behavior**: *Si [trigger inesperado], entonces el sistema debe [respuesta]*

**Estados:**
- ✅ Resuelto
- 🔶 Parcial
- ⏳ Pendiente
- ❌ Bloqueado (requiere input del usuario)

**Última actualización:** 2026-04-19 · post-Sprint 3

---

## 1. Estructura y navegación

| ID | EARS | Estado |
|----|------|--------|
| STR-01 | La landing debe tener entre 9 y 10 secciones narrativas, sin redundancia conceptual entre ellas. | ✅ (10 secciones: Hero · Problem · Cost · Proposal · Process · Agents · Team · Qualifier · LeadForm · Manifesto) |
| STR-02 | La landing debe presentar la información en el orden: Hero → Problema → Costo → Propuesta → Proceso → Agentes → Team → Qualifier → CTA final → Manifesto (anexo). | ✅ |
| STR-03 | Cuando el usuario hace scroll, la barra de navegación debe permanecer fija arriba con backdrop-blur. | ✅ |
| STR-04 | La navegación debe exponer máximo 5 anchors + 1 CTA primario. | ✅ |
| STR-05 | Cuando el usuario hace clic en un anchor del nav, la sección debe posicionarse respetando la altura del nav (scroll-padding-top). | ✅ |
| STR-06 | Donde una sección no es central (secundarias), no debe exponerse como anchor en el nav. | ✅ |

## 2. Hero

| ID | EARS | Estado |
|----|------|--------|
| HRO-01 | El hero debe mostrar una tesis contrarian visible en los primeros 600px de viewport. | ✅ |
| HRO-02 | El hero debe incluir el nombre de marca "IAhora qué" con las letras "IA" destacadas visualmente. | ✅ |
| HRO-03 | El hero debe ofrecer máximo 2 CTAs, con jerarquía clara (primario + secundario). | ✅ |
| HRO-04 | Cuando el usuario hace clic en el CTA primario del hero, debe scrollear a la sección de contacto (o abrir conversación). | ✅ |
| HRO-05 | El hero debe incluir un índice visual de las 3 secciones pilares con numeración y subtítulo. | ✅ |
| HRO-06 | El subtítulo del hero debe estar compuesto por máximo 3 oraciones, con ritmo editorial (frases cortas). | ✅ |

## 3. Problema

| ID | EARS | Estado |
|----|------|--------|
| PRB-01 | La sección Problema debe presentar exactamente 3 dolores, nombrados desde la perspectiva del decisor. | ✅ |
| PRB-02 | Cada dolor debe resolverse en ≤2 oraciones. | ✅ |
| PRB-03 | La sección debe usar color de acento distinto (naranja) para diferenciarse de la propuesta (azul). | ✅ |
| PRB-04 | Donde sea posible, cada dolor debe enunciarse como frase afirmativa (no pregunta). | ✅ |

## 4. Costo de no resolver

| ID | EARS | Estado |
|----|------|--------|
| CST-01 | La landing debe mostrar una sección que articule el costo de posponer la decisión. | ✅ |
| CST-02 | La sección Costo debe aparecer antes de la propuesta (como puente de urgencia). | ✅ |
| CST-03 | La sección debe cerrar con una frase contundente que acelere la decisión. | ✅ |

## 5. Propuesta

| ID | EARS | Estado |
|----|------|--------|
| PRP-01 | La landing debe tener UNA sola sección que sostenga la propuesta de valor (sin duplicación con Principle). | ✅ |
| PRP-02 | La propuesta debe articular las 3 P (personas / prioridades / procesos) como catalizador de la IA. | ✅ |
| PRP-03 | La propuesta debe contener un epígrafe de autoridad externa (ej. Donella Meadows). | ✅ |
| PRP-04 | La hipótesis H1 debe presentarse como cita destacada integrada a la propuesta, no como sección separada. | ✅ |

## 6. Proceso

| ID | EARS | Estado |
|----|------|--------|
| PRC-01 | La landing debe presentar exactamente 3 formas de trabajar. | ✅ |
| PRC-02 | Cada forma debe enmarcarse con una quote en primera persona del visitante (framing de auto-identificación). | ✅ |
| PRC-03 | Cada forma debe tener tags descriptivos (máximo 3 por tarjeta). | ✅ |
| PRC-04 | Cada forma debe poder distinguirse por un "code" tipográfico corto (ej. 1:1, GR, →). | ✅ |

## 7. Agentes

| ID | EARS | Estado |
|----|------|--------|
| AGT-01 | La landing debe incluir una tabla que mapee desafíos concretos a agentes entregables. | ✅ |
| AGT-02 | Cuando el viewport es ≥1024px, la tabla debe renderizarse como tabla con 5 columnas. | ✅ |
| AGT-03 | Cuando el viewport es <1024px, la tabla debe colapsar a cards apiladas (una por fila). | ✅ |
| AGT-04 | Cada agente debe nombrarse explícitamente y acompañarse de una descripción ≤30 palabras. | ✅ |

## 8. Team (Quién está detrás)

| ID | EARS | Estado |
|----|------|--------|
| TEM-01 | La landing debe presentar a las personas detrás del espacio antes del qualifier. | ✅ |
| TEM-02 | Cada persona debe tener: nombre, rol claro, bio de 3 párrafos, link externo. | ✅ |
| TEM-03 | Cada bio debe abrir con un quote personal o claim de filosofía. | ✅ |
| TEM-04 | Cada persona debe tener ≥3 credenciales concretas (stats, empresas, logros) en bullets. | ✅ (4 por persona) |
| TEM-05 | La sección debe cerrar con un authority claim colectivo ("No hablamos de teoría…"). | ✅ |

## 9. Qualifier

| ID | EARS | Estado |
|----|------|--------|
| QLF-01 | La landing debe incluir una sección "Es para ti / No es para ti" con dos columnas balanceadas. | ✅ |
| QLF-02 | Cada columna debe tener entre 4 y 6 items, con iconografía consistente (check vs. x). | ✅ |
| QLF-03 | Los items deben ser específicos (mencionar contextos reales), no abstractos. | ✅ |

## 10. CTA final

| ID | EARS | Estado |
|----|------|--------|
| CTA-01 | La sección CTA final debe tener un solo botón primario visible por encima del fold. | ✅ |
| CTA-02 | El CTA debe declarar qué va a pasar en la conversación (promesa concreta). | ✅ |
| CTA-03 | La sección debe manejar objeciones típicas ("sin pitch, sin compromiso"). | ✅ |
| CTA-04 | Cuando el usuario hace clic en el CTA primario, debe abrirse TidyCal en nueva pestaña. | ✅ |

## 11. Manifesto (anexo)

| ID | EARS | Estado |
|----|------|--------|
| MAN-01 | El manifesto debe vivir como anexo accesible desde un link secundario, no como sección principal. | ✅ |
| MAN-02 | El manifesto debe contener 4 creencias numeradas, cada una con claim + explicación. | ✅ |
| MAN-03 | El manifesto debe incluir un epígrafe de autoridad externa (Bossidy & Charan). | ✅ |
| MAN-04 | El manifesto debe terminar con un CTA secundario que replique el primario. | ✅ |

## 12. UX Writing — tono y ritmo

| ID | EARS | Estado |
|----|------|--------|
| UXW-01 | La landing debe usar una sola persona verbal (tú) de forma uniforme. | ✅ |
| UXW-02 | Los párrafos en cards deben tener entre 2 y 4 oraciones; nunca más. | ✅ |
| UXW-03 | Donde sea posible, debe usarse frases afirmativas cortas con ritmo (no listas narrativas). | ✅ |
| UXW-04 | La landing debe incluir al menos un authority claim personal ("viví cada uno de estos problemas"). | ✅ (en bio de Gaël + cierre de Team) |
| UXW-05 | La landing debe evitar buzzwords vacíos sobre IA; si se usa el término, debe justificarse con una definición operativa. | ✅ |

## 13. UI — jerarquía visual y consistencia

| ID | EARS | Estado |
|----|------|--------|
| UIV-01 | Los H2 de sección deben usar tamaño 3xl-5xl con tracking tight. | ✅ |
| UIV-02 | Los subtítulos dentro de listas deben usar H4 (no H3) para mantener jerarquía. | ✅ (Problem, Proposal, Process, Agents, Team) |
| UIV-03 | La paleta debe limitarse a 2 colores de acento: azul (#3b82f6) y ámbar (#dd8448). | ✅ |
| UIV-04 | Cada sección debe usar al menos un fondo visual distintivo (grid pattern, dots, glow). | ✅ |
| UIV-05 | Los eyebrows con badge + pulse dot deben reservarse para ≤4 secciones "pilares"; el resto debe tener eyebrows minimalistas. | ✅ (Hero · Proposal · LeadForm · Manifesto) |
| UIV-06 | Los botones primarios deben tener shadow con glow en tono de acento. | ✅ |

## 14. Responsive

| ID | EARS | Estado |
|----|------|--------|
| RSP-01 | La landing debe ser usable en viewports ≥320px. | ✅ |
| RSP-02 | Cuando el viewport es <768px, el nav debe ocultar los anchors y mantener solo logo + CTA. | ✅ |
| RSP-03 | Cuando el viewport es <1024px, las tablas deben colapsar a cards apiladas. | ✅ |
| RSP-04 | Cuando el viewport es <640px, las tarjetas de 3 columnas deben apilarse verticalmente. | ✅ |

## 15. Accesibilidad

| ID | EARS | Estado |
|----|------|--------|
| A11Y-01 | Cada sección debe tener un heading único identificable por ID. | ✅ |
| A11Y-02 | Los elementos decorativos (iconos, backgrounds) deben tener aria-hidden="true". | ✅ |
| A11Y-03 | Los links externos deben abrirse en nueva pestaña con rel="noopener noreferrer". | ✅ |
| A11Y-04 | Donde el usuario tiene prefers-reduced-motion activo, las animaciones deben deshabilitarse. | ✅ |
| A11Y-05 | El contraste de texto debe ser ≥4.5:1 para cuerpo y ≥3:1 para headings. | ✅ |

## 16. Performance y SEO

| ID | EARS | Estado |
|----|------|--------|
| PRF-01 | La landing debe servirse como HTML estático (Next.js export). | ✅ |
| PRF-02 | Cada página debe incluir meta title, description, open-graph y twitter card. | ✅ |
| PRF-03 | La landing debe exponer structured data JSON-LD para Organization, Service, FAQ, HowTo. | ✅ |
| PRF-04 | La landing debe exponer /llms.txt con resumen para LLMs. | ✅ |
| PRF-05 | La landing debe exponer /sitemap.xml. | ✅ |
| PRF-06 | El primer LCP debe renderizarse sin depender de JavaScript del cliente. | ✅ |

## 17. Conversión (funnel)

| ID | EARS | Estado |
|----|------|--------|
| FUN-01 | El CTA primario debe aparecer al menos 3 veces a lo largo de la landing (hero, mid, final). | ✅ |
| FUN-02 | El CTA debe ser consistente en texto ("Agendar una conversación") a través de toda la landing. | ✅ |
| FUN-03 | Cuando el usuario llega al qualifier y no se auto-descalifica, debe tener el CTA final visible en el siguiente scroll. | ✅ |
| FUN-04 | La sección Team debe posicionarse después de Agents (prueba) y antes del Qualifier (filtro), para ganar credibilidad antes de pedir la conversión. | ✅ |

---

## Resumen cuantitativo

| Categoría | ✅ Resuelto | 🔶 Parcial | ⏳ Pendiente | ❌ Bloqueado | Total |
|-----------|-------------|------------|---------------|---------------|-------|
| Estructura | 6 | 0 | 0 | 0 | 6 |
| Hero | 6 | 0 | 0 | 0 | 6 |
| Problema | 4 | 0 | 0 | 0 | 4 |
| Costo | 3 | 0 | 0 | 0 | 3 |
| Propuesta | 4 | 0 | 0 | 0 | 4 |
| Proceso | 4 | 0 | 0 | 0 | 4 |
| Agentes | 4 | 0 | 0 | 0 | 4 |
| Team | 5 | 0 | 0 | 0 | 5 |
| Qualifier | 3 | 0 | 0 | 0 | 3 |
| CTA | 4 | 0 | 0 | 0 | 4 |
| Manifesto | 4 | 0 | 0 | 0 | 4 |
| UX Writing | 5 | 0 | 0 | 0 | 5 |
| UI | 6 | 0 | 0 | 0 | 6 |
| Responsive | 4 | 0 | 0 | 0 | 4 |
| Accesibilidad | 5 | 0 | 0 | 0 | 5 |
| Performance/SEO | 6 | 0 | 0 | 0 | 6 |
| Conversión | 4 | 0 | 0 | 0 | 4 |
| **Total** | **77** | **0** | **0** | **0** | **77** |

**Cobertura actual: 77/77 = 100% resuelto** 🎯

---

## Historial de sprints

### Baseline (pre-Sprint 1)
- Cobertura: 56/77 (73%)
- Estructura con 12 secciones, tono mixto, CTA doble

### Sprint 1 (STR, PRP, TEM, CTA, FUN, UXW) — +15 pts → 88%
- Consolidación 12→10 secciones
- Fusión WhatIs+Principle+Learnings en Proposal
- 3 P como catalizador (decisión tomada)
- Team movida antes del Qualifier
- CTA único + promesa concreta
- Tuteo uniforme

### Sprint 2 (PRB, TEM, UXW) — +7 pts → 97%
- Recorte del segundo dolor para cumplir ≤2 oraciones
- Bios ricas de Team: quote personal, 3 párrafos, 4 credenciales por persona, link LinkedIn
- Authority claim personal en Gaël ("Viví cada uno de los problemas…")

### Sprint 3 (UIV) — +3 pts → 100%
- H3 → H4 en todos los subtítulos de cards (Problem, Proposal, Process, Agents, Team)
- Pulse dot restringido a 4 pilares (Hero, Proposal, LeadForm, Manifesto)
- Badge sin pulse agregado al Manifesto para mantener identidad del pilar

---

## Mantenimiento

Los specs deben revisarse cuando:
- Se agregue una nueva sección
- Se cambie el copy de un eyebrow o título
- Se modifique el orden del scroll
- Se cambie el CTA principal
