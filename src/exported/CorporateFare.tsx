import IconCorporateFareFill0Wght100Grad0Opsz48 from '../components/CorporateFareFill0Wght100Grad0Opsz48'
import IconCorporateFareFill0Wght200Grad0Opsz48 from '../components/CorporateFareFill0Wght200Grad0Opsz48'
import IconCorporateFareFill0Wght300Grad0Opsz48 from '../components/CorporateFareFill0Wght300Grad0Opsz48'
import IconCorporateFareFill0Wght400Grad0Opsz48 from '../components/CorporateFareFill0Wght400Grad0Opsz48'
import IconCorporateFareFill0Wght500Grad0Opsz48 from '../components/CorporateFareFill0Wght500Grad0Opsz48'
import IconCorporateFareFill0Wght600Grad0Opsz48 from '../components/CorporateFareFill0Wght600Grad0Opsz48'
import IconCorporateFareFill0Wght700Grad0Opsz48 from '../components/CorporateFareFill0Wght700Grad0Opsz48'
import IconCorporateFareFill1Wght100Grad0Opsz48 from '../components/CorporateFareFill1Wght100Grad0Opsz48'
import IconCorporateFareFill1Wght200Grad0Opsz48 from '../components/CorporateFareFill1Wght200Grad0Opsz48'
import IconCorporateFareFill1Wght300Grad0Opsz48 from '../components/CorporateFareFill1Wght300Grad0Opsz48'
import IconCorporateFareFill1Wght400Grad0Opsz48 from '../components/CorporateFareFill1Wght400Grad0Opsz48'
import IconCorporateFareFill1Wght500Grad0Opsz48 from '../components/CorporateFareFill1Wght500Grad0Opsz48'
import IconCorporateFareFill1Wght600Grad0Opsz48 from '../components/CorporateFareFill1Wght600Grad0Opsz48'
import IconCorporateFareFill1Wght700Grad0Opsz48 from '../components/CorporateFareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCorporateFare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCorporateFareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCorporateFareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCorporateFareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCorporateFareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCorporateFareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCorporateFareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCorporateFareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCorporateFareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCorporateFareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCorporateFareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCorporateFareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCorporateFareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCorporateFareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCorporateFareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
