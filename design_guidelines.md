# Design Guidelines: EZ365 QuickBooks Dashboard Integration

## Design Approach

**Selected Approach:** Design System - Carbon Design System (optimized for data-heavy enterprise applications)

**Justification:** This financial comparison dashboard is utility-focused with information-dense content requiring clear data visualization, efficient scanning, and professional credibility. Carbon Design excels at enterprise data applications with strong support for charts, tables, and complex filtering interfaces.

**Key Design Principles:**
- Data clarity over decoration
- Efficient information hierarchy for financial data comparison
- Consistent layout patterns for scanning multiple similar charts
- Professional, trustworthy presentation of financial information

---

## Core Design Elements

### A. Typography System

**Primary Font:** Inter (via Google Fonts CDN)
**Secondary Font:** Roboto Mono (for numerical data)

**Type Scale:**
- **Page Titles:** 2xl (24px), font-semibold
- **Section Headers:** xl (20px), font-semibold
- **Chart Titles:** lg (18px), font-medium
- **Body Text:** base (16px), font-normal
- **Data Labels:** sm (14px), font-medium
- **Financial Numbers:** Roboto Mono, lg (18px) for primary values, base (16px) for secondary
- **Table Headers:** sm (14px), font-semibold, uppercase, tracking-wide
- **Captions/Metadata:** xs (12px), font-normal

**Text Hierarchy Rules:**
- Financial figures always use tabular numbers (font-variant-numeric: tabular-nums)
- Negative values differentiated through typography weight (font-semibold)
- Chart axis labels: xs (12px)
- Filter labels: sm (14px), font-medium

---

### B. Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, and 8

**Grid Structure:**
- **Container:** max-w-7xl with px-6 on mobile, px-8 on desktop
- **Section Spacing:** py-6 between major sections
- **Card Padding:** p-6 for chart containers
- **Component Spacing:** space-y-4 for vertical stacks, gap-6 for grid layouts

**Dashboard Layout:**
```
Sidebar (Fixed) | Main Content Area
    240px       |   Flexible (remaining width)
```

**Main Content Structure:**
- **Header Bar:** Sticky top navigation with breadcrumbs and page title (h-16)
- **Filter Bar:** Horizontal filters row (h-20) with flex layout, gap-4
- **Content Grid:** 
  - Single column on mobile
  - 2-column grid on tablet (md:grid-cols-2)
  - 2-column grid on desktop for charts (maintains readability)
  - Full-width for comparison tables and financial reports

**Chart Container Dimensions:**
- Standard chart height: h-80 (320px)
- Financial report sections: min-h-96
- Customer comparison table: adaptive height with max-h-screen scroll

---

### C. Component Library

#### 1. Navigation Integration
**Sidebar Menu Item:**
- Height: h-10
- Padding: px-4
- Icon size: w-5 h-5
- Text: sm font-medium
- Active state indicated through typography weight change

**Sub-menu Structure:**
- Indent nested items with pl-8
- QuickBooks Comparison as expandable menu item
- Sub-items: Expenses, Invoices, Customers, Payments, Financial Reports

#### 2. Filter Components
**Date Range Filter:**
- Button group layout with border radius on outer edges only
- Options: "Month" | "Year" | "Custom Range"
- Height: h-10, px-4 padding
- Active state through background change (not specified)

**Dropdown Filters:**
- Standard select height: h-10
- Min-width: min-w-48
- Chevron icon on right
- Label above: text-sm font-medium, mb-2

#### 3. Chart Components (Using Chart.js via CDN)
**Bar Chart Standard Configuration:**
- **Container:** Rounded corners (rounded-lg), border (border), padding (p-6)
- **Title Section:** mb-4, flex justify-between items-start
- **Chart Canvas:** Aspect ratio 16:9 on desktop, 4:3 on mobile
- **Legend:** Horizontal below chart, gap-4, text-sm
- **Axes:** 
  - Y-axis: Grid lines enabled, subtle
  - X-axis: Labels rotated -45deg if more than 6 items
  - Numbers formatted with thousand separators

**Comparison Bar Chart Specifics:**
- Two-bar groups: EZ365 | QuickBooks side-by-side
- Bar width: 0.6 of category width
- Gap between bars: 0.2
- Consistent bar order across all comparison charts

#### 4. Data Tables
**Customer Comparison Table:**
- **Header:** Sticky (sticky top-0), bg treatment, border-b-2
- **Row Height:** h-12 minimum
- **Padding:** px-4 py-3 in cells
- **Column Widths:** 
  - Customer Name: flex-1 (flexible)
  - ID/Code: w-32
  - Status: w-24
  - Difference Indicator: w-16
- **Difference Highlighting:** 
  - Icon in dedicated column (w-5 h-5)
  - Row gets subtle bg treatment when different
- **Pagination:** Bottom of table, h-12 bar with centered controls

**Financial Report Tables:**
- **Hierarchical Structure:** Indentation with pl-4, pl-8, pl-12 for nested items
- **Total Rows:** border-t-2, font-semibold
- **Amount Column:** Right-aligned (text-right), Roboto Mono
- **Category Column:** Left-aligned, max-w-md, truncate with tooltip
- **Section Headers:** bg treatment, font-semibold, py-3

#### 5. Cards & Containers
**Standard Dashboard Card:**
- Border radius: rounded-lg
- Border: border (1px)
- Padding: p-6
- Shadow: shadow-sm on hover
- Margin bottom: mb-6

**Report Card (Balance Sheet, Income Statement):**
- Same structure as standard card
- Additional header section: border-b pb-4 mb-4
- Header includes: Report title, date range, export button
- Body: py-4 for main content

#### 6. KPI Summary Cards (Above Charts)
**Metric Display:**
- Grid: grid-cols-2 md:grid-cols-4 gap-4
- Each card: p-4, rounded-lg, border
- Metric value: text-3xl font-bold, Roboto Mono
- Metric label: text-sm, mt-2
- Change indicator: text-xs, mt-1 (percentage/delta)

#### 7. Buttons & Actions
**Primary Actions:**
- Height: h-10
- Padding: px-6
- Border radius: rounded-md
- Text: sm font-medium

**Secondary Actions:**
- Same dimensions as primary
- Border: border-2

**Icon Buttons:**
- Square: w-10 h-10
- Icon size: w-5 h-5
- Export, refresh, settings icons

**Filter Clear/Apply:**
- Positioned at end of filter bar
- Gap-2 between buttons
- Apply is primary style, Clear is secondary

#### 8. Loading & Empty States
**Chart Loading:**
- Skeleton with pulse animation
- Height matches chart container (h-80)
- Maintains layout structure

**Empty State:**
- Centered content with icon (w-16 h-16)
- Message: text-base
- Sub-message: text-sm, mt-2
- Optional action button: mt-4

**Error State:**
- Alert box at top of chart container
- Icon + message layout
- Retry action button

---

### D. Icons
**Icon Library:** Heroicons (via CDN)
**Icon Sizes:**
- Navigation: w-5 h-5
- Buttons: w-5 h-5
- Table indicators: w-4 h-4
- Empty states: w-16 h-16

**Key Icons Needed:**
- Chart bars (for expenses, invoices, payments charts)
- Users (for customers section)
- Document text (for financial reports)
- Calendar (for date filters)
- Arrow trending up/down (for comparison indicators)
- Check circle / Exclamation circle (for status indicators)
- Download (for export actions)
- Refresh (for reload data)

---

## Page-Specific Layouts

### Comparison Charts Pages (Expenses, Invoices, Payments)
**Structure:**
1. **Page Header:** h-16, flex justify-between, items-center, border-b, px-8
2. **Filter Bar:** h-20, flex items-center, gap-4, px-8, border-b
3. **KPI Row:** px-8, py-6, grid-cols-4, gap-4
4. **Chart Section:** px-8, py-6
   - Chart card with full width
   - Legend below chart
5. **Data Table (Optional):** px-8, py-6, detailed breakdown

### Customer Comparison Page
**Structure:**
1. **Page Header:** Same as above
2. **Filter/Search Bar:** px-8, py-4, flex gap-4
   - Search input: flex-1
   - Filter dropdowns: min-w-48 each
3. **Summary Stats:** Grid of 3 cards showing total customers, matched, unmatched
4. **Comparison Table:** Full-width with sticky header, max-h for scroll

### Financial Reports Pages
**Structure:**
1. **Page Header:** With report title and date range selector
2. **Export Options:** Right-aligned button group (PDF, Excel)
3. **Report Card:** 
   - Header section with metadata
   - Multi-column layout for Balance Sheet (Assets | Liabilities & Equity)
   - Single column hierarchical for Income Statement
4. **Footer Notes:** text-xs, border-t, pt-4

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: ≥ 1024px (lg)

**Mobile Adaptations:**
- Sidebar collapses to hamburger menu
- Charts stack in single column
- Filter bar becomes vertical stack
- KPI cards: 2-column grid instead of 4
- Table: Horizontal scroll with fixed first column
- Font sizes reduce by one step (xl → lg, lg → base, etc.)

**Tablet Adaptations:**
- Charts: 2-column grid maintained
- KPI cards: 4-column grid
- Filters remain horizontal
- Table: Full width with all columns visible

---

## Animations
**Minimal Animation Strategy:**
- Chart data animation on load: 800ms ease-out
- Filter transitions: 200ms for selection changes
- Hover states: instant (no transition)
- Page transitions: None (instant navigation)
- Loading spinners: Standard rotation only

---

## Data Visualization Standards

**Chart Color Coding (Applied Later):**
- Two distinct treatments for EZ365 vs QuickBooks
- Consistent across all charts
- Accessible contrast ratios

**Number Formatting:**
- Currency: $X,XXX.XX format
- Percentages: XX.X% format
- Large numbers: Use K/M abbreviations for chart labels
- Negative values: Parentheses format for financial reports (X,XXX.XX)

**Chart Interaction:**
- Tooltips on hover showing exact values
- Click on legend to toggle data series
- No zoom or pan features (fixed view)

---

This design creates a professional, data-focused dashboard that prioritizes clarity and efficiency while maintaining consistency with the existing EZ365 interface.