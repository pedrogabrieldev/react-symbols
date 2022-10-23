import IconGardenCartFill0Wght100Grad0Opsz48 from '../components/GardenCartFill0Wght100Grad0Opsz48'
import IconGardenCartFill0Wght200Grad0Opsz48 from '../components/GardenCartFill0Wght200Grad0Opsz48'
import IconGardenCartFill0Wght300Grad0Opsz48 from '../components/GardenCartFill0Wght300Grad0Opsz48'
import IconGardenCartFill0Wght400Grad0Opsz48 from '../components/GardenCartFill0Wght400Grad0Opsz48'
import IconGardenCartFill0Wght500Grad0Opsz48 from '../components/GardenCartFill0Wght500Grad0Opsz48'
import IconGardenCartFill0Wght600Grad0Opsz48 from '../components/GardenCartFill0Wght600Grad0Opsz48'
import IconGardenCartFill0Wght700Grad0Opsz48 from '../components/GardenCartFill0Wght700Grad0Opsz48'
import IconGardenCartFill1Wght100Grad0Opsz48 from '../components/GardenCartFill1Wght100Grad0Opsz48'
import IconGardenCartFill1Wght200Grad0Opsz48 from '../components/GardenCartFill1Wght200Grad0Opsz48'
import IconGardenCartFill1Wght300Grad0Opsz48 from '../components/GardenCartFill1Wght300Grad0Opsz48'
import IconGardenCartFill1Wght400Grad0Opsz48 from '../components/GardenCartFill1Wght400Grad0Opsz48'
import IconGardenCartFill1Wght500Grad0Opsz48 from '../components/GardenCartFill1Wght500Grad0Opsz48'
import IconGardenCartFill1Wght600Grad0Opsz48 from '../components/GardenCartFill1Wght600Grad0Opsz48'
import IconGardenCartFill1Wght700Grad0Opsz48 from '../components/GardenCartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGardenCart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGardenCartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGardenCartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGardenCartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGardenCartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGardenCartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGardenCartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGardenCartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGardenCartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGardenCartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGardenCartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGardenCartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGardenCartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGardenCartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGardenCartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
