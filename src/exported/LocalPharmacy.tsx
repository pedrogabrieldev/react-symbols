import IconLocalPharmacyFill0Wght100Grad0Opsz48 from '../components/LocalPharmacyFill0Wght100Grad0Opsz48'
import IconLocalPharmacyFill0Wght200Grad0Opsz48 from '../components/LocalPharmacyFill0Wght200Grad0Opsz48'
import IconLocalPharmacyFill0Wght300Grad0Opsz48 from '../components/LocalPharmacyFill0Wght300Grad0Opsz48'
import IconLocalPharmacyFill0Wght400Grad0Opsz48 from '../components/LocalPharmacyFill0Wght400Grad0Opsz48'
import IconLocalPharmacyFill0Wght500Grad0Opsz48 from '../components/LocalPharmacyFill0Wght500Grad0Opsz48'
import IconLocalPharmacyFill0Wght600Grad0Opsz48 from '../components/LocalPharmacyFill0Wght600Grad0Opsz48'
import IconLocalPharmacyFill0Wght700Grad0Opsz48 from '../components/LocalPharmacyFill0Wght700Grad0Opsz48'
import IconLocalPharmacyFill1Wght100Grad0Opsz48 from '../components/LocalPharmacyFill1Wght100Grad0Opsz48'
import IconLocalPharmacyFill1Wght200Grad0Opsz48 from '../components/LocalPharmacyFill1Wght200Grad0Opsz48'
import IconLocalPharmacyFill1Wght300Grad0Opsz48 from '../components/LocalPharmacyFill1Wght300Grad0Opsz48'
import IconLocalPharmacyFill1Wght400Grad0Opsz48 from '../components/LocalPharmacyFill1Wght400Grad0Opsz48'
import IconLocalPharmacyFill1Wght500Grad0Opsz48 from '../components/LocalPharmacyFill1Wght500Grad0Opsz48'
import IconLocalPharmacyFill1Wght600Grad0Opsz48 from '../components/LocalPharmacyFill1Wght600Grad0Opsz48'
import IconLocalPharmacyFill1Wght700Grad0Opsz48 from '../components/LocalPharmacyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalPharmacy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalPharmacyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalPharmacyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalPharmacyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalPharmacyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalPharmacyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalPharmacyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalPharmacyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalPharmacyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalPharmacyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalPharmacyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalPharmacyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalPharmacyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalPharmacyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalPharmacyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
