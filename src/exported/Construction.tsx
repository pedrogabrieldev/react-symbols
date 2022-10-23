import IconConstructionFill0Wght100Grad0Opsz48 from '../components/ConstructionFill0Wght100Grad0Opsz48'
import IconConstructionFill0Wght200Grad0Opsz48 from '../components/ConstructionFill0Wght200Grad0Opsz48'
import IconConstructionFill0Wght300Grad0Opsz48 from '../components/ConstructionFill0Wght300Grad0Opsz48'
import IconConstructionFill0Wght400Grad0Opsz48 from '../components/ConstructionFill0Wght400Grad0Opsz48'
import IconConstructionFill0Wght500Grad0Opsz48 from '../components/ConstructionFill0Wght500Grad0Opsz48'
import IconConstructionFill0Wght600Grad0Opsz48 from '../components/ConstructionFill0Wght600Grad0Opsz48'
import IconConstructionFill0Wght700Grad0Opsz48 from '../components/ConstructionFill0Wght700Grad0Opsz48'
import IconConstructionFill1Wght100Grad0Opsz48 from '../components/ConstructionFill1Wght100Grad0Opsz48'
import IconConstructionFill1Wght200Grad0Opsz48 from '../components/ConstructionFill1Wght200Grad0Opsz48'
import IconConstructionFill1Wght300Grad0Opsz48 from '../components/ConstructionFill1Wght300Grad0Opsz48'
import IconConstructionFill1Wght400Grad0Opsz48 from '../components/ConstructionFill1Wght400Grad0Opsz48'
import IconConstructionFill1Wght500Grad0Opsz48 from '../components/ConstructionFill1Wght500Grad0Opsz48'
import IconConstructionFill1Wght600Grad0Opsz48 from '../components/ConstructionFill1Wght600Grad0Opsz48'
import IconConstructionFill1Wght700Grad0Opsz48 from '../components/ConstructionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconConstruction = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconConstructionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconConstructionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconConstructionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconConstructionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconConstructionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconConstructionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconConstructionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconConstructionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconConstructionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconConstructionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconConstructionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconConstructionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconConstructionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconConstructionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
