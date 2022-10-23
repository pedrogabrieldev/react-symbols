import IconWaterFill0Wght100Grad0Opsz48 from '../components/WaterFill0Wght100Grad0Opsz48'
import IconWaterFill0Wght200Grad0Opsz48 from '../components/WaterFill0Wght200Grad0Opsz48'
import IconWaterFill0Wght300Grad0Opsz48 from '../components/WaterFill0Wght300Grad0Opsz48'
import IconWaterFill0Wght400Grad0Opsz48 from '../components/WaterFill0Wght400Grad0Opsz48'
import IconWaterFill0Wght500Grad0Opsz48 from '../components/WaterFill0Wght500Grad0Opsz48'
import IconWaterFill0Wght600Grad0Opsz48 from '../components/WaterFill0Wght600Grad0Opsz48'
import IconWaterFill0Wght700Grad0Opsz48 from '../components/WaterFill0Wght700Grad0Opsz48'
import IconWaterFill1Wght100Grad0Opsz48 from '../components/WaterFill1Wght100Grad0Opsz48'
import IconWaterFill1Wght200Grad0Opsz48 from '../components/WaterFill1Wght200Grad0Opsz48'
import IconWaterFill1Wght300Grad0Opsz48 from '../components/WaterFill1Wght300Grad0Opsz48'
import IconWaterFill1Wght400Grad0Opsz48 from '../components/WaterFill1Wght400Grad0Opsz48'
import IconWaterFill1Wght500Grad0Opsz48 from '../components/WaterFill1Wght500Grad0Opsz48'
import IconWaterFill1Wght600Grad0Opsz48 from '../components/WaterFill1Wght600Grad0Opsz48'
import IconWaterFill1Wght700Grad0Opsz48 from '../components/WaterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWater = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWaterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWaterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWaterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWaterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWaterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWaterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWaterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWaterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWaterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWaterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWaterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWaterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWaterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWaterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
