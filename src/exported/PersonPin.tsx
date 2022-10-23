import IconPersonPinFill0Wght100Grad0Opsz48 from '../components/PersonPinFill0Wght100Grad0Opsz48'
import IconPersonPinFill0Wght200Grad0Opsz48 from '../components/PersonPinFill0Wght200Grad0Opsz48'
import IconPersonPinFill0Wght300Grad0Opsz48 from '../components/PersonPinFill0Wght300Grad0Opsz48'
import IconPersonPinFill0Wght400Grad0Opsz48 from '../components/PersonPinFill0Wght400Grad0Opsz48'
import IconPersonPinFill0Wght500Grad0Opsz48 from '../components/PersonPinFill0Wght500Grad0Opsz48'
import IconPersonPinFill0Wght600Grad0Opsz48 from '../components/PersonPinFill0Wght600Grad0Opsz48'
import IconPersonPinFill0Wght700Grad0Opsz48 from '../components/PersonPinFill0Wght700Grad0Opsz48'
import IconPersonPinFill1Wght100Grad0Opsz48 from '../components/PersonPinFill1Wght100Grad0Opsz48'
import IconPersonPinFill1Wght200Grad0Opsz48 from '../components/PersonPinFill1Wght200Grad0Opsz48'
import IconPersonPinFill1Wght300Grad0Opsz48 from '../components/PersonPinFill1Wght300Grad0Opsz48'
import IconPersonPinFill1Wght400Grad0Opsz48 from '../components/PersonPinFill1Wght400Grad0Opsz48'
import IconPersonPinFill1Wght500Grad0Opsz48 from '../components/PersonPinFill1Wght500Grad0Opsz48'
import IconPersonPinFill1Wght600Grad0Opsz48 from '../components/PersonPinFill1Wght600Grad0Opsz48'
import IconPersonPinFill1Wght700Grad0Opsz48 from '../components/PersonPinFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPersonPin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonPinFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonPinFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonPinFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonPinFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonPinFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonPinFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonPinFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonPinFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonPinFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonPinFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonPinFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonPinFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonPinFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonPinFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
