import IconRepeatFill0Wght100Grad0Opsz48 from '../components/RepeatFill0Wght100Grad0Opsz48'
import IconRepeatFill0Wght200Grad0Opsz48 from '../components/RepeatFill0Wght200Grad0Opsz48'
import IconRepeatFill0Wght300Grad0Opsz48 from '../components/RepeatFill0Wght300Grad0Opsz48'
import IconRepeatFill0Wght400Grad0Opsz48 from '../components/RepeatFill0Wght400Grad0Opsz48'
import IconRepeatFill0Wght500Grad0Opsz48 from '../components/RepeatFill0Wght500Grad0Opsz48'
import IconRepeatFill0Wght600Grad0Opsz48 from '../components/RepeatFill0Wght600Grad0Opsz48'
import IconRepeatFill0Wght700Grad0Opsz48 from '../components/RepeatFill0Wght700Grad0Opsz48'
import IconRepeatFill1Wght100Grad0Opsz48 from '../components/RepeatFill1Wght100Grad0Opsz48'
import IconRepeatFill1Wght200Grad0Opsz48 from '../components/RepeatFill1Wght200Grad0Opsz48'
import IconRepeatFill1Wght300Grad0Opsz48 from '../components/RepeatFill1Wght300Grad0Opsz48'
import IconRepeatFill1Wght400Grad0Opsz48 from '../components/RepeatFill1Wght400Grad0Opsz48'
import IconRepeatFill1Wght500Grad0Opsz48 from '../components/RepeatFill1Wght500Grad0Opsz48'
import IconRepeatFill1Wght600Grad0Opsz48 from '../components/RepeatFill1Wght600Grad0Opsz48'
import IconRepeatFill1Wght700Grad0Opsz48 from '../components/RepeatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRepeat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRepeatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRepeatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRepeatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRepeatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRepeatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRepeatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRepeatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRepeatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRepeatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRepeatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRepeatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRepeatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRepeatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRepeatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
