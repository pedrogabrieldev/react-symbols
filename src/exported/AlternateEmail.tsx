import IconAlternateEmailFill0Wght100Grad0Opsz48 from '../components/AlternateEmailFill0Wght100Grad0Opsz48'
import IconAlternateEmailFill0Wght200Grad0Opsz48 from '../components/AlternateEmailFill0Wght200Grad0Opsz48'
import IconAlternateEmailFill0Wght300Grad0Opsz48 from '../components/AlternateEmailFill0Wght300Grad0Opsz48'
import IconAlternateEmailFill0Wght400Grad0Opsz48 from '../components/AlternateEmailFill0Wght400Grad0Opsz48'
import IconAlternateEmailFill0Wght500Grad0Opsz48 from '../components/AlternateEmailFill0Wght500Grad0Opsz48'
import IconAlternateEmailFill0Wght600Grad0Opsz48 from '../components/AlternateEmailFill0Wght600Grad0Opsz48'
import IconAlternateEmailFill0Wght700Grad0Opsz48 from '../components/AlternateEmailFill0Wght700Grad0Opsz48'
import IconAlternateEmailFill1Wght100Grad0Opsz48 from '../components/AlternateEmailFill1Wght100Grad0Opsz48'
import IconAlternateEmailFill1Wght200Grad0Opsz48 from '../components/AlternateEmailFill1Wght200Grad0Opsz48'
import IconAlternateEmailFill1Wght300Grad0Opsz48 from '../components/AlternateEmailFill1Wght300Grad0Opsz48'
import IconAlternateEmailFill1Wght400Grad0Opsz48 from '../components/AlternateEmailFill1Wght400Grad0Opsz48'
import IconAlternateEmailFill1Wght500Grad0Opsz48 from '../components/AlternateEmailFill1Wght500Grad0Opsz48'
import IconAlternateEmailFill1Wght600Grad0Opsz48 from '../components/AlternateEmailFill1Wght600Grad0Opsz48'
import IconAlternateEmailFill1Wght700Grad0Opsz48 from '../components/AlternateEmailFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlternateEmail = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlternateEmailFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlternateEmailFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlternateEmailFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlternateEmailFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlternateEmailFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlternateEmailFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlternateEmailFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlternateEmailFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlternateEmailFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlternateEmailFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlternateEmailFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlternateEmailFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlternateEmailFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlternateEmailFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
