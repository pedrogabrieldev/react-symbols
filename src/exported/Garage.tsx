import IconGarageFill0Wght100Grad0Opsz48 from '../components/GarageFill0Wght100Grad0Opsz48'
import IconGarageFill0Wght200Grad0Opsz48 from '../components/GarageFill0Wght200Grad0Opsz48'
import IconGarageFill0Wght300Grad0Opsz48 from '../components/GarageFill0Wght300Grad0Opsz48'
import IconGarageFill0Wght400Grad0Opsz48 from '../components/GarageFill0Wght400Grad0Opsz48'
import IconGarageFill0Wght500Grad0Opsz48 from '../components/GarageFill0Wght500Grad0Opsz48'
import IconGarageFill0Wght600Grad0Opsz48 from '../components/GarageFill0Wght600Grad0Opsz48'
import IconGarageFill0Wght700Grad0Opsz48 from '../components/GarageFill0Wght700Grad0Opsz48'
import IconGarageFill1Wght100Grad0Opsz48 from '../components/GarageFill1Wght100Grad0Opsz48'
import IconGarageFill1Wght200Grad0Opsz48 from '../components/GarageFill1Wght200Grad0Opsz48'
import IconGarageFill1Wght300Grad0Opsz48 from '../components/GarageFill1Wght300Grad0Opsz48'
import IconGarageFill1Wght400Grad0Opsz48 from '../components/GarageFill1Wght400Grad0Opsz48'
import IconGarageFill1Wght500Grad0Opsz48 from '../components/GarageFill1Wght500Grad0Opsz48'
import IconGarageFill1Wght600Grad0Opsz48 from '../components/GarageFill1Wght600Grad0Opsz48'
import IconGarageFill1Wght700Grad0Opsz48 from '../components/GarageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGarage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGarageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGarageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGarageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGarageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGarageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGarageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGarageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGarageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGarageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGarageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGarageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGarageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGarageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGarageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
