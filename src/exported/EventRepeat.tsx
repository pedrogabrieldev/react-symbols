import IconEventRepeatFill0Wght100Grad0Opsz48 from '../components/EventRepeatFill0Wght100Grad0Opsz48'
import IconEventRepeatFill0Wght200Grad0Opsz48 from '../components/EventRepeatFill0Wght200Grad0Opsz48'
import IconEventRepeatFill0Wght300Grad0Opsz48 from '../components/EventRepeatFill0Wght300Grad0Opsz48'
import IconEventRepeatFill0Wght400Grad0Opsz48 from '../components/EventRepeatFill0Wght400Grad0Opsz48'
import IconEventRepeatFill0Wght500Grad0Opsz48 from '../components/EventRepeatFill0Wght500Grad0Opsz48'
import IconEventRepeatFill0Wght600Grad0Opsz48 from '../components/EventRepeatFill0Wght600Grad0Opsz48'
import IconEventRepeatFill0Wght700Grad0Opsz48 from '../components/EventRepeatFill0Wght700Grad0Opsz48'
import IconEventRepeatFill1Wght100Grad0Opsz48 from '../components/EventRepeatFill1Wght100Grad0Opsz48'
import IconEventRepeatFill1Wght200Grad0Opsz48 from '../components/EventRepeatFill1Wght200Grad0Opsz48'
import IconEventRepeatFill1Wght300Grad0Opsz48 from '../components/EventRepeatFill1Wght300Grad0Opsz48'
import IconEventRepeatFill1Wght400Grad0Opsz48 from '../components/EventRepeatFill1Wght400Grad0Opsz48'
import IconEventRepeatFill1Wght500Grad0Opsz48 from '../components/EventRepeatFill1Wght500Grad0Opsz48'
import IconEventRepeatFill1Wght600Grad0Opsz48 from '../components/EventRepeatFill1Wght600Grad0Opsz48'
import IconEventRepeatFill1Wght700Grad0Opsz48 from '../components/EventRepeatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEventRepeat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEventRepeatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEventRepeatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEventRepeatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEventRepeatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEventRepeatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEventRepeatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEventRepeatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEventRepeatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEventRepeatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEventRepeatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEventRepeatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEventRepeatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEventRepeatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEventRepeatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
