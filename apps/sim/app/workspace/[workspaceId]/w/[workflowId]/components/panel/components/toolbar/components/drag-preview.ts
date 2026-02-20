/**
 * Information needed to create a drag preview for a toolbar item
 */
export interface DragItemInfo {
  name: string
  bgColor: string
  iconElement?: HTMLElement | null
}

/**
 * Creates a custom drag preview element that looks like a workflow block.
 * This provides a consistent visual experience when dragging items from the toolbar to the canvas.
 *
 * @param info - Information about the item being dragged
 * @returns HTML element to use as drag preview
 */
export function createDragPreview(info: DragItemInfo): HTMLElement {
  const preview = document.createElement('div')
  preview.style.cssText = `
    width: 260px;
    background: var(--surface-1);
    border-radius: 12px;
    padding: 9px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: system-ui, -apple-system, sans-serif;
    position: fixed;
    top: -500px;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 14px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06);
    border: 1px solid rgba(0,0,0,0.12);
  `

  const iconContainer = document.createElement('div')
  iconContainer.style.cssText = `
    width: 26px;
    height: 26px;
    border-radius: 8px;
    background: ${info.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px -1px rgba(0,0,0,0.1);
  `

  if (info.iconElement) {
    const clonedIcon = info.iconElement.cloneNode(true) as HTMLElement
    clonedIcon.style.width = '16px'
    clonedIcon.style.height = '16px'
    clonedIcon.style.color = 'white'
    clonedIcon.style.flexShrink = '0'
    iconContainer.appendChild(clonedIcon)
  }

  const text = document.createElement('span')
  text.textContent = info.name
  text.style.cssText = `
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `

  preview.appendChild(iconContainer)
  preview.appendChild(text)

  return preview
}
