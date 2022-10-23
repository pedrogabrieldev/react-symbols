import IconRepeatOnFill0Wght100Grad0Opsz48 from '../components/RepeatOnFill0Wght100Grad0Opsz48'
import IconRepeatOnFill0Wght200Grad0Opsz48 from '../components/RepeatOnFill0Wght200Grad0Opsz48'
import IconRepeatOnFill0Wght300Grad0Opsz48 from '../components/RepeatOnFill0Wght300Grad0Opsz48'
import IconRepeatOnFill0Wght400Grad0Opsz48 from '../components/RepeatOnFill0Wght400Grad0Opsz48'
import IconRepeatOnFill0Wght500Grad0Opsz48 from '../components/RepeatOnFill0Wght500Grad0Opsz48'
import IconRepeatOnFill0Wght600Grad0Opsz48 from '../components/RepeatOnFill0Wght600Grad0Opsz48'
import IconRepeatOnFill0Wght700Grad0Opsz48 from '../components/RepeatOnFill0Wght700Grad0Opsz48'
import IconRepeatOnFill1Wght100Grad0Opsz48 from '../components/RepeatOnFill1Wght100Grad0Opsz48'
import IconRepeatOnFill1Wght200Grad0Opsz48 from '../components/RepeatOnFill1Wght200Grad0Opsz48'
import IconRepeatOnFill1Wght300Grad0Opsz48 from '../components/RepeatOnFill1Wght300Grad0Opsz48'
import IconRepeatOnFill1Wght400Grad0Opsz48 from '../components/RepeatOnFill1Wght400Grad0Opsz48'
import IconRepeatOnFill1Wght500Grad0Opsz48 from '../components/RepeatOnFill1Wght500Grad0Opsz48'
import IconRepeatOnFill1Wght600Grad0Opsz48 from '../components/RepeatOnFill1Wght600Grad0Opsz48'
import IconRepeatOnFill1Wght700Grad0Opsz48 from '../components/RepeatOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRepeatOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRepeatOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRepeatOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRepeatOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRepeatOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRepeatOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRepeatOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRepeatOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRepeatOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRepeatOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRepeatOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRepeatOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRepeatOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRepeatOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRepeatOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
