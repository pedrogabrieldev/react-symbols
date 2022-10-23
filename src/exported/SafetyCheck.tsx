import IconSafetyCheckFill0Wght100Grad0Opsz48 from '../components/SafetyCheckFill0Wght100Grad0Opsz48'
import IconSafetyCheckFill0Wght200Grad0Opsz48 from '../components/SafetyCheckFill0Wght200Grad0Opsz48'
import IconSafetyCheckFill0Wght300Grad0Opsz48 from '../components/SafetyCheckFill0Wght300Grad0Opsz48'
import IconSafetyCheckFill0Wght400Grad0Opsz48 from '../components/SafetyCheckFill0Wght400Grad0Opsz48'
import IconSafetyCheckFill0Wght500Grad0Opsz48 from '../components/SafetyCheckFill0Wght500Grad0Opsz48'
import IconSafetyCheckFill0Wght600Grad0Opsz48 from '../components/SafetyCheckFill0Wght600Grad0Opsz48'
import IconSafetyCheckFill0Wght700Grad0Opsz48 from '../components/SafetyCheckFill0Wght700Grad0Opsz48'
import IconSafetyCheckFill1Wght100Grad0Opsz48 from '../components/SafetyCheckFill1Wght100Grad0Opsz48'
import IconSafetyCheckFill1Wght200Grad0Opsz48 from '../components/SafetyCheckFill1Wght200Grad0Opsz48'
import IconSafetyCheckFill1Wght300Grad0Opsz48 from '../components/SafetyCheckFill1Wght300Grad0Opsz48'
import IconSafetyCheckFill1Wght400Grad0Opsz48 from '../components/SafetyCheckFill1Wght400Grad0Opsz48'
import IconSafetyCheckFill1Wght500Grad0Opsz48 from '../components/SafetyCheckFill1Wght500Grad0Opsz48'
import IconSafetyCheckFill1Wght600Grad0Opsz48 from '../components/SafetyCheckFill1Wght600Grad0Opsz48'
import IconSafetyCheckFill1Wght700Grad0Opsz48 from '../components/SafetyCheckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSafetyCheck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSafetyCheckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSafetyCheckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSafetyCheckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSafetyCheckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSafetyCheckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSafetyCheckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSafetyCheckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSafetyCheckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSafetyCheckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSafetyCheckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSafetyCheckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSafetyCheckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSafetyCheckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSafetyCheckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
