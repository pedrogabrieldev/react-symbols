import IconPersonFill0Wght100Grad0Opsz48 from '../components/PersonFill0Wght100Grad0Opsz48'
import IconPersonFill0Wght200Grad0Opsz48 from '../components/PersonFill0Wght200Grad0Opsz48'
import IconPersonFill0Wght300Grad0Opsz48 from '../components/PersonFill0Wght300Grad0Opsz48'
import IconPersonFill0Wght400Grad0Opsz48 from '../components/PersonFill0Wght400Grad0Opsz48'
import IconPersonFill0Wght500Grad0Opsz48 from '../components/PersonFill0Wght500Grad0Opsz48'
import IconPersonFill0Wght600Grad0Opsz48 from '../components/PersonFill0Wght600Grad0Opsz48'
import IconPersonFill0Wght700Grad0Opsz48 from '../components/PersonFill0Wght700Grad0Opsz48'
import IconPersonFill1Wght100Grad0Opsz48 from '../components/PersonFill1Wght100Grad0Opsz48'
import IconPersonFill1Wght200Grad0Opsz48 from '../components/PersonFill1Wght200Grad0Opsz48'
import IconPersonFill1Wght300Grad0Opsz48 from '../components/PersonFill1Wght300Grad0Opsz48'
import IconPersonFill1Wght400Grad0Opsz48 from '../components/PersonFill1Wght400Grad0Opsz48'
import IconPersonFill1Wght500Grad0Opsz48 from '../components/PersonFill1Wght500Grad0Opsz48'
import IconPersonFill1Wght600Grad0Opsz48 from '../components/PersonFill1Wght600Grad0Opsz48'
import IconPersonFill1Wght700Grad0Opsz48 from '../components/PersonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPerson = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
