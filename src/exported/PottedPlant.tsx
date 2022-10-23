import IconPottedPlantFill0Wght100Grad0Opsz48 from '../components/PottedPlantFill0Wght100Grad0Opsz48'
import IconPottedPlantFill0Wght200Grad0Opsz48 from '../components/PottedPlantFill0Wght200Grad0Opsz48'
import IconPottedPlantFill0Wght300Grad0Opsz48 from '../components/PottedPlantFill0Wght300Grad0Opsz48'
import IconPottedPlantFill0Wght400Grad0Opsz48 from '../components/PottedPlantFill0Wght400Grad0Opsz48'
import IconPottedPlantFill0Wght500Grad0Opsz48 from '../components/PottedPlantFill0Wght500Grad0Opsz48'
import IconPottedPlantFill0Wght600Grad0Opsz48 from '../components/PottedPlantFill0Wght600Grad0Opsz48'
import IconPottedPlantFill0Wght700Grad0Opsz48 from '../components/PottedPlantFill0Wght700Grad0Opsz48'
import IconPottedPlantFill1Wght100Grad0Opsz48 from '../components/PottedPlantFill1Wght100Grad0Opsz48'
import IconPottedPlantFill1Wght200Grad0Opsz48 from '../components/PottedPlantFill1Wght200Grad0Opsz48'
import IconPottedPlantFill1Wght300Grad0Opsz48 from '../components/PottedPlantFill1Wght300Grad0Opsz48'
import IconPottedPlantFill1Wght400Grad0Opsz48 from '../components/PottedPlantFill1Wght400Grad0Opsz48'
import IconPottedPlantFill1Wght500Grad0Opsz48 from '../components/PottedPlantFill1Wght500Grad0Opsz48'
import IconPottedPlantFill1Wght600Grad0Opsz48 from '../components/PottedPlantFill1Wght600Grad0Opsz48'
import IconPottedPlantFill1Wght700Grad0Opsz48 from '../components/PottedPlantFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPottedPlant = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPottedPlantFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPottedPlantFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPottedPlantFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPottedPlantFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPottedPlantFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPottedPlantFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPottedPlantFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPottedPlantFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPottedPlantFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPottedPlantFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPottedPlantFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPottedPlantFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPottedPlantFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPottedPlantFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
