import IconNordicWalkingFill0Wght100Grad0Opsz48 from '../components/NordicWalkingFill0Wght100Grad0Opsz48'
import IconNordicWalkingFill0Wght200Grad0Opsz48 from '../components/NordicWalkingFill0Wght200Grad0Opsz48'
import IconNordicWalkingFill0Wght300Grad0Opsz48 from '../components/NordicWalkingFill0Wght300Grad0Opsz48'
import IconNordicWalkingFill0Wght400Grad0Opsz48 from '../components/NordicWalkingFill0Wght400Grad0Opsz48'
import IconNordicWalkingFill0Wght500Grad0Opsz48 from '../components/NordicWalkingFill0Wght500Grad0Opsz48'
import IconNordicWalkingFill0Wght600Grad0Opsz48 from '../components/NordicWalkingFill0Wght600Grad0Opsz48'
import IconNordicWalkingFill0Wght700Grad0Opsz48 from '../components/NordicWalkingFill0Wght700Grad0Opsz48'
import IconNordicWalkingFill1Wght100Grad0Opsz48 from '../components/NordicWalkingFill1Wght100Grad0Opsz48'
import IconNordicWalkingFill1Wght200Grad0Opsz48 from '../components/NordicWalkingFill1Wght200Grad0Opsz48'
import IconNordicWalkingFill1Wght300Grad0Opsz48 from '../components/NordicWalkingFill1Wght300Grad0Opsz48'
import IconNordicWalkingFill1Wght400Grad0Opsz48 from '../components/NordicWalkingFill1Wght400Grad0Opsz48'
import IconNordicWalkingFill1Wght500Grad0Opsz48 from '../components/NordicWalkingFill1Wght500Grad0Opsz48'
import IconNordicWalkingFill1Wght600Grad0Opsz48 from '../components/NordicWalkingFill1Wght600Grad0Opsz48'
import IconNordicWalkingFill1Wght700Grad0Opsz48 from '../components/NordicWalkingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNordicWalking = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNordicWalkingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNordicWalkingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNordicWalkingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNordicWalkingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNordicWalkingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNordicWalkingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNordicWalkingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNordicWalkingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNordicWalkingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNordicWalkingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNordicWalkingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNordicWalkingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNordicWalkingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNordicWalkingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
