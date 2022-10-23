import IconPersonalInjuryFill0Wght100Grad0Opsz48 from '../components/PersonalInjuryFill0Wght100Grad0Opsz48'
import IconPersonalInjuryFill0Wght200Grad0Opsz48 from '../components/PersonalInjuryFill0Wght200Grad0Opsz48'
import IconPersonalInjuryFill0Wght300Grad0Opsz48 from '../components/PersonalInjuryFill0Wght300Grad0Opsz48'
import IconPersonalInjuryFill0Wght400Grad0Opsz48 from '../components/PersonalInjuryFill0Wght400Grad0Opsz48'
import IconPersonalInjuryFill0Wght500Grad0Opsz48 from '../components/PersonalInjuryFill0Wght500Grad0Opsz48'
import IconPersonalInjuryFill0Wght600Grad0Opsz48 from '../components/PersonalInjuryFill0Wght600Grad0Opsz48'
import IconPersonalInjuryFill0Wght700Grad0Opsz48 from '../components/PersonalInjuryFill0Wght700Grad0Opsz48'
import IconPersonalInjuryFill1Wght100Grad0Opsz48 from '../components/PersonalInjuryFill1Wght100Grad0Opsz48'
import IconPersonalInjuryFill1Wght200Grad0Opsz48 from '../components/PersonalInjuryFill1Wght200Grad0Opsz48'
import IconPersonalInjuryFill1Wght300Grad0Opsz48 from '../components/PersonalInjuryFill1Wght300Grad0Opsz48'
import IconPersonalInjuryFill1Wght400Grad0Opsz48 from '../components/PersonalInjuryFill1Wght400Grad0Opsz48'
import IconPersonalInjuryFill1Wght500Grad0Opsz48 from '../components/PersonalInjuryFill1Wght500Grad0Opsz48'
import IconPersonalInjuryFill1Wght600Grad0Opsz48 from '../components/PersonalInjuryFill1Wght600Grad0Opsz48'
import IconPersonalInjuryFill1Wght700Grad0Opsz48 from '../components/PersonalInjuryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPersonalInjury = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonalInjuryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonalInjuryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonalInjuryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonalInjuryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonalInjuryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonalInjuryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonalInjuryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonalInjuryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonalInjuryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonalInjuryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonalInjuryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonalInjuryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonalInjuryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonalInjuryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
