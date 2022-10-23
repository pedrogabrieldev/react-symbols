import IconPsychologyFill0Wght100Grad0Opsz48 from '../components/PsychologyFill0Wght100Grad0Opsz48'
import IconPsychologyFill0Wght200Grad0Opsz48 from '../components/PsychologyFill0Wght200Grad0Opsz48'
import IconPsychologyFill0Wght300Grad0Opsz48 from '../components/PsychologyFill0Wght300Grad0Opsz48'
import IconPsychologyFill0Wght400Grad0Opsz48 from '../components/PsychologyFill0Wght400Grad0Opsz48'
import IconPsychologyFill0Wght500Grad0Opsz48 from '../components/PsychologyFill0Wght500Grad0Opsz48'
import IconPsychologyFill0Wght600Grad0Opsz48 from '../components/PsychologyFill0Wght600Grad0Opsz48'
import IconPsychologyFill0Wght700Grad0Opsz48 from '../components/PsychologyFill0Wght700Grad0Opsz48'
import IconPsychologyFill1Wght100Grad0Opsz48 from '../components/PsychologyFill1Wght100Grad0Opsz48'
import IconPsychologyFill1Wght200Grad0Opsz48 from '../components/PsychologyFill1Wght200Grad0Opsz48'
import IconPsychologyFill1Wght300Grad0Opsz48 from '../components/PsychologyFill1Wght300Grad0Opsz48'
import IconPsychologyFill1Wght400Grad0Opsz48 from '../components/PsychologyFill1Wght400Grad0Opsz48'
import IconPsychologyFill1Wght500Grad0Opsz48 from '../components/PsychologyFill1Wght500Grad0Opsz48'
import IconPsychologyFill1Wght600Grad0Opsz48 from '../components/PsychologyFill1Wght600Grad0Opsz48'
import IconPsychologyFill1Wght700Grad0Opsz48 from '../components/PsychologyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPsychology = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPsychologyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPsychologyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPsychologyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPsychologyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPsychologyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPsychologyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPsychologyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPsychologyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPsychologyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPsychologyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPsychologyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPsychologyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPsychologyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPsychologyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
