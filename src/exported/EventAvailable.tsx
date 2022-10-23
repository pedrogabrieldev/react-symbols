import IconEventAvailableFill0Wght100Grad0Opsz48 from '../components/EventAvailableFill0Wght100Grad0Opsz48'
import IconEventAvailableFill0Wght200Grad0Opsz48 from '../components/EventAvailableFill0Wght200Grad0Opsz48'
import IconEventAvailableFill0Wght300Grad0Opsz48 from '../components/EventAvailableFill0Wght300Grad0Opsz48'
import IconEventAvailableFill0Wght400Grad0Opsz48 from '../components/EventAvailableFill0Wght400Grad0Opsz48'
import IconEventAvailableFill0Wght500Grad0Opsz48 from '../components/EventAvailableFill0Wght500Grad0Opsz48'
import IconEventAvailableFill0Wght600Grad0Opsz48 from '../components/EventAvailableFill0Wght600Grad0Opsz48'
import IconEventAvailableFill0Wght700Grad0Opsz48 from '../components/EventAvailableFill0Wght700Grad0Opsz48'
import IconEventAvailableFill1Wght100Grad0Opsz48 from '../components/EventAvailableFill1Wght100Grad0Opsz48'
import IconEventAvailableFill1Wght200Grad0Opsz48 from '../components/EventAvailableFill1Wght200Grad0Opsz48'
import IconEventAvailableFill1Wght300Grad0Opsz48 from '../components/EventAvailableFill1Wght300Grad0Opsz48'
import IconEventAvailableFill1Wght400Grad0Opsz48 from '../components/EventAvailableFill1Wght400Grad0Opsz48'
import IconEventAvailableFill1Wght500Grad0Opsz48 from '../components/EventAvailableFill1Wght500Grad0Opsz48'
import IconEventAvailableFill1Wght600Grad0Opsz48 from '../components/EventAvailableFill1Wght600Grad0Opsz48'
import IconEventAvailableFill1Wght700Grad0Opsz48 from '../components/EventAvailableFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEventAvailable = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEventAvailableFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEventAvailableFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEventAvailableFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEventAvailableFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEventAvailableFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEventAvailableFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEventAvailableFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEventAvailableFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEventAvailableFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEventAvailableFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEventAvailableFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEventAvailableFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEventAvailableFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEventAvailableFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
