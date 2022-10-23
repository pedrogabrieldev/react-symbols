import IconLaptopMacFill0Wght100Grad0Opsz48 from '../components/LaptopMacFill0Wght100Grad0Opsz48'
import IconLaptopMacFill0Wght200Grad0Opsz48 from '../components/LaptopMacFill0Wght200Grad0Opsz48'
import IconLaptopMacFill0Wght300Grad0Opsz48 from '../components/LaptopMacFill0Wght300Grad0Opsz48'
import IconLaptopMacFill0Wght400Grad0Opsz48 from '../components/LaptopMacFill0Wght400Grad0Opsz48'
import IconLaptopMacFill0Wght500Grad0Opsz48 from '../components/LaptopMacFill0Wght500Grad0Opsz48'
import IconLaptopMacFill0Wght600Grad0Opsz48 from '../components/LaptopMacFill0Wght600Grad0Opsz48'
import IconLaptopMacFill0Wght700Grad0Opsz48 from '../components/LaptopMacFill0Wght700Grad0Opsz48'
import IconLaptopMacFill1Wght100Grad0Opsz48 from '../components/LaptopMacFill1Wght100Grad0Opsz48'
import IconLaptopMacFill1Wght200Grad0Opsz48 from '../components/LaptopMacFill1Wght200Grad0Opsz48'
import IconLaptopMacFill1Wght300Grad0Opsz48 from '../components/LaptopMacFill1Wght300Grad0Opsz48'
import IconLaptopMacFill1Wght400Grad0Opsz48 from '../components/LaptopMacFill1Wght400Grad0Opsz48'
import IconLaptopMacFill1Wght500Grad0Opsz48 from '../components/LaptopMacFill1Wght500Grad0Opsz48'
import IconLaptopMacFill1Wght600Grad0Opsz48 from '../components/LaptopMacFill1Wght600Grad0Opsz48'
import IconLaptopMacFill1Wght700Grad0Opsz48 from '../components/LaptopMacFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLaptopMac = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLaptopMacFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLaptopMacFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLaptopMacFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLaptopMacFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLaptopMacFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLaptopMacFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLaptopMacFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLaptopMacFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLaptopMacFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLaptopMacFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLaptopMacFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLaptopMacFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLaptopMacFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLaptopMacFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
