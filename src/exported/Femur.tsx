import IconFemurFill0Wght100Grad0Opsz48 from '../components/FemurFill0Wght100Grad0Opsz48'
import IconFemurFill0Wght200Grad0Opsz48 from '../components/FemurFill0Wght200Grad0Opsz48'
import IconFemurFill0Wght300Grad0Opsz48 from '../components/FemurFill0Wght300Grad0Opsz48'
import IconFemurFill0Wght400Grad0Opsz48 from '../components/FemurFill0Wght400Grad0Opsz48'
import IconFemurFill0Wght500Grad0Opsz48 from '../components/FemurFill0Wght500Grad0Opsz48'
import IconFemurFill0Wght600Grad0Opsz48 from '../components/FemurFill0Wght600Grad0Opsz48'
import IconFemurFill0Wght700Grad0Opsz48 from '../components/FemurFill0Wght700Grad0Opsz48'
import IconFemurFill1Wght100Grad0Opsz48 from '../components/FemurFill1Wght100Grad0Opsz48'
import IconFemurFill1Wght200Grad0Opsz48 from '../components/FemurFill1Wght200Grad0Opsz48'
import IconFemurFill1Wght300Grad0Opsz48 from '../components/FemurFill1Wght300Grad0Opsz48'
import IconFemurFill1Wght400Grad0Opsz48 from '../components/FemurFill1Wght400Grad0Opsz48'
import IconFemurFill1Wght500Grad0Opsz48 from '../components/FemurFill1Wght500Grad0Opsz48'
import IconFemurFill1Wght600Grad0Opsz48 from '../components/FemurFill1Wght600Grad0Opsz48'
import IconFemurFill1Wght700Grad0Opsz48 from '../components/FemurFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFemur = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFemurFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFemurFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFemurFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFemurFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFemurFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFemurFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFemurFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFemurFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFemurFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFemurFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFemurFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFemurFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFemurFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFemurFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
