import IconNotListedLocationFill0Wght100Grad0Opsz48 from '../components/NotListedLocationFill0Wght100Grad0Opsz48'
import IconNotListedLocationFill0Wght200Grad0Opsz48 from '../components/NotListedLocationFill0Wght200Grad0Opsz48'
import IconNotListedLocationFill0Wght300Grad0Opsz48 from '../components/NotListedLocationFill0Wght300Grad0Opsz48'
import IconNotListedLocationFill0Wght400Grad0Opsz48 from '../components/NotListedLocationFill0Wght400Grad0Opsz48'
import IconNotListedLocationFill0Wght500Grad0Opsz48 from '../components/NotListedLocationFill0Wght500Grad0Opsz48'
import IconNotListedLocationFill0Wght600Grad0Opsz48 from '../components/NotListedLocationFill0Wght600Grad0Opsz48'
import IconNotListedLocationFill0Wght700Grad0Opsz48 from '../components/NotListedLocationFill0Wght700Grad0Opsz48'
import IconNotListedLocationFill1Wght100Grad0Opsz48 from '../components/NotListedLocationFill1Wght100Grad0Opsz48'
import IconNotListedLocationFill1Wght200Grad0Opsz48 from '../components/NotListedLocationFill1Wght200Grad0Opsz48'
import IconNotListedLocationFill1Wght300Grad0Opsz48 from '../components/NotListedLocationFill1Wght300Grad0Opsz48'
import IconNotListedLocationFill1Wght400Grad0Opsz48 from '../components/NotListedLocationFill1Wght400Grad0Opsz48'
import IconNotListedLocationFill1Wght500Grad0Opsz48 from '../components/NotListedLocationFill1Wght500Grad0Opsz48'
import IconNotListedLocationFill1Wght600Grad0Opsz48 from '../components/NotListedLocationFill1Wght600Grad0Opsz48'
import IconNotListedLocationFill1Wght700Grad0Opsz48 from '../components/NotListedLocationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotListedLocation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotListedLocationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotListedLocationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotListedLocationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotListedLocationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotListedLocationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotListedLocationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotListedLocationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotListedLocationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotListedLocationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotListedLocationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotListedLocationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotListedLocationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotListedLocationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotListedLocationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
