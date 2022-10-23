import IconBloodtypeFill0Wght100Grad0Opsz48 from '../components/BloodtypeFill0Wght100Grad0Opsz48'
import IconBloodtypeFill0Wght200Grad0Opsz48 from '../components/BloodtypeFill0Wght200Grad0Opsz48'
import IconBloodtypeFill0Wght300Grad0Opsz48 from '../components/BloodtypeFill0Wght300Grad0Opsz48'
import IconBloodtypeFill0Wght400Grad0Opsz48 from '../components/BloodtypeFill0Wght400Grad0Opsz48'
import IconBloodtypeFill0Wght500Grad0Opsz48 from '../components/BloodtypeFill0Wght500Grad0Opsz48'
import IconBloodtypeFill0Wght600Grad0Opsz48 from '../components/BloodtypeFill0Wght600Grad0Opsz48'
import IconBloodtypeFill0Wght700Grad0Opsz48 from '../components/BloodtypeFill0Wght700Grad0Opsz48'
import IconBloodtypeFill1Wght100Grad0Opsz48 from '../components/BloodtypeFill1Wght100Grad0Opsz48'
import IconBloodtypeFill1Wght200Grad0Opsz48 from '../components/BloodtypeFill1Wght200Grad0Opsz48'
import IconBloodtypeFill1Wght300Grad0Opsz48 from '../components/BloodtypeFill1Wght300Grad0Opsz48'
import IconBloodtypeFill1Wght400Grad0Opsz48 from '../components/BloodtypeFill1Wght400Grad0Opsz48'
import IconBloodtypeFill1Wght500Grad0Opsz48 from '../components/BloodtypeFill1Wght500Grad0Opsz48'
import IconBloodtypeFill1Wght600Grad0Opsz48 from '../components/BloodtypeFill1Wght600Grad0Opsz48'
import IconBloodtypeFill1Wght700Grad0Opsz48 from '../components/BloodtypeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBloodtype = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBloodtypeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBloodtypeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBloodtypeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBloodtypeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBloodtypeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBloodtypeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBloodtypeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBloodtypeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBloodtypeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBloodtypeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBloodtypeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBloodtypeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBloodtypeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBloodtypeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
