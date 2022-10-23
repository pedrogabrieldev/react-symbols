import IconSafetyDividerFill0Wght100Grad0Opsz48 from '../components/SafetyDividerFill0Wght100Grad0Opsz48'
import IconSafetyDividerFill0Wght200Grad0Opsz48 from '../components/SafetyDividerFill0Wght200Grad0Opsz48'
import IconSafetyDividerFill0Wght300Grad0Opsz48 from '../components/SafetyDividerFill0Wght300Grad0Opsz48'
import IconSafetyDividerFill0Wght400Grad0Opsz48 from '../components/SafetyDividerFill0Wght400Grad0Opsz48'
import IconSafetyDividerFill0Wght500Grad0Opsz48 from '../components/SafetyDividerFill0Wght500Grad0Opsz48'
import IconSafetyDividerFill0Wght600Grad0Opsz48 from '../components/SafetyDividerFill0Wght600Grad0Opsz48'
import IconSafetyDividerFill0Wght700Grad0Opsz48 from '../components/SafetyDividerFill0Wght700Grad0Opsz48'
import IconSafetyDividerFill1Wght100Grad0Opsz48 from '../components/SafetyDividerFill1Wght100Grad0Opsz48'
import IconSafetyDividerFill1Wght200Grad0Opsz48 from '../components/SafetyDividerFill1Wght200Grad0Opsz48'
import IconSafetyDividerFill1Wght300Grad0Opsz48 from '../components/SafetyDividerFill1Wght300Grad0Opsz48'
import IconSafetyDividerFill1Wght400Grad0Opsz48 from '../components/SafetyDividerFill1Wght400Grad0Opsz48'
import IconSafetyDividerFill1Wght500Grad0Opsz48 from '../components/SafetyDividerFill1Wght500Grad0Opsz48'
import IconSafetyDividerFill1Wght600Grad0Opsz48 from '../components/SafetyDividerFill1Wght600Grad0Opsz48'
import IconSafetyDividerFill1Wght700Grad0Opsz48 from '../components/SafetyDividerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSafetyDivider = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSafetyDividerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSafetyDividerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSafetyDividerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSafetyDividerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSafetyDividerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSafetyDividerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSafetyDividerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSafetyDividerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSafetyDividerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSafetyDividerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSafetyDividerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSafetyDividerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSafetyDividerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSafetyDividerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
