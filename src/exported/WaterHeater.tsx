import IconWaterHeaterFill0Wght100Grad0Opsz48 from '../components/WaterHeaterFill0Wght100Grad0Opsz48'
import IconWaterHeaterFill0Wght200Grad0Opsz48 from '../components/WaterHeaterFill0Wght200Grad0Opsz48'
import IconWaterHeaterFill0Wght300Grad0Opsz48 from '../components/WaterHeaterFill0Wght300Grad0Opsz48'
import IconWaterHeaterFill0Wght400Grad0Opsz48 from '../components/WaterHeaterFill0Wght400Grad0Opsz48'
import IconWaterHeaterFill0Wght500Grad0Opsz48 from '../components/WaterHeaterFill0Wght500Grad0Opsz48'
import IconWaterHeaterFill0Wght600Grad0Opsz48 from '../components/WaterHeaterFill0Wght600Grad0Opsz48'
import IconWaterHeaterFill0Wght700Grad0Opsz48 from '../components/WaterHeaterFill0Wght700Grad0Opsz48'
import IconWaterHeaterFill1Wght100Grad0Opsz48 from '../components/WaterHeaterFill1Wght100Grad0Opsz48'
import IconWaterHeaterFill1Wght200Grad0Opsz48 from '../components/WaterHeaterFill1Wght200Grad0Opsz48'
import IconWaterHeaterFill1Wght300Grad0Opsz48 from '../components/WaterHeaterFill1Wght300Grad0Opsz48'
import IconWaterHeaterFill1Wght400Grad0Opsz48 from '../components/WaterHeaterFill1Wght400Grad0Opsz48'
import IconWaterHeaterFill1Wght500Grad0Opsz48 from '../components/WaterHeaterFill1Wght500Grad0Opsz48'
import IconWaterHeaterFill1Wght600Grad0Opsz48 from '../components/WaterHeaterFill1Wght600Grad0Opsz48'
import IconWaterHeaterFill1Wght700Grad0Opsz48 from '../components/WaterHeaterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWaterHeater = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWaterHeaterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWaterHeaterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWaterHeaterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWaterHeaterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWaterHeaterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWaterHeaterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWaterHeaterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWaterHeaterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWaterHeaterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWaterHeaterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWaterHeaterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWaterHeaterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWaterHeaterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWaterHeaterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
