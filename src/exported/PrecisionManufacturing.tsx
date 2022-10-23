import IconPrecisionManufacturingFill0Wght100Grad0Opsz48 from '../components/PrecisionManufacturingFill0Wght100Grad0Opsz48'
import IconPrecisionManufacturingFill0Wght200Grad0Opsz48 from '../components/PrecisionManufacturingFill0Wght200Grad0Opsz48'
import IconPrecisionManufacturingFill0Wght300Grad0Opsz48 from '../components/PrecisionManufacturingFill0Wght300Grad0Opsz48'
import IconPrecisionManufacturingFill0Wght400Grad0Opsz48 from '../components/PrecisionManufacturingFill0Wght400Grad0Opsz48'
import IconPrecisionManufacturingFill0Wght500Grad0Opsz48 from '../components/PrecisionManufacturingFill0Wght500Grad0Opsz48'
import IconPrecisionManufacturingFill0Wght600Grad0Opsz48 from '../components/PrecisionManufacturingFill0Wght600Grad0Opsz48'
import IconPrecisionManufacturingFill0Wght700Grad0Opsz48 from '../components/PrecisionManufacturingFill0Wght700Grad0Opsz48'
import IconPrecisionManufacturingFill1Wght100Grad0Opsz48 from '../components/PrecisionManufacturingFill1Wght100Grad0Opsz48'
import IconPrecisionManufacturingFill1Wght200Grad0Opsz48 from '../components/PrecisionManufacturingFill1Wght200Grad0Opsz48'
import IconPrecisionManufacturingFill1Wght300Grad0Opsz48 from '../components/PrecisionManufacturingFill1Wght300Grad0Opsz48'
import IconPrecisionManufacturingFill1Wght400Grad0Opsz48 from '../components/PrecisionManufacturingFill1Wght400Grad0Opsz48'
import IconPrecisionManufacturingFill1Wght500Grad0Opsz48 from '../components/PrecisionManufacturingFill1Wght500Grad0Opsz48'
import IconPrecisionManufacturingFill1Wght600Grad0Opsz48 from '../components/PrecisionManufacturingFill1Wght600Grad0Opsz48'
import IconPrecisionManufacturingFill1Wght700Grad0Opsz48 from '../components/PrecisionManufacturingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPrecisionManufacturing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPrecisionManufacturingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPrecisionManufacturingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPrecisionManufacturingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPrecisionManufacturingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPrecisionManufacturingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPrecisionManufacturingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPrecisionManufacturingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPrecisionManufacturingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPrecisionManufacturingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPrecisionManufacturingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPrecisionManufacturingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPrecisionManufacturingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPrecisionManufacturingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPrecisionManufacturingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
