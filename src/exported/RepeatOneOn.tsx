import IconRepeatOneOnFill0Wght100Grad0Opsz48 from '../components/RepeatOneOnFill0Wght100Grad0Opsz48'
import IconRepeatOneOnFill0Wght200Grad0Opsz48 from '../components/RepeatOneOnFill0Wght200Grad0Opsz48'
import IconRepeatOneOnFill0Wght300Grad0Opsz48 from '../components/RepeatOneOnFill0Wght300Grad0Opsz48'
import IconRepeatOneOnFill0Wght400Grad0Opsz48 from '../components/RepeatOneOnFill0Wght400Grad0Opsz48'
import IconRepeatOneOnFill0Wght500Grad0Opsz48 from '../components/RepeatOneOnFill0Wght500Grad0Opsz48'
import IconRepeatOneOnFill0Wght600Grad0Opsz48 from '../components/RepeatOneOnFill0Wght600Grad0Opsz48'
import IconRepeatOneOnFill0Wght700Grad0Opsz48 from '../components/RepeatOneOnFill0Wght700Grad0Opsz48'
import IconRepeatOneOnFill1Wght100Grad0Opsz48 from '../components/RepeatOneOnFill1Wght100Grad0Opsz48'
import IconRepeatOneOnFill1Wght200Grad0Opsz48 from '../components/RepeatOneOnFill1Wght200Grad0Opsz48'
import IconRepeatOneOnFill1Wght300Grad0Opsz48 from '../components/RepeatOneOnFill1Wght300Grad0Opsz48'
import IconRepeatOneOnFill1Wght400Grad0Opsz48 from '../components/RepeatOneOnFill1Wght400Grad0Opsz48'
import IconRepeatOneOnFill1Wght500Grad0Opsz48 from '../components/RepeatOneOnFill1Wght500Grad0Opsz48'
import IconRepeatOneOnFill1Wght600Grad0Opsz48 from '../components/RepeatOneOnFill1Wght600Grad0Opsz48'
import IconRepeatOneOnFill1Wght700Grad0Opsz48 from '../components/RepeatOneOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRepeatOneOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRepeatOneOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRepeatOneOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRepeatOneOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRepeatOneOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRepeatOneOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRepeatOneOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRepeatOneOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRepeatOneOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRepeatOneOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRepeatOneOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRepeatOneOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRepeatOneOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRepeatOneOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRepeatOneOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
