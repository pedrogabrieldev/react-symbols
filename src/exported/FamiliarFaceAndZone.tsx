import IconFamiliarFaceAndZoneFill0Wght100Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill0Wght100Grad0Opsz48'
import IconFamiliarFaceAndZoneFill0Wght200Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill0Wght200Grad0Opsz48'
import IconFamiliarFaceAndZoneFill0Wght300Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill0Wght300Grad0Opsz48'
import IconFamiliarFaceAndZoneFill0Wght400Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill0Wght400Grad0Opsz48'
import IconFamiliarFaceAndZoneFill0Wght500Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill0Wght500Grad0Opsz48'
import IconFamiliarFaceAndZoneFill0Wght600Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill0Wght600Grad0Opsz48'
import IconFamiliarFaceAndZoneFill0Wght700Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill0Wght700Grad0Opsz48'
import IconFamiliarFaceAndZoneFill1Wght100Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill1Wght100Grad0Opsz48'
import IconFamiliarFaceAndZoneFill1Wght200Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill1Wght200Grad0Opsz48'
import IconFamiliarFaceAndZoneFill1Wght300Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill1Wght300Grad0Opsz48'
import IconFamiliarFaceAndZoneFill1Wght400Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill1Wght400Grad0Opsz48'
import IconFamiliarFaceAndZoneFill1Wght500Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill1Wght500Grad0Opsz48'
import IconFamiliarFaceAndZoneFill1Wght600Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill1Wght600Grad0Opsz48'
import IconFamiliarFaceAndZoneFill1Wght700Grad0Opsz48 from '../components/FamiliarFaceAndZoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFamiliarFaceAndZone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFamiliarFaceAndZoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFamiliarFaceAndZoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFamiliarFaceAndZoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFamiliarFaceAndZoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFamiliarFaceAndZoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFamiliarFaceAndZoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFamiliarFaceAndZoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFamiliarFaceAndZoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFamiliarFaceAndZoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFamiliarFaceAndZoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFamiliarFaceAndZoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFamiliarFaceAndZoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFamiliarFaceAndZoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFamiliarFaceAndZoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
