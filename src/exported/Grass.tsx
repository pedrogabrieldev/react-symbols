import IconGrassFill0Wght100Grad0Opsz48 from '../components/GrassFill0Wght100Grad0Opsz48'
import IconGrassFill0Wght200Grad0Opsz48 from '../components/GrassFill0Wght200Grad0Opsz48'
import IconGrassFill0Wght300Grad0Opsz48 from '../components/GrassFill0Wght300Grad0Opsz48'
import IconGrassFill0Wght400Grad0Opsz48 from '../components/GrassFill0Wght400Grad0Opsz48'
import IconGrassFill0Wght500Grad0Opsz48 from '../components/GrassFill0Wght500Grad0Opsz48'
import IconGrassFill0Wght600Grad0Opsz48 from '../components/GrassFill0Wght600Grad0Opsz48'
import IconGrassFill0Wght700Grad0Opsz48 from '../components/GrassFill0Wght700Grad0Opsz48'
import IconGrassFill1Wght100Grad0Opsz48 from '../components/GrassFill1Wght100Grad0Opsz48'
import IconGrassFill1Wght200Grad0Opsz48 from '../components/GrassFill1Wght200Grad0Opsz48'
import IconGrassFill1Wght300Grad0Opsz48 from '../components/GrassFill1Wght300Grad0Opsz48'
import IconGrassFill1Wght400Grad0Opsz48 from '../components/GrassFill1Wght400Grad0Opsz48'
import IconGrassFill1Wght500Grad0Opsz48 from '../components/GrassFill1Wght500Grad0Opsz48'
import IconGrassFill1Wght600Grad0Opsz48 from '../components/GrassFill1Wght600Grad0Opsz48'
import IconGrassFill1Wght700Grad0Opsz48 from '../components/GrassFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGrass = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGrassFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGrassFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGrassFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGrassFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGrassFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGrassFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGrassFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGrassFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGrassFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGrassFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGrassFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGrassFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGrassFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGrassFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
