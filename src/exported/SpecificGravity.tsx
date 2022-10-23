import IconSpecificGravityFill0Wght100Grad0Opsz48 from '../components/SpecificGravityFill0Wght100Grad0Opsz48'
import IconSpecificGravityFill0Wght200Grad0Opsz48 from '../components/SpecificGravityFill0Wght200Grad0Opsz48'
import IconSpecificGravityFill0Wght300Grad0Opsz48 from '../components/SpecificGravityFill0Wght300Grad0Opsz48'
import IconSpecificGravityFill0Wght400Grad0Opsz48 from '../components/SpecificGravityFill0Wght400Grad0Opsz48'
import IconSpecificGravityFill0Wght500Grad0Opsz48 from '../components/SpecificGravityFill0Wght500Grad0Opsz48'
import IconSpecificGravityFill0Wght600Grad0Opsz48 from '../components/SpecificGravityFill0Wght600Grad0Opsz48'
import IconSpecificGravityFill0Wght700Grad0Opsz48 from '../components/SpecificGravityFill0Wght700Grad0Opsz48'
import IconSpecificGravityFill1Wght100Grad0Opsz48 from '../components/SpecificGravityFill1Wght100Grad0Opsz48'
import IconSpecificGravityFill1Wght200Grad0Opsz48 from '../components/SpecificGravityFill1Wght200Grad0Opsz48'
import IconSpecificGravityFill1Wght300Grad0Opsz48 from '../components/SpecificGravityFill1Wght300Grad0Opsz48'
import IconSpecificGravityFill1Wght400Grad0Opsz48 from '../components/SpecificGravityFill1Wght400Grad0Opsz48'
import IconSpecificGravityFill1Wght500Grad0Opsz48 from '../components/SpecificGravityFill1Wght500Grad0Opsz48'
import IconSpecificGravityFill1Wght600Grad0Opsz48 from '../components/SpecificGravityFill1Wght600Grad0Opsz48'
import IconSpecificGravityFill1Wght700Grad0Opsz48 from '../components/SpecificGravityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpecificGravity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpecificGravityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpecificGravityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpecificGravityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpecificGravityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpecificGravityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpecificGravityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpecificGravityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpecificGravityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpecificGravityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpecificGravityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpecificGravityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpecificGravityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpecificGravityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpecificGravityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
