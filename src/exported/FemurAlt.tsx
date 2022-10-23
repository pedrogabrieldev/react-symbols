import IconFemurAltFill0Wght100Grad0Opsz48 from '../components/FemurAltFill0Wght100Grad0Opsz48'
import IconFemurAltFill0Wght200Grad0Opsz48 from '../components/FemurAltFill0Wght200Grad0Opsz48'
import IconFemurAltFill0Wght300Grad0Opsz48 from '../components/FemurAltFill0Wght300Grad0Opsz48'
import IconFemurAltFill0Wght400Grad0Opsz48 from '../components/FemurAltFill0Wght400Grad0Opsz48'
import IconFemurAltFill0Wght500Grad0Opsz48 from '../components/FemurAltFill0Wght500Grad0Opsz48'
import IconFemurAltFill0Wght600Grad0Opsz48 from '../components/FemurAltFill0Wght600Grad0Opsz48'
import IconFemurAltFill0Wght700Grad0Opsz48 from '../components/FemurAltFill0Wght700Grad0Opsz48'
import IconFemurAltFill1Wght100Grad0Opsz48 from '../components/FemurAltFill1Wght100Grad0Opsz48'
import IconFemurAltFill1Wght200Grad0Opsz48 from '../components/FemurAltFill1Wght200Grad0Opsz48'
import IconFemurAltFill1Wght300Grad0Opsz48 from '../components/FemurAltFill1Wght300Grad0Opsz48'
import IconFemurAltFill1Wght400Grad0Opsz48 from '../components/FemurAltFill1Wght400Grad0Opsz48'
import IconFemurAltFill1Wght500Grad0Opsz48 from '../components/FemurAltFill1Wght500Grad0Opsz48'
import IconFemurAltFill1Wght600Grad0Opsz48 from '../components/FemurAltFill1Wght600Grad0Opsz48'
import IconFemurAltFill1Wght700Grad0Opsz48 from '../components/FemurAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFemurAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFemurAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFemurAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFemurAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFemurAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFemurAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFemurAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFemurAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFemurAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFemurAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFemurAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFemurAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFemurAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFemurAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFemurAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
