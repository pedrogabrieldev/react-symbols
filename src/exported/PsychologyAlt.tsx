import IconPsychologyAltFill0Wght100Grad0Opsz48 from '../components/PsychologyAltFill0Wght100Grad0Opsz48'
import IconPsychologyAltFill0Wght200Grad0Opsz48 from '../components/PsychologyAltFill0Wght200Grad0Opsz48'
import IconPsychologyAltFill0Wght300Grad0Opsz48 from '../components/PsychologyAltFill0Wght300Grad0Opsz48'
import IconPsychologyAltFill0Wght400Grad0Opsz48 from '../components/PsychologyAltFill0Wght400Grad0Opsz48'
import IconPsychologyAltFill0Wght500Grad0Opsz48 from '../components/PsychologyAltFill0Wght500Grad0Opsz48'
import IconPsychologyAltFill0Wght600Grad0Opsz48 from '../components/PsychologyAltFill0Wght600Grad0Opsz48'
import IconPsychologyAltFill0Wght700Grad0Opsz48 from '../components/PsychologyAltFill0Wght700Grad0Opsz48'
import IconPsychologyAltFill1Wght100Grad0Opsz48 from '../components/PsychologyAltFill1Wght100Grad0Opsz48'
import IconPsychologyAltFill1Wght200Grad0Opsz48 from '../components/PsychologyAltFill1Wght200Grad0Opsz48'
import IconPsychologyAltFill1Wght300Grad0Opsz48 from '../components/PsychologyAltFill1Wght300Grad0Opsz48'
import IconPsychologyAltFill1Wght400Grad0Opsz48 from '../components/PsychologyAltFill1Wght400Grad0Opsz48'
import IconPsychologyAltFill1Wght500Grad0Opsz48 from '../components/PsychologyAltFill1Wght500Grad0Opsz48'
import IconPsychologyAltFill1Wght600Grad0Opsz48 from '../components/PsychologyAltFill1Wght600Grad0Opsz48'
import IconPsychologyAltFill1Wght700Grad0Opsz48 from '../components/PsychologyAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPsychologyAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPsychologyAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPsychologyAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPsychologyAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPsychologyAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPsychologyAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPsychologyAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPsychologyAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPsychologyAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPsychologyAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPsychologyAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPsychologyAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPsychologyAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPsychologyAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPsychologyAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
