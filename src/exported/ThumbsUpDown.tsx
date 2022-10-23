import IconThumbsUpDownFill0Wght100Grad0Opsz48 from '../components/ThumbsUpDownFill0Wght100Grad0Opsz48'
import IconThumbsUpDownFill0Wght200Grad0Opsz48 from '../components/ThumbsUpDownFill0Wght200Grad0Opsz48'
import IconThumbsUpDownFill0Wght300Grad0Opsz48 from '../components/ThumbsUpDownFill0Wght300Grad0Opsz48'
import IconThumbsUpDownFill0Wght400Grad0Opsz48 from '../components/ThumbsUpDownFill0Wght400Grad0Opsz48'
import IconThumbsUpDownFill0Wght500Grad0Opsz48 from '../components/ThumbsUpDownFill0Wght500Grad0Opsz48'
import IconThumbsUpDownFill0Wght600Grad0Opsz48 from '../components/ThumbsUpDownFill0Wght600Grad0Opsz48'
import IconThumbsUpDownFill0Wght700Grad0Opsz48 from '../components/ThumbsUpDownFill0Wght700Grad0Opsz48'
import IconThumbsUpDownFill1Wght100Grad0Opsz48 from '../components/ThumbsUpDownFill1Wght100Grad0Opsz48'
import IconThumbsUpDownFill1Wght200Grad0Opsz48 from '../components/ThumbsUpDownFill1Wght200Grad0Opsz48'
import IconThumbsUpDownFill1Wght300Grad0Opsz48 from '../components/ThumbsUpDownFill1Wght300Grad0Opsz48'
import IconThumbsUpDownFill1Wght400Grad0Opsz48 from '../components/ThumbsUpDownFill1Wght400Grad0Opsz48'
import IconThumbsUpDownFill1Wght500Grad0Opsz48 from '../components/ThumbsUpDownFill1Wght500Grad0Opsz48'
import IconThumbsUpDownFill1Wght600Grad0Opsz48 from '../components/ThumbsUpDownFill1Wght600Grad0Opsz48'
import IconThumbsUpDownFill1Wght700Grad0Opsz48 from '../components/ThumbsUpDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconThumbsUpDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconThumbsUpDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconThumbsUpDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconThumbsUpDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconThumbsUpDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconThumbsUpDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconThumbsUpDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconThumbsUpDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconThumbsUpDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconThumbsUpDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconThumbsUpDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconThumbsUpDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconThumbsUpDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconThumbsUpDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconThumbsUpDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
