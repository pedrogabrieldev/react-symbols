import IconWaterDropFill0Wght100Grad0Opsz48 from '../components/WaterDropFill0Wght100Grad0Opsz48'
import IconWaterDropFill0Wght200Grad0Opsz48 from '../components/WaterDropFill0Wght200Grad0Opsz48'
import IconWaterDropFill0Wght300Grad0Opsz48 from '../components/WaterDropFill0Wght300Grad0Opsz48'
import IconWaterDropFill0Wght400Grad0Opsz48 from '../components/WaterDropFill0Wght400Grad0Opsz48'
import IconWaterDropFill0Wght500Grad0Opsz48 from '../components/WaterDropFill0Wght500Grad0Opsz48'
import IconWaterDropFill0Wght600Grad0Opsz48 from '../components/WaterDropFill0Wght600Grad0Opsz48'
import IconWaterDropFill0Wght700Grad0Opsz48 from '../components/WaterDropFill0Wght700Grad0Opsz48'
import IconWaterDropFill1Wght100Grad0Opsz48 from '../components/WaterDropFill1Wght100Grad0Opsz48'
import IconWaterDropFill1Wght200Grad0Opsz48 from '../components/WaterDropFill1Wght200Grad0Opsz48'
import IconWaterDropFill1Wght300Grad0Opsz48 from '../components/WaterDropFill1Wght300Grad0Opsz48'
import IconWaterDropFill1Wght400Grad0Opsz48 from '../components/WaterDropFill1Wght400Grad0Opsz48'
import IconWaterDropFill1Wght500Grad0Opsz48 from '../components/WaterDropFill1Wght500Grad0Opsz48'
import IconWaterDropFill1Wght600Grad0Opsz48 from '../components/WaterDropFill1Wght600Grad0Opsz48'
import IconWaterDropFill1Wght700Grad0Opsz48 from '../components/WaterDropFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWaterDrop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWaterDropFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWaterDropFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWaterDropFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWaterDropFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWaterDropFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWaterDropFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWaterDropFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWaterDropFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWaterDropFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWaterDropFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWaterDropFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWaterDropFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWaterDropFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWaterDropFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
