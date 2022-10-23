import IconRheumatologyFill0Wght100Grad0Opsz48 from '../components/RheumatologyFill0Wght100Grad0Opsz48'
import IconRheumatologyFill0Wght200Grad0Opsz48 from '../components/RheumatologyFill0Wght200Grad0Opsz48'
import IconRheumatologyFill0Wght300Grad0Opsz48 from '../components/RheumatologyFill0Wght300Grad0Opsz48'
import IconRheumatologyFill0Wght400Grad0Opsz48 from '../components/RheumatologyFill0Wght400Grad0Opsz48'
import IconRheumatologyFill0Wght500Grad0Opsz48 from '../components/RheumatologyFill0Wght500Grad0Opsz48'
import IconRheumatologyFill0Wght600Grad0Opsz48 from '../components/RheumatologyFill0Wght600Grad0Opsz48'
import IconRheumatologyFill0Wght700Grad0Opsz48 from '../components/RheumatologyFill0Wght700Grad0Opsz48'
import IconRheumatologyFill1Wght100Grad0Opsz48 from '../components/RheumatologyFill1Wght100Grad0Opsz48'
import IconRheumatologyFill1Wght200Grad0Opsz48 from '../components/RheumatologyFill1Wght200Grad0Opsz48'
import IconRheumatologyFill1Wght300Grad0Opsz48 from '../components/RheumatologyFill1Wght300Grad0Opsz48'
import IconRheumatologyFill1Wght400Grad0Opsz48 from '../components/RheumatologyFill1Wght400Grad0Opsz48'
import IconRheumatologyFill1Wght500Grad0Opsz48 from '../components/RheumatologyFill1Wght500Grad0Opsz48'
import IconRheumatologyFill1Wght600Grad0Opsz48 from '../components/RheumatologyFill1Wght600Grad0Opsz48'
import IconRheumatologyFill1Wght700Grad0Opsz48 from '../components/RheumatologyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRheumatology = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRheumatologyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRheumatologyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRheumatologyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRheumatologyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRheumatologyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRheumatologyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRheumatologyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRheumatologyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRheumatologyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRheumatologyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRheumatologyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRheumatologyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRheumatologyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRheumatologyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
