import IconAccessibilityFill0Wght100Grad0Opsz48 from '../components/AccessibilityFill0Wght100Grad0Opsz48'
import IconAccessibilityFill0Wght200Grad0Opsz48 from '../components/AccessibilityFill0Wght200Grad0Opsz48'
import IconAccessibilityFill0Wght300Grad0Opsz48 from '../components/AccessibilityFill0Wght300Grad0Opsz48'
import IconAccessibilityFill0Wght400Grad0Opsz48 from '../components/AccessibilityFill0Wght400Grad0Opsz48'
import IconAccessibilityFill0Wght500Grad0Opsz48 from '../components/AccessibilityFill0Wght500Grad0Opsz48'
import IconAccessibilityFill0Wght600Grad0Opsz48 from '../components/AccessibilityFill0Wght600Grad0Opsz48'
import IconAccessibilityFill0Wght700Grad0Opsz48 from '../components/AccessibilityFill0Wght700Grad0Opsz48'
import IconAccessibilityFill1Wght100Grad0Opsz48 from '../components/AccessibilityFill1Wght100Grad0Opsz48'
import IconAccessibilityFill1Wght200Grad0Opsz48 from '../components/AccessibilityFill1Wght200Grad0Opsz48'
import IconAccessibilityFill1Wght300Grad0Opsz48 from '../components/AccessibilityFill1Wght300Grad0Opsz48'
import IconAccessibilityFill1Wght400Grad0Opsz48 from '../components/AccessibilityFill1Wght400Grad0Opsz48'
import IconAccessibilityFill1Wght500Grad0Opsz48 from '../components/AccessibilityFill1Wght500Grad0Opsz48'
import IconAccessibilityFill1Wght600Grad0Opsz48 from '../components/AccessibilityFill1Wght600Grad0Opsz48'
import IconAccessibilityFill1Wght700Grad0Opsz48 from '../components/AccessibilityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAccessibility = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAccessibilityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAccessibilityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAccessibilityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAccessibilityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAccessibilityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAccessibilityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAccessibilityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAccessibilityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAccessibilityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAccessibilityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAccessibilityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAccessibilityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAccessibilityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAccessibilityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
