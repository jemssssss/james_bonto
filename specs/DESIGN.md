# Design System Specification: The Engineering Editorial

## 1. Overview & Creative North Star
**Creative North Star: The Kinetic Blueprint**
This design system is not a template; it is a high-precision instrument. It rejects the "soft" trends of the modern web in favor of **Kinetic Blueprinting**—a style that celebrates engineering rigor through razor-sharp geometry, unapologetic contrast, and a "0px radius" philosophy. 

We are moving away from the generic "tech startup" look. By utilizing intentional asymmetry and a rigid adherence to a 90-degree aesthetic, we create a digital environment that feels like a high-end architectural plan or a premium terminal interface. The goal is to make the user feel they are looking at the *source code of a high-end brand.*

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep obsidian tones, punctuated by a vibrant, high-energy Turquoise.

### Surface Hierarchy & Nesting
To achieve depth without the "clutter" of shadows, we utilize **Tonal Layering**. The UI is a series of stacked plates. 
- **The Base:** `surface` (#131313) is your infinite canvas.
- **The Nesting:** When a section needs to feel distinct (e.g., a project case study or a code block), shift to `surface_container_low` (#1C1B1B). 
- **The Interactive Layer:** Use `surface_container_high` (#2A2A2A) for elements that sit "above" the content, such as navigation bars or floating menus.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate major sections. Boundaries must be defined by:
1. **Background shifts:** Moving from `surface` to `surface_container_low`.
2. **Hard Spacing:** Using the `16` (5.5rem) or `20` (7rem) spacing tokens to create a "void" that acts as a divider.

### The "Glass & Gradient" Rule
To add a "signature" polish, use a subtle **Turquoise-to-Void** gradient for primary CTAs and hero highlights (e.g., transitioning from `primary` #66FDEC to `primary_container` #40E0D0). For floating technical overlays, apply `surface_bright` with a 60% opacity and a `20px` backdrop-blur to create a "frosted obsidian" effect.

---

## 3. Typography
The typography strategy is a dialogue between human-centric Sans-serif and machine-precise labels.

*   **Editorial Authority (Inter):** Used for all `display`, `headline`, and `body` scales. In `display-lg`, use `letterSpacing: -0.02em` to create a dense, authoritative headline.
*   **Technical Precision (Space Grotesk):** Used for all `label` scales. These are your "Engineering Annotations." Use these for metadata, version numbers, and technical specs.
*   **Scale Usage:**
    *   **Display/Headline:** High contrast against the background using `on_surface`.
    *   **Body:** Use `body-md` for standard reading. Ensure paragraph widths never exceed 65 characters to maintain the "Editorial" feel.

---

## 4. Elevation & Depth
In this system, "Elevation" is a state of light and tone, not a physical drop shadow.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface_container_highest` (#353534) card on a `surface_container_low` (#1C1B1B) section. The delta in luminance creates the lift.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, it must be the "Obsidian Glow." Use a large blur (40px+) at 8% opacity using a color derived from `surface_container_lowest`. It should feel like a soft atmospheric occlusion, not a "drop shadow."
*   **The "Ghost Border" Fallback:** If a border is required for input fields or card containment, use the `outline_variant` token at **20% opacity**. It should be a suggestion of a line, only visible upon focused inspection.

---

## 5. Components

### Buttons
*   **Primary:** `on_primary` text on `primary_container` (#40E0D0) background. **0px border-radius.**
*   **Secondary:** `primary` text with a "Ghost Border" (outline-variant @ 20%). 
*   **Interaction:** On hover, the primary button should transition to `primary` (#66FDEC) with a subtle `2px` offset "echo" (a secondary border or shadow that appears slightly offset to the bottom-right).

### Input Fields
*   **Style:** Minimalist underline or full Ghost Border.
*   **State:** When focused, the border transforms into a 100% opaque `primary` (Turquoise) line. 
*   **Typography:** Labels must use `label-sm` (Space Grotesk) to reinforce the engineering aesthetic.

### Cards & Lists
*   **Rule:** **No Divider Lines.** 
*   Use `surface_container_low` as the card background against a `surface` page background.
*   Use `spacing-6` (2rem) as internal padding to give the content "breathing room" within the sharp geometry.

### Technical Chips
*   For tags or technology stacks, use `secondary_container` with `on_secondary_container` text. These should be small, rectangular blocks with `label-sm` typography.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use extreme whitespace. If a section feels crowded, double the spacing token (e.g., move from `10` to `20`).
*   **Do** align elements to a strict vertical axis. If a heading is indented, the body text and buttons must follow that exact alignment.
*   **Do** use `primary` (Turquoise) sparingly. It is a laser pointer, not a paint bucket. Use it to guide the eye to exactly one action per screen.

### Don’t:
*   **Don’t** use border-radius. Every corner in this system is 0px. No exceptions.
*   **Don’t** use standard "Grey" for text. Use `on_surface_variant` for secondary text to maintain the cool, turquoise-tinted depth.
*   **Don’t** use center alignment for long-form content. Use left-aligned "blueprint" layouts to maintain the engineering feel.
*   **Don’t** use 1px solid white borders. They break the premium dark-mode depth. Stick to the "Ghost Border" or Tonal Layering.

---

## 7. Interaction Notes
*   **Transitions:** All hover states should use a `cubic-bezier(0.16, 1, 0.3, 1)` timing function (the "Expo Out" feel). It should feel snappy and responsive, like a precision instrument.
*   **Micro-interactions:** When hovering over an engineering label (`label-md`), consider a slight character-shuffle effect or a subtle underline "draw-in" to emphasize the technical nature of the system.