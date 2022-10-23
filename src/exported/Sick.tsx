import IconSickFill0Wght100Grad0Opsz48 from '../components/SickFill0Wght100Grad0Opsz48'
import IconSickFill0Wght200Grad0Opsz48 from '../components/SickFill0Wght200Grad0Opsz48'
import IconSickFill0Wght300Grad0Opsz48 from '../components/SickFill0Wght300Grad0Opsz48'
import IconSickFill0Wght400Grad0Opsz48 from '../components/SickFill0Wght400Grad0Opsz48'
import IconSickFill0Wght500Grad0Opsz48 from '../components/SickFill0Wght500Grad0Opsz48'
import IconSickFill0Wght600Grad0Opsz48 from '../components/SickFill0Wght600Grad0Opsz48'
import IconSickFill0Wght700Grad0Opsz48 from '../components/SickFill0Wght700Grad0Opsz48'
import IconSickFill1Wght100Grad0Opsz48 from '../components/SickFill1Wght100Grad0Opsz48'
import IconSickFill1Wght200Grad0Opsz48 from '../components/SickFill1Wght200Grad0Opsz48'
import IconSickFill1Wght300Grad0Opsz48 from '../components/SickFill1Wght300Grad0Opsz48'
import IconSickFill1Wght400Grad0Opsz48 from '../components/SickFill1Wght400Grad0Opsz48'
import IconSickFill1Wght500Grad0Opsz48 from '../components/SickFill1Wght500Grad0Opsz48'
import IconSickFill1Wght600Grad0Opsz48 from '../components/SickFill1Wght600Grad0Opsz48'
import IconSickFill1Wght700Grad0Opsz48 from '../components/SickFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSick = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSickFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSickFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSickFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSickFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSickFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSickFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSickFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSickFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSickFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSickFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSickFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSickFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSickFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSickFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
