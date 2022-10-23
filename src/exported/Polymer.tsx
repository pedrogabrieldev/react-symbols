import IconPolymerFill0Wght100Grad0Opsz48 from '../components/PolymerFill0Wght100Grad0Opsz48'
import IconPolymerFill0Wght200Grad0Opsz48 from '../components/PolymerFill0Wght200Grad0Opsz48'
import IconPolymerFill0Wght300Grad0Opsz48 from '../components/PolymerFill0Wght300Grad0Opsz48'
import IconPolymerFill0Wght400Grad0Opsz48 from '../components/PolymerFill0Wght400Grad0Opsz48'
import IconPolymerFill0Wght500Grad0Opsz48 from '../components/PolymerFill0Wght500Grad0Opsz48'
import IconPolymerFill0Wght600Grad0Opsz48 from '../components/PolymerFill0Wght600Grad0Opsz48'
import IconPolymerFill0Wght700Grad0Opsz48 from '../components/PolymerFill0Wght700Grad0Opsz48'
import IconPolymerFill1Wght100Grad0Opsz48 from '../components/PolymerFill1Wght100Grad0Opsz48'
import IconPolymerFill1Wght200Grad0Opsz48 from '../components/PolymerFill1Wght200Grad0Opsz48'
import IconPolymerFill1Wght300Grad0Opsz48 from '../components/PolymerFill1Wght300Grad0Opsz48'
import IconPolymerFill1Wght400Grad0Opsz48 from '../components/PolymerFill1Wght400Grad0Opsz48'
import IconPolymerFill1Wght500Grad0Opsz48 from '../components/PolymerFill1Wght500Grad0Opsz48'
import IconPolymerFill1Wght600Grad0Opsz48 from '../components/PolymerFill1Wght600Grad0Opsz48'
import IconPolymerFill1Wght700Grad0Opsz48 from '../components/PolymerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPolymer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPolymerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPolymerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPolymerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPolymerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPolymerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPolymerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPolymerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPolymerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPolymerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPolymerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPolymerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPolymerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPolymerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPolymerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
