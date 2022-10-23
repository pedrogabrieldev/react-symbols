import IconNightShelterFill0Wght100Grad0Opsz48 from '../components/NightShelterFill0Wght100Grad0Opsz48'
import IconNightShelterFill0Wght200Grad0Opsz48 from '../components/NightShelterFill0Wght200Grad0Opsz48'
import IconNightShelterFill0Wght300Grad0Opsz48 from '../components/NightShelterFill0Wght300Grad0Opsz48'
import IconNightShelterFill0Wght400Grad0Opsz48 from '../components/NightShelterFill0Wght400Grad0Opsz48'
import IconNightShelterFill0Wght500Grad0Opsz48 from '../components/NightShelterFill0Wght500Grad0Opsz48'
import IconNightShelterFill0Wght600Grad0Opsz48 from '../components/NightShelterFill0Wght600Grad0Opsz48'
import IconNightShelterFill0Wght700Grad0Opsz48 from '../components/NightShelterFill0Wght700Grad0Opsz48'
import IconNightShelterFill1Wght100Grad0Opsz48 from '../components/NightShelterFill1Wght100Grad0Opsz48'
import IconNightShelterFill1Wght200Grad0Opsz48 from '../components/NightShelterFill1Wght200Grad0Opsz48'
import IconNightShelterFill1Wght300Grad0Opsz48 from '../components/NightShelterFill1Wght300Grad0Opsz48'
import IconNightShelterFill1Wght400Grad0Opsz48 from '../components/NightShelterFill1Wght400Grad0Opsz48'
import IconNightShelterFill1Wght500Grad0Opsz48 from '../components/NightShelterFill1Wght500Grad0Opsz48'
import IconNightShelterFill1Wght600Grad0Opsz48 from '../components/NightShelterFill1Wght600Grad0Opsz48'
import IconNightShelterFill1Wght700Grad0Opsz48 from '../components/NightShelterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNightShelter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNightShelterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNightShelterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNightShelterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNightShelterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNightShelterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNightShelterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNightShelterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNightShelterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNightShelterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNightShelterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNightShelterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNightShelterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNightShelterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNightShelterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
