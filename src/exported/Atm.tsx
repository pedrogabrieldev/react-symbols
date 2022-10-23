import IconAtmFill0Wght100Grad0Opsz48 from '../components/AtmFill0Wght100Grad0Opsz48'
import IconAtmFill0Wght200Grad0Opsz48 from '../components/AtmFill0Wght200Grad0Opsz48'
import IconAtmFill0Wght300Grad0Opsz48 from '../components/AtmFill0Wght300Grad0Opsz48'
import IconAtmFill0Wght400Grad0Opsz48 from '../components/AtmFill0Wght400Grad0Opsz48'
import IconAtmFill0Wght500Grad0Opsz48 from '../components/AtmFill0Wght500Grad0Opsz48'
import IconAtmFill0Wght600Grad0Opsz48 from '../components/AtmFill0Wght600Grad0Opsz48'
import IconAtmFill0Wght700Grad0Opsz48 from '../components/AtmFill0Wght700Grad0Opsz48'
import IconAtmFill1Wght100Grad0Opsz48 from '../components/AtmFill1Wght100Grad0Opsz48'
import IconAtmFill1Wght200Grad0Opsz48 from '../components/AtmFill1Wght200Grad0Opsz48'
import IconAtmFill1Wght300Grad0Opsz48 from '../components/AtmFill1Wght300Grad0Opsz48'
import IconAtmFill1Wght400Grad0Opsz48 from '../components/AtmFill1Wght400Grad0Opsz48'
import IconAtmFill1Wght500Grad0Opsz48 from '../components/AtmFill1Wght500Grad0Opsz48'
import IconAtmFill1Wght600Grad0Opsz48 from '../components/AtmFill1Wght600Grad0Opsz48'
import IconAtmFill1Wght700Grad0Opsz48 from '../components/AtmFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAtm = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAtmFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAtmFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAtmFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAtmFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAtmFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAtmFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAtmFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAtmFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAtmFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAtmFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAtmFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAtmFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAtmFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAtmFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
