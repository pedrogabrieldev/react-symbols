import IconAcUnitFill0Wght100Grad0Opsz48 from '../components/AcUnitFill0Wght100Grad0Opsz48'
import IconAcUnitFill0Wght200Grad0Opsz48 from '../components/AcUnitFill0Wght200Grad0Opsz48'
import IconAcUnitFill0Wght300Grad0Opsz48 from '../components/AcUnitFill0Wght300Grad0Opsz48'
import IconAcUnitFill0Wght400Grad0Opsz48 from '../components/AcUnitFill0Wght400Grad0Opsz48'
import IconAcUnitFill0Wght500Grad0Opsz48 from '../components/AcUnitFill0Wght500Grad0Opsz48'
import IconAcUnitFill0Wght600Grad0Opsz48 from '../components/AcUnitFill0Wght600Grad0Opsz48'
import IconAcUnitFill0Wght700Grad0Opsz48 from '../components/AcUnitFill0Wght700Grad0Opsz48'
import IconAcUnitFill1Wght100Grad0Opsz48 from '../components/AcUnitFill1Wght100Grad0Opsz48'
import IconAcUnitFill1Wght200Grad0Opsz48 from '../components/AcUnitFill1Wght200Grad0Opsz48'
import IconAcUnitFill1Wght300Grad0Opsz48 from '../components/AcUnitFill1Wght300Grad0Opsz48'
import IconAcUnitFill1Wght400Grad0Opsz48 from '../components/AcUnitFill1Wght400Grad0Opsz48'
import IconAcUnitFill1Wght500Grad0Opsz48 from '../components/AcUnitFill1Wght500Grad0Opsz48'
import IconAcUnitFill1Wght600Grad0Opsz48 from '../components/AcUnitFill1Wght600Grad0Opsz48'
import IconAcUnitFill1Wght700Grad0Opsz48 from '../components/AcUnitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAcUnit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAcUnitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAcUnitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAcUnitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAcUnitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAcUnitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAcUnitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAcUnitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAcUnitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAcUnitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAcUnitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAcUnitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAcUnitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAcUnitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAcUnitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
