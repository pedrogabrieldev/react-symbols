import IconThumbUpFill0Wght100Grad0Opsz48 from '../components/ThumbUpFill0Wght100Grad0Opsz48'
import IconThumbUpFill0Wght200Grad0Opsz48 from '../components/ThumbUpFill0Wght200Grad0Opsz48'
import IconThumbUpFill0Wght300Grad0Opsz48 from '../components/ThumbUpFill0Wght300Grad0Opsz48'
import IconThumbUpFill0Wght400Grad0Opsz48 from '../components/ThumbUpFill0Wght400Grad0Opsz48'
import IconThumbUpFill0Wght500Grad0Opsz48 from '../components/ThumbUpFill0Wght500Grad0Opsz48'
import IconThumbUpFill0Wght600Grad0Opsz48 from '../components/ThumbUpFill0Wght600Grad0Opsz48'
import IconThumbUpFill0Wght700Grad0Opsz48 from '../components/ThumbUpFill0Wght700Grad0Opsz48'
import IconThumbUpFill1Wght100Grad0Opsz48 from '../components/ThumbUpFill1Wght100Grad0Opsz48'
import IconThumbUpFill1Wght200Grad0Opsz48 from '../components/ThumbUpFill1Wght200Grad0Opsz48'
import IconThumbUpFill1Wght300Grad0Opsz48 from '../components/ThumbUpFill1Wght300Grad0Opsz48'
import IconThumbUpFill1Wght400Grad0Opsz48 from '../components/ThumbUpFill1Wght400Grad0Opsz48'
import IconThumbUpFill1Wght500Grad0Opsz48 from '../components/ThumbUpFill1Wght500Grad0Opsz48'
import IconThumbUpFill1Wght600Grad0Opsz48 from '../components/ThumbUpFill1Wght600Grad0Opsz48'
import IconThumbUpFill1Wght700Grad0Opsz48 from '../components/ThumbUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconThumbUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconThumbUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconThumbUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconThumbUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconThumbUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconThumbUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconThumbUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconThumbUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconThumbUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconThumbUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconThumbUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconThumbUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconThumbUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconThumbUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconThumbUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
