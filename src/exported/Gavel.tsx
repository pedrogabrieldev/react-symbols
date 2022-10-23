import IconGavelFill0Wght100Grad0Opsz48 from '../components/GavelFill0Wght100Grad0Opsz48'
import IconGavelFill0Wght200Grad0Opsz48 from '../components/GavelFill0Wght200Grad0Opsz48'
import IconGavelFill0Wght300Grad0Opsz48 from '../components/GavelFill0Wght300Grad0Opsz48'
import IconGavelFill0Wght400Grad0Opsz48 from '../components/GavelFill0Wght400Grad0Opsz48'
import IconGavelFill0Wght500Grad0Opsz48 from '../components/GavelFill0Wght500Grad0Opsz48'
import IconGavelFill0Wght600Grad0Opsz48 from '../components/GavelFill0Wght600Grad0Opsz48'
import IconGavelFill0Wght700Grad0Opsz48 from '../components/GavelFill0Wght700Grad0Opsz48'
import IconGavelFill1Wght100Grad0Opsz48 from '../components/GavelFill1Wght100Grad0Opsz48'
import IconGavelFill1Wght200Grad0Opsz48 from '../components/GavelFill1Wght200Grad0Opsz48'
import IconGavelFill1Wght300Grad0Opsz48 from '../components/GavelFill1Wght300Grad0Opsz48'
import IconGavelFill1Wght400Grad0Opsz48 from '../components/GavelFill1Wght400Grad0Opsz48'
import IconGavelFill1Wght500Grad0Opsz48 from '../components/GavelFill1Wght500Grad0Opsz48'
import IconGavelFill1Wght600Grad0Opsz48 from '../components/GavelFill1Wght600Grad0Opsz48'
import IconGavelFill1Wght700Grad0Opsz48 from '../components/GavelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGavel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGavelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGavelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGavelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGavelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGavelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGavelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGavelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGavelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGavelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGavelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGavelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGavelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGavelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGavelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
