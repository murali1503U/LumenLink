---
name: svelte-ui-design
description: ALWAYS use this skill for ANY Svelte component styling, design, or UI work. Svelte 5 UI design system using Tailwind CSS 4, Skeleton Labs design tokens/presets/Tailwind Components, and Bits UI headless components. Covers class composition, color systems, interactive components, forms, overlays, and all visual design.
---

# Svelte UI Design System

Svelte 5 + Tailwind CSS 4 + Skeleton Labs + Bits UI 통합 디자인 시스템

## When to Use This Skill

**자동 활성화:**
- ANY Svelte component creation or modification
- ALL styling, design, and UI work in Svelte projects
- Component props, layouts, colors, spacing, typography
- Forms, buttons, cards, chips, badges, tables, dialogs, overlays
- Animations, transitions, hover effects, responsive design
- Dark mode, themes, conditional styling, dynamic values

## Core Principles

1. **컴포넌트**: Bits UI headless 컴포넌트만 사용
2. **스타일링**:
   - Skeleton Labs 토큰/프리셋 (preset-filled, preset-tonal 등)
   - Skeleton Labs Tailwind Components (card, chip, badge, placeholder 등 - 클래스 조합)
   - Tailwind CSS 유틸리티
3. **Skeleton 색상/프리셋**: 반드시 공식 문서 참고, 직접 shade 조합 만들지 말 것
4. **Progressive disclosure**: 필요한 문서만 참조
5. **1-level deep 참조**: SKILL.md → reference 파일만

## Available References

### Get Started
- [introduction.md](reference/introduction.md) - Skeleton 개요
- [installation.md](reference/installation.md) - 프레임워크별 설치
- [fundamentals.md](reference/fundamentals.md) - 핵심 개념
- [core-api.md](reference/core-api.md) - @base, @theme, @utility, @variant

### Design System
- [colors-design.md](reference/colors-design.md) - **색상 팔레트 및 Color Pairings** (필수 참고)
- [presets-design.md](reference/presets-design.md) - **프리셋 시스템** (필수 참고)
- [themes.md](reference/themes.md) - 테마 시스템
- [typography-design.md](reference/typography-design.md) - 타이포그래피
- [spacing-design.md](reference/spacing-design.md) - 간격 시스템
- [iconography.md](reference/iconography.md) - 아이콘

### Tailwind CSS 4
- [tailwind-utilities.md](reference/tailwind-utilities.md) - Tailwind CSS 4 유틸리티
- [tailwind-colors.md](reference/tailwind-colors.md) - OKLCH 색상
- [tailwind-theme.md](reference/tailwind-theme.md) - CSS @theme 설정
- [tailwind-variants.md](reference/tailwind-variants.md) - 상태 variant

### Svelte 5
- [svelte-class-syntax.md](reference/svelte-class-syntax.md) - 클래스 조합

### Tailwind Components (Skeleton Labs 클래스 조합)
클래스로 디자인을 뭉쳐놓은 기본 요소. card, chip, badge, placeholder 등.
- [badges.md](reference/badges.md), [buttons.md](reference/buttons.md), [cards.md](reference/cards.md), [chips.md](reference/chips.md)
- [dividers.md](reference/dividers.md), [forms.md](reference/forms.md), [placeholders.md](reference/placeholders.md), [tables.md](reference/tables.md)

### Bits UI - Headless Components
- [bits-ui-complete.md](reference/bits-ui-complete.md) - **Bits UI 42개 headless 컴포넌트 완전 문서**

### Guides
- [dark-mode.md](reference/dark-mode.md) - 다크 모드
- [layouts.md](reference/layouts.md) - 레이아웃
- [cookbook.md](reference/cookbook.md) - 레시피

### Migration
- [migrate-v2-to-v3.md](reference/migrate-v2-to-v3.md) - v2 → v3
- [migrate-v3-to-v4.md](reference/migrate-v3-to-v4.md) - v3 → v4

## Bits UI - Headless Components (42개)

완전히 커스터마이징 가능한 unstyled 컴포넌트. Skeleton Labs 토큰/프리셋으로 스타일링.

**주요 카테고리:**
- Layout: Accordion, Collapsible, Tabs, Separator
- Overlays: Dialog, Popover, Tooltip, Context Menu, Drawer
- Forms: Checkbox, Radio Group, Switch, Slider, Select, Combobox
- Date/Time: Calendar, Date Picker, Date Range Picker, Time Field
- Navigation: Dropdown Menu, Menubar, Navigation Menu, Pagination
- Display: Avatar, Progress, Meter, Badge
- Interactive: Button, Toggle, Link Preview

## Quick Reference

### Skeleton Labs 중요 규칙

**Color Pairings** (반드시 [colors-design.md](reference/colors-design.md) 참고):
- 패턴: `{property}-{color}-{lightShade}-{darkShade}`
- 허용 조합: 50-950, 100-900, 200-800, 300-700, 400-600, **500**, 600-400, 700-300, 800-200, 900-100, 950-50
- 규칙: **두 shade의 합이 1000** 또는 **500 단독**
- 예: `bg-surface-50-950`, `text-primary-200-800`

**Presets** (반드시 [presets-design.md](reference/presets-design.md) 참고):
- Filled: `preset-filled-{color}-{lightShade}-{darkShade}` 또는 `preset-filled-{color}-500`
- Tonal: `preset-tonal-{color}`
- Outlined: `preset-outlined-{color}-{lightShade}-{darkShade}`

### Svelte 5 Class Composition

```svelte
<!-- Array form -->
<div class={['base', condition && 'extra']}>

<!-- Object form -->
<div class={{ 'active': isActive, 'disabled': !enabled }}>

<!-- Style directive for dynamic values -->
<div
  class="bg-(--brand-color)"
  style:--brand-color={dynamicValue}>
```

### Usage Pattern

```svelte
<script lang="ts">
  import { Dialog } from "bits-ui";
</script>

<Dialog.Root>
  <Dialog.Trigger class="btn preset-filled-primary-500">
    Open
  </Dialog.Trigger>
  <Dialog.Content class={[
    'card preset-filled-surface-50-950',
    'p-8 rounded-xl shadow-xl'
  ]}>
    <Dialog.Title class="h3 text-primary-600-400">
      Title
    </Dialog.Title>
  </Dialog.Content>
</Dialog.Root>
```

## Best Practices

1. **컴포넌트**: Bits UI headless 컴포넌트만 사용
2. **스타일링**: Skeleton Labs 토큰/프리셋 + Tailwind Components (card, chip, badge 등) + Tailwind 유틸리티
3. **Skeleton 색상/프리셋**: 반드시 공식 문서([colors-design.md](reference/colors-design.md), [presets-design.md](reference/presets-design.md))에서 확인
4. **Class 조합 순서**: Tailwind Components → 프리셋 → 레이아웃 → 간격 → 조건부 → variant
5. **접근성**: WCAG 대비 비율, focus-visible 상태
6. **성능**: Svelte class 배열/객체 사용, Skeleton 프리셋 활용
7. **일관성**: 동일한 용어 사용, 3인칭 작성

---

---
name: penpot-uiux-design
description: 'Comprehensive guide for creating professional UI/UX designs in Penpot using MCP tools. Use this skill when: (1) Creating new UI/UX designs for web, mobile, or desktop applications, (2) Building design systems with components and tokens, (3) Designing dashboards, forms, navigation, or landing pages, (4) Applying accessibility standards and best practices, (5) Following platform guidelines (iOS, Android, Material Design), (6) Reviewing or improving existing Penpot designs for usability. Triggers: "design a UI", "create interface", "build layout", "design dashboard", "create form", "design landing page", "make it accessible", "design system", "component library".'
---

# Penpot UI/UX Design Guide

Create professional, user-centered designs in Penpot using the `penpot/penpot-mcp` MCP server and proven UI/UX principles.

## Available MCP Tools

| Tool | Purpose |
| ---- | ------- |
| `mcp__penpot__execute_code` | Run JavaScript in Penpot plugin context to create/modify designs |
| `mcp__penpot__export_shape` | Export shapes as PNG/SVG for visual inspection |
| `mcp__penpot__import_image` | Import images (icons, photos, logos) into designs |
| `mcp__penpot__penpot_api_info` | Retrieve Penpot API documentation |

## MCP Server Setup

The Penpot MCP tools require the `penpot/penpot-mcp` server running locally. For detailed installation and troubleshooting, see [setup-troubleshooting.md](references/setup-troubleshooting.md).

### Before Setup: Check If Already Running

**Always check if the MCP server is already available before attempting setup:**

1. **Try calling a tool first**: Attempt `mcp__penpot__penpot_api_info` - if it succeeds, the server is running and connected. No setup needed.

2. **If the tool fails**, ask the user:
   > "The Penpot MCP server doesn't appear to be connected. Is the server already installed and running? If so, I can help troubleshoot. If not, I can guide you through the setup."

3. **Only proceed with setup instructions if the user confirms the server is not installed.**

### Quick Start (Only If Not Installed)

```bash
# Clone and install
git clone https://github.com/penpot/penpot-mcp.git
cd penpot-mcp
npm install

# Build and start servers
npm run bootstrap
```

Then in Penpot:
1. Open a design file
2. Go to **Plugins** → **Load plugin from URL**
3. Enter: `http://localhost:4400/manifest.json`
4. Click **"Connect to MCP server"** in the plugin UI

### VS Code Configuration

Add to `settings.json`:
```json
{
  "mcp": {
    "servers": {
      "penpot": {
        "url": "http://localhost:4401/sse"
      }
    }
  }
}
```

### Troubleshooting (If Server Is Installed But Not Working)

| Issue | Solution |
| ----- | -------- |
| Plugin won't connect | Check servers are running (`npm run start:all` in penpot-mcp dir) |
| Browser blocks localhost | Allow local network access prompt, or disable Brave Shield, or try Firefox |
| Tools not appearing in client | Restart VS Code/Claude completely after config changes |
| Tool execution fails/times out | Ensure Penpot plugin UI is open and shows "Connected" |
| "WebSocket connection failed" | Check firewall allows ports 4400, 4401, 4402 |

## Quick Reference

| Task | Reference File |
| ---- | -------------- |
| MCP server installation & troubleshooting | [setup-troubleshooting.md](references/setup-troubleshooting.md) |
| Component specs (buttons, forms, nav) | [component-patterns.md](references/component-patterns.md) |
| Accessibility (contrast, touch targets) | [accessibility.md](references/accessibility.md) |
| Screen sizes & platform specs | [platform-guidelines.md](references/platform-guidelines.md) |

## Core Design Principles

### The Golden Rules

1. **Clarity over cleverness**: Every element must have a purpose
2. **Consistency builds trust**: Reuse patterns, colors, and components
3. **User goals first**: Design for tasks, not features
4. **Accessibility is not optional**: Design for everyone
5. **Test with real users**: Validate assumptions early

### Visual Hierarchy (Priority Order)

1. **Size**: Larger = more important
2. **Color/Contrast**: High contrast draws attention
3. **Position**: Top-left (LTR) gets seen first
4. **Whitespace**: Isolation emphasizes importance
5. **Typography weight**: Bold stands out

## Design Workflow

1. **Check for design system first**: Ask user if they have existing tokens/specs, or discover from current Penpot file
2. **Understand the page**: Call `mcp__penpot__execute_code` with `penpotUtils.shapeStructure()` to see hierarchy
3. **Find elements**: Use `penpotUtils.findShapes()` to locate elements by type or name
4. **Create/modify**: Use `penpot.createBoard()`, `penpot.createRectangle()`, `penpot.createText()` etc.
5. **Apply layout**: Use `addFlexLayout()` for responsive containers
6. **Validate**: Call `mcp__penpot__export_shape` to visually check your work

## Design System Handling

**Before creating designs, determine if the user has an existing design system:**

1. **Ask the user**: "Do you have a design system or brand guidelines to follow?"
2. **Discover from Penpot**: Check for existing components, colors, and patterns

```javascript
// Discover existing design patterns in current file
const allShapes = penpotUtils.findShapes(() => true, penpot.root);

// Find existing colors in use
const colors = new Set();
allShapes.forEach(s => {
  if (s.fills) s.fills.forEach(f => colors.add(f.fillColor));
});

// Find existing text styles (font sizes, weights)
const textStyles = allShapes
  .filter(s => s.type === 'text')
  .map(s => ({ fontSize: s.fontSize, fontWeight: s.fontWeight }));

// Find existing components
const components = penpot.library.local.components;

return { colors: [...colors], textStyles, componentCount: components.length };
```

**If user HAS a design system:**

- Use their specified colors, spacing, typography
- Match their existing component patterns
- Follow their naming conventions

**If user has NO design system:**

- Use the default tokens below as a starting point
- Offer to help establish consistent patterns
- Reference specs in [component-patterns.md](references/component-patterns.md)

## Key Penpot API Gotchas

- `width`/`height` are READ-ONLY → use `shape.resize(w, h)`
- `parentX`/`parentY` are READ-ONLY → use `penpotUtils.setParentXY(shape, x, y)`
- Use `insertChild(index, shape)` for z-ordering (not `appendChild`)
- Flex children array order is REVERSED for `dir="column"` or `dir="row"`
- After `text.resize()`, reset `growType` to `"auto-width"` or `"auto-height"`

## Positioning New Boards

**Always check existing boards before creating new ones** to avoid overlap:

```javascript
// Find all existing boards and calculate next position
const boards = penpotUtils.findShapes(s => s.type === 'board', penpot.root);
let nextX = 0;
const gap = 100; // Space between boards

if (boards.length > 0) {
  // Find rightmost board edge
  boards.forEach(b => {
    const rightEdge = b.x + b.width;
    if (rightEdge + gap > nextX) {
      nextX = rightEdge + gap;
    }
  });
}

// Create new board at calculated position
const newBoard = penpot.createBoard();
newBoard.x = nextX;
newBoard.y = 0;
newBoard.resize(375, 812);
```

**Board spacing guidelines:**

- Use 100px gap between related screens (same flow)
- Use 200px+ gap between different sections/flows
- Align boards vertically (same y) for visual organization
- Group related screens horizontally in user flow order

## Default Design Tokens

**Use these defaults only when user has no design system. Always prefer user's tokens if available.**

### Spacing Scale (8px base)

| Token | Value | Usage |
| ----- | ----- | ----- |
| `spacing-xs` | 4px | Tight inline elements |
| `spacing-sm` | 8px | Related elements |
| `spacing-md` | 16px | Default padding |
| `spacing-lg` | 24px | Section spacing |
| `spacing-xl` | 32px | Major sections |
| `spacing-2xl` | 48px | Page-level spacing |

### Typography Scale

| Level | Size | Weight | Usage |
| ----- | ---- | ------ | ----- |
| Display | 48-64px | Bold | Hero headlines |
| H1 | 32-40px | Bold | Page titles |
| H2 | 24-28px | Semibold | Section headers |
| H3 | 20-22px | Semibold | Subsections |
| Body | 16px | Regular | Main content |
| Small | 14px | Regular | Secondary text |
| Caption | 12px | Regular | Labels, hints |

### Color Usage

| Purpose | Recommendation |
| ------- | -------------- |
| Primary | Main brand color, CTAs |
| Secondary | Supporting actions |
| Success | #22C55E range (confirmations) |
| Warning | #F59E0B range (caution) |
| Error | #EF4444 range (errors) |
| Neutral | Gray scale for text/borders |

## Common Layouts

### Mobile Screen (375×812)

```text
┌─────────────────────────────┐
│ Status Bar (44px)           │
├─────────────────────────────┤
│ Header/Nav (56px)           │
├─────────────────────────────┤
│                             │
│ Content Area                │
│ (Scrollable)                │
│ Padding: 16px horizontal    │
│                             │
├─────────────────────────────┤
│ Bottom Nav/CTA (84px)       │
└─────────────────────────────┘

```

### Desktop Dashboard (1440×900)

```text
┌──────┬──────────────────────────────────┐
│      │ Header (64px)                    │
│ Side │──────────────────────────────────│
│ bar  │ Page Title + Actions             │
│      │──────────────────────────────────│
│ 240  │ Content Grid                     │
│ px   │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ │
│      │ │Card │ │Card │ │Card │ │Card │ │
│      │ └─────┘ └─────┘ └─────┘ └─────┘ │
│      │                                  │
└──────┴──────────────────────────────────┘

```

## Component Checklist

### Buttons

- [ ] Clear, action-oriented label (2-3 words)
- [ ] Minimum touch target: 44×44px
- [ ] Visual states: default, hover, active, disabled, loading
- [ ] Sufficient contrast (3:1 against background)
- [ ] Consistent border radius across app

### Forms

- [ ] Labels above inputs (not just placeholders)
- [ ] Required field indicators
- [ ] Error messages adjacent to fields
- [ ] Logical tab order
- [ ] Input types match content (email, tel, etc.)

### Navigation

- [ ] Current location clearly indicated
- [ ] Consistent position across screens
- [ ] Maximum 7±2 top-level items
- [ ] Touch-friendly on mobile (48px targets)

## Accessibility Quick Checks

1. **Color contrast**: Text 4.5:1, Large text 3:1
2. **Touch targets**: Minimum 44×44px
3. **Focus states**: Visible keyboard focus indicators
4. **Alt text**: Meaningful descriptions for images
5. **Hierarchy**: Proper heading levels (H1→H2→H3)
6. **Color independence**: Never rely solely on color

## Design Review Checklist

Before finalizing any design:

- [ ] Visual hierarchy is clear
- [ ] Consistent spacing and alignment
- [ ] Typography is readable (16px+ body text)
- [ ] Color contrast meets WCAG AA
- [ ] Interactive elements are obvious
- [ ] Mobile-friendly touch targets
- [ ] Loading/empty/error states considered
- [ ] Consistent with design system

## Validating Designs

Use these validation approaches with `mcp__penpot__execute_code`:

| Check | Method |
| ----- | ------ |
| Elements outside bounds | `penpotUtils.analyzeDescendants()` with `isContainedIn()` |
| Text too small (<12px) | `penpotUtils.findShapes()` filtering by `fontSize` |
| Missing contrast | Call `mcp__penpot__export_shape` and visually inspect |
| Hierarchy structure | `penpotUtils.shapeStructure()` to review nesting |

### Export CSS

Use `penpot.generateStyle(selection, { type: 'css', includeChildren: true })` via `mcp__penpot__execute_code` to extract CSS from designs.

## Tips for Great Designs

1. **Start with content**: Real content reveals layout needs
2. **Design mobile-first**: Constraints breed creativity
3. **Use a grid**: 8px base grid keeps things aligned
4. **Limit colors**: 1 primary + 1 secondary + neutrals
5. **Limit fonts**: 1-2 typefaces maximum
6. **Embrace whitespace**: Breathing room improves comprehension
7. **Be consistent**: Same action = same appearance everywhere
8. **Provide feedback**: Every action needs a response

---

---
name: ui-ux-expert-skill
description: Technical workflow for implementing accessible React user interfaces with shadcn/ui, Tailwind CSS, and TanStack Query. Includes 6-phase process with mandatory Style Guide compliance, Context7 best practices consultation, Chrome DevTools validation, and WCAG 2.1 AA accessibility standards. Use after Test Agent, Implementer, and Supabase agents complete their work.
---

# UI/UX Expert Technical Skill

**Version**: 1.0.0
**Agent**: ui-ux-expert
**Last Updated**: 2025-01-26

---

## Purpose

This skill provides the complete technical workflow for implementing accessible, performant React user interfaces that:
- Pass 100% of E2E tests without modification
- Comply with WCAG 2.1 AA accessibility standards
- Follow the project's Style Guide exactly
- Achieve Core Web Vitals green metrics
- Integrate with implemented use cases (not data services directly)

---

## 6-PHASE WORKFLOW (MANDATORY)

### PHASE 0: Style Guide Study (MANDATORY FIRST STEP)

**Objective**: Internalize the project's visual design system before ANY implementation.

**⚠️ CRITICAL**: This is the FIRST step. All implementations must reference the Style Guide.

**Steps**:

1. **Read Style Guide completely**:
   ```
   Read('.claude/STYLE_GUIDE.md')
   ```

2. **Memorize key constraints**:
   - **Color Palette**: 5 brand colors (Brand-1 through Brand-5) + semantic tokens
     - NO arbitrary hex values (e.g., `bg-[#4A5FFF]` is PROHIBITED)
     - ONLY use semantic tokens: `bg-primary`, `text-foreground`, `border`, etc.
   - **Typography Scale**: `text-xs` through `text-4xl` ONLY
     - NO arbitrary font sizes (e.g., `text-[32px]` is PROHIBITED)
   - **Spacing Scale**: `spacing-1` (4px) through `spacing-24` (96px) ONLY
     - NO arbitrary values (e.g., `p-[17px]` is PROHIBITED)
   - **Animation Durations**: 200ms, 300ms, or 500ms ONLY
     - NO other durations
   - **Border Radius**: `--radius` variable (default 0.5rem)

3. **Note component conventions**:
   - Hover states: `hover:bg-accent`, `hover:shadow-lg`
   - Focus states: `focus:ring-2 focus:ring-ring`
   - Disabled states: `disabled:opacity-50 disabled:cursor-not-allowed`
   - Dark mode: automatic via `.dark` class

**Deliverable**: Mental model of Style Guide constraints to apply during implementation.

---

### PHASE 1: Component Research (BEFORE Design)

**Objective**: Consult Context7 and shadcn MCP for latest best practices BEFORE designing components.

**⚠️ CRITICAL**: Research first, design second. Avoid implementing outdated patterns.

**Steps**:

1. **Context7: React patterns** (MANDATORY)
   ```typescript
   mcp__context7__get_library_docs({
     context7CompatibleLibraryID: "/reactjs/react.dev",
     topic: "hooks useEffect useState useMemo useCallback custom hooks best practices",
     tokens: 2500
   })
   ```
   **Extract**: Latest Hook patterns, composition strategies, performance tips

2. **Context7: Next.js App Router** (MANDATORY)
   ```typescript
   mcp__context7__get_library_docs({
     context7CompatibleLibraryID: "/vercel/next.js",
     topic: "client components use client app router best practices",
     tokens: 2000
   })
   ```
   **Extract**: `'use client'` directive usage, routing hooks, data fetching

3. **Context7: Tailwind CSS** (MANDATORY)
   ```typescript
   mcp__context7__get_library_docs({
     context7CompatibleLibraryID: "/tailwindlabs/tailwindcss.com",
     topic: "responsive design mobile-first breakpoints animations utilities",
     tokens: 2000
   })
   ```
   **Extract**: Responsive patterns, utility combinations, animation classes

4. **Context7: TanStack Query** (MANDATORY)
   ```typescript
   mcp__context7__get_library_docs({
     context7CompatibleLibraryID: "/tanstack/query",
     topic: "useQuery useMutation optimistic updates error handling",
     tokens: 2500
   })
   ```
   **Extract**: Data fetching patterns, cache invalidation, loading states

5. **shadcn MCP: Component discovery** (MANDATORY)
   ```typescript
   mcp__shadcn__search_items_in_registries({
     registries: ['@shadcn'],
     query: "form input button card dialog", // Adjust based on feature
     limit: 20
   })

   mcp__shadcn__view_items_in_registries({
     items: ['@shadcn/button', '@shadcn/form', '@shadcn/dialog']
   })
   ```
   **Extract**: Available components, composition patterns, accessibility features

6. **Additional Context7 queries** (as needed):
   - React Hook Form: `/react-hook-form/react-hook-form` - "zodResolver validation errors"
   - Framer Motion (if animations needed): `/grx7/framer-motion` - "variants spring animations"

**Deliverable**: Notes on latest patterns to apply in design phase.

---

### PHASE 2: Design Architecture (BEFORE Implementation)

**Objective**: Plan component hierarchy, state management, and user flows.

**Steps**:

1. **Review E2E test specifications**:
   ```typescript
   // Read E2E tests to understand required user flows
   Read('app/e2e/{feature}.spec.ts')
   ```
   **Extract**:
   - Required `data-testid` selectors
   - User interaction sequences
   - Expected UI elements (buttons, forms, lists)
   - Success/error state behaviors

2. **Design component hierarchy**:
   ```markdown
   ## Component Architecture

   ### Page Level (app/(main)/{feature}/page.tsx)
   - Route container
   - TanStack Query for data fetching
   - Layout composition

   ### Feature Components (features/{feature}/components/)
   - {Feature}List - Display collection
   - {Feature}Form - Create/Edit form
   - {Feature}Dialog - Modal interactions

   ### Presentation Components
   - {Feature}Item - Single item card
   - {Feature}Filters - Filter controls
   - {Feature}Stats - Statistics display

   ### Base Components (shadcn/ui)
   - Button, Input, Card, Dialog (composition, not modification)
   ```

3. **Plan state management**:
   ```markdown
   ## State Strategy

   **Server State** (TanStack Query):
   - useQuery for reads (list, single item)
   - useMutation for writes (create, update, delete)
   - Query key structure: ['feature', ...params]

   **Form State** (React Hook Form):
   - Zod schema for validation
   - zodResolver integration
   - Accessible error messages

   **UI State** (Zustand - if needed):
   - Dialog open/close
   - Sidebar collapsed state
   - Theme preference (handled by next-themes)
   ```

4. **Design user flows**:
   ```markdown
   ## Flow 1: Create {Entity}
   1. User clicks "Create" button
      → Opens dialog with form
   2. User fills fields (real-time validation)
   3. User submits
      → Loading state, disable form
   4. Success:
      → Close dialog, toast notification, refetch list
   5. Error:
      → Show error in form, keep dialog open, focus first error

   ## Flow 2: Edit {Entity}
   [Similar pattern...]

   ## Flow 3: Delete {Entity}
   [Similar pattern...]
   ```

5. **Plan accessibility patterns**:
   ```markdown
   ## Accessibility Design

   **Keyboard Navigation**:
   - Tab order: logical flow
   - Enter: submit forms, activate buttons
   - Escape: close dialogs
   - Arrow keys: navigate lists

   **ARIA Labels**:
   - Icon buttons: aria-label with context
   - Form fields: htmlFor + id association
   - Loading states: aria-busy
   - Error messages: aria-invalid + aria-describedby

   **Focus Management**:
   - Auto-focus first field on dialog open
   - Return focus to trigger on close
   - Focus trap in modals
   ```

6. **Plan responsive strategy**:
   ```markdown
   ## Responsive Design

   **Mobile (< 640px)**:
   - Single column layout
   - Stack cards vertically
   - Full-width buttons
   - Hide non-essential content

   **Tablet (640px - 1024px)**:
   - 2-column grid
   - Sidebar collapsible
   - Optimized spacing

   **Desktop (> 1024px)**:
   - 3-column grid
   - Fixed sidebar
   - Full feature set
   ```

**Deliverable**: Written design document covering hierarchy, state, flows, accessibility, and responsive strategy.

---

### PHASE 3: Implementation (Following Design)

**Objective**: Build React components following the design from Phase 2.

**🔐 CASL Integration (IF Authorization Required)**:

If E2E tests verify `<Can>` component visibility or the feature requires permission-based UI, implement CASL React integration FIRST before other components. See **Pattern 0: CASL React Integration** below.

**Implementation Order** (Bottom-Up):

0. **CASL Integration** (IF authorization required - implement FIRST)
   - AbilityContext provider
   - useAppAbility hook
   - Load ability in layout/page

1. **Form Components** (Highest Priority)
   - Complex, reusable
   - React Hook Form + Zod validation
   - Example: `CreateTaskForm.tsx`

2. **List/Display Components**
   - TanStack Query integration
   - Loading and error states
   - Example: `TaskList.tsx`

3. **Action Components**
   - Buttons, dialogs
   - Wire up mutations
   - Example: `CreateTaskDialog.tsx`

4. **Page Integration**
   - Compose all components
   - Test user flows
   - Example: `app/(main)/tasks/page.tsx`

**Code Patterns**:

#### Pattern 0: CASL React Integration (IF Authorization Required)

**When to implement**: If E2E tests verify `<Can>` component visibility or PRD specifies permission-based UI.

**Step 0.1: Create Ability Context**

**File**: `features/{feature}/context/AbilityContext.tsx`

```typescript
'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { AppAbility } from '../entities';

const AbilityContext = createContext<AppAbility | null>(null);

export function AbilityProvider({
  ability,
  children,
}: {
  ability: AppAbility;
  children: ReactNode;
}) {
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
}

export function useAppAbility() {
  const ability = useContext(AbilityContext);
  if (!ability) {
    throw new Error('useAppAbility must be used within AbilityProvider');
  }
  return ability;
}
```

**Step 0.2: Load Ability in Layout/Page**

**File**: `app/(main)/{feature}/layout.tsx` or `app/(main)/{feature}/page.tsx`

```typescript
import { loadUserAbility } from '@/features/{feature}/use-cases/loadUserAbility';
import { AbilityProvider } from '@/features/{feature}/context/AbilityContext';
import { createClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';

export default async function FeatureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Get authenticated user
  const supabase = createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect('/login');
  }

  // 2. Get current workspace (from cookies or URL)
  const workspaceId = 'workspace-id'; // TODO: Get from context

  // 3. Load user's ability for this workspace
  const ability = await loadUserAbility(user.id, workspaceId);

  // 4. Provide ability to all child components
  return (
    <AbilityProvider ability={ability}>
      {children}
    </AbilityProvider>
  );
}
```

**Step 0.3: Use in Components**

**Declarative visibility with `<Can>` component**:

```typescript
'use client';

import { Can } from '@casl/react';
import { useAppAbility } from '../context/AbilityContext';
import { Button } from '@/components/ui/button';
import { Trash2, Edit, Plus } from 'lucide-react';

export function BoardActions({ board }: { board: Board }) {
  const ability = useAppAbility();

  return (
    <div className="flex gap-2">
      {/* Show button ONLY if user can create boards */}
      <Can I="create" a="Board" ability={ability}>
        <Button variant="default">
          <Plus className="mr-2 h-4 w-4" />
          Create
        </Button>
      </Can>

      {/* Show button ONLY if user can update boards */}
      <Can I="update" a="Board" ability={ability}>
        <Button variant="secondary">
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </Can>

      {/* Show button ONLY if user can delete boards */}
      <Can I="delete" a="Board" ability={ability}>
        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </Can>
    </div>
  );
}
```

**Programmatic checks with `ability.can()`**:

```typescript
'use client';

import { useAppAbility } from '../context/AbilityContext';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

export function BoardHeader({ board }: { board: Board }) {
  const ability = useAppAbility();

  // Complex conditional rendering
  const canManage = ability.can('update', 'Board') && ability.can('delete', 'Board');

  return (
    <div className="flex items-center justify-between">
      <h1>{board.name}</h1>

      {/* Conditional rendering based on multiple abilities */}
      {canManage && (
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Manage Board
        </Button>
      )}

      {/* Disable button if user cannot perform action */}
      <Button
        disabled={!ability.can('archive', 'Board')}
        onClick={() => archiveBoard(board.id)}
      >
        Archive
      </Button>
    </div>
  );
}
```

**Field-level permissions**:

```typescript
'use client';

import { Can } from '@casl/react';
import { useAppAbility } from '../context/AbilityContext';

export function BoardDetails({ board }: { board: Board }) {
  const ability = useAppAbility();

  return (
    <div>
      <p>Name: {board.name}</p>
      <p>Description: {board.description}</p>

      {/* Show sensitive field ONLY if user can read it */}
      <Can I="read" a="Board" field="settings" ability={ability}>
        <p>Settings: {JSON.stringify(board.settings)}</p>
      </Can>
    </div>
  );
}
```

**CASL Implementation Checklist**:

- [ ] ✅ AbilityContext.tsx created with provider and hook
- [ ] ✅ AbilityProvider wraps feature in layout/page
- [ ] ✅ loadUserAbility() called server-side
- [ ] ✅ `<Can>` component used for show/hide logic
- [ ] ✅ `ability.can()` used for complex conditional rendering
- [ ] ✅ Buttons disabled (not just hidden) when user lacks permission
- [ ] ✅ Field-level permissions implemented (if applicable)
- [ ] ✅ E2E tests pass (verify visibility matches permissions)
- [ ] ✅ No console errors about missing AbilityContext

**Critical Rules**:
- ✅ ALWAYS use `<Can>` for simple show/hide (cleaner, declarative)
- ✅ Use `ability.can()` for complex logic (multiple checks, computed values)
- ✅ Disable buttons when user can't act (better UX than hiding)
- ✅ Wrap pages/layouts with AbilityProvider (not individual components)
- ❌ NEVER implement authorization logic in components (use ability)
- ❌ NEVER bypass CASL checks to "improve UX" (security first)
- ❌ NEVER call useAppAbility() outside AbilityProvider (will throw error)

---

#### Pattern 1: Page Component
```typescript
'use client'

import { useQuery } from '@tanstack/react-query'
import { taskUseCases } from '@/features/tasks/use-cases'
import { TaskList } from '@/features/tasks/components/TaskList'
import { CreateTaskDialog } from '@/features/tasks/components/CreateTaskDialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export default function TasksPage() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false)

  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: taskUseCases.getTasks,
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tasks</h1>
          <p className="text-sm text-muted-foreground">
            Manage your tasks and track progress
          </p>
        </div>
        <Button
          onClick={() => setCreateDialogOpen(true)}
          data-testid="create-task-button"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Task
        </Button>
      </div>

      {/* Content */}
      {isLoading && <TaskListSkeleton />}
      {error && <ErrorDisplay error={error} />}
      {tasks && <TaskList tasks={tasks} />}

      {/* Dialogs */}
      <CreateTaskDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
      />
    </div>
  )
}
```

#### Pattern 2: Form Component
```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TaskCreateSchema, type TaskCreate } from '../entities'
import { taskUseCases } from '../use-cases'
import { useTranslations } from 'next-intl'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

interface TaskFormProps {
  onSuccess?: () => void
}

export function TaskForm({ onSuccess }: TaskFormProps) {
  const t = useTranslations('tasks')
  const queryClient = useQueryClient()

  // Create Zod schema inside component for translation access
  const form = useForm<TaskCreate>({
    resolver: zodResolver(TaskCreateSchema),
    defaultValues: {
      title: '',
      description: '',
      status: 'pending',
    },
  })

  const createMutation = useMutation({
    mutationFn: taskUseCases.createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success(t('create.success'))
      form.reset()
      onSuccess?.()
    },
    onError: (error) => {
      toast.error(t('create.error'), {
        description: error.message,
      })
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => createMutation.mutate(data))}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="title">{t('form.title.label')}</FormLabel>
              <FormControl>
                <Input
                  id="title"
                  data-testid="task-title-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={createMutation.isPending}
          data-testid="submit-button"
        >
          {createMutation.isPending ? t('form.submitting') : t('form.submit')}
        </Button>
      </form>
    </Form>
  )
}
```

#### Pattern 3: Responsive Component
```typescript
<div className="
  grid
  grid-cols-1        /* Mobile: 1 column */
  md:grid-cols-2     /* Tablet: 2 columns */
  lg:grid-cols-3     /* Desktop: 3 columns */
  gap-4 md:gap-6     /* Responsive gap */
  p-4 md:p-6 lg:p-8  /* Responsive padding */
">
  {items.map(item => <ItemCard key={item.id} item={item} />)}
</div>
```

**Critical Rules**:
- ✅ Use `data-testid` from E2E tests
- ✅ Use `useTranslations()` for ALL text (NO hardcoded strings)
- ✅ Use semantic tokens from Style Guide (NO arbitrary values)
- ✅ Integrate with use cases via TanStack Query (NOT data services)
- ✅ Add ARIA labels for icon buttons
- ✅ Ensure keyboard navigation works

**Deliverable**: Implemented React components following all patterns.

---

### PHASE 4: Validation (Chrome DevTools + Accessibility)

**Objective**: Verify implementation meets all quality standards.

**Steps**:

1. **Run E2E tests** (MANDATORY - must pass 100%)
   ```bash
   cd app
   npm run test:e2e -- --grep "{feature}"
   ```
   **Expected**: ALL tests GREEN ✅
   **If RED**: Fix implementation (DO NOT modify tests)

2. **Visual verification with Chrome DevTools MCP** (MANDATORY)
   ```typescript
   // Start browser session
   mcp__chrome_devtools__new_page()

   // Navigate to feature
   mcp__chrome_devtools__navigate_page({
     url: "http://localhost:3000/{feature-page}"
   })

   // Capture screenshots at all breakpoints
   const breakpoints = [
     { name: 'mobile', width: 375, height: 667 },
     { name: 'tablet', width: 768, height: 1024 },
     { name: 'desktop', width: 1440, height: 900 }
   ]

   for (const bp of breakpoints) {
     // Light mode
     await mcp__chrome_devtools__take_screenshot({
       filePath: `./screenshots/${bp.name}-light.png`,
       fullPage: true
     })

     // Dark mode
     await mcp__chrome_devtools__evaluate_script({
       script: "document.documentElement.classList.add('dark')"
     })
     await mcp__chrome_devtools__take_screenshot({
       filePath: `./screenshots/${bp.name}-dark.png`,
       fullPage: true
     })
     await mcp__chrome_devtools__evaluate_script({
       script: "document.documentElement.classList.remove('dark')"
     })
   }
   ```

3. **Accessibility audit** (MANDATORY - WCAG 2.1 AA)
   ```bash
   cd app
   npm run test:e2e -- --grep "accessibility"
   ```
   **Manual checks**:
   - [ ] Color contrast ≥4.5:1 for text (use Chrome DevTools "Inspect")
   - [ ] All interactive elements keyboard accessible (Tab, Enter, Escape)
   - [ ] Icon buttons have aria-label
   - [ ] Form fields have labels (htmlFor + id)
   - [ ] Focus indicators visible
   - [ ] Screen reader compatible (test with VoiceOver/NVDA)

4. **Style Guide compliance verification** (MANDATORY)
   ```bash
   # Search for Style Guide violations
   grep -r "bg-\[#" features/{feature}/  # Arbitrary colors
   grep -r "text-\[[0-9]" features/{feature}/  # Arbitrary font sizes
   grep -r "p-\[[0-9]" features/{feature}/  # Arbitrary padding
   ```
   **Expected**: NO matches (all values from Style Guide)

5. **Performance check** (TARGET)
   ```bash
   npm run build
   npm run start
   # Open Lighthouse in Chrome DevTools
   # Run audit for Performance + Accessibility
   ```
   **Targets**:
   - Lighthouse Accessibility: >90
   - LCP (Largest Contentful Paint): <2.5s
   - FID (First Input Delay): <100ms
   - CLS (Cumulative Layout Shift): <0.1

**Deliverable**: All tests passing, screenshots captured, accessibility verified, Style Guide compliant.

---

### PHASE 5: Documentation (Iteration File)

**Objective**: Document implementation with evidence for Architect + User review.

**Template**: Use `PRDs/_templates/agent-iteration-template.md`

**Structure**:
```markdown
# UI/UX Expert - Iteration 01

**Agent**: UI/UX Expert
**Date**: YYYY-MM-DD HH:MM
**Status**: Ready for Review

---

## Context
Creating user interface for [Feature Name]

## Work Completed

### Pages Created
1. **{Feature}Page** (`app/(main)/{feature}/page.tsx`)
   - Description of functionality
   - Data fetching setup
   - Layout composition

### Components Created
1. **{Feature}Form** (`features/{feature}/components/{Feature}Form.tsx`)
   - React Hook Form + Zod validation
   - Loading states
   - Error handling
   - Accessibility: WCAG 2.1 AA compliant

2. **{Feature}List** (`features/{feature}/components/{Feature}List.tsx`)
   - TanStack Query integration
   - Empty states
   - Responsive grid

[List all components...]

## Technical Decisions
1. **Component Library**: shadcn/ui (Button, Dialog, Form, Card)
2. **State Management**: TanStack Query for server state
3. **Validation**: Zod schemas with zodResolver
4. **Internationalization**: next-intl (no hardcoded strings)

## Evidence

### E2E Tests
\```bash
npm run test:e2e -- --grep "{feature}"
# PASS: 12/12 tests ✅
# All user flows working
\```

### Screenshots
**Mobile (375px)**:
![Mobile Light](./ screenshots/mobile-light.png)
![Mobile Dark](./screenshots/mobile-dark.png)

**Tablet (768px)**:
![Tablet Light](./screenshots/tablet-light.png)
![Tablet Dark](./screenshots/tablet-dark.png)

**Desktop (1440px)**:
![Desktop Light](./screenshots/desktop-light.png)
![Desktop Dark](./screenshots/desktop-dark.png)

### Accessibility Audit
- [x] Keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- [x] Screen reader compatible (tested with VoiceOver)
- [x] Focus indicators visible
- [x] ARIA labels present on icon buttons
- [x] Color contrast ratios meet WCAG AA (≥4.5:1 text, ≥3:1 UI)
- [x] Form labels properly associated (htmlFor + id)

### Style Guide Compliance
- [x] All colors from semantic tokens (no arbitrary hex values)
- [x] Typography from scale (text-xs through text-4xl)
- [x] Spacing from scale (spacing-1 through spacing-24)
- [x] Animation durations: 200ms, 300ms, or 500ms only
- [x] NO traditional CSS (Tailwind utilities only)

### Performance Metrics
- **Lighthouse Score**: 95+ (Performance + Accessibility)
- **LCP**: 1.8s ✅ (<2.5s target)
- **FID**: 50ms ✅ (<100ms target)
- **CLS**: 0.05 ✅ (<0.1 target)

## Coverage Against Requirements
| Requirement | Status | Evidence |
|------------|--------|----------|
| Create {entity} flow | ✅ | E2E test passing |
| List view | ✅ | E2E test passing |
| Accessibility WCAG AA | ✅ | Audit passed |
| Responsive design | ✅ | Screenshots at all breakpoints |
| Style Guide compliant | ✅ | No violations found |

## Quality Checklist
- [x] All E2E tests passing (100%)
- [x] Style Guide followed exactly
- [x] WCAG 2.1 AA compliance verified
- [x] No hardcoded strings (i18n complete)
- [x] shadcn/ui components used (no custom UI library)
- [x] Chrome DevTools validated
- [x] Screenshots provided (all breakpoints, both modes)
- [x] Cross-browser compatible (Chromium, Firefox, Safari)

---

## Review Status
**Submitted**: YYYY-MM-DD HH:MM

### Architect Review
**Status**: Pending

### User Review
**Status**: Pending
```

**Deliverable**: Complete iteration document with screenshots and evidence.

---

## MCP INTEGRATIONS

### Context7 (MANDATORY in Phase 1)
**Purpose**: Get latest React/Next.js/Tailwind/TanStack Query best practices

**Critical queries**:
- `/reactjs/react.dev` - React Hooks, component patterns
- `/vercel/next.js` - App Router, client components
- `/tailwindlabs/tailwindcss.com` - Responsive design, utilities
- `/tanstack/query` - Data fetching patterns

### shadcn MCP (MANDATORY in Phase 1)
**Purpose**: Discover shadcn/ui components and composition patterns

**Functions**:
- `search_items_in_registries` - Find components
- `view_items_in_registries` - Get component details
- `get_item_examples_from_registries` - Usage examples

### Chrome DevTools (MANDATORY in Phase 4)
**Purpose**: Visual validation and accessibility audits

**Functions**:
- `new_page` - Start browser session
- `navigate_page` - Go to URL
- `take_screenshot` - Capture visuals
- `evaluate_script` - Run JavaScript (e.g., toggle dark mode)

---

## REFERENCES (Load on Demand)

Reference files in `references/` provide detailed guidance. Load only when needed:

1. **react-patterns.md** - React Hook patterns, composition strategies
2. **shadcn-composition.md** - shadcn/ui component catalog and usage
3. **tailwind-responsive.md** - Responsive design patterns, breakpoints
4. **accessibility-wcag.md** - WCAG 2.1 AA compliance checklist
5. **performance-web-vitals.md** - Core Web Vitals optimization
6. **tanstack-query-patterns.md** - Data fetching best practices
7. **form-validation-patterns.md** - React Hook Form + Zod integration
8. **animation-best-practices.md** - Framer Motion & Tailwind animations

**Example**:
```
User: "How do I implement optimistic updates?"
↓
Read('references/tanstack-query-patterns.md')
↓
Apply optimistic update pattern from reference
```

---

## SCRIPTS (Automation Helpers)

Scripts in `scripts/` automate repetitive tasks. Run when needed:

1. **take-baseline-screenshots.sh** - Capture before-implementation screenshots
2. **validate-accessibility.sh** - Run Lighthouse accessibility audit
3. **check-style-guide-compliance.sh** - Scan for Style Guide violations
4. **run-e2e-tests.sh** - Execute E2E tests for feature
5. **capture-final-screenshots.sh** - Capture after-implementation screenshots
6. **generate-component-manifest.sh** - List all components created

**Example**:
```bash
./scripts/check-style-guide-compliance.sh features/tasks/
# Scans for arbitrary colors, spacing, font sizes
```

---

## ASSETS (Component Templates)

Templates in `assets/` provide starting points. Customize as needed:

1. **component-templates/page-template.tsx** - Page component structure
2. **component-templates/form-template.tsx** - Form with validation
3. **component-templates/list-template.tsx** - Data list pattern
4. **component-templates/modal-template.tsx** - Dialog pattern
5. **form-examples/simple-form.tsx** - Basic form
6. **form-examples/multi-step-form.tsx** - Wizard pattern
7. **layout-patterns/dashboard-layout.tsx** - Dashboard structure

**Example**:
```
User: "Create a task creation form"
↓
Read('assets/component-templates/form-template.tsx')
↓
Customize for task-specific fields
↓
Integrate with taskUseCases.createTask
```

---

## CRITICAL REMINDERS

### DO (MANDATORY)
✅ Read Style Guide FIRST (Phase 0)
✅ Consult Context7 + shadcn MCP BEFORE design (Phase 1)
✅ Make E2E tests pass WITHOUT modifying them
✅ Use Chrome DevTools for visual validation
✅ Achieve WCAG 2.1 AA compliance
✅ Use semantic tokens (NO arbitrary values)
✅ Capture screenshots at ALL breakpoints
✅ Document with evidence in iteration file
✅ Wait for Architect + User approval

### DO NOT (PROHIBITED)
❌ Implement business logic (use cases handle this)
❌ Modify E2E tests to make them pass
❌ Access data services directly (go through use cases)
❌ Use non-approved libraries (shadcn/ui + Tailwind ONLY)
❌ Write traditional CSS (Tailwind utilities ONLY)
❌ Create inaccessible components (WCAG AA mandatory)
❌ Use arbitrary values outside Style Guide
❌ Skip Context7 consultation
❌ Advance without approval

---

## SUCCESS CRITERIA

Implementation is complete when:
- ✅ 100% E2E tests passing
- ✅ Lighthouse accessibility score >90
- ✅ WCAG 2.1 AA compliant (verified)
- ✅ Core Web Vitals green (LCP <2.5s, FID <100ms, CLS <0.1)
- ✅ Style Guide compliance 100%
- ✅ Cross-browser compatible
- ✅ Screenshots at all breakpoints (mobile, tablet, desktop)
- ✅ Both light and dark modes verified
- ✅ Documented in iteration file
- ✅ Architect + User approval received

---

**This skill ensures UI implementations are accessible, performant, beautiful, and exactly match the project's visual design system.**

---

---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web and mobile. Includes 50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, and 25 chart types across 10 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, and HTML/CSS). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, and check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, and mobile app. Elements: button, modal, navbar, sidebar, card, table, form, and chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, and flat design. Topics: color systems, accessibility, animation, layout, typography, font pairing, spacing, interaction states, shadow, and gradient. Integrations: shadcn/ui MCP for component search and examples."
---

# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications. Contains 50+ styles, 161 color palettes, 57 font pairings, 161 product types with reasoning rules, 99 UX guidelines, and 25 chart types across 10 technology stacks. Searchable database with priority-based recommendations.

## When to Apply

This Skill should be used when the task involves **UI structure, visual design decisions, interaction patterns, or user experience quality control**.

### Must Use

This Skill must be invoked in the following situations:

- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts, etc.)
- Choosing color schemes, typography systems, spacing standards, or layout systems
- Reviewing UI code for user experience, accessibility, or visual consistency
- Implementing navigation structures, animations, or responsive behavior
- Making product-level design decisions (style, information hierarchy, brand expression)
- Improving perceived quality, clarity, or usability of interfaces

### Recommended

This Skill is recommended in the following situations:

- UI looks "not professional enough" but the reason is unclear
- Receiving feedback on usability or experience
- Pre-launch UI quality optimization
- Aligning cross-platform design (Web / iOS / Android)
- Building design systems or reusable component libraries

### Skip

This Skill is not needed in the following situations:

- Pure backend logic development
- Only involving API or database design
- Performance optimization unrelated to the interface
- Infrastructure or DevOps work
- Non-visual scripts or automation tasks

**Decision criteria**: If the task will change how a feature **looks, feels, moves, or is interacted with**, this Skill should be used.

## Rule Categories by Priority

*For human/AI reference: follow priority 1→10 to decide which rule category to focus on first; use `--domain <Domain>` to query details when needed. Scripts do not read this table.*

| Priority | Category | Impact | Domain | Key Checks (Must Have) | Anti-Patterns (Avoid) |
|----------|----------|--------|--------|------------------------|------------------------|
| 1 | Accessibility | CRITICAL | `ux` | Contrast 4.5:1, Alt text, Keyboard nav, Aria-labels | Removing focus rings, Icon-only buttons without labels |
| 2 | Touch & Interaction | CRITICAL | `ux` | Min size 44×44px, 8px+ spacing, Loading feedback | Reliance on hover only, Instant state changes (0ms) |
| 3 | Performance | HIGH | `ux` | WebP/AVIF, Lazy loading, Reserve space (CLS &lt; 0.1) | Layout thrashing, Cumulative Layout Shift |
| 4 | Style Selection | HIGH | `style`, `product` | Match product type, Consistency, SVG icons (no emoji) | Mixing flat & skeuomorphic randomly, Emoji as icons |
| 5 | Layout & Responsive | HIGH | `ux` | Mobile-first breakpoints, Viewport meta, No horizontal scroll | Horizontal scroll, Fixed px container widths, Disable zoom |
| 6 | Typography & Color | MEDIUM | `typography`, `color` | Base 16px, Line-height 1.5, Semantic color tokens | Text &lt; 12px body, Gray-on-gray, Raw hex in components |
| 7 | Animation | MEDIUM | `ux` | Duration 150–300ms, Motion conveys meaning, Spatial continuity | Decorative-only animation, Animating width/height, No reduced-motion |
| 8 | Forms & Feedback | MEDIUM | `ux` | Visible labels, Error near field, Helper text, Progressive disclosure | Placeholder-only label, Errors only at top, Overwhelm upfront |
| 9 | Navigation Patterns | HIGH | `ux` | Predictable back, Bottom nav ≤5, Deep linking | Overloaded nav, Broken back behavior, No deep links |
| 10 | Charts & Data | LOW | `chart` | Legends, Tooltips, Accessible colors | Relying on color alone to convey meaning |

## Quick Reference

### 1. Accessibility (CRITICAL)

- `color-contrast` - Minimum 4.5:1 ratio for normal text (large text 3:1); Material Design
- `focus-states` - Visible focus rings on interactive elements (2–4px; Apple HIG, MD)
- `alt-text` - Descriptive alt text for meaningful images
- `aria-labels` - aria-label for icon-only buttons; accessibilityLabel in native (Apple HIG)
- `keyboard-nav` - Tab order matches visual order; full keyboard support (Apple HIG)
- `form-labels` - Use label with for attribute
- `skip-links` - Skip to main content for keyboard users
- `heading-hierarchy` - Sequential h1→h6, no level skip
- `color-not-only` - Don't convey info by color alone (add icon/text)
- `dynamic-type` - Support system text scaling; avoid truncation as text grows (Apple Dynamic Type, MD)
- `reduced-motion` - Respect prefers-reduced-motion; reduce/disable animations when requested (Apple Reduced Motion API, MD)
- `voiceover-sr` - Meaningful accessibilityLabel/accessibilityHint; logical reading order for VoiceOver/screen readers (Apple HIG, MD)
- `escape-routes` - Provide cancel/back in modals and multi-step flows (Apple HIG)
- `keyboard-shortcuts` - Preserve system and a11y shortcuts; offer keyboard alternatives for drag-and-drop (Apple HIG)

### 2. Touch & Interaction (CRITICAL)

- `touch-target-size` - Min 44×44pt (Apple) / 48×48dp (Material); extend hit area beyond visual bounds if needed
- `touch-spacing` - Minimum 8px/8dp gap between touch targets (Apple HIG, MD)
- `hover-vs-tap` - Use click/tap for primary interactions; don't rely on hover alone
- `loading-buttons` - Disable button during async operations; show spinner or progress
- `error-feedback` - Clear error messages near problem
- `cursor-pointer` - Add cursor-pointer to clickable elements (Web)
- `gesture-conflicts` - Avoid horizontal swipe on main content; prefer vertical scroll
- `tap-delay` - Use touch-action: manipulation to reduce 300ms delay (Web)
- `standard-gestures` - Use platform standard gestures consistently; don't redefine (e.g. swipe-back, pinch-zoom) (Apple HIG)
- `system-gestures` - Don't block system gestures (Control Center, back swipe, etc.) (Apple HIG)
- `press-feedback` - Visual feedback on press (ripple/highlight; MD state layers)
- `haptic-feedback` - Use haptic for confirmations and important actions; avoid overuse (Apple HIG)
- `gesture-alternative` - Don't rely on gesture-only interactions; always provide visible controls for critical actions
- `safe-area-awareness` - Keep primary touch targets away from notch, Dynamic Island, gesture bar and screen edges
- `no-precision-required` - Avoid requiring pixel-perfect taps on small icons or thin edges
- `swipe-clarity` - Swipe actions must show clear affordance or hint (chevron, label, tutorial)
- `drag-threshold` - Use a movement threshold before starting drag to avoid accidental drags

### 3. Performance (HIGH)

- `image-optimization` - Use WebP/AVIF, responsive images (srcset/sizes), lazy load non-critical assets
- `image-dimension` - Declare width/height or use aspect-ratio to prevent layout shift (Core Web Vitals: CLS)
- `font-loading` - Use font-display: swap/optional to avoid invisible text (FOIT); reserve space to reduce layout shift (MD)
- `font-preload` - Preload only critical fonts; avoid overusing preload on every variant
- `critical-css` - Prioritize above-the-fold CSS (inline critical CSS or early-loaded stylesheet)
- `lazy-loading` - Lazy load non-hero components via dynamic import / route-level splitting
- `bundle-splitting` - Split code by route/feature (React Suspense / Next.js dynamic) to reduce initial load and TTI
- `third-party-scripts` - Load third-party scripts async/defer; audit and remove unnecessary ones (MD)
- `reduce-reflows` - Avoid frequent layout reads/writes; batch DOM reads then writes
- `content-jumping` - Reserve space for async content to avoid layout jumps (Core Web Vitals: CLS)
- `lazy-load-below-fold` - Use loading="lazy" for below-the-fold images and heavy media
- `virtualize-lists` - Virtualize lists with 50+ items to improve memory efficiency and scroll performance
- `main-thread-budget` - Keep per-frame work under ~16ms for 60fps; move heavy tasks off main thread (HIG, MD)
- `progressive-loading` - Use skeleton screens / shimmer instead of long blocking spinners for >1s operations (Apple HIG)
- `input-latency` - Keep input latency under ~100ms for taps/scrolls (Material responsiveness standard)
- `tap-feedback-speed` - Provide visual feedback within 100ms of tap (Apple HIG)
- `debounce-throttle` - Use debounce/throttle for high-frequency events (scroll, resize, input)
- `offline-support` - Provide offline state messaging and basic fallback (PWA / mobile)
- `network-fallback` - Offer degraded modes for slow networks (lower-res images, fewer animations)

### 4. Style Selection (HIGH)

- `style-match` - Match style to product type (use `--design-system` for recommendations)
- `consistency` - Use same style across all pages
- `no-emoji-icons` - Use SVG icons (Heroicons, Lucide), not emojis
- `color-palette-from-product` - Choose palette from product/industry (search `--domain color`)
- `effects-match-style` - Shadows, blur, radius aligned with chosen style (glass / flat / clay etc.)
- `platform-adaptive` - Respect platform idioms (iOS HIG vs Material): navigation, controls, typography, motion
- `state-clarity` - Make hover/pressed/disabled states visually distinct while staying on-style (Material state layers)
- `elevation-consistent` - Use a consistent elevation/shadow scale for cards, sheets, modals; avoid random shadow values
- `dark-mode-pairing` - Design light/dark variants together to keep brand, contrast, and style consistent
- `icon-style-consistent` - Use one icon set/visual language (stroke width, corner radius) across the product
- `system-controls` - Prefer native/system controls over fully custom ones; only customize when branding requires it (Apple HIG)
- `blur-purpose` - Use blur to indicate background dismissal (modals, sheets), not as decoration (Apple HIG)
- `primary-action` - Each screen should have only one primary CTA; secondary actions visually subordinate (Apple HIG)

### 5. Layout & Responsive (HIGH)

- `viewport-meta` - width=device-width initial-scale=1 (never disable zoom)
- `mobile-first` - Design mobile-first, then scale up to tablet and desktop
- `breakpoint-consistency` - Use systematic breakpoints (e.g. 375 / 768 / 1024 / 1440)
- `readable-font-size` - Minimum 16px body text on mobile (avoids iOS auto-zoom)
- `line-length-control` - Mobile 35–60 chars per line; desktop 60–75 chars
- `horizontal-scroll` - No horizontal scroll on mobile; ensure content fits viewport width
- `spacing-scale` - Use 4pt/8dp incremental spacing system (Material Design)
- `touch-density` - Keep component spacing comfortable for touch: not cramped, not causing mis-taps
- `container-width` - Consistent max-width on desktop (max-w-6xl / 7xl)
- `z-index-management` - Define layered z-index scale (e.g. 0 / 10 / 20 / 40 / 100 / 1000)
- `fixed-element-offset` - Fixed navbar/bottom bar must reserve safe padding for underlying content
- `scroll-behavior` - Avoid nested scroll regions that interfere with the main scroll experience
- `viewport-units` - Prefer min-h-dvh over 100vh on mobile
- `orientation-support` - Keep layout readable and operable in landscape mode
- `content-priority` - Show core content first on mobile; fold or hide secondary content
- `visual-hierarchy` - Establish hierarchy via size, spacing, contrast — not color alone

### 6. Typography & Color (MEDIUM)

- `line-height` - Use 1.5-1.75 for body text
- `line-length` - Limit to 65-75 characters per line
- `font-pairing` - Match heading/body font personalities
- `font-scale` - Consistent type scale (e.g. 12 14 16 18 24 32)
- `contrast-readability` - Darker text on light backgrounds (e.g. slate-900 on white)
- `text-styles-system` - Use platform type system: iOS 11 Dynamic Type styles / Material 5 type roles (display, headline, title, body, label) (HIG, MD)
- `weight-hierarchy` - Use font-weight to reinforce hierarchy: Bold headings (600–700), Regular body (400), Medium labels (500) (MD)
- `color-semantic` - Define semantic color tokens (primary, secondary, error, surface, on-surface) not raw hex in components (Material color system)
- `color-dark-mode` - Dark mode uses desaturated / lighter tonal variants, not inverted colors; test contrast separately (HIG, MD)
- `color-accessible-pairs` - Foreground/background pairs must meet 4.5:1 (AA) or 7:1 (AAA); use tools to verify (WCAG, MD)
- `color-not-decorative-only` - Functional color (error red, success green) must include icon/text; avoid color-only meaning (HIG, MD)
- `truncation-strategy` - Prefer wrapping over truncation; when truncating use ellipsis and provide full text via tooltip/expand (Apple HIG)
- `letter-spacing` - Respect default letter-spacing per platform; avoid tight tracking on body text (HIG, MD)
- `number-tabular` - Use tabular/monospaced figures for data columns, prices, and timers to prevent layout shift
- `whitespace-balance` - Use whitespace intentionally to group related items and separate sections; avoid visual clutter (Apple HIG)

### 7. Animation (MEDIUM)

- `duration-timing` - Use 150–300ms for micro-interactions; complex transitions ≤400ms; avoid >500ms (MD)
- `transform-performance` - Use transform/opacity only; avoid animating width/height/top/left
- `loading-states` - Show skeleton or progress indicator when loading exceeds 300ms
- `excessive-motion` - Animate 1-2 key elements per view max
- `easing` - Use ease-out for entering, ease-in for exiting; avoid linear for UI transitions
- `motion-meaning` - Every animation must express a cause-effect relationship, not just be decorative (Apple HIG)
- `state-transition` - State changes (hover / active / expanded / collapsed / modal) should animate smoothly, not snap
- `continuity` - Page/screen transitions should maintain spatial continuity (shared element, directional slide) (Apple HIG)
- `parallax-subtle` - Use parallax sparingly; must respect reduced-motion and not cause disorientation (Apple HIG)
- `spring-physics` - Prefer spring/physics-based curves over linear or cubic-bezier for natural feel (Apple HIG fluid animations)
- `exit-faster-than-enter` - Exit animations shorter than enter (~60–70% of enter duration) to feel responsive (MD motion)
- `stagger-sequence` - Stagger list/grid item entrance by 30–50ms per item; avoid all-at-once or too-slow reveals (MD)
- `shared-element-transition` - Use shared element / hero transitions for visual continuity between screens (MD, HIG)
- `interruptible` - Animations must be interruptible; user tap/gesture cancels in-progress animation immediately (Apple HIG)
- `no-blocking-animation` - Never block user input during an animation; UI must stay interactive (Apple HIG)
- `fade-crossfade` - Use crossfade for content replacement within the same container (MD)
- `scale-feedback` - Subtle scale (0.95–1.05) on press for tappable cards/buttons; restore on release (HIG, MD)
- `gesture-feedback` - Drag, swipe, and pinch must provide real-time visual response tracking the finger (MD Motion)
- `hierarchy-motion` - Use translate/scale direction to express hierarchy: enter from below = deeper, exit upward = back (MD)
- `motion-consistency` - Unify duration/easing tokens globally; all animations share the same rhythm and feel
- `opacity-threshold` - Fading elements should not linger below opacity 0.2; either fade fully or remain visible
- `modal-motion` - Modals/sheets should animate from their trigger source (scale+fade or slide-in) for spatial context (HIG, MD)
- `navigation-direction` - Forward navigation animates left/up; backward animates right/down — keep direction logically consistent (HIG)
- `layout-shift-avoid` - Animations must not cause layout reflow or CLS; use transform for position changes

### 8. Forms & Feedback (MEDIUM)

- `input-labels` - Visible label per input (not placeholder-only)
- `error-placement` - Show error below the related field
- `submit-feedback` - Loading then success/error state on submit
- `required-indicators` - Mark required fields (e.g. asterisk)
- `empty-states` - Helpful message and action when no content
- `toast-dismiss` - Auto-dismiss toasts in 3-5s
- `confirmation-dialogs` - Confirm before destructive actions
- `input-helper-text` - Provide persistent helper text below complex inputs, not just placeholder (Material Design)
- `disabled-states` - Disabled elements use reduced opacity (0.38–0.5) + cursor change + semantic attribute (MD)
- `progressive-disclosure` - Reveal complex options progressively; don't overwhelm users upfront (Apple HIG)
- `inline-validation` - Validate on blur (not keystroke); show error only after user finishes input (MD)
- `input-type-keyboard` - Use semantic input types (email, tel, number) to trigger the correct mobile keyboard (HIG, MD)
- `password-toggle` - Provide show/hide toggle for password fields (MD)
- `autofill-support` - Use autocomplete / textContentType attributes so the system can autofill (HIG, MD)
- `undo-support` - Allow undo for destructive or bulk actions (e.g. "Undo delete" toast) (Apple HIG)
- `success-feedback` - Confirm completed actions with brief visual feedback (checkmark, toast, color flash) (MD)
- `error-recovery` - Error messages must include a clear recovery path (retry, edit, help link) (HIG, MD)
- `multi-step-progress` - Multi-step flows show step indicator or progress bar; allow back navigation (MD)
- `form-autosave` - Long forms should auto-save drafts to prevent data loss on accidental dismissal (Apple HIG)
- `sheet-dismiss-confirm` - Confirm before dismissing a sheet/modal with unsaved changes (Apple HIG)
- `error-clarity` - Error messages must state cause + how to fix (not just "Invalid input") (HIG, MD)
- `field-grouping` - Group related fields logically (fieldset/legend or visual grouping) (MD)
- `read-only-distinction` - Read-only state should be visually and semantically different from disabled (MD)
- `focus-management` - After submit error, auto-focus the first invalid field (WCAG, MD)
- `error-summary` - For multiple errors, show summary at top with anchor links to each field (WCAG)
- `touch-friendly-input` - Mobile input height ≥44px to meet touch target requirements (Apple HIG)
- `destructive-emphasis` - Destructive actions use semantic danger color (red) and are visually separated from primary actions (HIG, MD)
- `toast-accessibility` - Toasts must not steal focus; use aria-live="polite" for screen reader announcement (WCAG)
- `aria-live-errors` - Form errors use aria-live region or role="alert" to notify screen readers (WCAG)
- `contrast-feedback` - Error and success state colors must meet 4.5:1 contrast ratio (WCAG, MD)
- `timeout-feedback` - Request timeout must show clear feedback with retry option (MD)

### 9. Navigation Patterns (HIGH)

- `bottom-nav-limit` - Bottom navigation max 5 items; use labels with icons (Material Design)
- `drawer-usage` - Use drawer/sidebar for secondary navigation, not primary actions (Material Design)
- `back-behavior` - Back navigation must be predictable and consistent; preserve scroll/state (Apple HIG, MD)
- `deep-linking` - All key screens must be reachable via deep link / URL for sharing and notifications (Apple HIG, MD)
- `tab-bar-ios` - iOS: use bottom Tab Bar for top-level navigation (Apple HIG)
- `top-app-bar-android` - Android: use Top App Bar with navigation icon for primary structure (Material Design)
- `nav-label-icon` - Navigation items must have both icon and text label; icon-only nav harms discoverability (MD)
- `nav-state-active` - Current location must be visually highlighted (color, weight, indicator) in navigation (HIG, MD)
- `nav-hierarchy` - Primary nav (tabs/bottom bar) vs secondary nav (drawer/settings) must be clearly separated (MD)
- `modal-escape` - Modals and sheets must offer a clear close/dismiss affordance; swipe-down to dismiss on mobile (Apple HIG)
- `search-accessible` - Search must be easily reachable (top bar or tab); provide recent/suggested queries (MD)
- `breadcrumb-web` - Web: use breadcrumbs for 3+ level deep hierarchies to aid orientation (MD)
- `state-preservation` - Navigating back must restore previous scroll position, filter state, and input (HIG, MD)
- `gesture-nav-support` - Support system gesture navigation (iOS swipe-back, Android predictive back) without conflict (HIG, MD)
- `tab-badge` - Use badges on nav items sparingly to indicate unread/pending; clear after user visits (HIG, MD)
- `overflow-menu` - When actions exceed available space, use overflow/more menu instead of cramming (MD)
- `bottom-nav-top-level` - Bottom nav is for top-level screens only; never nest sub-navigation inside it (MD)
- `adaptive-navigation` - Large screens (≥1024px) prefer sidebar; small screens use bottom/top nav (Material Adaptive)
- `back-stack-integrity` - Never silently reset the navigation stack or unexpectedly jump to home (HIG, MD)
- `navigation-consistency` - Navigation placement must stay the same across all pages; don't change by page type
- `avoid-mixed-patterns` - Don't mix Tab + Sidebar + Bottom Nav at the same hierarchy level
- `modal-vs-navigation` - Modals must not be used for primary navigation flows; they break the user's path (HIG)
- `focus-on-route-change` - After page transition, move focus to main content region for screen reader users (WCAG)
- `persistent-nav` - Core navigation must remain reachable from deep pages; don't hide it entirely in sub-flows (HIG, MD)
- `destructive-nav-separation` - Dangerous actions (delete account, logout) must be visually and spatially separated from normal nav items (HIG, MD)
- `empty-nav-state` - When a nav destination is unavailable, explain why instead of silently hiding it (MD)

### 10. Charts & Data (LOW)

- `chart-type` - Match chart type to data type (trend → line, comparison → bar, proportion → pie/donut)
- `color-guidance` - Use accessible color palettes; avoid red/green only pairs for colorblind users (WCAG, MD)
- `data-table` - Provide table alternative for accessibility; charts alone are not screen-reader friendly (WCAG)
- `pattern-texture` - Supplement color with patterns, textures, or shapes so data is distinguishable without color (WCAG, MD)
- `legend-visible` - Always show legend; position near the chart, not detached below a scroll fold (MD)
- `tooltip-on-interact` - Provide tooltips/data labels on hover (Web) or tap (mobile) showing exact values (HIG, MD)
- `axis-labels` - Label axes with units and readable scale; avoid truncated or rotated labels on mobile
- `responsive-chart` - Charts must reflow or simplify on small screens (e.g. horizontal bar instead of vertical, fewer ticks)
- `empty-data-state` - Show meaningful empty state when no data exists ("No data yet" + guidance), not a blank chart (MD)
- `loading-chart` - Use skeleton or shimmer placeholder while chart data loads; don't show an empty axis frame
- `animation-optional` - Chart entrance animations must respect prefers-reduced-motion; data should be readable immediately (HIG)
- `large-dataset` - For 1000+ data points, aggregate or sample; provide drill-down for detail instead of rendering all (MD)
- `number-formatting` - Use locale-aware formatting for numbers, dates, currencies on axes and labels (HIG, MD)
- `touch-target-chart` - Interactive chart elements (points, segments) must have ≥44pt tap area or expand on touch (Apple HIG)
- `no-pie-overuse` - Avoid pie/donut for >5 categories; switch to bar chart for clarity
- `contrast-data` - Data lines/bars vs background ≥3:1; data text labels ≥4.5:1 (WCAG)
- `legend-interactive` - Legends should be clickable to toggle series visibility (MD)
- `direct-labeling` - For small datasets, label values directly on the chart to reduce eye travel
- `tooltip-keyboard` - Tooltip content must be keyboard-reachable and not rely on hover alone (WCAG)
- `sortable-table` - Data tables must support sorting with aria-sort indicating current sort state (WCAG)
- `axis-readability` - Axis ticks must not be cramped; maintain readable spacing, auto-skip on small screens
- `data-density` - Limit information density per chart to avoid cognitive overload; split into multiple charts if needed
- `trend-emphasis` - Emphasize data trends over decoration; avoid heavy gradients/shadows that obscure the data
- `gridline-subtle` - Grid lines should be low-contrast (e.g. gray-200) so they don't compete with data
- `focusable-elements` - Interactive chart elements (points, bars, slices) must be keyboard-navigable (WCAG)
- `screen-reader-summary` - Provide a text summary or aria-label describing the chart's key insight for screen readers (WCAG)
- `error-state-chart` - Data load failure must show error message with retry action, not a broken/empty chart
- `export-option` - For data-heavy products, offer CSV/image export of chart data
- `drill-down-consistency` - Drill-down interactions must maintain a clear back-path and hierarchy breadcrumb
- `time-scale-clarity` - Time series charts must clearly label time granularity (day/week/month) and allow switching

## How to Use

Search specific domains using the CLI tool below.

---

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

If Python is not installed, install it based on user's OS:

**macOS:**
```bash
brew install python3
```

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Windows:**
```powershell
winget install Python.Python.3.12
```

---

## How to Use This Skill

Use this skill when the user requests any of the following:

| Scenario | Trigger Examples | Start From |
|----------|-----------------|------------|
| **New project / page** | "Build a landing page", "Build a dashboard" | Step 1 → Step 2 (design system) |
| **New component** | "Create a pricing card", "Add a modal" | Step 3 (domain search: style, ux) |
| **Choose style / color / font** | "What style fits a fintech app?", "Recommend a color palette" | Step 2 (design system) |
| **Review existing UI** | "Review this page for UX issues", "Check accessibility" | Quick Reference checklist above |
| **Fix a UI bug** | "Button hover is broken", "Layout shifts on load" | Quick Reference → relevant section |
| **Improve / optimize** | "Make this faster", "Improve mobile experience" | Step 3 (domain search: ux, react) |
| **Implement dark mode** | "Add dark mode support" | Step 3 (domain: style "dark mode") |
| **Add charts / data viz** | "Add an analytics dashboard chart" | Step 3 (domain: chart) |
| **Stack best practices** | "React performance tips"、"SwiftUI navigation" | Step 4 (stack search) |

Follow this workflow:

### Step 1: Analyze User Requirements

Extract key information from user request:
- **Product type**: Entertainment (social, video, music, gaming), Tool (scanner, editor, converter), Productivity (task manager, notes, calendar), or hybrid
- **Target audience**: C-end consumer users; consider age group, usage context (commute, leisure, work)
- **Style keywords**: playful, vibrant, minimal, dark mode, content-first, immersive, etc.
- **Stack**: React Native (this project's only tech stack)

### Step 2: Generate Design System (REQUIRED)

**Always start with `--design-system`** to get comprehensive recommendations with reasoning:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

This command:
1. Searches domains in parallel (product, style, color, landing, typography)
2. Applies reasoning rules from `ui-reasoning.csv` to select best matches
3. Returns complete design system: pattern, style, colors, typography, effects
4. Includes anti-patterns to avoid

**Example:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

### Step 2b: Persist Design System (Master + Overrides Pattern)

To save the design system for **hierarchical retrieval across sessions**, add `--persist`:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

This creates:
- `design-system/MASTER.md` — Global Source of Truth with all design rules
- `design-system/pages/` — Folder for page-specific overrides

**With page-specific override:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

This also creates:
- `design-system/pages/dashboard.md` — Page-specific deviations from Master

**How hierarchical retrieval works:**
1. When building a specific page (e.g., "Checkout"), first check `design-system/pages/checkout.md`
2. If the page file exists, its rules **override** the Master file
3. If not, use `design-system/MASTER.md` exclusively

**Context-aware retrieval prompt:**
```
I am building the [Page Name] page. Please read design-system/MASTER.md.
Also check if design-system/pages/[page-name].md exists.
If the page file exists, prioritize its rules.
If not, use the Master rules exclusively.
Now, generate the code...
```

### Step 3: Supplement with Detailed Searches (as needed)

After getting the design system, use domain searches to get additional details:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

**When to use detailed searches:**

| Need | Domain | Example |
|------|--------|---------|
| Product type patterns | `product` | `--domain product "entertainment social"` |
| More style options | `style` | `--domain style "glassmorphism dark"` |
| Color palettes | `color` | `--domain color "entertainment vibrant"` |
| Font pairings | `typography` | `--domain typography "playful modern"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Alternative fonts | `typography` | `--domain typography "elegant luxury"` |
| Individual Google Fonts | `google-fonts` | `--domain google-fonts "sans serif popular variable"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |
| React Native perf | `react` | `--domain react "rerender memo list"` |
| App interface a11y | `web` | `--domain web "accessibilityLabel touch safe-areas"` |
| AI prompt / CSS keywords | `prompt` | `--domain prompt "minimalism"` |

### Step 4: Stack Guidelines (React Native)

Get React Native implementation-specific best practices:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack react-native
```

---

## Search Reference

### Available Domains

| Domain | Use For | Example Keywords |
|--------|---------|------------------|
| `product` | Product type recommendations | SaaS, e-commerce, portfolio, healthcare, beauty, service |
| `style` | UI styles, colors, effects | glassmorphism, minimalism, dark mode, brutalism |
| `typography` | Font pairings, Google Fonts | elegant, playful, professional, modern |
| `color` | Color palettes by product type | saas, ecommerce, healthcare, beauty, fintech, service |
| `landing` | Page structure, CTA strategies | hero, hero-centric, testimonial, pricing, social-proof |
| `chart` | Chart types, library recommendations | trend, comparison, timeline, funnel, pie |
| `ux` | Best practices, anti-patterns | animation, accessibility, z-index, loading |
| `google-fonts` | Individual Google Fonts lookup | sans serif, monospace, japanese, variable font, popular |
| `react` | React/Next.js performance | waterfall, bundle, suspense, memo, rerender, cache |
| `web` | App interface guidelines (iOS/Android/React Native) | accessibilityLabel, touch targets, safe areas, Dynamic Type |
| `prompt` | AI prompts, CSS keywords | (style name) |

### Available Stacks

| Stack | Focus |
|-------|-------|
| `react-native` | Components, Navigation, Lists |

---

## Example Workflow

**User request:** "Make an AI search homepage."

### Step 1: Analyze Requirements
- Product type: Tool (AI search engine)
- Target audience: C-end users looking for fast, intelligent search
- Style keywords: modern, minimal, content-first, dark mode
- Stack: React Native

### Step 2: Generate Design System (REQUIRED)

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "AI search tool modern minimal" --design-system -p "AI Search"
```

**Output:** Complete design system with pattern, style, colors, typography, effects, and anti-patterns.

### Step 3: Supplement with Detailed Searches (as needed)

```bash
# Get style options for a modern tool product
python3 skills/ui-ux-pro-max/scripts/search.py "minimalism dark mode" --domain style

# Get UX best practices for search interaction and loading
python3 skills/ui-ux-pro-max/scripts/search.py "search loading animation" --domain ux
```

### Step 4: Stack Guidelines

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "list performance navigation" --stack react-native
```

**Then:** Synthesize design system + detailed searches and implement the design.

---

## Output Formats

The `--design-system` flag supports two output formats:

```bash
# ASCII box (default) - best for terminal display
python3 skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system

# Markdown - best for documentation
python3 skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -f markdown
```

---

## Tips for Better Results

### Query Strategy

- Use **multi-dimensional keywords** — combine product + industry + tone + density: `"entertainment social vibrant content-dense"` not just `"app"`
- Try different keywords for the same need: `"playful neon"` → `"vibrant dark"` → `"content-first minimal"`
- Use `--design-system` first for full recommendations, then `--domain` to deep-dive any dimension you're unsure about
- Always add `--stack react-native` for implementation-specific guidance

### Common Sticking Points

| Problem | What to Do |
|---------|------------|
| Can't decide on style/color | Re-run `--design-system` with different keywords |
| Dark mode contrast issues | Quick Reference §6: `color-dark-mode` + `color-accessible-pairs` |
| Animations feel unnatural | Quick Reference §7: `spring-physics` + `easing` + `exit-faster-than-enter` |
| Form UX is poor | Quick Reference §8: `inline-validation` + `error-clarity` + `focus-management` |
| Navigation feels confusing | Quick Reference §9: `nav-hierarchy` + `bottom-nav-limit` + `back-behavior` |
| Layout breaks on small screens | Quick Reference §5: `mobile-first` + `breakpoint-consistency` |
| Performance / jank | Quick Reference §3: `virtualize-lists` + `main-thread-budget` + `debounce-throttle` |

### Pre-Delivery Checklist

- Run `--domain ux "animation accessibility z-index loading"` as a UX validation pass before implementation
- Run through Quick Reference **§1–§3** (CRITICAL + HIGH) as a final review
- Test on 375px (small phone) and landscape orientation
- Verify behavior with **reduced-motion** enabled and **Dynamic Type** at largest size
- Check dark mode contrast independently (don't assume light mode values work)
- Confirm all touch targets ≥44pt and no content hidden behind safe areas

---

## Common Rules for Professional UI

These are frequently overlooked issues that make UI look unprofessional:
Scope notice: The rules below are for App UI (iOS/Android/React Native/Flutter), not desktop-web interaction patterns.

### Icons & Visual Elements

| Rule | Standard | Avoid | Why It Matters |
|------|----------|--------|----------------|
| **No Emoji as Structural Icons** | Use vector-based icons (e.g., Lucide, react-native-vector-icons, @expo/vector-icons). | Using emojis (🎨 🚀 ⚙️) for navigation, settings, or system controls. | Emojis are font-dependent, inconsistent across platforms, and cannot be controlled via design tokens. |
| **Vector-Only Assets** | Use SVG or platform vector icons that scale cleanly and support theming. | Raster PNG icons that blur or pixelate. | Ensures scalability, crisp rendering, and dark/light mode adaptability. |
| **Stable Interaction States** | Use color, opacity, or elevation transitions for press states without changing layout bounds. | Layout-shifting transforms that move surrounding content or trigger visual jitter. | Prevents unstable interactions and preserves smooth motion/perceived quality on mobile. |
| **Correct Brand Logos** | Use official brand assets and follow their usage guidelines (spacing, color, clear space). | Guessing logo paths, recoloring unofficially, or modifying proportions. | Prevents brand misuse and ensures legal/platform compliance. |
| **Consistent Icon Sizing** | Define icon sizes as design tokens (e.g., icon-sm, icon-md = 24pt, icon-lg). | Mixing arbitrary values like 20pt / 24pt / 28pt randomly. | Maintains rhythm and visual hierarchy across the interface. |
| **Stroke Consistency** | Use a consistent stroke width within the same visual layer (e.g., 1.5px or 2px). | Mixing thick and thin stroke styles arbitrarily. | Inconsistent strokes reduce perceived polish and cohesion. |
| **Filled vs Outline Discipline** | Use one icon style per hierarchy level. | Mixing filled and outline icons at the same hierarchy level. | Maintains semantic clarity and stylistic coherence. |
| **Touch Target Minimum** | Minimum 44×44pt interactive area (use hitSlop if icon is smaller). | Small icons without expanded tap area. | Meets accessibility and platform usability standards. |
| **Icon Alignment** | Align icons to text baseline and maintain consistent padding. | Misaligned icons or inconsistent spacing around them. | Prevents subtle visual imbalance that reduces perceived quality. |
| **Icon Contrast** | Follow WCAG contrast standards: 4.5:1 for small elements, 3:1 minimum for larger UI glyphs. | Low-contrast icons that blend into the background. | Ensures accessibility in both light and dark modes. |


### Interaction (App)

| Rule | Do | Don't |
|------|----|----- |
| **Tap feedback** | Provide clear pressed feedback (ripple/opacity/elevation) within 80-150ms | No visual response on tap |
| **Animation timing** | Keep micro-interactions around 150-300ms with platform-native easing | Instant transitions or slow animations (>500ms) |
| **Accessibility focus** | Ensure screen reader focus order matches visual order and labels are descriptive | Unlabeled controls or confusing focus traversal |
| **Disabled state clarity** | Use disabled semantics (`disabled`/native disabled props), reduced emphasis, and no tap action | Controls that look tappable but do nothing |
| **Touch target minimum** | Keep tap areas >=44x44pt (iOS) or >=48x48dp (Android), expand hit area when icon is smaller | Tiny tap targets or icon-only hit areas without padding |
| **Gesture conflict prevention** | Keep one primary gesture per region and avoid nested tap/drag conflicts | Overlapping gestures causing accidental actions |
| **Semantic native controls** | Prefer native interactive primitives (`Button`, `Pressable`, platform equivalents) with proper accessibility roles | Generic containers used as primary controls without semantics |

### Light/Dark Mode Contrast

| Rule | Do | Don't |
|------|----|----- |
| **Surface readability (light)** | Keep cards/surfaces clearly separated from background with sufficient opacity/elevation | Overly transparent surfaces that blur hierarchy |
| **Text contrast (light)** | Maintain body text contrast >=4.5:1 against light surfaces | Low-contrast gray body text |
| **Text contrast (dark)** | Maintain primary text contrast >=4.5:1 and secondary text >=3:1 on dark surfaces | Dark mode text that blends into background |
| **Border and divider visibility** | Ensure separators are visible in both themes (not just light mode) | Theme-specific borders disappearing in one mode |
| **State contrast parity** | Keep pressed/focused/disabled states equally distinguishable in light and dark themes | Defining interaction states for one theme only |
| **Token-driven theming** | Use semantic color tokens mapped per theme across app surfaces/text/icons | Hardcoded per-screen hex values |
| **Scrim and modal legibility** | Use a modal scrim strong enough to isolate foreground content (typically 40-60% black) | Weak scrim that leaves background visually competing |

### Layout & Spacing

| Rule | Do | Don't |
|------|----|----- |
| **Safe-area compliance** | Respect top/bottom safe areas for all fixed headers, tab bars, and CTA bars | Placing fixed UI under notch, status bar, or gesture area |
| **System bar clearance** | Add spacing for status/navigation bars and gesture home indicator | Let tappable content collide with OS chrome |
| **Consistent content width** | Keep predictable content width per device class (phone/tablet) | Mixing arbitrary widths between screens |
| **8dp spacing rhythm** | Use a consistent 4/8dp spacing system for padding/gaps/section spacing | Random spacing increments with no rhythm |
| **Readable text measure** | Keep long-form text readable on large devices (avoid edge-to-edge paragraphs on tablets) | Full-width long text that hurts readability |
| **Section spacing hierarchy** | Define clear vertical rhythm tiers (e.g., 16/24/32/48) by hierarchy | Similar UI levels with inconsistent spacing |
| **Adaptive gutters by breakpoint** | Increase horizontal insets on larger widths and in landscape | Same narrow gutter on all device sizes/orientations |
| **Scroll and fixed element coexistence** | Add bottom/top content insets so lists are not hidden behind fixed bars | Scroll content obscured by sticky headers/footers |

---

## Pre-Delivery Checklist

Before delivering UI code, verify these items:
Scope notice: This checklist is for App UI (iOS/Android/React Native/Flutter).

### Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons come from a consistent icon family and style
- [ ] Official brand assets are used with correct proportions and clear space
- [ ] Pressed-state visuals do not shift layout bounds or cause jitter
- [ ] Semantic theme tokens are used consistently (no ad-hoc per-screen hardcoded colors)

### Interaction
- [ ] All tappable elements provide clear pressed feedback (ripple/opacity/elevation)
- [ ] Touch targets meet minimum size (>=44x44pt iOS, >=48x48dp Android)
- [ ] Micro-interaction timing stays in the 150-300ms range with native-feeling easing
- [ ] Disabled states are visually clear and non-interactive
- [ ] Screen reader focus order matches visual order, and interactive labels are descriptive
- [ ] Gesture regions avoid nested/conflicting interactions (tap/drag/back-swipe conflicts)

### Light/Dark Mode
- [ ] Primary text contrast >=4.5:1 in both light and dark mode
- [ ] Secondary text contrast >=3:1 in both light and dark mode
- [ ] Dividers/borders and interaction states are distinguishable in both modes
- [ ] Modal/drawer scrim opacity is strong enough to preserve foreground legibility (typically 40-60% black)
- [ ] Both themes are tested before delivery (not inferred from a single theme)

### Layout
- [ ] Safe areas are respected for headers, tab bars, and bottom CTA bars
- [ ] Scroll content is not hidden behind fixed/sticky bars
- [ ] Verified on small phone, large phone, and tablet (portrait + landscape)
- [ ] Horizontal insets/gutters adapt correctly by device size and orientation
- [ ] 4/8dp spacing rhythm is maintained across component, section, and page levels
- [ ] Long-form text measure remains readable on larger devices (no edge-to-edge paragraphs)

### Accessibility
- [ ] All meaningful images/icons have accessibility labels
- [ ] Form fields have labels, hints, and clear error messages
- [ ] Color is not the only indicator
- [ ] Reduced motion and dynamic text size are supported without layout breakage
- [ ] Accessibility traits/roles/states (selected, disabled, expanded) are announced correctly

---

---
name: tailwind-v4-shadcn
description: |
  Set up Tailwind v4 with shadcn/ui using @theme inline pattern and CSS variable architecture. Four-step pattern: CSS variables, Tailwind mapping, base styles, automatic dark mode. Prevents 8 documented errors.

  Use when initializing React projects with Tailwind v4, or fixing colors not working, tw-animate-css errors, @theme inline dark mode conflicts, @apply breaking, v3 migration issues.
user-invocable: true
---

# Tailwind v4 + shadcn/ui Production Stack

**Production-tested**: WordPress Auditor (https://wordpress-auditor.webfonts.workers.dev)
**Last Updated**: 2026-01-20
**Versions**: tailwindcss@4.1.18, @tailwindcss/vite@4.1.18
**Status**: Production Ready ✅

---

## Quick Start (Follow This Exact Order)

```bash
# 1. Install dependencies
pnpm add tailwindcss @tailwindcss/vite
pnpm add -D @types/node tw-animate-css
pnpm dlx shadcn@latest init

# 2. Delete v3 config if exists
rm tailwind.config.ts  # v4 doesn't use this file
```

**vite.config.ts**:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
})
```

**components.json** (CRITICAL):
```json
{
  "tailwind": {
    "config": "",              // ← Empty for v4
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

---

## The Four-Step Architecture (MANDATORY)

Skipping steps will break your theme. Follow exactly:

### Step 1: Define CSS Variables at Root

```css
/* src/index.css */
@import "tailwindcss";
@import "tw-animate-css";  /* Required for shadcn/ui animations */

:root {
  --background: hsl(0 0% 100%);      /* ← hsl() wrapper required */
  --foreground: hsl(222.2 84% 4.9%);
  --primary: hsl(221.2 83.2% 53.3%);
  /* ... all light mode colors */
}

.dark {
  --background: hsl(222.2 84% 4.9%);
  --foreground: hsl(210 40% 98%);
  --primary: hsl(217.2 91.2% 59.8%);
  /* ... all dark mode colors */
}
```

**Critical**: Define at root level (NOT inside `@layer base`). Use `hsl()` wrapper.

### Step 2: Map Variables to Tailwind Utilities

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  /* ... map ALL CSS variables */
}
```

**Why**: Generates utility classes (`bg-background`, `text-primary`). Without this, utilities won't exist.

### Step 3: Apply Base Styles

```css
@layer base {
  body {
    background-color: var(--background);  /* NO hsl() wrapper here */
    color: var(--foreground);
  }
}
```

**Critical**: Reference variables directly. Never double-wrap: `hsl(var(--background))`.

### Step 4: Result - Automatic Dark Mode

```tsx
<div className="bg-background text-foreground">
  {/* No dark: variants needed - theme switches automatically */}
</div>
```

---

## Dark Mode Setup

**1. Create ThemeProvider** (see `templates/theme-provider.tsx`)

**2. Wrap App**:
```typescript
// src/main.tsx
import { ThemeProvider } from '@/components/theme-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
)
```

**3. Add Theme Toggle**:
```bash
pnpm dlx shadcn@latest add dropdown-menu
```

See `reference/dark-mode.md` for ModeToggle component.

---

## Critical Rules

### ✅ Always Do:

1. Wrap colors with `hsl()` in `:root`/`.dark`: `--bg: hsl(0 0% 100%);`
2. Use `@theme inline` to map all CSS variables
3. Set `"tailwind.config": ""` in components.json
4. Delete `tailwind.config.ts` if exists
5. Use `@tailwindcss/vite` plugin (NOT PostCSS)

### ❌ Never Do:

1. Put `:root`/`.dark` inside `@layer base` (causes cascade issues)
2. Use `.dark { @theme { } }` pattern (v4 doesn't support nested @theme)
3. Double-wrap colors: `hsl(var(--background))`
4. Use `tailwind.config.ts` for theme (v4 ignores it)
5. Use `@apply` directive (deprecated in v4, see error #7)
6. Use `dark:` variants for semantic colors (auto-handled)
7. Use `@apply` with `@layer base` or `@layer components` classes (v4 breaking change - use `@utility` instead) | [Source](https://github.com/tailwindlabs/tailwindcss/discussions/17082)
8. Wrap ANY styles in `@layer base` without understanding CSS layer ordering (see error #8) | [Source](https://github.com/tailwindlabs/tailwindcss/discussions/16002)

---

## Common Errors & Solutions

This skill prevents **8 documented errors**.

### 1. ❌ tw-animate-css Import Error

**Error**: "Cannot find module 'tailwindcss-animate'"

**Cause**: shadcn/ui deprecated `tailwindcss-animate` for v4.

**Solution**:
```bash
# ✅ DO
pnpm add -D tw-animate-css

# Add to src/index.css:
@import "tailwindcss";
@import "tw-animate-css";

# ❌ DON'T
npm install tailwindcss-animate  # v3 only
```

---

### 2. ❌ Colors Not Working

**Error**: `bg-primary` doesn't apply styles

**Cause**: Missing `@theme inline` mapping

**Solution**:
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  /* ... map ALL CSS variables */
}
```

---

### 3. ❌ Dark Mode Not Switching

**Error**: Theme stays light/dark

**Cause**: Missing ThemeProvider

**Solution**:
1. Create ThemeProvider (see `templates/theme-provider.tsx`)
2. Wrap app in `main.tsx`
3. Verify `.dark` class toggles on `<html>` element

---

### 4. ❌ Duplicate @layer base

**Error**: "Duplicate @layer base" in console

**Cause**: shadcn init adds `@layer base` - don't add another

**Solution**:
```css
/* ✅ Correct - single @layer base */
@import "tailwindcss";

:root { --background: hsl(0 0% 100%); }

@theme inline { --color-background: var(--background); }

@layer base { body { background-color: var(--background); } }
```

---

### 5. ❌ Build Fails with tailwind.config.ts

**Error**: "Unexpected config file"

**Cause**: v4 doesn't use `tailwind.config.ts` (v3 legacy)

**Solution**:
```bash
rm tailwind.config.ts
```

v4 configuration happens in `src/index.css` using `@theme` directive.

---

### 6. ❌ @theme inline Breaks Dark Mode in Multi-Theme Setups

**Error**: Dark mode doesn't switch when using `@theme inline` with custom variants (e.g., `data-mode="dark"`)
**Source**: [GitHub Discussion #18560](https://github.com/tailwindlabs/tailwindcss/discussions/18560)

**Cause**: `@theme inline` bakes variable VALUES into utilities at build time. When dark mode changes the underlying CSS variables, utilities don't update because they reference hardcoded values, not variables.

**Why It Happens**:
- `@theme inline` inlines VALUES at build time: `bg-primary` → `background-color: oklch(...)`
- Dark mode overrides change the CSS variables, but utilities already have baked-in values
- The CSS specificity chain breaks

**Solution**: Use `@theme` (without inline) for multi-theme scenarios:

```css
/* ✅ CORRECT - Use @theme without inline */
@custom-variant dark (&:where([data-mode=dark], [data-mode=dark] *));

@theme {
  --color-text-primary: var(--color-slate-900);
  --color-bg-primary: var(--color-white);
}

@layer theme {
  [data-mode="dark"] {
    --color-text-primary: var(--color-white);
    --color-bg-primary: var(--color-slate-900);
  }
}
```

**When to use inline**:
- Single theme + dark mode toggle (like shadcn/ui default) ✅
- Referencing other CSS variables that don't change ✅

**When NOT to use inline**:
- Multi-theme systems (data-theme="blue" | "green" | etc.) ❌
- Dynamic theme switching beyond light/dark ❌

**Maintainer Guidance** (Adam Wathan):
> "It's more idiomatic in v4 for the actual generated CSS to reference your theme variables. I would personally only use inline when things don't work without it."

---

### 7. ❌ @apply with @layer base/components (v4 Breaking Change)

**Error**: `Cannot apply unknown utility class: custom-button`
**Source**: [GitHub Discussion #17082](https://github.com/tailwindlabs/tailwindcss/discussions/17082)

**Cause**: In v3, classes defined in `@layer base` and `@layer components` could be used with `@apply`. In v4, this is a breaking architectural change.

**Why It Happens**: v4 doesn't "hijack" the native CSS `@layer` at-rule anymore. Only classes defined with `@utility` are available to `@apply`.

**Migration**:
```css
/* ❌ v3 pattern (worked) */
@layer components {
  .custom-button {
    @apply px-4 py-2 bg-blue-500;
  }
}

/* ✅ v4 pattern (required) */
@utility custom-button {
  @apply px-4 py-2 bg-blue-500;
}

/* OR use native CSS */
@layer base {
  .custom-button {
    padding: 1rem 0.5rem;
    background-color: theme(colors.blue.500);
  }
}
```

**Note**: This skill already discourages `@apply` usage. This error is primarily for users migrating from v3.

---

### 8. ❌ @layer base Styles Not Applying

**Error**: Styles defined in `@layer base` seem to be ignored
**Source**: [GitHub Discussion #16002](https://github.com/tailwindlabs/tailwindcss/discussions/16002) | [Discussion #18123](https://github.com/tailwindlabs/tailwindcss/discussions/18123)

**Cause**: v4 uses native CSS layers. Base styles CAN be overridden by utility layers due to CSS cascade if layers aren't explicitly ordered.

**Why It Happens**:
- v3: Tailwind intercepted `@layer base/components/utilities` and processed them specially
- v4: Uses native CSS layers - if you don't import layers in the right order, precedence breaks
- Styles ARE being applied, but utilities override them

**Solution Option 1**: Define layers explicitly:
```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/base.css" layer(base);
@import "tailwindcss/components.css" layer(components);
@import "tailwindcss/utilities.css" layer(utilities);

@layer base {
  body {
    background-color: var(--background);
  }
}
```

**Solution Option 2** (Recommended): Don't use `@layer base` - define styles at root level:
```css
@import "tailwindcss";

:root {
  --background: hsl(0 0% 100%);
}

body {
  background-color: var(--background); /* No @layer needed */
}
```

**Applies to**: ALL base styles, not just color variables. Avoid wrapping ANY styles in `@layer base` unless you understand CSS layer ordering.

---

## Quick Reference

| Symptom | Cause | Fix |
|---------|-------|-----|
| `bg-primary` doesn't work | Missing `@theme inline` | Add `@theme inline` block |
| Colors all black/white | Double `hsl()` wrapping | Use `var(--color)` not `hsl(var(--color))` |
| Dark mode not switching | Missing ThemeProvider | Wrap app in `<ThemeProvider>` |
| Build fails | `tailwind.config.ts` exists | Delete file |
| Animation errors | Using `tailwindcss-animate` | Install `tw-animate-css` |

---

## What's New in Tailwind v4

### OKLCH Color Space (December 2024)

Tailwind v4.0 replaced the entire default color palette with OKLCH, a perceptually uniform color space.
**Source**: [Tailwind v4.0 Release](https://tailwindcss.com/blog/tailwindcss-v4) | [OKLCH Migration Guide](https://andy-cinquin.com/blog/migration-oklch-tailwind-css-4-0)

**Why OKLCH**:
- **Perceptual consistency**: HSL's "50% lightness" is visually inconsistent across hues (yellow appears much brighter than blue at same lightness)
- **Better gradients**: Smooth transitions without muddy middle colors
- **Wider gamut**: Supports colors beyond sRGB on modern displays
- **More vibrant colors**: Eye-catching, saturated colors previously limited by sRGB

**Browser Support** (January 2026):
- Chrome 111+, Firefox 113+, Safari 15.4+, Edge 111+
- Global coverage: 93.1%

**Automatic Fallbacks**: Tailwind generates sRGB fallbacks for older browsers:
```css
.bg-blue-500 {
  background-color: #3b82f6; /* sRGB fallback */
  background-color: oklch(0.6 0.24 264); /* Modern browsers */
}
```

**Custom Colors**: When defining custom colors, OKLCH is now preferred:
```css
@theme {
  /* Modern approach (preferred) */
  --color-brand: oklch(0.7 0.15 250);

  /* Legacy approach (still works) */
  --color-brand: hsl(240 80% 60%);
}
```

**Migration**: No breaking changes - Tailwind generates fallbacks automatically. For new projects, use OKLCH-aware tooling for custom colors.

### Built-in Features (No Plugin Needed)

**Container Queries** (built-in as of v4.0):
```tsx
<div className="@container">
  <div className="@md:text-lg @lg:grid-cols-2">
    Content responds to container width, not viewport
  </div>
</div>
```

**Line Clamp** (built-in as of v3.3):
```tsx
<p className="line-clamp-3">Truncate to 3 lines with ellipsis...</p>
<p className="line-clamp-[8]">Arbitrary values supported</p>
<p className="line-clamp-(--teaser-lines)">CSS variable support</p>
```

**Removed Plugins**:
- `@tailwindcss/container-queries` - Built-in now
- `@tailwindcss/line-clamp` - Built-in since v3.3

---

## Tailwind v4 Plugins

Use `@plugin` directive (NOT `require()` or `@import`):

**Typography** (for Markdown/CMS content):
```bash
pnpm add -D @tailwindcss/typography
```
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```
```html
<article class="prose dark:prose-invert">{{ content }}</article>
```

**Forms** (cross-browser form styling):
```bash
pnpm add -D @tailwindcss/forms
```
```css
@import "tailwindcss";
@plugin "@tailwindcss/forms";
```

**Container Queries** (built-in, no plugin needed):
```tsx
<div className="@container">
  <div className="@md:text-lg">Responds to container width</div>
</div>
```

**Common Plugin Errors**:
```css
/* ❌ WRONG - v3 syntax */
@import "@tailwindcss/typography";

/* ✅ CORRECT - v4 syntax */
@plugin "@tailwindcss/typography";
```

---

## Setup Checklist

- [ ] `@tailwindcss/vite` installed (NOT postcss)
- [ ] `vite.config.ts` uses `tailwindcss()` plugin
- [ ] `components.json` has `"config": ""`
- [ ] NO `tailwind.config.ts` exists
- [ ] `src/index.css` follows 4-step pattern:
  - [ ] `:root`/`.dark` at root level (not in @layer)
  - [ ] Colors wrapped with `hsl()`
  - [ ] `@theme inline` maps all variables
  - [ ] `@layer base` uses unwrapped variables
- [ ] ThemeProvider wraps app
- [ ] Theme toggle works

---

## File Templates

Available in `templates/` directory:

- **index.css** - Complete CSS with all color variables
- **components.json** - shadcn/ui v4 config
- **vite.config.ts** - Vite + Tailwind plugin
- **theme-provider.tsx** - Dark mode provider
- **utils.ts** - `cn()` utility

---

## Migration from v3

See `reference/migration-guide.md` for complete guide.

**Key Changes**:
- Delete `tailwind.config.ts`
- Move theme to CSS with `@theme inline`
- Replace `@tailwindcss/line-clamp` (now built-in: `line-clamp-*`)
- Replace `tailwindcss-animate` with `tw-animate-css`
- Update plugins: `require()` → `@plugin`

### Additional Migration Gotchas

#### Automated Migration Tool May Fail

**Warning**: The `@tailwindcss/upgrade` utility often fails to migrate configurations.
**Source**: [Community Reports](https://medium.com/better-dev-nextjs-react/tailwind-v4-migration-from-javascript-config-to-css-first-in-2025-ff3f59b215ca) | [GitHub Discussion #16642](https://github.com/tailwindlabs/tailwindcss/discussions/16642)

**Common failures**:
- Typography plugin configurations
- Complex theme extensions
- Custom plugin setups

**Recommendation**: Don't rely on automated migration. Follow manual steps in the migration guide instead.

#### Default Element Styles Removed

Tailwind v4 takes a more minimal approach to Preflight, removing default styles for headings, lists, and buttons.
**Source**: [GitHub Discussion #16517](https://github.com/tailwindlabs/tailwindcss/discussions/16517) | [Medium: Migration Problems](https://medium.com/better-dev-nextjs-react/tailwind-v4-migration-from-javascript-config-to-css-first-in-2025-ff3f59b215ca)

**Impact**:
- All headings (`<h1>` through `<h6>`) render at same size
- Lists lose default padding
- Visual regressions in existing projects

**Solutions**:

**Option 1: Use @tailwindcss/typography for content pages**:
```bash
pnpm add -D @tailwindcss/typography
```
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```
```tsx
<article className="prose dark:prose-invert">
  {/* All elements styled automatically */}
</article>
```

**Option 2: Add custom base styles**:
```css
@layer base {
  h1 { @apply text-4xl font-bold mb-4; }
  h2 { @apply text-3xl font-bold mb-3; }
  h3 { @apply text-2xl font-bold mb-2; }
  ul { @apply list-disc pl-6 mb-4; }
  ol { @apply list-decimal pl-6 mb-4; }
}
```

#### PostCSS Setup Complexity

**Recommendation**: Use `@tailwindcss/vite` plugin for Vite projects instead of PostCSS.
**Source**: [Medium: Migration Problems](https://medium.com/better-dev-nextjs-react/tailwind-v4-migration-from-javascript-config-to-css-first-in-2025-ff3f59b215ca) | [GitHub Discussion #15764](https://github.com/tailwindlabs/tailwindcss/discussions/15764)

**Why Vite Plugin is Better**:
```typescript
// ✅ Vite Plugin - One line, no PostCSS config
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

// ❌ PostCSS - Multiple steps, plugin compatibility issues
// 1. Install @tailwindcss/postcss
// 2. Configure postcss.config.js
// 3. Manage plugin order
// 4. Debug plugin conflicts
```

**PostCSS Problems Reported**:
- Error: "It looks like you're trying to use tailwindcss directly as a PostCSS plugin"
- Multiple PostCSS plugins required: `postcss-import`, `postcss-advanced-variables`, `tailwindcss/nesting`
- v4 PostCSS plugin is separate package: `@tailwindcss/postcss`

**Official Guidance**: The Vite plugin is recommended for Vite projects. PostCSS is for legacy setups or non-Vite environments.

#### Visual Changes

**Ring Width Default**: Changed from 3px to 1px
**Source**: [Medium: Migration Guide](https://medium.com/better-dev-nextjs-react/tailwind-v4-migration-from-javascript-config-to-css-first-in-2025-ff3f59b215ca)

- `ring` class is now thinner
- Use `ring-3` to match v3 appearance

```tsx
// v3: 3px ring
<button className="ring">Button</button>

// v4: 1px ring (thinner)
<button className="ring">Button</button>

// Match v3 appearance
<button className="ring-3">Button</button>
```

---

## Reference Documentation

- **architecture.md** - Deep dive into 4-step pattern
- **dark-mode.md** - Complete dark mode implementation
- **common-gotchas.md** - Troubleshooting guide
- **migration-guide.md** - v3 → v4 migration

---

## Official Documentation

- **shadcn/ui Vite Setup**: https://ui.shadcn.com/docs/installation/vite
- **shadcn/ui Tailwind v4**: https://ui.shadcn.com/docs/tailwind-v4
- **Tailwind v4 Docs**: https://tailwindcss.com/docs

---

**Last Updated**: 2026-01-20
**Skill Version**: 3.0.0
**Tailwind v4**: 4.1.18 (Latest)
**Production**: WordPress Auditor (https://wordpress-auditor.webfonts.workers.dev)

**Changelog**:
- v3.0.0 (2026-01-20): Major research update - added 3 TIER 1 errors (#6-8), expanded migration guide with community findings (TIER 2), added OKLCH color space section, PostCSS complexity warnings, and migration tool limitations
- v2.0.1 (2026-01-03): Production verification
- v2.0.0: Initial release with 5 documented errors

---

---
name: tailwind-patterns
description: |
  Production-ready Tailwind CSS patterns for common website components: responsive layouts, cards, navigation, forms, buttons, and typography. Includes spacing scale, breakpoints, mobile-first patterns, and dark mode support.

  Use when building UI components, creating landing pages, styling forms, implementing navigation, or fixing responsive layouts.
---

# Tailwind CSS Component Patterns

**Status**: Production Ready ✅
**Last Updated**: 2026-01-14
**Tailwind Compatibility**: v3.x and v4.x
**Source**: Production projects, shadcn/ui patterns

---

## Quick Start

### Essential Patterns

```tsx
// Section Container
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
  {/* content */}
</section>

// Card Base
<div className="bg-card text-card-foreground rounded-lg border border-border p-6">
  {/* content */}
</div>

// Button Primary
<button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
  Click me
</button>

// Responsive Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* items */}
</div>
```

---

## Spacing Scale

Consistent spacing prevents design drift:

| Usage | Classes | Output |
|-------|---------|--------|
| **Tight spacing** | `gap-2 p-2 space-y-2` | 0.5rem (8px) |
| **Standard spacing** | `gap-4 p-4 space-y-4` | 1rem (16px) |
| **Comfortable** | `gap-6 p-6 space-y-6` | 1.5rem (24px) |
| **Loose** | `gap-8 p-8 space-y-8` | 2rem (32px) |
| **Section spacing** | `py-16 sm:py-24` | 4rem/6rem (64px/96px) |

**Standard Pattern**: Use increments of 4 (4, 6, 8, 12, 16, 24)

---

## Responsive Breakpoints

Mobile-first approach (base styles = mobile, add larger breakpoints):

| Breakpoint | Min Width | Pattern | Example |
|------------|-----------|---------|---------|
| **Base** | 0px | No prefix | `text-base` |
| **sm** | 640px | `sm:` | `sm:text-lg` |
| **md** | 768px | `md:` | `md:grid-cols-2` |
| **lg** | 1024px | `lg:` | `lg:px-8` |
| **xl** | 1280px | `xl:` | `xl:max-w-7xl` |
| **2xl** | 1536px | `2xl:` | `2xl:text-6xl` |

```tsx
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## Container Patterns

### Standard Page Container

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* content */}
</div>
```

**Variations**:
- `max-w-4xl` - Narrow content (blog posts)
- `max-w-5xl` - Medium content
- `max-w-6xl` - Wide content
- `max-w-7xl` - Full width (default)

### Section Spacing

```tsx
<section className="py-16 sm:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```

---

## Card Patterns

### Basic Card

```tsx
<div className="bg-card text-card-foreground rounded-lg border border-border p-6">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-muted-foreground">Card description goes here.</p>
</div>
```

### Feature Card with Icon

```tsx
<div className="bg-card text-card-foreground rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
    {/* Icon */}
  </div>
  <h3 className="text-lg font-semibold mb-2">Feature Title</h3>
  <p className="text-muted-foreground">Feature description.</p>
</div>
```

### Pricing Card

```tsx
<div className="bg-card text-card-foreground rounded-lg border-2 border-border p-8 relative">
  <div className="text-sm font-semibold text-primary mb-2">Pro Plan</div>
  <div className="text-4xl font-bold mb-1">$29<span className="text-lg text-muted-foreground">/mo</span></div>
  <p className="text-muted-foreground mb-6">For growing teams</p>
  <button className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90">
    Get Started
  </button>
</div>
```

See `references/card-patterns.md` for more variants.

---

## Grid Layouts

### Auto-Responsive Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Auto-Fit Grid (Dynamic Columns)

```tsx
<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
  {/* Automatically adjusts columns based on available space */}
</div>
```

### Masonry-Style Grid

```tsx
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
  {items.map(item => (
    <div key={item.id} className="break-inside-avoid">
      <Card {...item} />
    </div>
  ))}
</div>
```

---

## Button Patterns

```tsx
// Primary
<button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
  Primary
</button>

// Secondary
<button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80">
  Secondary
</button>

// Outline
<button className="border border-border bg-transparent px-4 py-2 rounded-md hover:bg-accent">
  Outline
</button>

// Ghost
<button className="bg-transparent px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">
  Ghost
</button>

// Destructive
<button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:bg-destructive/90">
  Delete
</button>
```

**Size Variants**:
- Small: `px-3 py-1.5 text-sm`
- Default: `px-4 py-2`
- Large: `px-6 py-3 text-lg`

See `references/button-patterns.md` for full reference.

---

## Form Patterns

### Input Field

```tsx
<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email
  </label>
  <input
    id="email"
    type="email"
    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    placeholder="you@example.com"
  />
</div>
```

### Select Dropdown

```tsx
<select className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Checkbox

```tsx
<div className="flex items-center space-x-2">
  <input
    id="terms"
    type="checkbox"
    className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
  />
  <label htmlFor="terms" className="text-sm">
    I agree to the terms
  </label>
</div>
```

### Error State

```tsx
<div className="space-y-2">
  <label htmlFor="password" className="text-sm font-medium">
    Password
  </label>
  <input
    id="password"
    type="password"
    className="w-full px-3 py-2 bg-background border border-destructive rounded-md focus:outline-none focus:ring-2 focus:ring-destructive"
  />
  <p className="text-sm text-destructive">Password must be at least 8 characters</p>
</div>
```

See `references/form-patterns.md` for complete patterns.

---

## Typography Patterns

### Headings

```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
  Page Title
</h1>

<h2 className="text-3xl sm:text-4xl font-bold">
  Section Title
</h2>

<h3 className="text-2xl sm:text-3xl font-semibold">
  Subsection
</h3>

<h4 className="text-xl font-semibold">
  Card Title
</h4>
```

### Body Text

```tsx
<p className="text-base text-muted-foreground">
  Regular paragraph text.
</p>

<p className="text-lg text-muted-foreground leading-relaxed">
  Larger body text with comfortable line height.
</p>

<p className="text-sm text-muted-foreground">
  Small supporting text or captions.
</p>
```

### Lists

```tsx
<ul className="space-y-2 text-muted-foreground">
  <li className="flex items-start">
    <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
    <span>Feature one</span>
  </li>
  <li className="flex items-start">
    <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
    <span>Feature two</span>
  </li>
</ul>
```

See `references/typography-patterns.md` for complete guide.

---

## Navigation Patterns

### Header with Logo

```tsx
<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a href="/" className="font-bold text-xl">Brand</a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm hover:text-primary transition-colors">Features</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">About</a>
        </nav>
      </div>

      {/* CTA */}
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
        Sign Up
      </button>
    </div>
  </div>
</header>
```

### Footer

```tsx
<footer className="border-t border-border bg-muted/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-semibold mb-4">Product</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-primary">Features</a></li>
          <li><a href="#" className="hover:text-primary">Pricing</a></li>
        </ul>
      </div>
      {/* More columns */}
    </div>
  </div>
</footer>
```

See `references/navigation-patterns.md` for mobile menus and dropdowns.

---

## Dark Mode Support

All patterns use semantic color tokens that automatically adapt:

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `bg-background` | White | Dark gray |
| `text-foreground` | Dark gray | White |
| `bg-card` | White | Slightly lighter gray |
| `text-muted-foreground` | Gray | Light gray |
| `border-border` | Light gray | Dark gray |
| `bg-primary` | Brand color | Lighter brand color |

**Never use raw colors** like `bg-blue-500` - always use semantic tokens.

See `references/dark-mode-patterns.md` for theme toggle implementation.

---

## Common Class Combinations

### Section with Heading

```tsx
<section className="py-16 sm:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
      Section Title
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* content */}
    </div>
  </div>
</section>
```

### Centered Content

```tsx
<div className="flex flex-col items-center justify-center text-center">
  <h1 className="text-4xl font-bold mb-4">Centered Title</h1>
  <p className="text-muted-foreground max-w-2xl">Centered description</p>
</div>
```

### Hover Effects

```tsx
// Lift on hover
<div className="transition-transform hover:scale-105">

// Shadow on hover
<div className="transition-shadow hover:shadow-lg">

// Color change on hover
<button className="transition-colors hover:bg-primary/90">
```

---

## Critical Rules

### ✅ Always Do

1. Use semantic color tokens (`bg-card`, `text-foreground`)
2. Apply mobile-first responsive design (`base → sm: → md:`)
3. Use consistent spacing scale (4, 6, 8, 12, 16, 24)
4. Add `transition-*` classes for smooth interactions
5. Test in both light and dark modes

### ❌ Never Do

1. Use raw Tailwind colors (`bg-blue-500` breaks themes)
2. Skip responsive prefixes (mobile users suffer)
3. Mix spacing scales randomly (creates visual chaos)
4. Forget hover states on interactive elements
5. Use fixed px values for text (`text-base` not `text-[16px]`)

---

## Template Components

Ready-to-use components in `templates/components/`:

- **hero-section.tsx** - Responsive hero with CTA
- **feature-grid.tsx** - 3-column feature grid with icons
- **contact-form.tsx** - Full form with validation styles
- **footer.tsx** - Multi-column footer with links

Copy and customize for your project.

---

## Reference Documentation

Detailed patterns in `references/` directory:

- **layout-patterns.md** - Containers, grids, flexbox layouts
- **card-patterns.md** - All card variants and states
- **navigation-patterns.md** - Headers, menus, breadcrumbs, footers
- **form-patterns.md** - Complete form styling guide
- **button-patterns.md** - All button variants and sizes
- **typography-patterns.md** - Text styles and hierarchies
- **dark-mode-patterns.md** - Theme switching implementation

---

## Official Documentation

- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Tailwind UI**: https://tailwindui.com (premium examples)

---

**Last Updated**: 2026-01-14
**Skill Version**: 1.0.0
**Production**: Tested across 10+ projects

---

---
name: tailwind-design-system
description: Build scalable design systems with Tailwind CSS, design tokens, component libraries, and responsive patterns. Use when creating component libraries, implementing design systems, or standardizing UI patterns.
---

# Tailwind Design System

Build production-ready design systems with Tailwind CSS, including design tokens, component variants, responsive patterns, and accessibility.

## When to Use This Skill

- Creating a component library with Tailwind
- Implementing design tokens and theming
- Building responsive and accessible components
- Standardizing UI patterns across a codebase
- Migrating to or extending Tailwind CSS
- Setting up dark mode and color schemes

## Core Concepts

### 1. Design Token Hierarchy

```
Brand Tokens (abstract)
    └── Semantic Tokens (purpose)
        └── Component Tokens (specific)

Example:
    blue-500 → primary → button-bg
```

### 2. Component Architecture

```
Base styles → Variants → Sizes → States → Overrides
```

## Quick Start

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Semantic color tokens
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
```

## Patterns

### Pattern 1: CVA (Class Variance Authority) Components

```typescript
// components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

// Usage
<Button variant="destructive" size="lg">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button asChild><Link href="/home">Home</Link></Button>
```

### Pattern 2: Compound Components

```typescript
// components/ui/card.tsx
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }

// Usage
<Card>
  <CardHeader>
    <CardTitle>Account</CardTitle>
    <CardDescription>Manage your account settings</CardDescription>
  </CardHeader>
  <CardContent>
    <form>...</form>
  </CardContent>
  <CardFooter>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

### Pattern 3: Form Components

```typescript
// components/ui/input.tsx
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${props.id}-error`}
            className="mt-1 text-sm text-destructive"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

// components/ui/label.tsx
import { cva, type VariantProps } from 'class-variance-authority'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

const Label = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn(labelVariants(), className)} {...props} />
  )
)
Label.displayName = 'Label'

// Usage with React Hook Form
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
      </div>
      <Button type="submit" className="w-full">Sign In</Button>
    </form>
  )
}
```

### Pattern 4: Responsive Grid System

```typescript
// components/ui/grid.tsx
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const gridVariants = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
      6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
    },
    gap: {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
  },
  defaultVariants: {
    cols: 3,
    gap: 'md',
  },
})

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

export function Grid({ className, cols, gap, ...props }: GridProps) {
  return (
    <div className={cn(gridVariants({ cols, gap, className }))} {...props} />
  )
}

// Container component
const containerVariants = cva('mx-auto w-full px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    size: 'xl',
  },
})

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size, className }))} {...props} />
  )
}

// Usage
<Container>
  <Grid cols={4} gap="lg">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </Grid>
</Container>
```

### Pattern 5: Animation Utilities

```typescript
// lib/animations.ts - Tailwind CSS Animate utilities
import { cn } from './utils'

export const fadeIn = 'animate-in fade-in duration-300'
export const fadeOut = 'animate-out fade-out duration-300'
export const slideInFromTop = 'animate-in slide-in-from-top duration-300'
export const slideInFromBottom = 'animate-in slide-in-from-bottom duration-300'
export const slideInFromLeft = 'animate-in slide-in-from-left duration-300'
export const slideInFromRight = 'animate-in slide-in-from-right duration-300'
export const zoomIn = 'animate-in zoom-in-95 duration-300'
export const zoomOut = 'animate-out zoom-out-95 duration-300'

// Compound animations
export const modalEnter = cn(fadeIn, zoomIn, 'duration-200')
export const modalExit = cn(fadeOut, zoomOut, 'duration-200')
export const dropdownEnter = cn(fadeIn, slideInFromTop, 'duration-150')
export const dropdownExit = cn(fadeOut, 'slide-out-to-top', 'duration-150')

// components/ui/dialog.tsx
import * as DialogPrimitive from '@radix-ui/react-dialog'

const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))

const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
        'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        'sm:rounded-lg',
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
))
```

### Pattern 6: Dark Mode Implementation

```typescript
// providers/ThemeProvider.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'dark' | 'light'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null
    if (stored) setTheme(stored)
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    let resolved: 'dark' | 'light'

    if (theme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    } else {
      resolved = theme
    }

    root.classList.add(resolved)
    setResolvedTheme(resolved)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setTheme(newTheme)
    },
    resolvedTheme,
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

// components/ThemeToggle.tsx
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/providers/ThemeProvider'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

## Utility Functions

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Focus ring utility
export const focusRing = cn(
  "focus-visible:outline-none focus-visible:ring-2",
  "focus-visible:ring-ring focus-visible:ring-offset-2",
);

// Disabled utility
export const disabled = "disabled:pointer-events-none disabled:opacity-50";
```

## Best Practices

### Do's

- **Use CSS variables** - Enable runtime theming
- **Compose with CVA** - Type-safe variants
- **Use semantic colors** - `primary` not `blue-500`
- **Forward refs** - Enable composition
- **Add accessibility** - ARIA attributes, focus states

### Don'ts

- **Don't use arbitrary values** - Extend theme instead
- **Don't nest @apply** - Hurts readability
- **Don't skip focus states** - Keyboard users need them
- **Don't hardcode colors** - Use semantic tokens
- **Don't forget dark mode** - Test both themes

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CVA Documentation](https://cva.style/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix Primitives](https://www.radix-ui.com/primitives)

---

---
name: tailwind-css-patterns
description: Comprehensive Tailwind CSS utility-first styling patterns including responsive design, layout utilities, flexbox, grid, spacing, typography, colors, and modern CSS best practices. Use when styling React/Vue/Svelte components, building responsive layouts, implementing design systems, or optimizing CSS workflow.
language: html,tsx,jsx,vue,svelte
framework: tailwindcss
license: MIT
---

# Tailwind CSS Development Patterns

Expert guide for building modern, responsive user interfaces with Tailwind CSS utility-first framework. Covers v4.1+ features including CSS-first configuration, custom utilities, and enhanced developer experience.

## When to Use

- Styling React/HTML components with utility classes
- Building responsive layouts with breakpoints
- Implementing flexbox and grid layouts
- Managing spacing, colors, and typography
- Creating custom design systems
- Optimizing for mobile-first design
- Building dark mode interfaces

## Core Concepts

### Utility-First Approach

Apply styles directly in markup using utility classes:

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

### Responsive Design

Mobile-first breakpoints with prefixes:

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on tablet, third on desktop -->
</div>
```

Breakpoint prefixes:
- `sm:` - 640px and above
- `md:` - 768px and above
- `lg:` - 1024px and above
- `xl:` - 1280px and above
- `2xl:` - 1536px and above

## Layout Utilities

### Flexbox Layouts

Basic flex container:

```html
<div class="flex items-center justify-between">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</div>
```

Responsive flex direction:

```html
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Item 1</div>
  <div class="flex-1">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>
```

Common flex patterns:

```html
<!-- Center content -->
<div class="flex items-center justify-center min-h-screen">
  <div>Centered Content</div>
</div>

<!-- Space between items -->
<div class="flex justify-between items-center">
  <span>Left</span>
  <span>Right</span>
</div>

<!-- Vertical stack with gap -->
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Grid Layouts

Basic grid:

```html
<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

Responsive grid:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- 1 column mobile, 2 tablet, 4 desktop -->
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

Auto-fit columns:

```html
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  <!-- Automatically fit columns based on container width -->
</div>
```

### Container & Max Width

Centered container with max width:

```html
<div class="container mx-auto px-4 max-w-7xl">
  <!-- Centered content with padding -->
</div>
```

Responsive max width:

```html
<div class="w-full max-w-md mx-auto">
  <!-- Max 448px width, centered -->
</div>
```

## Spacing

### Padding & Margin

Uniform spacing:

```html
<div class="p-4">Padding all sides</div>
<div class="m-4">Margin all sides</div>
```

Individual sides:

```html
<div class="pt-4 pr-8 pb-4 pl-8">
  <!-- Top 1rem, Right 2rem, Bottom 1rem, Left 2rem -->
</div>
```

Axis-based spacing:

```html
<div class="px-4 py-8">
  <!-- Horizontal padding 1rem, Vertical padding 2rem -->
</div>
```

Responsive spacing:

```html
<div class="p-4 md:p-8 lg:p-12">
  <!-- Increases padding at larger breakpoints -->
</div>
```

Space between children:

```html
<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Typography

### Font Size & Weight

```html
<h1 class="text-4xl font-bold">Large Heading</h1>
<h2 class="text-2xl font-semibold">Subheading</h2>
<p class="text-base font-normal">Body text</p>
<small class="text-sm text-gray-600">Small text</small>
```

Responsive typography:

```html
<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>
```

### Line Height & Letter Spacing

```html
<p class="leading-relaxed tracking-wide">
  Text with relaxed line height and wide letter spacing
</p>
```

### Text Alignment

```html
<p class="text-left md:text-center">
  Left aligned on mobile, centered on tablet+
</p>
```

## Colors

### Background Colors

```html
<div class="bg-blue-500">Blue background</div>
<div class="bg-gray-100">Light gray background</div>
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Gradient background
</div>
```

### Text Colors

```html
<p class="text-gray-900">Dark text</p>
<p class="text-blue-600">Blue text</p>
<p class="text-red-500">Error text</p>
```

### Opacity

```html
<div class="bg-blue-500 bg-opacity-50">
  Semi-transparent blue
</div>
```

## Interactive States

### Hover States

```html
<button class="bg-blue-500 hover:bg-blue-700 transition">
  Hover me
</button>

<a class="text-blue-600 hover:text-blue-800 hover:underline">
  Hover link
</a>
```

### Focus States

```html
<input class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none">
```

### Active & Disabled States

```html
<button class="bg-blue-500 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed">
  Button
</button>
```

### Group Hover

```html
<div class="group">
  <img class="group-hover:opacity-75" src="image.jpg" />
  <p class="group-hover:text-blue-600">Hover the parent</p>
</div>
```

## Component Patterns

### Card Component

```html
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
  <img class="w-full h-48 object-cover" src="image.jpg" alt="Card image" />
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">Card Title</h3>
    <p class="text-gray-700 mb-4">Card description text goes here.</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Action
    </button>
  </div>
</div>
```

### Responsive User Card

```html
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden sm:flex sm:max-w-2xl">
  <img class="h-48 w-full object-cover sm:h-auto sm:w-48" 
       src="profile.jpg" 
       alt="Profile" />
  <div class="p-8">
    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
      Product Engineer
    </div>
    <h2 class="mt-1 text-xl font-semibold text-gray-900">
      John Doe
    </h2>
    <p class="mt-2 text-gray-500">
      Building amazing products with modern technology.
    </p>
    <button class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
      Contact
    </button>
  </div>
</div>
```

### Navigation Bar

```html
<nav class="bg-white shadow-lg">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center">
        <a href="#" class="text-xl font-bold text-gray-800">Logo</a>
      </div>
      <div class="hidden md:flex space-x-8">
        <a href="#" class="text-gray-700 hover:text-blue-600 transition">Home</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 transition">About</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 transition">Services</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
      </div>
      <button class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</nav>
```

### Form Elements

```html
<form class="space-y-6 max-w-md mx-auto">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2">
      Email
    </label>
    <input 
      type="email" 
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="you@example.com"
    />
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2">
      Password
    </label>
    <input 
      type="password" 
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
  
  <div class="flex items-center">
    <input type="checkbox" class="mr-2" />
    <label class="text-sm text-gray-600">Remember me</label>
  </div>
  
  <button 
    type="submit"
    class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
  >
    Sign In
  </button>
</form>
```

### Modal/Dialog

```html
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold">Modal Title</h3>
      <button class="text-gray-500 hover:text-gray-700">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <p class="text-gray-700 mb-6">
      Modal content goes here.
    </p>
    <div class="flex justify-end space-x-4">
      <button class="px-4 py-2 text-gray-600 hover:text-gray-800">
        Cancel
      </button>
      <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Confirm
      </button>
    </div>
  </div>
</div>
```

## Responsive Design Patterns

### Mobile-First Responsive Layout

```html
<div class="container mx-auto px-4">
  <!-- Hero Section -->
  <div class="flex flex-col md:flex-row items-center gap-8 py-12">
    <div class="flex-1">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">
        Welcome to Our Site
      </h1>
      <p class="text-lg text-gray-600 mb-6">
        Build amazing things with Tailwind CSS
      </p>
      <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
    <div class="flex-1">
      <img src="hero.jpg" class="w-full rounded-lg shadow-lg" />
    </div>
  </div>
</div>
```

### Responsive Grid Gallery

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img src="image1.jpg" class="w-full h-full object-cover hover:scale-105 transition" />
  </div>
  <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img src="image2.jpg" class="w-full h-full object-cover hover:scale-105 transition" />
  </div>
  <!-- More items... -->
</div>
```

## Dark Mode

### Basic Dark Mode Support

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 class="text-gray-900 dark:text-white">Title</h1>
  <p class="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

Enable dark mode in tailwind.config.js:

```javascript
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}
```

## Animations & Transitions

### Basic Transitions

```html
<button class="bg-blue-500 hover:bg-blue-700 transition duration-300">
  Smooth transition
</button>
```

### Transform Effects

```html
<div class="transform hover:scale-110 transition duration-300">
  Scale on hover
</div>

<img class="transform hover:rotate-6 transition duration-300" />
```

### Built-in Animations

```html
<div class="animate-spin">Spinning</div>
<div class="animate-pulse">Pulsing</div>
<div class="animate-bounce">Bouncing</div>
```

## Performance Optimization

### Bundle Size Optimization

Configure content sources for optimal purging:

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}",
    "./node_modules/@mycompany/ui-lib/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable JIT for faster builds
  jit: true,
}
```

### CSS Optimization Techniques

```html
<!-- Use content-visibility for offscreen content -->
<div class="content-visibility-auto">
  <div>Heavy content that's initially offscreen</div>
</div>

<!-- Optimize images with aspect-ratio -->
<img class="aspect-video w-full object-cover" src="video.jpg" alt="Video thumbnail" />

<!-- Use contain for paint optimization -->
<div class="contain-layout">
  Complex layout that doesn't affect outside elements
</div>
```

### Development Performance

```css
/* Enable CSS-first configuration in v4.1 */
@import "tailwindcss";

@theme {
  /* Define once, use everywhere */
  --color-brand: #3b82f6;
  --font-mono: "Fira Code", monospace;
}

/* Critical CSS for above-the-fold content */
@layer critical {
  .hero-title {
    @apply text-4xl md:text-6xl font-bold;
  }
}
```

## Accessibility Guidelines

### Focus Management

```html
<!-- Custom focus styles that meet WCAG AA -->
<button class="focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
  Accessible Button
</button>

<!-- Skip links for keyboard navigation -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4">
  Skip to main content
</a>
```

### Screen Reader Support

```html
<!-- Semantic buttons with ARIA labels -->
<button aria-label="Close dialog" class="p-2">
  <svg class="w-5 h-5" fill="none" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

<!-- Descriptive links -->
<a href="/docs" aria-describedby="docs-description">
  Documentation
</a>
<p id="docs-description" class="sr-only">
  Learn how to use our API and integration guides
</p>
```

### Color Contrast

```html
<!-- Ensure sufficient contrast ratios -->
<div class="bg-gray-900 text-white">
  High contrast text (WCAG AAA)
</div>

<div class="bg-blue-500 text-blue-100">
  Good contrast on colored backgrounds
</div>

<!-- Use contrast utilities for testing -->
<div class="bg-red-500 text-white contrast-more:bg-red-600 contrast-more:text-red-100">
  Adjusts for high contrast mode
</div>
```

### Motion Preferences

```html
<!-- Respect prefers-reduced-motion -->
<div class="transform transition-transform motion-reduce:transition-none">
  Doesn't animate when user prefers reduced motion
</div>

<!-- Conditional animations -->
<div class="animate-pulse motion-safe:hover:animate-spin">
  Only animates when motion is preferred
</div>
```

## Best Practices

1. **Mobile-First**: Start with mobile styles, add responsive prefixes for larger screens
2. **Consistent Spacing**: Use Tailwind's spacing scale (4, 8, 12, 16, etc.)
3. **Color Palette**: Stick to Tailwind's color system for consistency
4. **Component Extraction**: Extract repeated patterns into components
5. **Utility Composition**: Prefer utility classes over @apply for better maintainability
6. **Semantic HTML**: Use proper HTML elements with Tailwind classes
7. **Performance**: Configure content paths correctly for optimal CSS purging
8. **Accessibility**: Include focus styles, ARIA labels, and respect user preferences
9. **CSS-First Config**: Use @theme directive for v4.1+ instead of JavaScript config
10. **Custom Utilities**: Create reusable utilities with @utility for complex patterns

## Configuration

### CSS-First Configuration (v4.1+)

Use the `@theme` directive for CSS-based configuration:

```css
/* src/styles.css */
@import "tailwindcss";

@theme {
  /* Custom colors */
  --color-brand-50: #f0f9ff;
  --color-brand-500: #3b82f6;
  --color-brand-900: #1e3a8a;

  /* Custom fonts */
  --font-display: "Inter", system-ui, sans-serif;
  --font-mono: "Fira Code", monospace;

  /* Custom spacing */
  --spacing-128: 32rem;

  /* Custom animations */
  --animate-fade-in: fadeIn 0.5s ease-in-out;

  /* Custom breakpoints */
  --breakpoint-3xl: 1920px;
}

/* Define custom animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Custom utilities */
@utility content-auto {
  content-visibility: auto;
}
```

### JavaScript Configuration (Legacy)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
```

### Vite Integration (v4.1+)

```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

## Advanced v4.1 Features

### Native CSS Custom Properties

```html
<div class="bg-[var(--color-brand-500)] text-[var(--color-white)]">
  Using CSS custom properties directly
</div>
```

### Enhanced Arbitrary Values

```html
<!-- Complex grid with custom tracks -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  Responsive grid without custom CSS
</div>

<!-- Custom animation timing -->
<div class="animate-bounce ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
  Bounce with custom easing
</div>
```

### Container Queries

```html
<!-- Component that responds to its container size -->
<div class="@container">
  <div class="@lg:text-xl @2xl:text-2xl">
    Text size based on container, not viewport
  </div>
</div>
```

## Common Patterns with React/JSX

```tsx
import { useState } from 'react';

function Button({ 
  variant = 'primary', 
  size = 'md', 
  children 
}: {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}) {
  const baseClasses = 'font-semibold rounded transition';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
}
```

## References

- Tailwind CSS Docs: https://tailwindcss.com/docs
- Tailwind UI: https://tailwindui.com
- Tailwind Play: https://play.tailwindcss.com
- Headless UI: https://headlessui.com

---

---
name: kpi-dashboard-design
description: Design effective KPI dashboards with metrics selection, visualization best practices, and real-time monitoring patterns. Use when building business dashboards, selecting metrics, or designing data visualization layouts.
---

# KPI Dashboard Design

Comprehensive patterns for designing effective Key Performance Indicator (KPI) dashboards that drive business decisions.

## When to Use This Skill

- Designing executive dashboards
- Selecting meaningful KPIs
- Building real-time monitoring displays
- Creating department-specific metrics views
- Improving existing dashboard layouts
- Establishing metric governance

## Core Concepts

### 1. KPI Framework

| Level           | Focus            | Update Frequency  | Audience   |
| --------------- | ---------------- | ----------------- | ---------- |
| **Strategic**   | Long-term goals  | Monthly/Quarterly | Executives |
| **Tactical**    | Department goals | Weekly/Monthly    | Managers   |
| **Operational** | Day-to-day       | Real-time/Daily   | Teams      |

### 2. SMART KPIs

```
Specific: Clear definition
Measurable: Quantifiable
Achievable: Realistic targets
Relevant: Aligned to goals
Time-bound: Defined period
```

### 3. Dashboard Hierarchy

```
├── Executive Summary (1 page)
│   ├── 4-6 headline KPIs
│   ├── Trend indicators
│   └── Key alerts
├── Department Views
│   ├── Sales Dashboard
│   ├── Marketing Dashboard
│   ├── Operations Dashboard
│   └── Finance Dashboard
└── Detailed Drilldowns
    ├── Individual metrics
    └── Root cause analysis
```

## Common KPIs by Department

### Sales KPIs

```yaml
Revenue Metrics:
  - Monthly Recurring Revenue (MRR)
  - Annual Recurring Revenue (ARR)
  - Average Revenue Per User (ARPU)
  - Revenue Growth Rate

Pipeline Metrics:
  - Sales Pipeline Value
  - Win Rate
  - Average Deal Size
  - Sales Cycle Length

Activity Metrics:
  - Calls/Emails per Rep
  - Demos Scheduled
  - Proposals Sent
  - Close Rate
```

### Marketing KPIs

```yaml
Acquisition:
  - Cost Per Acquisition (CPA)
  - Customer Acquisition Cost (CAC)
  - Lead Volume
  - Marketing Qualified Leads (MQL)

Engagement:
  - Website Traffic
  - Conversion Rate
  - Email Open/Click Rate
  - Social Engagement

ROI:
  - Marketing ROI
  - Campaign Performance
  - Channel Attribution
  - CAC Payback Period
```

### Product KPIs

```yaml
Usage:
  - Daily/Monthly Active Users (DAU/MAU)
  - Session Duration
  - Feature Adoption Rate
  - Stickiness (DAU/MAU)

Quality:
  - Net Promoter Score (NPS)
  - Customer Satisfaction (CSAT)
  - Bug/Issue Count
  - Time to Resolution

Growth:
  - User Growth Rate
  - Activation Rate
  - Retention Rate
  - Churn Rate
```

### Finance KPIs

```yaml
Profitability:
  - Gross Margin
  - Net Profit Margin
  - EBITDA
  - Operating Margin

Liquidity:
  - Current Ratio
  - Quick Ratio
  - Cash Flow
  - Working Capital

Efficiency:
  - Revenue per Employee
  - Operating Expense Ratio
  - Days Sales Outstanding
  - Inventory Turnover
```

## Dashboard Layout Patterns

### Pattern 1: Executive Summary

```
┌─────────────────────────────────────────────────────────────┐
│  EXECUTIVE DASHBOARD                        [Date Range ▼]  │
├─────────────┬─────────────┬─────────────┬─────────────────┤
│   REVENUE   │   PROFIT    │  CUSTOMERS  │    NPS SCORE    │
│   $2.4M     │    $450K    │    12,450   │       72        │
│   ▲ 12%     │    ▲ 8%     │    ▲ 15%    │     ▲ 5pts     │
├─────────────┴─────────────┴─────────────┴─────────────────┤
│                                                             │
│  Revenue Trend                    │  Revenue by Product     │
│  ┌───────────────────────┐       │  ┌──────────────────┐   │
│  │    /\    /\          │       │  │ ████████ 45%     │   │
│  │   /  \  /  \    /\   │       │  │ ██████   32%     │   │
│  │  /    \/    \  /  \  │       │  │ ████     18%     │   │
│  │ /            \/    \ │       │  │ ██        5%     │   │
│  └───────────────────────┘       │  └──────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  🔴 Alert: Churn rate exceeded threshold (>5%)              │
│  🟡 Warning: Support ticket volume 20% above average        │
└─────────────────────────────────────────────────────────────┘
```

### Pattern 2: SaaS Metrics Dashboard

```
┌─────────────────────────────────────────────────────────────┐
│  SAAS METRICS                     Jan 2024  [Monthly ▼]     │
├──────────────────────┬──────────────────────────────────────┤
│  ┌────────────────┐  │  MRR GROWTH                          │
│  │      MRR       │  │  ┌────────────────────────────────┐  │
│  │    $125,000    │  │  │                          /──   │  │
│  │     ▲ 8%       │  │  │                    /────/      │  │
│  └────────────────┘  │  │              /────/            │  │
│  ┌────────────────┐  │  │        /────/                  │  │
│  │      ARR       │  │  │   /────/                       │  │
│  │   $1,500,000   │  │  └────────────────────────────────┘  │
│  │     ▲ 15%      │  │  J  F  M  A  M  J  J  A  S  O  N  D  │
│  └────────────────┘  │                                      │
├──────────────────────┼──────────────────────────────────────┤
│  UNIT ECONOMICS      │  COHORT RETENTION                    │
│                      │                                      │
│  CAC:     $450       │  Month 1: ████████████████████ 100%  │
│  LTV:     $2,700     │  Month 3: █████████████████    85%   │
│  LTV/CAC: 6.0x       │  Month 6: ████████████████     80%   │
│                      │  Month 12: ██████████████      72%   │
│  Payback: 4 months   │                                      │
├──────────────────────┴──────────────────────────────────────┤
│  CHURN ANALYSIS                                             │
│  ┌──────────┬──────────┬──────────┬──────────────────────┐ │
│  │ Gross    │ Net      │ Logo     │ Expansion            │ │
│  │ 4.2%     │ 1.8%     │ 3.1%     │ 2.4%                 │ │
│  └──────────┴──────────┴──────────┴──────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Pattern 3: Real-time Operations

```
┌─────────────────────────────────────────────────────────────┐
│  OPERATIONS CENTER                    Live ● Last: 10:42:15 │
├────────────────────────────┬────────────────────────────────┤
│  SYSTEM HEALTH             │  SERVICE STATUS                │
│  ┌──────────────────────┐  │                                │
│  │   CPU    MEM    DISK │  │  ● API Gateway      Healthy    │
│  │   45%    72%    58%  │  │  ● User Service     Healthy    │
│  │   ███    ████   ███  │  │  ● Payment Service  Degraded   │
│  │   ███    ████   ███  │  │  ● Database         Healthy    │
│  │   ███    ████   ███  │  │  ● Cache            Healthy    │
│  └──────────────────────┘  │                                │
├────────────────────────────┼────────────────────────────────┤
│  REQUEST THROUGHPUT        │  ERROR RATE                    │
│  ┌──────────────────────┐  │  ┌──────────────────────────┐  │
│  │ ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅ │  │  │ ▁▁▁▁▁▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁  │  │
│  └──────────────────────┘  │  └──────────────────────────┘  │
│  Current: 12,450 req/s     │  Current: 0.02%                │
│  Peak: 18,200 req/s        │  Threshold: 1.0%               │
├────────────────────────────┴────────────────────────────────┤
│  RECENT ALERTS                                              │
│  10:40  🟡 High latency on payment-service (p99 > 500ms)    │
│  10:35  🟢 Resolved: Database connection pool recovered     │
│  10:22  🔴 Payment service circuit breaker tripped          │
└─────────────────────────────────────────────────────────────┘
```

## Implementation Patterns

### SQL for KPI Calculations

```sql
-- Monthly Recurring Revenue (MRR)
WITH mrr_calculation AS (
    SELECT
        DATE_TRUNC('month', billing_date) AS month,
        SUM(
            CASE subscription_interval
                WHEN 'monthly' THEN amount
                WHEN 'yearly' THEN amount / 12
                WHEN 'quarterly' THEN amount / 3
            END
        ) AS mrr
    FROM subscriptions
    WHERE status = 'active'
    GROUP BY DATE_TRUNC('month', billing_date)
)
SELECT
    month,
    mrr,
    LAG(mrr) OVER (ORDER BY month) AS prev_mrr,
    (mrr - LAG(mrr) OVER (ORDER BY month)) / LAG(mrr) OVER (ORDER BY month) * 100 AS growth_pct
FROM mrr_calculation;

-- Cohort Retention
WITH cohorts AS (
    SELECT
        user_id,
        DATE_TRUNC('month', created_at) AS cohort_month
    FROM users
),
activity AS (
    SELECT
        user_id,
        DATE_TRUNC('month', event_date) AS activity_month
    FROM user_events
    WHERE event_type = 'active_session'
)
SELECT
    c.cohort_month,
    EXTRACT(MONTH FROM age(a.activity_month, c.cohort_month)) AS months_since_signup,
    COUNT(DISTINCT a.user_id) AS active_users,
    COUNT(DISTINCT a.user_id)::FLOAT / COUNT(DISTINCT c.user_id) * 100 AS retention_rate
FROM cohorts c
LEFT JOIN activity a ON c.user_id = a.user_id
    AND a.activity_month >= c.cohort_month
GROUP BY c.cohort_month, EXTRACT(MONTH FROM age(a.activity_month, c.cohort_month))
ORDER BY c.cohort_month, months_since_signup;

-- Customer Acquisition Cost (CAC)
SELECT
    DATE_TRUNC('month', acquired_date) AS month,
    SUM(marketing_spend) / NULLIF(COUNT(new_customers), 0) AS cac,
    SUM(marketing_spend) AS total_spend,
    COUNT(new_customers) AS customers_acquired
FROM (
    SELECT
        DATE_TRUNC('month', u.created_at) AS acquired_date,
        u.id AS new_customers,
        m.spend AS marketing_spend
    FROM users u
    JOIN marketing_spend m ON DATE_TRUNC('month', u.created_at) = m.month
    WHERE u.source = 'marketing'
) acquisition
GROUP BY DATE_TRUNC('month', acquired_date);
```

### Python Dashboard Code (Streamlit)

```python
import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

st.set_page_config(page_title="KPI Dashboard", layout="wide")

# Header with date filter
col1, col2 = st.columns([3, 1])
with col1:
    st.title("Executive Dashboard")
with col2:
    date_range = st.selectbox(
        "Period",
        ["Last 7 Days", "Last 30 Days", "Last Quarter", "YTD"]
    )

# KPI Cards
def metric_card(label, value, delta, prefix="", suffix=""):
    delta_color = "green" if delta >= 0 else "red"
    delta_arrow = "▲" if delta >= 0 else "▼"
    st.metric(
        label=label,
        value=f"{prefix}{value:,.0f}{suffix}",
        delta=f"{delta_arrow} {abs(delta):.1f}%"
    )

col1, col2, col3, col4 = st.columns(4)
with col1:
    metric_card("Revenue", 2400000, 12.5, prefix="$")
with col2:
    metric_card("Customers", 12450, 15.2)
with col3:
    metric_card("NPS Score", 72, 5.0)
with col4:
    metric_card("Churn Rate", 4.2, -0.8, suffix="%")

# Charts
col1, col2 = st.columns(2)

with col1:
    st.subheader("Revenue Trend")
    revenue_data = pd.DataFrame({
        'Month': pd.date_range('2024-01-01', periods=12, freq='M'),
        'Revenue': [180000, 195000, 210000, 225000, 240000, 255000,
                    270000, 285000, 300000, 315000, 330000, 345000]
    })
    fig = px.line(revenue_data, x='Month', y='Revenue',
                  line_shape='spline', markers=True)
    fig.update_layout(height=300)
    st.plotly_chart(fig, use_container_width=True)

with col2:
    st.subheader("Revenue by Product")
    product_data = pd.DataFrame({
        'Product': ['Enterprise', 'Professional', 'Starter', 'Other'],
        'Revenue': [45, 32, 18, 5]
    })
    fig = px.pie(product_data, values='Revenue', names='Product',
                 hole=0.4)
    fig.update_layout(height=300)
    st.plotly_chart(fig, use_container_width=True)

# Cohort Heatmap
st.subheader("Cohort Retention")
cohort_data = pd.DataFrame({
    'Cohort': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    'M0': [100, 100, 100, 100, 100],
    'M1': [85, 87, 84, 86, 88],
    'M2': [78, 80, 76, 79, None],
    'M3': [72, 74, 70, None, None],
    'M4': [68, 70, None, None, None],
})
fig = go.Figure(data=go.Heatmap(
    z=cohort_data.iloc[:, 1:].values,
    x=['M0', 'M1', 'M2', 'M3', 'M4'],
    y=cohort_data['Cohort'],
    colorscale='Blues',
    text=cohort_data.iloc[:, 1:].values,
    texttemplate='%{text}%',
    textfont={"size": 12},
))
fig.update_layout(height=250)
st.plotly_chart(fig, use_container_width=True)

# Alerts Section
st.subheader("Alerts")
alerts = [
    {"level": "error", "message": "Churn rate exceeded threshold (>5%)"},
    {"level": "warning", "message": "Support ticket volume 20% above average"},
]
for alert in alerts:
    if alert["level"] == "error":
        st.error(f"🔴 {alert['message']}")
    elif alert["level"] == "warning":
        st.warning(f"🟡 {alert['message']}")
```

## Best Practices

### Do's

- **Limit to 5-7 KPIs** - Focus on what matters
- **Show context** - Comparisons, trends, targets
- **Use consistent colors** - Red=bad, green=good
- **Enable drilldown** - From summary to detail
- **Update appropriately** - Match metric frequency

### Don'ts

- **Don't show vanity metrics** - Focus on actionable data
- **Don't overcrowd** - White space aids comprehension
- **Don't use 3D charts** - They distort perception
- **Don't hide methodology** - Document calculations
- **Don't ignore mobile** - Ensure responsive design

## Resources

- [Stephen Few's Dashboard Design](https://www.perceptualedge.com/articles/visual_business_intelligence/rules_for_using_color.pdf)
- [Edward Tufte's Principles](https://www.edwardtufte.com/tufte/)
- [Google Data Studio Gallery](https://datastudio.google.com/gallery)

---

---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.