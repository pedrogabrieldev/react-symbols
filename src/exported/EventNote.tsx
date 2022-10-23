import IconEventNoteFill0Wght100Grad0Opsz48 from '../components/EventNoteFill0Wght100Grad0Opsz48'
import IconEventNoteFill0Wght200Grad0Opsz48 from '../components/EventNoteFill0Wght200Grad0Opsz48'
import IconEventNoteFill0Wght300Grad0Opsz48 from '../components/EventNoteFill0Wght300Grad0Opsz48'
import IconEventNoteFill0Wght400Grad0Opsz48 from '../components/EventNoteFill0Wght400Grad0Opsz48'
import IconEventNoteFill0Wght500Grad0Opsz48 from '../components/EventNoteFill0Wght500Grad0Opsz48'
import IconEventNoteFill0Wght600Grad0Opsz48 from '../components/EventNoteFill0Wght600Grad0Opsz48'
import IconEventNoteFill0Wght700Grad0Opsz48 from '../components/EventNoteFill0Wght700Grad0Opsz48'
import IconEventNoteFill1Wght100Grad0Opsz48 from '../components/EventNoteFill1Wght100Grad0Opsz48'
import IconEventNoteFill1Wght200Grad0Opsz48 from '../components/EventNoteFill1Wght200Grad0Opsz48'
import IconEventNoteFill1Wght300Grad0Opsz48 from '../components/EventNoteFill1Wght300Grad0Opsz48'
import IconEventNoteFill1Wght400Grad0Opsz48 from '../components/EventNoteFill1Wght400Grad0Opsz48'
import IconEventNoteFill1Wght500Grad0Opsz48 from '../components/EventNoteFill1Wght500Grad0Opsz48'
import IconEventNoteFill1Wght600Grad0Opsz48 from '../components/EventNoteFill1Wght600Grad0Opsz48'
import IconEventNoteFill1Wght700Grad0Opsz48 from '../components/EventNoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEventNote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEventNoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEventNoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEventNoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEventNoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEventNoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEventNoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEventNoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEventNoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEventNoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEventNoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEventNoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEventNoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEventNoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEventNoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
