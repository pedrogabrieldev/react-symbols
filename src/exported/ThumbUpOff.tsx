import IconThumbUpOffFill0Wght100Grad0Opsz48 from '../components/ThumbUpOffFill0Wght100Grad0Opsz48'
import IconThumbUpOffFill0Wght200Grad0Opsz48 from '../components/ThumbUpOffFill0Wght200Grad0Opsz48'
import IconThumbUpOffFill0Wght300Grad0Opsz48 from '../components/ThumbUpOffFill0Wght300Grad0Opsz48'
import IconThumbUpOffFill0Wght400Grad0Opsz48 from '../components/ThumbUpOffFill0Wght400Grad0Opsz48'
import IconThumbUpOffFill0Wght500Grad0Opsz48 from '../components/ThumbUpOffFill0Wght500Grad0Opsz48'
import IconThumbUpOffFill0Wght600Grad0Opsz48 from '../components/ThumbUpOffFill0Wght600Grad0Opsz48'
import IconThumbUpOffFill0Wght700Grad0Opsz48 from '../components/ThumbUpOffFill0Wght700Grad0Opsz48'
import IconThumbUpOffFill1Wght100Grad0Opsz48 from '../components/ThumbUpOffFill1Wght100Grad0Opsz48'
import IconThumbUpOffFill1Wght200Grad0Opsz48 from '../components/ThumbUpOffFill1Wght200Grad0Opsz48'
import IconThumbUpOffFill1Wght300Grad0Opsz48 from '../components/ThumbUpOffFill1Wght300Grad0Opsz48'
import IconThumbUpOffFill1Wght400Grad0Opsz48 from '../components/ThumbUpOffFill1Wght400Grad0Opsz48'
import IconThumbUpOffFill1Wght500Grad0Opsz48 from '../components/ThumbUpOffFill1Wght500Grad0Opsz48'
import IconThumbUpOffFill1Wght600Grad0Opsz48 from '../components/ThumbUpOffFill1Wght600Grad0Opsz48'
import IconThumbUpOffFill1Wght700Grad0Opsz48 from '../components/ThumbUpOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconThumbUpOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconThumbUpOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconThumbUpOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconThumbUpOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconThumbUpOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconThumbUpOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconThumbUpOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconThumbUpOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconThumbUpOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconThumbUpOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconThumbUpOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconThumbUpOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconThumbUpOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconThumbUpOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconThumbUpOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
