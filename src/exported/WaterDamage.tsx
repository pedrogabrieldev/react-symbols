import IconWaterDamageFill0Wght100Grad0Opsz48 from '../components/WaterDamageFill0Wght100Grad0Opsz48'
import IconWaterDamageFill0Wght200Grad0Opsz48 from '../components/WaterDamageFill0Wght200Grad0Opsz48'
import IconWaterDamageFill0Wght300Grad0Opsz48 from '../components/WaterDamageFill0Wght300Grad0Opsz48'
import IconWaterDamageFill0Wght400Grad0Opsz48 from '../components/WaterDamageFill0Wght400Grad0Opsz48'
import IconWaterDamageFill0Wght500Grad0Opsz48 from '../components/WaterDamageFill0Wght500Grad0Opsz48'
import IconWaterDamageFill0Wght600Grad0Opsz48 from '../components/WaterDamageFill0Wght600Grad0Opsz48'
import IconWaterDamageFill0Wght700Grad0Opsz48 from '../components/WaterDamageFill0Wght700Grad0Opsz48'
import IconWaterDamageFill1Wght100Grad0Opsz48 from '../components/WaterDamageFill1Wght100Grad0Opsz48'
import IconWaterDamageFill1Wght200Grad0Opsz48 from '../components/WaterDamageFill1Wght200Grad0Opsz48'
import IconWaterDamageFill1Wght300Grad0Opsz48 from '../components/WaterDamageFill1Wght300Grad0Opsz48'
import IconWaterDamageFill1Wght400Grad0Opsz48 from '../components/WaterDamageFill1Wght400Grad0Opsz48'
import IconWaterDamageFill1Wght500Grad0Opsz48 from '../components/WaterDamageFill1Wght500Grad0Opsz48'
import IconWaterDamageFill1Wght600Grad0Opsz48 from '../components/WaterDamageFill1Wght600Grad0Opsz48'
import IconWaterDamageFill1Wght700Grad0Opsz48 from '../components/WaterDamageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWaterDamage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWaterDamageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWaterDamageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWaterDamageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWaterDamageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWaterDamageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWaterDamageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWaterDamageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWaterDamageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWaterDamageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWaterDamageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWaterDamageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWaterDamageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWaterDamageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWaterDamageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
