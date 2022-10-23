import IconPersonPinCircleFill0Wght100Grad0Opsz48 from '../components/PersonPinCircleFill0Wght100Grad0Opsz48'
import IconPersonPinCircleFill0Wght200Grad0Opsz48 from '../components/PersonPinCircleFill0Wght200Grad0Opsz48'
import IconPersonPinCircleFill0Wght300Grad0Opsz48 from '../components/PersonPinCircleFill0Wght300Grad0Opsz48'
import IconPersonPinCircleFill0Wght400Grad0Opsz48 from '../components/PersonPinCircleFill0Wght400Grad0Opsz48'
import IconPersonPinCircleFill0Wght500Grad0Opsz48 from '../components/PersonPinCircleFill0Wght500Grad0Opsz48'
import IconPersonPinCircleFill0Wght600Grad0Opsz48 from '../components/PersonPinCircleFill0Wght600Grad0Opsz48'
import IconPersonPinCircleFill0Wght700Grad0Opsz48 from '../components/PersonPinCircleFill0Wght700Grad0Opsz48'
import IconPersonPinCircleFill1Wght100Grad0Opsz48 from '../components/PersonPinCircleFill1Wght100Grad0Opsz48'
import IconPersonPinCircleFill1Wght200Grad0Opsz48 from '../components/PersonPinCircleFill1Wght200Grad0Opsz48'
import IconPersonPinCircleFill1Wght300Grad0Opsz48 from '../components/PersonPinCircleFill1Wght300Grad0Opsz48'
import IconPersonPinCircleFill1Wght400Grad0Opsz48 from '../components/PersonPinCircleFill1Wght400Grad0Opsz48'
import IconPersonPinCircleFill1Wght500Grad0Opsz48 from '../components/PersonPinCircleFill1Wght500Grad0Opsz48'
import IconPersonPinCircleFill1Wght600Grad0Opsz48 from '../components/PersonPinCircleFill1Wght600Grad0Opsz48'
import IconPersonPinCircleFill1Wght700Grad0Opsz48 from '../components/PersonPinCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPersonPinCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonPinCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonPinCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonPinCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonPinCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonPinCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonPinCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonPinCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonPinCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonPinCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonPinCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonPinCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonPinCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonPinCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonPinCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
