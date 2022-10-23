import IconDentistryFill0Wght100Grad0Opsz48 from '../components/DentistryFill0Wght100Grad0Opsz48'
import IconDentistryFill0Wght200Grad0Opsz48 from '../components/DentistryFill0Wght200Grad0Opsz48'
import IconDentistryFill0Wght300Grad0Opsz48 from '../components/DentistryFill0Wght300Grad0Opsz48'
import IconDentistryFill0Wght400Grad0Opsz48 from '../components/DentistryFill0Wght400Grad0Opsz48'
import IconDentistryFill0Wght500Grad0Opsz48 from '../components/DentistryFill0Wght500Grad0Opsz48'
import IconDentistryFill0Wght600Grad0Opsz48 from '../components/DentistryFill0Wght600Grad0Opsz48'
import IconDentistryFill0Wght700Grad0Opsz48 from '../components/DentistryFill0Wght700Grad0Opsz48'
import IconDentistryFill1Wght100Grad0Opsz48 from '../components/DentistryFill1Wght100Grad0Opsz48'
import IconDentistryFill1Wght200Grad0Opsz48 from '../components/DentistryFill1Wght200Grad0Opsz48'
import IconDentistryFill1Wght300Grad0Opsz48 from '../components/DentistryFill1Wght300Grad0Opsz48'
import IconDentistryFill1Wght400Grad0Opsz48 from '../components/DentistryFill1Wght400Grad0Opsz48'
import IconDentistryFill1Wght500Grad0Opsz48 from '../components/DentistryFill1Wght500Grad0Opsz48'
import IconDentistryFill1Wght600Grad0Opsz48 from '../components/DentistryFill1Wght600Grad0Opsz48'
import IconDentistryFill1Wght700Grad0Opsz48 from '../components/DentistryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDentistry = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDentistryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDentistryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDentistryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDentistryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDentistryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDentistryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDentistryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDentistryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDentistryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDentistryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDentistryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDentistryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDentistryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDentistryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
