import IconGasMeterFill0Wght100Grad0Opsz48 from '../components/GasMeterFill0Wght100Grad0Opsz48'
import IconGasMeterFill0Wght200Grad0Opsz48 from '../components/GasMeterFill0Wght200Grad0Opsz48'
import IconGasMeterFill0Wght300Grad0Opsz48 from '../components/GasMeterFill0Wght300Grad0Opsz48'
import IconGasMeterFill0Wght400Grad0Opsz48 from '../components/GasMeterFill0Wght400Grad0Opsz48'
import IconGasMeterFill0Wght500Grad0Opsz48 from '../components/GasMeterFill0Wght500Grad0Opsz48'
import IconGasMeterFill0Wght600Grad0Opsz48 from '../components/GasMeterFill0Wght600Grad0Opsz48'
import IconGasMeterFill0Wght700Grad0Opsz48 from '../components/GasMeterFill0Wght700Grad0Opsz48'
import IconGasMeterFill1Wght100Grad0Opsz48 from '../components/GasMeterFill1Wght100Grad0Opsz48'
import IconGasMeterFill1Wght200Grad0Opsz48 from '../components/GasMeterFill1Wght200Grad0Opsz48'
import IconGasMeterFill1Wght300Grad0Opsz48 from '../components/GasMeterFill1Wght300Grad0Opsz48'
import IconGasMeterFill1Wght400Grad0Opsz48 from '../components/GasMeterFill1Wght400Grad0Opsz48'
import IconGasMeterFill1Wght500Grad0Opsz48 from '../components/GasMeterFill1Wght500Grad0Opsz48'
import IconGasMeterFill1Wght600Grad0Opsz48 from '../components/GasMeterFill1Wght600Grad0Opsz48'
import IconGasMeterFill1Wght700Grad0Opsz48 from '../components/GasMeterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGasMeter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGasMeterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGasMeterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGasMeterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGasMeterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGasMeterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGasMeterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGasMeterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGasMeterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGasMeterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGasMeterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGasMeterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGasMeterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGasMeterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGasMeterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
