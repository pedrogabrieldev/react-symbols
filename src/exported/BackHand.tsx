import IconBackHandFill0Wght100Grad0Opsz48 from '../components/BackHandFill0Wght100Grad0Opsz48'
import IconBackHandFill0Wght200Grad0Opsz48 from '../components/BackHandFill0Wght200Grad0Opsz48'
import IconBackHandFill0Wght300Grad0Opsz48 from '../components/BackHandFill0Wght300Grad0Opsz48'
import IconBackHandFill0Wght400Grad0Opsz48 from '../components/BackHandFill0Wght400Grad0Opsz48'
import IconBackHandFill0Wght500Grad0Opsz48 from '../components/BackHandFill0Wght500Grad0Opsz48'
import IconBackHandFill0Wght600Grad0Opsz48 from '../components/BackHandFill0Wght600Grad0Opsz48'
import IconBackHandFill0Wght700Grad0Opsz48 from '../components/BackHandFill0Wght700Grad0Opsz48'
import IconBackHandFill1Wght100Grad0Opsz48 from '../components/BackHandFill1Wght100Grad0Opsz48'
import IconBackHandFill1Wght200Grad0Opsz48 from '../components/BackHandFill1Wght200Grad0Opsz48'
import IconBackHandFill1Wght300Grad0Opsz48 from '../components/BackHandFill1Wght300Grad0Opsz48'
import IconBackHandFill1Wght400Grad0Opsz48 from '../components/BackHandFill1Wght400Grad0Opsz48'
import IconBackHandFill1Wght500Grad0Opsz48 from '../components/BackHandFill1Wght500Grad0Opsz48'
import IconBackHandFill1Wght600Grad0Opsz48 from '../components/BackHandFill1Wght600Grad0Opsz48'
import IconBackHandFill1Wght700Grad0Opsz48 from '../components/BackHandFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBackHand = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBackHandFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBackHandFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBackHandFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBackHandFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBackHandFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBackHandFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBackHandFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBackHandFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBackHandFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBackHandFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBackHandFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBackHandFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBackHandFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBackHandFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
