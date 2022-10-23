import IconRepeatOneFill0Wght100Grad0Opsz48 from '../components/RepeatOneFill0Wght100Grad0Opsz48'
import IconRepeatOneFill0Wght200Grad0Opsz48 from '../components/RepeatOneFill0Wght200Grad0Opsz48'
import IconRepeatOneFill0Wght300Grad0Opsz48 from '../components/RepeatOneFill0Wght300Grad0Opsz48'
import IconRepeatOneFill0Wght400Grad0Opsz48 from '../components/RepeatOneFill0Wght400Grad0Opsz48'
import IconRepeatOneFill0Wght500Grad0Opsz48 from '../components/RepeatOneFill0Wght500Grad0Opsz48'
import IconRepeatOneFill0Wght600Grad0Opsz48 from '../components/RepeatOneFill0Wght600Grad0Opsz48'
import IconRepeatOneFill0Wght700Grad0Opsz48 from '../components/RepeatOneFill0Wght700Grad0Opsz48'
import IconRepeatOneFill1Wght100Grad0Opsz48 from '../components/RepeatOneFill1Wght100Grad0Opsz48'
import IconRepeatOneFill1Wght200Grad0Opsz48 from '../components/RepeatOneFill1Wght200Grad0Opsz48'
import IconRepeatOneFill1Wght300Grad0Opsz48 from '../components/RepeatOneFill1Wght300Grad0Opsz48'
import IconRepeatOneFill1Wght400Grad0Opsz48 from '../components/RepeatOneFill1Wght400Grad0Opsz48'
import IconRepeatOneFill1Wght500Grad0Opsz48 from '../components/RepeatOneFill1Wght500Grad0Opsz48'
import IconRepeatOneFill1Wght600Grad0Opsz48 from '../components/RepeatOneFill1Wght600Grad0Opsz48'
import IconRepeatOneFill1Wght700Grad0Opsz48 from '../components/RepeatOneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRepeatOne = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRepeatOneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRepeatOneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRepeatOneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRepeatOneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRepeatOneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRepeatOneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRepeatOneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRepeatOneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRepeatOneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRepeatOneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRepeatOneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRepeatOneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRepeatOneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRepeatOneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
