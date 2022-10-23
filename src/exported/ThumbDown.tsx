import IconThumbDownFill0Wght100Grad0Opsz48 from '../components/ThumbDownFill0Wght100Grad0Opsz48'
import IconThumbDownFill0Wght200Grad0Opsz48 from '../components/ThumbDownFill0Wght200Grad0Opsz48'
import IconThumbDownFill0Wght300Grad0Opsz48 from '../components/ThumbDownFill0Wght300Grad0Opsz48'
import IconThumbDownFill0Wght400Grad0Opsz48 from '../components/ThumbDownFill0Wght400Grad0Opsz48'
import IconThumbDownFill0Wght500Grad0Opsz48 from '../components/ThumbDownFill0Wght500Grad0Opsz48'
import IconThumbDownFill0Wght600Grad0Opsz48 from '../components/ThumbDownFill0Wght600Grad0Opsz48'
import IconThumbDownFill0Wght700Grad0Opsz48 from '../components/ThumbDownFill0Wght700Grad0Opsz48'
import IconThumbDownFill1Wght100Grad0Opsz48 from '../components/ThumbDownFill1Wght100Grad0Opsz48'
import IconThumbDownFill1Wght200Grad0Opsz48 from '../components/ThumbDownFill1Wght200Grad0Opsz48'
import IconThumbDownFill1Wght300Grad0Opsz48 from '../components/ThumbDownFill1Wght300Grad0Opsz48'
import IconThumbDownFill1Wght400Grad0Opsz48 from '../components/ThumbDownFill1Wght400Grad0Opsz48'
import IconThumbDownFill1Wght500Grad0Opsz48 from '../components/ThumbDownFill1Wght500Grad0Opsz48'
import IconThumbDownFill1Wght600Grad0Opsz48 from '../components/ThumbDownFill1Wght600Grad0Opsz48'
import IconThumbDownFill1Wght700Grad0Opsz48 from '../components/ThumbDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconThumbDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconThumbDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconThumbDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconThumbDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconThumbDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconThumbDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconThumbDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconThumbDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconThumbDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconThumbDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconThumbDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconThumbDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconThumbDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconThumbDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconThumbDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
