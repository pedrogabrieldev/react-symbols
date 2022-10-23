import IconVaccinesFill0Wght100Grad0Opsz48 from '../components/VaccinesFill0Wght100Grad0Opsz48'
import IconVaccinesFill0Wght200Grad0Opsz48 from '../components/VaccinesFill0Wght200Grad0Opsz48'
import IconVaccinesFill0Wght300Grad0Opsz48 from '../components/VaccinesFill0Wght300Grad0Opsz48'
import IconVaccinesFill0Wght400Grad0Opsz48 from '../components/VaccinesFill0Wght400Grad0Opsz48'
import IconVaccinesFill0Wght500Grad0Opsz48 from '../components/VaccinesFill0Wght500Grad0Opsz48'
import IconVaccinesFill0Wght600Grad0Opsz48 from '../components/VaccinesFill0Wght600Grad0Opsz48'
import IconVaccinesFill0Wght700Grad0Opsz48 from '../components/VaccinesFill0Wght700Grad0Opsz48'
import IconVaccinesFill1Wght100Grad0Opsz48 from '../components/VaccinesFill1Wght100Grad0Opsz48'
import IconVaccinesFill1Wght200Grad0Opsz48 from '../components/VaccinesFill1Wght200Grad0Opsz48'
import IconVaccinesFill1Wght300Grad0Opsz48 from '../components/VaccinesFill1Wght300Grad0Opsz48'
import IconVaccinesFill1Wght400Grad0Opsz48 from '../components/VaccinesFill1Wght400Grad0Opsz48'
import IconVaccinesFill1Wght500Grad0Opsz48 from '../components/VaccinesFill1Wght500Grad0Opsz48'
import IconVaccinesFill1Wght600Grad0Opsz48 from '../components/VaccinesFill1Wght600Grad0Opsz48'
import IconVaccinesFill1Wght700Grad0Opsz48 from '../components/VaccinesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVaccines = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVaccinesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVaccinesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVaccinesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVaccinesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVaccinesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVaccinesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVaccinesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVaccinesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVaccinesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVaccinesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVaccinesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVaccinesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVaccinesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVaccinesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
