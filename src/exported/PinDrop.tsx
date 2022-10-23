import IconPinDropFill0Wght100Grad0Opsz48 from '../components/PinDropFill0Wght100Grad0Opsz48'
import IconPinDropFill0Wght200Grad0Opsz48 from '../components/PinDropFill0Wght200Grad0Opsz48'
import IconPinDropFill0Wght300Grad0Opsz48 from '../components/PinDropFill0Wght300Grad0Opsz48'
import IconPinDropFill0Wght400Grad0Opsz48 from '../components/PinDropFill0Wght400Grad0Opsz48'
import IconPinDropFill0Wght500Grad0Opsz48 from '../components/PinDropFill0Wght500Grad0Opsz48'
import IconPinDropFill0Wght600Grad0Opsz48 from '../components/PinDropFill0Wght600Grad0Opsz48'
import IconPinDropFill0Wght700Grad0Opsz48 from '../components/PinDropFill0Wght700Grad0Opsz48'
import IconPinDropFill1Wght100Grad0Opsz48 from '../components/PinDropFill1Wght100Grad0Opsz48'
import IconPinDropFill1Wght200Grad0Opsz48 from '../components/PinDropFill1Wght200Grad0Opsz48'
import IconPinDropFill1Wght300Grad0Opsz48 from '../components/PinDropFill1Wght300Grad0Opsz48'
import IconPinDropFill1Wght400Grad0Opsz48 from '../components/PinDropFill1Wght400Grad0Opsz48'
import IconPinDropFill1Wght500Grad0Opsz48 from '../components/PinDropFill1Wght500Grad0Opsz48'
import IconPinDropFill1Wght600Grad0Opsz48 from '../components/PinDropFill1Wght600Grad0Opsz48'
import IconPinDropFill1Wght700Grad0Opsz48 from '../components/PinDropFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPinDrop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPinDropFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPinDropFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPinDropFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPinDropFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPinDropFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPinDropFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPinDropFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPinDropFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPinDropFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPinDropFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPinDropFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPinDropFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPinDropFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPinDropFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
