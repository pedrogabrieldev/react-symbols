import IconRemoveFill0Wght100Grad0Opsz48 from '../components/RemoveFill0Wght100Grad0Opsz48'
import IconRemoveFill0Wght200Grad0Opsz48 from '../components/RemoveFill0Wght200Grad0Opsz48'
import IconRemoveFill0Wght300Grad0Opsz48 from '../components/RemoveFill0Wght300Grad0Opsz48'
import IconRemoveFill0Wght400Grad0Opsz48 from '../components/RemoveFill0Wght400Grad0Opsz48'
import IconRemoveFill0Wght500Grad0Opsz48 from '../components/RemoveFill0Wght500Grad0Opsz48'
import IconRemoveFill0Wght600Grad0Opsz48 from '../components/RemoveFill0Wght600Grad0Opsz48'
import IconRemoveFill0Wght700Grad0Opsz48 from '../components/RemoveFill0Wght700Grad0Opsz48'
import IconRemoveFill1Wght100Grad0Opsz48 from '../components/RemoveFill1Wght100Grad0Opsz48'
import IconRemoveFill1Wght200Grad0Opsz48 from '../components/RemoveFill1Wght200Grad0Opsz48'
import IconRemoveFill1Wght300Grad0Opsz48 from '../components/RemoveFill1Wght300Grad0Opsz48'
import IconRemoveFill1Wght400Grad0Opsz48 from '../components/RemoveFill1Wght400Grad0Opsz48'
import IconRemoveFill1Wght500Grad0Opsz48 from '../components/RemoveFill1Wght500Grad0Opsz48'
import IconRemoveFill1Wght600Grad0Opsz48 from '../components/RemoveFill1Wght600Grad0Opsz48'
import IconRemoveFill1Wght700Grad0Opsz48 from '../components/RemoveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRemove = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRemoveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRemoveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRemoveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRemoveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRemoveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRemoveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRemoveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRemoveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRemoveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRemoveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRemoveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRemoveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRemoveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRemoveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
