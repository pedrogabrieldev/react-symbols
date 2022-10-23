import IconRotate90DegreesCcwFill0Wght100Grad0Opsz48 from '../components/Rotate90DegreesCcwFill0Wght100Grad0Opsz48'
import IconRotate90DegreesCcwFill0Wght200Grad0Opsz48 from '../components/Rotate90DegreesCcwFill0Wght200Grad0Opsz48'
import IconRotate90DegreesCcwFill0Wght300Grad0Opsz48 from '../components/Rotate90DegreesCcwFill0Wght300Grad0Opsz48'
import IconRotate90DegreesCcwFill0Wght400Grad0Opsz48 from '../components/Rotate90DegreesCcwFill0Wght400Grad0Opsz48'
import IconRotate90DegreesCcwFill0Wght500Grad0Opsz48 from '../components/Rotate90DegreesCcwFill0Wght500Grad0Opsz48'
import IconRotate90DegreesCcwFill0Wght600Grad0Opsz48 from '../components/Rotate90DegreesCcwFill0Wght600Grad0Opsz48'
import IconRotate90DegreesCcwFill0Wght700Grad0Opsz48 from '../components/Rotate90DegreesCcwFill0Wght700Grad0Opsz48'
import IconRotate90DegreesCcwFill1Wght100Grad0Opsz48 from '../components/Rotate90DegreesCcwFill1Wght100Grad0Opsz48'
import IconRotate90DegreesCcwFill1Wght200Grad0Opsz48 from '../components/Rotate90DegreesCcwFill1Wght200Grad0Opsz48'
import IconRotate90DegreesCcwFill1Wght300Grad0Opsz48 from '../components/Rotate90DegreesCcwFill1Wght300Grad0Opsz48'
import IconRotate90DegreesCcwFill1Wght400Grad0Opsz48 from '../components/Rotate90DegreesCcwFill1Wght400Grad0Opsz48'
import IconRotate90DegreesCcwFill1Wght500Grad0Opsz48 from '../components/Rotate90DegreesCcwFill1Wght500Grad0Opsz48'
import IconRotate90DegreesCcwFill1Wght600Grad0Opsz48 from '../components/Rotate90DegreesCcwFill1Wght600Grad0Opsz48'
import IconRotate90DegreesCcwFill1Wght700Grad0Opsz48 from '../components/Rotate90DegreesCcwFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRotate90DegreesCcw = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRotate90DegreesCcwFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRotate90DegreesCcwFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRotate90DegreesCcwFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRotate90DegreesCcwFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRotate90DegreesCcwFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRotate90DegreesCcwFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRotate90DegreesCcwFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRotate90DegreesCcwFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRotate90DegreesCcwFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRotate90DegreesCcwFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRotate90DegreesCcwFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRotate90DegreesCcwFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRotate90DegreesCcwFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRotate90DegreesCcwFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
