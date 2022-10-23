import IconPartyModeFill0Wght100Grad0Opsz48 from '../components/PartyModeFill0Wght100Grad0Opsz48'
import IconPartyModeFill0Wght200Grad0Opsz48 from '../components/PartyModeFill0Wght200Grad0Opsz48'
import IconPartyModeFill0Wght300Grad0Opsz48 from '../components/PartyModeFill0Wght300Grad0Opsz48'
import IconPartyModeFill0Wght400Grad0Opsz48 from '../components/PartyModeFill0Wght400Grad0Opsz48'
import IconPartyModeFill0Wght500Grad0Opsz48 from '../components/PartyModeFill0Wght500Grad0Opsz48'
import IconPartyModeFill0Wght600Grad0Opsz48 from '../components/PartyModeFill0Wght600Grad0Opsz48'
import IconPartyModeFill0Wght700Grad0Opsz48 from '../components/PartyModeFill0Wght700Grad0Opsz48'
import IconPartyModeFill1Wght100Grad0Opsz48 from '../components/PartyModeFill1Wght100Grad0Opsz48'
import IconPartyModeFill1Wght200Grad0Opsz48 from '../components/PartyModeFill1Wght200Grad0Opsz48'
import IconPartyModeFill1Wght300Grad0Opsz48 from '../components/PartyModeFill1Wght300Grad0Opsz48'
import IconPartyModeFill1Wght400Grad0Opsz48 from '../components/PartyModeFill1Wght400Grad0Opsz48'
import IconPartyModeFill1Wght500Grad0Opsz48 from '../components/PartyModeFill1Wght500Grad0Opsz48'
import IconPartyModeFill1Wght600Grad0Opsz48 from '../components/PartyModeFill1Wght600Grad0Opsz48'
import IconPartyModeFill1Wght700Grad0Opsz48 from '../components/PartyModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPartyMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPartyModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPartyModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPartyModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPartyModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPartyModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPartyModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPartyModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPartyModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPartyModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPartyModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPartyModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPartyModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPartyModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPartyModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
