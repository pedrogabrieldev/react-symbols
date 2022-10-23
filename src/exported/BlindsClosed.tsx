import IconBlindsClosedFill0Wght100Grad0Opsz48 from '../components/BlindsClosedFill0Wght100Grad0Opsz48'
import IconBlindsClosedFill0Wght200Grad0Opsz48 from '../components/BlindsClosedFill0Wght200Grad0Opsz48'
import IconBlindsClosedFill0Wght300Grad0Opsz48 from '../components/BlindsClosedFill0Wght300Grad0Opsz48'
import IconBlindsClosedFill0Wght400Grad0Opsz48 from '../components/BlindsClosedFill0Wght400Grad0Opsz48'
import IconBlindsClosedFill0Wght500Grad0Opsz48 from '../components/BlindsClosedFill0Wght500Grad0Opsz48'
import IconBlindsClosedFill0Wght600Grad0Opsz48 from '../components/BlindsClosedFill0Wght600Grad0Opsz48'
import IconBlindsClosedFill0Wght700Grad0Opsz48 from '../components/BlindsClosedFill0Wght700Grad0Opsz48'
import IconBlindsClosedFill1Wght100Grad0Opsz48 from '../components/BlindsClosedFill1Wght100Grad0Opsz48'
import IconBlindsClosedFill1Wght200Grad0Opsz48 from '../components/BlindsClosedFill1Wght200Grad0Opsz48'
import IconBlindsClosedFill1Wght300Grad0Opsz48 from '../components/BlindsClosedFill1Wght300Grad0Opsz48'
import IconBlindsClosedFill1Wght400Grad0Opsz48 from '../components/BlindsClosedFill1Wght400Grad0Opsz48'
import IconBlindsClosedFill1Wght500Grad0Opsz48 from '../components/BlindsClosedFill1Wght500Grad0Opsz48'
import IconBlindsClosedFill1Wght600Grad0Opsz48 from '../components/BlindsClosedFill1Wght600Grad0Opsz48'
import IconBlindsClosedFill1Wght700Grad0Opsz48 from '../components/BlindsClosedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlindsClosed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlindsClosedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlindsClosedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlindsClosedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlindsClosedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlindsClosedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlindsClosedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlindsClosedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlindsClosedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlindsClosedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlindsClosedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlindsClosedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlindsClosedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlindsClosedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlindsClosedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
