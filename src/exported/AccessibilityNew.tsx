import IconAccessibilityNewFill0Wght100Grad0Opsz48 from '../components/AccessibilityNewFill0Wght100Grad0Opsz48'
import IconAccessibilityNewFill0Wght200Grad0Opsz48 from '../components/AccessibilityNewFill0Wght200Grad0Opsz48'
import IconAccessibilityNewFill0Wght300Grad0Opsz48 from '../components/AccessibilityNewFill0Wght300Grad0Opsz48'
import IconAccessibilityNewFill0Wght400Grad0Opsz48 from '../components/AccessibilityNewFill0Wght400Grad0Opsz48'
import IconAccessibilityNewFill0Wght500Grad0Opsz48 from '../components/AccessibilityNewFill0Wght500Grad0Opsz48'
import IconAccessibilityNewFill0Wght600Grad0Opsz48 from '../components/AccessibilityNewFill0Wght600Grad0Opsz48'
import IconAccessibilityNewFill0Wght700Grad0Opsz48 from '../components/AccessibilityNewFill0Wght700Grad0Opsz48'
import IconAccessibilityNewFill1Wght100Grad0Opsz48 from '../components/AccessibilityNewFill1Wght100Grad0Opsz48'
import IconAccessibilityNewFill1Wght200Grad0Opsz48 from '../components/AccessibilityNewFill1Wght200Grad0Opsz48'
import IconAccessibilityNewFill1Wght300Grad0Opsz48 from '../components/AccessibilityNewFill1Wght300Grad0Opsz48'
import IconAccessibilityNewFill1Wght400Grad0Opsz48 from '../components/AccessibilityNewFill1Wght400Grad0Opsz48'
import IconAccessibilityNewFill1Wght500Grad0Opsz48 from '../components/AccessibilityNewFill1Wght500Grad0Opsz48'
import IconAccessibilityNewFill1Wght600Grad0Opsz48 from '../components/AccessibilityNewFill1Wght600Grad0Opsz48'
import IconAccessibilityNewFill1Wght700Grad0Opsz48 from '../components/AccessibilityNewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAccessibilityNew = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAccessibilityNewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAccessibilityNewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAccessibilityNewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAccessibilityNewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAccessibilityNewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAccessibilityNewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAccessibilityNewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAccessibilityNewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAccessibilityNewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAccessibilityNewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAccessibilityNewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAccessibilityNewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAccessibilityNewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAccessibilityNewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
