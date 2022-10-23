import IconVapeFreeFill0Wght100Grad0Opsz48 from '../components/VapeFreeFill0Wght100Grad0Opsz48'
import IconVapeFreeFill0Wght200Grad0Opsz48 from '../components/VapeFreeFill0Wght200Grad0Opsz48'
import IconVapeFreeFill0Wght300Grad0Opsz48 from '../components/VapeFreeFill0Wght300Grad0Opsz48'
import IconVapeFreeFill0Wght400Grad0Opsz48 from '../components/VapeFreeFill0Wght400Grad0Opsz48'
import IconVapeFreeFill0Wght500Grad0Opsz48 from '../components/VapeFreeFill0Wght500Grad0Opsz48'
import IconVapeFreeFill0Wght600Grad0Opsz48 from '../components/VapeFreeFill0Wght600Grad0Opsz48'
import IconVapeFreeFill0Wght700Grad0Opsz48 from '../components/VapeFreeFill0Wght700Grad0Opsz48'
import IconVapeFreeFill1Wght100Grad0Opsz48 from '../components/VapeFreeFill1Wght100Grad0Opsz48'
import IconVapeFreeFill1Wght200Grad0Opsz48 from '../components/VapeFreeFill1Wght200Grad0Opsz48'
import IconVapeFreeFill1Wght300Grad0Opsz48 from '../components/VapeFreeFill1Wght300Grad0Opsz48'
import IconVapeFreeFill1Wght400Grad0Opsz48 from '../components/VapeFreeFill1Wght400Grad0Opsz48'
import IconVapeFreeFill1Wght500Grad0Opsz48 from '../components/VapeFreeFill1Wght500Grad0Opsz48'
import IconVapeFreeFill1Wght600Grad0Opsz48 from '../components/VapeFreeFill1Wght600Grad0Opsz48'
import IconVapeFreeFill1Wght700Grad0Opsz48 from '../components/VapeFreeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVapeFree = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVapeFreeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVapeFreeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVapeFreeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVapeFreeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVapeFreeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVapeFreeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVapeFreeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVapeFreeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVapeFreeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVapeFreeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVapeFreeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVapeFreeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVapeFreeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVapeFreeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
