import IconGarageHomeFill0Wght100Grad0Opsz48 from '../components/GarageHomeFill0Wght100Grad0Opsz48'
import IconGarageHomeFill0Wght200Grad0Opsz48 from '../components/GarageHomeFill0Wght200Grad0Opsz48'
import IconGarageHomeFill0Wght300Grad0Opsz48 from '../components/GarageHomeFill0Wght300Grad0Opsz48'
import IconGarageHomeFill0Wght400Grad0Opsz48 from '../components/GarageHomeFill0Wght400Grad0Opsz48'
import IconGarageHomeFill0Wght500Grad0Opsz48 from '../components/GarageHomeFill0Wght500Grad0Opsz48'
import IconGarageHomeFill0Wght600Grad0Opsz48 from '../components/GarageHomeFill0Wght600Grad0Opsz48'
import IconGarageHomeFill0Wght700Grad0Opsz48 from '../components/GarageHomeFill0Wght700Grad0Opsz48'
import IconGarageHomeFill1Wght100Grad0Opsz48 from '../components/GarageHomeFill1Wght100Grad0Opsz48'
import IconGarageHomeFill1Wght200Grad0Opsz48 from '../components/GarageHomeFill1Wght200Grad0Opsz48'
import IconGarageHomeFill1Wght300Grad0Opsz48 from '../components/GarageHomeFill1Wght300Grad0Opsz48'
import IconGarageHomeFill1Wght400Grad0Opsz48 from '../components/GarageHomeFill1Wght400Grad0Opsz48'
import IconGarageHomeFill1Wght500Grad0Opsz48 from '../components/GarageHomeFill1Wght500Grad0Opsz48'
import IconGarageHomeFill1Wght600Grad0Opsz48 from '../components/GarageHomeFill1Wght600Grad0Opsz48'
import IconGarageHomeFill1Wght700Grad0Opsz48 from '../components/GarageHomeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGarageHome = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGarageHomeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGarageHomeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGarageHomeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGarageHomeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGarageHomeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGarageHomeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGarageHomeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGarageHomeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGarageHomeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGarageHomeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGarageHomeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGarageHomeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGarageHomeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGarageHomeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
