import IconIncompleteCircleFill0Wght100Grad0Opsz48 from '../components/IncompleteCircleFill0Wght100Grad0Opsz48'
import IconIncompleteCircleFill0Wght200Grad0Opsz48 from '../components/IncompleteCircleFill0Wght200Grad0Opsz48'
import IconIncompleteCircleFill0Wght300Grad0Opsz48 from '../components/IncompleteCircleFill0Wght300Grad0Opsz48'
import IconIncompleteCircleFill0Wght400Grad0Opsz48 from '../components/IncompleteCircleFill0Wght400Grad0Opsz48'
import IconIncompleteCircleFill0Wght500Grad0Opsz48 from '../components/IncompleteCircleFill0Wght500Grad0Opsz48'
import IconIncompleteCircleFill0Wght600Grad0Opsz48 from '../components/IncompleteCircleFill0Wght600Grad0Opsz48'
import IconIncompleteCircleFill0Wght700Grad0Opsz48 from '../components/IncompleteCircleFill0Wght700Grad0Opsz48'
import IconIncompleteCircleFill1Wght100Grad0Opsz48 from '../components/IncompleteCircleFill1Wght100Grad0Opsz48'
import IconIncompleteCircleFill1Wght200Grad0Opsz48 from '../components/IncompleteCircleFill1Wght200Grad0Opsz48'
import IconIncompleteCircleFill1Wght300Grad0Opsz48 from '../components/IncompleteCircleFill1Wght300Grad0Opsz48'
import IconIncompleteCircleFill1Wght400Grad0Opsz48 from '../components/IncompleteCircleFill1Wght400Grad0Opsz48'
import IconIncompleteCircleFill1Wght500Grad0Opsz48 from '../components/IncompleteCircleFill1Wght500Grad0Opsz48'
import IconIncompleteCircleFill1Wght600Grad0Opsz48 from '../components/IncompleteCircleFill1Wght600Grad0Opsz48'
import IconIncompleteCircleFill1Wght700Grad0Opsz48 from '../components/IncompleteCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconIncompleteCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconIncompleteCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconIncompleteCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconIncompleteCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconIncompleteCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconIncompleteCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconIncompleteCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconIncompleteCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconIncompleteCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconIncompleteCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconIncompleteCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconIncompleteCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconIncompleteCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconIncompleteCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconIncompleteCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
