import IconDoneOutlineFill0Wght100Grad0Opsz48 from '../components/DoneOutlineFill0Wght100Grad0Opsz48'
import IconDoneOutlineFill0Wght200Grad0Opsz48 from '../components/DoneOutlineFill0Wght200Grad0Opsz48'
import IconDoneOutlineFill0Wght300Grad0Opsz48 from '../components/DoneOutlineFill0Wght300Grad0Opsz48'
import IconDoneOutlineFill0Wght400Grad0Opsz48 from '../components/DoneOutlineFill0Wght400Grad0Opsz48'
import IconDoneOutlineFill0Wght500Grad0Opsz48 from '../components/DoneOutlineFill0Wght500Grad0Opsz48'
import IconDoneOutlineFill0Wght600Grad0Opsz48 from '../components/DoneOutlineFill0Wght600Grad0Opsz48'
import IconDoneOutlineFill0Wght700Grad0Opsz48 from '../components/DoneOutlineFill0Wght700Grad0Opsz48'
import IconDoneOutlineFill1Wght100Grad0Opsz48 from '../components/DoneOutlineFill1Wght100Grad0Opsz48'
import IconDoneOutlineFill1Wght200Grad0Opsz48 from '../components/DoneOutlineFill1Wght200Grad0Opsz48'
import IconDoneOutlineFill1Wght300Grad0Opsz48 from '../components/DoneOutlineFill1Wght300Grad0Opsz48'
import IconDoneOutlineFill1Wght400Grad0Opsz48 from '../components/DoneOutlineFill1Wght400Grad0Opsz48'
import IconDoneOutlineFill1Wght500Grad0Opsz48 from '../components/DoneOutlineFill1Wght500Grad0Opsz48'
import IconDoneOutlineFill1Wght600Grad0Opsz48 from '../components/DoneOutlineFill1Wght600Grad0Opsz48'
import IconDoneOutlineFill1Wght700Grad0Opsz48 from '../components/DoneOutlineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoneOutline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoneOutlineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoneOutlineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoneOutlineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoneOutlineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoneOutlineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoneOutlineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoneOutlineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoneOutlineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoneOutlineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoneOutlineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoneOutlineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoneOutlineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoneOutlineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoneOutlineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
