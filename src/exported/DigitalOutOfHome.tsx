import IconDigitalOutOfHomeFill0Wght100Grad0Opsz48 from '../components/DigitalOutOfHomeFill0Wght100Grad0Opsz48'
import IconDigitalOutOfHomeFill0Wght200Grad0Opsz48 from '../components/DigitalOutOfHomeFill0Wght200Grad0Opsz48'
import IconDigitalOutOfHomeFill0Wght300Grad0Opsz48 from '../components/DigitalOutOfHomeFill0Wght300Grad0Opsz48'
import IconDigitalOutOfHomeFill0Wght400Grad0Opsz48 from '../components/DigitalOutOfHomeFill0Wght400Grad0Opsz48'
import IconDigitalOutOfHomeFill0Wght500Grad0Opsz48 from '../components/DigitalOutOfHomeFill0Wght500Grad0Opsz48'
import IconDigitalOutOfHomeFill0Wght600Grad0Opsz48 from '../components/DigitalOutOfHomeFill0Wght600Grad0Opsz48'
import IconDigitalOutOfHomeFill0Wght700Grad0Opsz48 from '../components/DigitalOutOfHomeFill0Wght700Grad0Opsz48'
import IconDigitalOutOfHomeFill1Wght100Grad0Opsz48 from '../components/DigitalOutOfHomeFill1Wght100Grad0Opsz48'
import IconDigitalOutOfHomeFill1Wght200Grad0Opsz48 from '../components/DigitalOutOfHomeFill1Wght200Grad0Opsz48'
import IconDigitalOutOfHomeFill1Wght300Grad0Opsz48 from '../components/DigitalOutOfHomeFill1Wght300Grad0Opsz48'
import IconDigitalOutOfHomeFill1Wght400Grad0Opsz48 from '../components/DigitalOutOfHomeFill1Wght400Grad0Opsz48'
import IconDigitalOutOfHomeFill1Wght500Grad0Opsz48 from '../components/DigitalOutOfHomeFill1Wght500Grad0Opsz48'
import IconDigitalOutOfHomeFill1Wght600Grad0Opsz48 from '../components/DigitalOutOfHomeFill1Wght600Grad0Opsz48'
import IconDigitalOutOfHomeFill1Wght700Grad0Opsz48 from '../components/DigitalOutOfHomeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDigitalOutOfHome = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDigitalOutOfHomeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDigitalOutOfHomeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDigitalOutOfHomeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDigitalOutOfHomeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDigitalOutOfHomeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDigitalOutOfHomeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDigitalOutOfHomeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDigitalOutOfHomeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDigitalOutOfHomeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDigitalOutOfHomeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDigitalOutOfHomeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDigitalOutOfHomeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDigitalOutOfHomeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDigitalOutOfHomeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
