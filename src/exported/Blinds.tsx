import IconBlindsFill0Wght100Grad0Opsz48 from '../components/BlindsFill0Wght100Grad0Opsz48'
import IconBlindsFill0Wght200Grad0Opsz48 from '../components/BlindsFill0Wght200Grad0Opsz48'
import IconBlindsFill0Wght300Grad0Opsz48 from '../components/BlindsFill0Wght300Grad0Opsz48'
import IconBlindsFill0Wght400Grad0Opsz48 from '../components/BlindsFill0Wght400Grad0Opsz48'
import IconBlindsFill0Wght500Grad0Opsz48 from '../components/BlindsFill0Wght500Grad0Opsz48'
import IconBlindsFill0Wght600Grad0Opsz48 from '../components/BlindsFill0Wght600Grad0Opsz48'
import IconBlindsFill0Wght700Grad0Opsz48 from '../components/BlindsFill0Wght700Grad0Opsz48'
import IconBlindsFill1Wght100Grad0Opsz48 from '../components/BlindsFill1Wght100Grad0Opsz48'
import IconBlindsFill1Wght200Grad0Opsz48 from '../components/BlindsFill1Wght200Grad0Opsz48'
import IconBlindsFill1Wght300Grad0Opsz48 from '../components/BlindsFill1Wght300Grad0Opsz48'
import IconBlindsFill1Wght400Grad0Opsz48 from '../components/BlindsFill1Wght400Grad0Opsz48'
import IconBlindsFill1Wght500Grad0Opsz48 from '../components/BlindsFill1Wght500Grad0Opsz48'
import IconBlindsFill1Wght600Grad0Opsz48 from '../components/BlindsFill1Wght600Grad0Opsz48'
import IconBlindsFill1Wght700Grad0Opsz48 from '../components/BlindsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlinds = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlindsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlindsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlindsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlindsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlindsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlindsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlindsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlindsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlindsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlindsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlindsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlindsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlindsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlindsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
