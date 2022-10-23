import IconGrainFill0Wght100Grad0Opsz48 from '../components/GrainFill0Wght100Grad0Opsz48'
import IconGrainFill0Wght200Grad0Opsz48 from '../components/GrainFill0Wght200Grad0Opsz48'
import IconGrainFill0Wght300Grad0Opsz48 from '../components/GrainFill0Wght300Grad0Opsz48'
import IconGrainFill0Wght400Grad0Opsz48 from '../components/GrainFill0Wght400Grad0Opsz48'
import IconGrainFill0Wght500Grad0Opsz48 from '../components/GrainFill0Wght500Grad0Opsz48'
import IconGrainFill0Wght600Grad0Opsz48 from '../components/GrainFill0Wght600Grad0Opsz48'
import IconGrainFill0Wght700Grad0Opsz48 from '../components/GrainFill0Wght700Grad0Opsz48'
import IconGrainFill1Wght100Grad0Opsz48 from '../components/GrainFill1Wght100Grad0Opsz48'
import IconGrainFill1Wght200Grad0Opsz48 from '../components/GrainFill1Wght200Grad0Opsz48'
import IconGrainFill1Wght300Grad0Opsz48 from '../components/GrainFill1Wght300Grad0Opsz48'
import IconGrainFill1Wght400Grad0Opsz48 from '../components/GrainFill1Wght400Grad0Opsz48'
import IconGrainFill1Wght500Grad0Opsz48 from '../components/GrainFill1Wght500Grad0Opsz48'
import IconGrainFill1Wght600Grad0Opsz48 from '../components/GrainFill1Wght600Grad0Opsz48'
import IconGrainFill1Wght700Grad0Opsz48 from '../components/GrainFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGrain = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGrainFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGrainFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGrainFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGrainFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGrainFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGrainFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGrainFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGrainFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGrainFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGrainFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGrainFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGrainFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGrainFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGrainFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
