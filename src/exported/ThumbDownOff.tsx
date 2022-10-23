import IconThumbDownOffFill0Wght100Grad0Opsz48 from '../components/ThumbDownOffFill0Wght100Grad0Opsz48'
import IconThumbDownOffFill0Wght200Grad0Opsz48 from '../components/ThumbDownOffFill0Wght200Grad0Opsz48'
import IconThumbDownOffFill0Wght300Grad0Opsz48 from '../components/ThumbDownOffFill0Wght300Grad0Opsz48'
import IconThumbDownOffFill0Wght400Grad0Opsz48 from '../components/ThumbDownOffFill0Wght400Grad0Opsz48'
import IconThumbDownOffFill0Wght500Grad0Opsz48 from '../components/ThumbDownOffFill0Wght500Grad0Opsz48'
import IconThumbDownOffFill0Wght600Grad0Opsz48 from '../components/ThumbDownOffFill0Wght600Grad0Opsz48'
import IconThumbDownOffFill0Wght700Grad0Opsz48 from '../components/ThumbDownOffFill0Wght700Grad0Opsz48'
import IconThumbDownOffFill1Wght100Grad0Opsz48 from '../components/ThumbDownOffFill1Wght100Grad0Opsz48'
import IconThumbDownOffFill1Wght200Grad0Opsz48 from '../components/ThumbDownOffFill1Wght200Grad0Opsz48'
import IconThumbDownOffFill1Wght300Grad0Opsz48 from '../components/ThumbDownOffFill1Wght300Grad0Opsz48'
import IconThumbDownOffFill1Wght400Grad0Opsz48 from '../components/ThumbDownOffFill1Wght400Grad0Opsz48'
import IconThumbDownOffFill1Wght500Grad0Opsz48 from '../components/ThumbDownOffFill1Wght500Grad0Opsz48'
import IconThumbDownOffFill1Wght600Grad0Opsz48 from '../components/ThumbDownOffFill1Wght600Grad0Opsz48'
import IconThumbDownOffFill1Wght700Grad0Opsz48 from '../components/ThumbDownOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconThumbDownOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconThumbDownOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconThumbDownOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconThumbDownOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconThumbDownOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconThumbDownOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconThumbDownOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconThumbDownOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconThumbDownOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconThumbDownOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconThumbDownOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconThumbDownOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconThumbDownOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconThumbDownOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconThumbDownOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
