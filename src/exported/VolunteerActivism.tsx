import IconVolunteerActivismFill0Wght100Grad0Opsz48 from '../components/VolunteerActivismFill0Wght100Grad0Opsz48'
import IconVolunteerActivismFill0Wght200Grad0Opsz48 from '../components/VolunteerActivismFill0Wght200Grad0Opsz48'
import IconVolunteerActivismFill0Wght300Grad0Opsz48 from '../components/VolunteerActivismFill0Wght300Grad0Opsz48'
import IconVolunteerActivismFill0Wght400Grad0Opsz48 from '../components/VolunteerActivismFill0Wght400Grad0Opsz48'
import IconVolunteerActivismFill0Wght500Grad0Opsz48 from '../components/VolunteerActivismFill0Wght500Grad0Opsz48'
import IconVolunteerActivismFill0Wght600Grad0Opsz48 from '../components/VolunteerActivismFill0Wght600Grad0Opsz48'
import IconVolunteerActivismFill0Wght700Grad0Opsz48 from '../components/VolunteerActivismFill0Wght700Grad0Opsz48'
import IconVolunteerActivismFill1Wght100Grad0Opsz48 from '../components/VolunteerActivismFill1Wght100Grad0Opsz48'
import IconVolunteerActivismFill1Wght200Grad0Opsz48 from '../components/VolunteerActivismFill1Wght200Grad0Opsz48'
import IconVolunteerActivismFill1Wght300Grad0Opsz48 from '../components/VolunteerActivismFill1Wght300Grad0Opsz48'
import IconVolunteerActivismFill1Wght400Grad0Opsz48 from '../components/VolunteerActivismFill1Wght400Grad0Opsz48'
import IconVolunteerActivismFill1Wght500Grad0Opsz48 from '../components/VolunteerActivismFill1Wght500Grad0Opsz48'
import IconVolunteerActivismFill1Wght600Grad0Opsz48 from '../components/VolunteerActivismFill1Wght600Grad0Opsz48'
import IconVolunteerActivismFill1Wght700Grad0Opsz48 from '../components/VolunteerActivismFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVolunteerActivism = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVolunteerActivismFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVolunteerActivismFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVolunteerActivismFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVolunteerActivismFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVolunteerActivismFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVolunteerActivismFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVolunteerActivismFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVolunteerActivismFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVolunteerActivismFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVolunteerActivismFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVolunteerActivismFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVolunteerActivismFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVolunteerActivismFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVolunteerActivismFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
