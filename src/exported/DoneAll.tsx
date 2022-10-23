import IconDoneAllFill0Wght100Grad0Opsz48 from '../components/DoneAllFill0Wght100Grad0Opsz48'
import IconDoneAllFill0Wght200Grad0Opsz48 from '../components/DoneAllFill0Wght200Grad0Opsz48'
import IconDoneAllFill0Wght300Grad0Opsz48 from '../components/DoneAllFill0Wght300Grad0Opsz48'
import IconDoneAllFill0Wght400Grad0Opsz48 from '../components/DoneAllFill0Wght400Grad0Opsz48'
import IconDoneAllFill0Wght500Grad0Opsz48 from '../components/DoneAllFill0Wght500Grad0Opsz48'
import IconDoneAllFill0Wght600Grad0Opsz48 from '../components/DoneAllFill0Wght600Grad0Opsz48'
import IconDoneAllFill0Wght700Grad0Opsz48 from '../components/DoneAllFill0Wght700Grad0Opsz48'
import IconDoneAllFill1Wght100Grad0Opsz48 from '../components/DoneAllFill1Wght100Grad0Opsz48'
import IconDoneAllFill1Wght200Grad0Opsz48 from '../components/DoneAllFill1Wght200Grad0Opsz48'
import IconDoneAllFill1Wght300Grad0Opsz48 from '../components/DoneAllFill1Wght300Grad0Opsz48'
import IconDoneAllFill1Wght400Grad0Opsz48 from '../components/DoneAllFill1Wght400Grad0Opsz48'
import IconDoneAllFill1Wght500Grad0Opsz48 from '../components/DoneAllFill1Wght500Grad0Opsz48'
import IconDoneAllFill1Wght600Grad0Opsz48 from '../components/DoneAllFill1Wght600Grad0Opsz48'
import IconDoneAllFill1Wght700Grad0Opsz48 from '../components/DoneAllFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoneAll = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoneAllFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoneAllFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoneAllFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoneAllFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoneAllFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoneAllFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoneAllFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoneAllFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoneAllFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoneAllFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoneAllFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoneAllFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoneAllFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoneAllFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
