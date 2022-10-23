import IconScienceFill0Wght100Grad0Opsz48 from '../components/ScienceFill0Wght100Grad0Opsz48'
import IconScienceFill0Wght200Grad0Opsz48 from '../components/ScienceFill0Wght200Grad0Opsz48'
import IconScienceFill0Wght300Grad0Opsz48 from '../components/ScienceFill0Wght300Grad0Opsz48'
import IconScienceFill0Wght400Grad0Opsz48 from '../components/ScienceFill0Wght400Grad0Opsz48'
import IconScienceFill0Wght500Grad0Opsz48 from '../components/ScienceFill0Wght500Grad0Opsz48'
import IconScienceFill0Wght600Grad0Opsz48 from '../components/ScienceFill0Wght600Grad0Opsz48'
import IconScienceFill0Wght700Grad0Opsz48 from '../components/ScienceFill0Wght700Grad0Opsz48'
import IconScienceFill1Wght100Grad0Opsz48 from '../components/ScienceFill1Wght100Grad0Opsz48'
import IconScienceFill1Wght200Grad0Opsz48 from '../components/ScienceFill1Wght200Grad0Opsz48'
import IconScienceFill1Wght300Grad0Opsz48 from '../components/ScienceFill1Wght300Grad0Opsz48'
import IconScienceFill1Wght400Grad0Opsz48 from '../components/ScienceFill1Wght400Grad0Opsz48'
import IconScienceFill1Wght500Grad0Opsz48 from '../components/ScienceFill1Wght500Grad0Opsz48'
import IconScienceFill1Wght600Grad0Opsz48 from '../components/ScienceFill1Wght600Grad0Opsz48'
import IconScienceFill1Wght700Grad0Opsz48 from '../components/ScienceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScience = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScienceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScienceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScienceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScienceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScienceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScienceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScienceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScienceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScienceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScienceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScienceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScienceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScienceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScienceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
