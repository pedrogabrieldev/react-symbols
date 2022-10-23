import IconBarcodeFill0Wght100Grad0Opsz48 from '../components/BarcodeFill0Wght100Grad0Opsz48'
import IconBarcodeFill0Wght200Grad0Opsz48 from '../components/BarcodeFill0Wght200Grad0Opsz48'
import IconBarcodeFill0Wght300Grad0Opsz48 from '../components/BarcodeFill0Wght300Grad0Opsz48'
import IconBarcodeFill0Wght400Grad0Opsz48 from '../components/BarcodeFill0Wght400Grad0Opsz48'
import IconBarcodeFill0Wght500Grad0Opsz48 from '../components/BarcodeFill0Wght500Grad0Opsz48'
import IconBarcodeFill0Wght600Grad0Opsz48 from '../components/BarcodeFill0Wght600Grad0Opsz48'
import IconBarcodeFill0Wght700Grad0Opsz48 from '../components/BarcodeFill0Wght700Grad0Opsz48'
import IconBarcodeFill1Wght100Grad0Opsz48 from '../components/BarcodeFill1Wght100Grad0Opsz48'
import IconBarcodeFill1Wght200Grad0Opsz48 from '../components/BarcodeFill1Wght200Grad0Opsz48'
import IconBarcodeFill1Wght300Grad0Opsz48 from '../components/BarcodeFill1Wght300Grad0Opsz48'
import IconBarcodeFill1Wght400Grad0Opsz48 from '../components/BarcodeFill1Wght400Grad0Opsz48'
import IconBarcodeFill1Wght500Grad0Opsz48 from '../components/BarcodeFill1Wght500Grad0Opsz48'
import IconBarcodeFill1Wght600Grad0Opsz48 from '../components/BarcodeFill1Wght600Grad0Opsz48'
import IconBarcodeFill1Wght700Grad0Opsz48 from '../components/BarcodeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBarcode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBarcodeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBarcodeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBarcodeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBarcodeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBarcodeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBarcodeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBarcodeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBarcodeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBarcodeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBarcodeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBarcodeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBarcodeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBarcodeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBarcodeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
